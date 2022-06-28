const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//Initialize express app
const app = express();

const { Domain, SubDomain } = require('./model/models')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect('mongodb+srv://aditikashyap:C8BulNyeCYnGbeQS@nodetuts.0ugnzoe.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to db')
    })
    .catch((error) => {
        console.log(error)
    });

// Creating a new book

app.post('/', (req, res) => {
    let domainName = req.body.domainName;
    let info_domain = req.body.info_domain;
    let companies_domain = req.body.companies_domain;
    let roles_domain = req.body.roles_domain;
    let day_in_the_life_domain = req.body.day_in_the_life_domain;
    let competitions_domain = req.body.competitions_domain;
    let internship_domain = req.body.internship_domain;
    let research_opportunities_domain = req.body.research_opportunities_domain;
    let subdomainName = req.body.subdomainName;
    let info_subdomain = req.body.info_subdomain;
    let companies_subdomain = req.body.companies_subdomain;
    let roles_subdomain = req.body.roles_subdomain;
    let day_in_the_life_subdomain = req.body.day_in_the_life_subdomain;
    let competitions_subdomain = req.body.competitions_subdomain;
    let internship_subdomain = req.body.internship_subdomain;
    let research_opportunities_subdomain = req.body.research_opportunities_subdomain;
    let newDomain = Domain({
        domainName: domainName,
        subdomain: { subdomainName, info_subdomain, companies_subdomain, roles_subdomain, day_in_the_life_subdomain, competitions_subdomain, internship_subdomain, research_opportunities_subdomain },
        info_domain: info_domain,
        companies_domain: companies_domain,
        roles_domain: roles_domain,
        day_in_the_life_domain: day_in_the_life_domain,
        competitions_domain: competitions_domain,
        internship_domain: internship_domain,
        research_opportunities_domain: research_opportunities_domain
    })
    newDomain.save((err, domain) => {
        console.log({ domain, err })
    })
    //    let subdomain;


    // let {subdomainName, info_subdomain, companies_subdomain, roles_subdomain, day_in_the_life_subdomain, competitions_subdomain, internship_subdomain, research_opportunities_subdomain} = subdomain;


    //    let newSubdomain = new Subdomain({
    //      subdomainName : subdomainName,
    //      info_subdomain : info_subdomain,
    //      companies_subdomain : companies_subdomain,
    //      roles_subdomain : roles_subdomain,
    //      day_in_the_life_subdomain : day_in_the_life_subdomain,
    //      competitions_subdomain : competitions_subdomain,
    //       internship_subdomain : internship_subdomain,
    //      research_opportunities_subdomain : research_opportunities_subdomain
    //      })

    //     newSubdomain.save()
});



app.get('/', (req, res) => {
    Domain.find()
        .then(domain => {
            res.send(domain);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error has occured."
            });
        });

});
// Reading an entry from Book

app.get('/:id', (req, res) => {
    Domain.findById(req.params.id, (err, user) => {
        res.send(user)
    })
});


// Updating the entry
// app.put('/update/:id', (req, res) => {
//     let domain = {}
//     if (req.body.domainName) domain.domainName = req.body.domainName
//     if (req.body.description) domain.description = req.body.description
//     if (req.body.imgLink) domain.imgLink = req.body.imgLink

//    domain = { $set: domain }
//    Domain.updateOne({_id: req.params.id}, domain)
//    .then(() => {
//      res.send(domain)
//     }).catch((err) => {
//      console.log(err)
//     })
//    }),

// Deleting the entry from Book
app.delete('/delete/:id', (req, res) => {
    Domain.findByIdAndRemove(req.params.id)
        .then(() => {
            res.send('user deleted')
        }).catch((err) => {
            console.log(err)
        })
});


//Initialize the sever
const port = process.env.PORT || 9090;

app.listen(port, () => {
    console.log('sever listening on port:' + port);
});
