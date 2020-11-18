"use strict";

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = (module.exports = require("@frctl/fractal").create());

const pkg = require("./package.json");

// require the Mandelbrot theme module
const mandelbrot = require("@frctl/mandelbrot");

// create a new instance with custom config options
const foehnTheme = mandelbrot({
    lang: "fr",
    skin: "olive",
    styles: ["default", "/assets/styles/styleguide.css"],
    nav: ["search", "docs", "components", "information"],
    labels: {
        search: {
            placeholder: "Rechercher…",
        },
    },
    information: [
        {
            label: "Version",
            value: require("./package.json").version,
        },
        {
            label: "Généré le",
            value: new Date(),
            type: "time", // Outputs a <time /> HTML tag
            format: (value) => {
                return value.toLocaleDateString("fr");
            },
        },
    ],
    favicon: "/foehn/img/favicon.ico",
});

// tell Fractal to use the configured theme by default
fractal.web.theme(foehnTheme);

/* Tune Nunjucks */
const njk = require("@frctl/nunjucks")({
    filters: {
        compUrl(handle) {
            return `/components/detail/${handle.replace("@", "")}`;
        },
        /* TODO: improve urls to the detail page. It doesn't take into account
         * the base url. It means that if the structure of the doc change, it
         * may break. */
        renderComponent(handle) {
            return `<div class="component-example"><span class="component-example__preview-link"><a href="../../components/detail/${handle.replace(
                "@",
                ""
            )}">Open detail page of this component</a></span><iframe class="component-example__iframe" src="../../components/preview/${handle.replace(
                "@",
                ""
            )}"></iframe></div>`;
        },
    },
});

/* Project-related metadata */
fractal.set("project.title", "Foehn Design System");
fractal.set("project.version", pkg.version);
fractal.set(
    "project.author",
    "Direction générale du numérique et des systèmes d'information"
);

/* Configuring components */
fractal.components.set("path", __dirname + "/src/components");
fractal.components.engine(njk);
fractal.components.set("ext", ".html");
fractal.components.set("default.status", "wip");

/* Configuring documentation pages */
fractal.docs.set("path", __dirname + "/src/docs");
fractal.docs.set("ext", ".md");
fractal.docs.set("statuses", {
    draft: {
        label: "Draft",
        description: "Do not implement.",
        color: "#FF3333",
    },
    wip: {
        label: "WIP",
        description: "Work in progress. Implement with caution.",
        color: "#FF9233",
    },
    review: {
        label: "Need review",
        description: "Ready for a review.",
        color: "#32edff",
    },
    ready: {
        label: "Ready",
        description: "Ready to implement.",
        color: "#29CC29",
    },
});
fractal.docs.set("default.status", "draft");
fractal.docs.engine(njk);

/* Configuring the web UI */
fractal.web.set("static.path", __dirname + "/public");
fractal.web.set("builder.dest", __dirname + "/build");
