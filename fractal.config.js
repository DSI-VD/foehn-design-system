"use strict";

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = (module.exports = require("@frctl/fractal").create());

const pkg = require("./package.json");

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

/* Configuring documentation pages */
fractal.docs.set("path", __dirname + "/src/docs");
fractal.docs.set("ext", ".md");

/* Configuring the web UI */
fractal.web.set("static.path", __dirname + "/public");
fractal.web.set("builder.dest", __dirname + "/build");
