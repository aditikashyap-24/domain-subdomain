const mongoose = require('mongoose');

// Schema for AddressBook
const subdomainSchema = new mongoose.Schema({
    subdomainName: {
        type: String,
        required: false
    },
    info_subdomain: {
        type: String,
        required: false
    },
    companies_subdomain: {
        type: String,
        required: false
    },
    roles_subdomain: {
        type: String,
        required: false
    },
    day_in_the_life_subdomain: {
        type: String,
        required: false
    },
    skills_subdomain: {
        type: String,
        required: false
    },
    internships_subdomain: {
        type: String,
        required: false
    },
    research_opportunities_subdomain: {
        type: String,
        required: false
    }

});
const domainSchema = new mongoose.Schema({
    domainName: {
        type: String,
        required: true,
        unique: true,
    },
    subdomain: {
        type: subdomainSchema,
        required: false
    },
    info_domain: {
        type: String,
        required: false
    },
    companies_domain: {
        type: String,
        required: false
    },
    roles_domain: {
        type: String,
        required: false
    },
    day_in_the_life_domain: {
        type: String,
        required: false
    },
    skills_domain: {
        type: String,
        required: false
    },
    internships_domain: {
        type: String,
        required: false
    },
    research_opportunities_domain: {
        type: String,
        required: false
    }
});

//Creating the collection Address
const Subdomain = mongoose.model('Subdomain', subdomainSchema);
const Domain = mongoose.model('Domain', domainSchema);

module.exports = { Domain, Subdomain }
