"use strict";

const { fakerFR: faker } = require("@faker-js/faker");

const faqCount = 10; // How many faqs we should generate data for
const faqData = [];

for (let i = 0; i < faqCount; i += 1) {
    faqData.push({
        question: faker.lorem.sentence(),
        answer: faker.lorem.paragraphs(),
        author: `${faker.person.firstName()} ${faker.person.lastName()}`,
    });
}

module.exports = {
    status: "ready",
    context: {
        titleModifier: "visually-hidden",
        searchForm: {
            label: "Rechercher dans les questions",
            titleModifier: "mt-0",
            heading: {
                text: "Rechercher dans les questions",
                styleModifier: "mt-0",
            },
        },
        faqs: faqData,
    },
};
