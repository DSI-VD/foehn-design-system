"use strict";

const faker = require("faker"); // Require the faker module

// sets locale to fr
faker.locale = "fr";

/**
 * Demandes
 */
const teaserItemCount = 10; // How many itmes we should generate data for
const teaserItemData = [];

for (let i = 0; i < teaserItemCount; i += 1) {
    teaserItemData.push({
        title: faker.hacker.phrase(),
        styleModifier: "col-md-6",
        url: faker.internet.url(),
        authors: null,
        media: {
            caption: null,
            image: {
                default: {
                    src: faker.image.imageUrl(960, 640, "", 1),
                    class: "img-fluid",
                    srcset: [
                        {
                            width: "320w",
                            file: faker.image.imageUrl(320, 213, "", 1),
                        },
                        {
                            width: "540w",
                            file: faker.image.imageUrl(540, 360, "", 1),
                        },
                        {
                            width: "720w",
                            file: faker.image.imageUrl(720, 480, "", 1),
                        },
                        {
                            width: "960w",
                            file: faker.image.imageUrl(960, 640, "", 1),
                        },
                        {
                            width: "1140w",
                            file: faker.image.imageUrl(1140, 760, "", 1),
                        },
                    ],
                },
            },
        },
        excerpt: faker.lorem.text(),
    });
}

module.exports = {
    status: "ready",
    context: {
        pageTitle: {
            text: "Toutes les actualités",
            styleModifier: "container mt-0",
        },
        breadcrumb: {
            styleModifier: "pb-1",
            breadcrumb: [
                {
                    page: "vd.ch",
                    url: "#",
                },
                null,
                null,
                null,
            ],
        },
        teasers: teaserItemData,
        searchForm: {
            heading: {
                text: "Rechercher dans les actualités",
                styleModifier: "mt-0 h4",
                level: "h2",
            },
            label: "Rechercher dans les actualités",
        },
    },
    variants: [
        {
            name: "activities",
            context: {
                pageTitle: {
                    text: "Toutes les activités",
                },
                breadcrumb: {
                    breadcrumb: [
                        {
                            page: "vd.ch",
                            url: "#",
                        },
                        {
                            page: "Autorités",
                            url: "#",
                        },
                        {
                            page: "Service des automobiles et de la navigation",
                            url: "#",
                        },
                        null,
                    ],
                },
            },
        },
        {
            name: "categories",
            context: {
                pageTitle: {
                    text: "Categorie: Agriculture",
                },
                breadcrumb: {
                    breadcrumb: [
                        {
                            page: "vd.ch",
                            url: "#",
                        },
                        {
                            page: "Autorités",
                            url: "#",
                        },
                        {
                            page: "Service des automobiles et de la navigation",
                            url: "#",
                        },
                        {
                            page: "Actualité",
                            url: "#",
                        },
                    ],
                },
            },
        },
    ],
};
