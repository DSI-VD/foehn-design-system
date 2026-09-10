"use strict";

const { fakerFR: faker } = require("@faker-js/faker");

const peopleCount = 10; // How many peoples we should generate data for
const peopleData = [];

for (let i = 0; i < peopleCount; i += 1) {
    peopleData.push({
        name: faker.person.fullName(), // Generate a random name
        email: faker.internet.email(), // Generate a random email address
        jobTitle: faker.person.jobTitle(), // Generate a random email address
        jobType: faker.person.jobTitle(), // Generate a random email address
        streetPrefix: faker.location.streetAddress(), // Generate a random email address
        street: faker.location.street(), // Generate a random email address
        city: faker.location.city(), // Generate a random email address
    });
}

module.exports = {
    status: "ready",
    context: {
        peoples: peopleData, // Use our generated list of peoples as context data for our template.
    },
};
