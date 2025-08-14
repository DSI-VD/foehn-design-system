"use strict";

const { faker } = require("@faker-js/faker"); // Require the faker module

const peopleCount = 10; // How many peoples we should generate data for
const peopleData = [];

// Sets locale to fr
faker.locale = "fr";

for (let i = 0; i < peopleCount; i += 1) {
    peopleData.push({
        name: faker.person.fullName(), // Generate a random name
        email: faker.internet.email(), // Generate a random email address
        jobTitle: faker.person.jobTitle(), // Generate a random job title
        jobType: faker.person.jobTitle(), // Generate a random job type
        streetPrefix: faker.location.streetAddress(), // Generate a random street address
        street: faker.location.street(), // Generate a random street name
        city: faker.location.city(), // Generate a random city
    });
}

module.exports = {
    status: "ready",
    context: {
        peoples: peopleData, // Use our generated list of peoples as context data for our template.
    },
};
