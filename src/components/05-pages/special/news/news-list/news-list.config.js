"use strict";

const { fakerFR: faker } = require("@faker-js/faker");

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
                    src: "/assets/img/picture-960x640.jpg",
                    class: "img-fluid",
                    srcset: [
                        {
                            width: "320w",
                            file: "/assets/img/picture-320x213.jpg",
                        },
                        {
                            width: "540w",
                            file: "/assets/img/picture-540x360.jpg",
                        },
                        {
                            width: "720w",
                            file: "/assets/img/picture-720x480.jpg",
                        },
                        {
                            width: "960w",
                            file: "/assets/img/picture-960x640.jpg",
                        },
                        {
                            width: "1140w",
                            file: "/assets/img/picture-1140x760.jpg",
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
