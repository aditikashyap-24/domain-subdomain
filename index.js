const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//Initialize express app
const app = express();

const Domain = require ('./model/models');
const Subdomain = require ('./model/models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


mongoose.connect('mongodb+srv://aditikashyap:C8BulNyeCYnGbeQS@node.0ugnzoe.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    console.log('connected to db')
    })
    .catch((error) => {
 console.log(error)
    });

    db = mongoose.Collection;

    // Creating a new book

    app.post('/', (req, res) => {

        domainName = req.body.domainName,
        subdomain = req.body.subdomain,
        subdomain_name = req.body.subdomain_name,
        info_subdomain = req.body.info_subdomain,
        companies_subdomain = req.body.companies_subdomain,
        roles_subdomain = req.body.roles_subdomain,
        day_in_the_life_subdomain = req.body.day_in_the_life_subdomain,
        competitions_subdomain = req.body.competitions_subdomain,
        internships_subdomain = req.body.internships_subdomain,
        research_opportunities_subdomain = req.body.research_opportunities_subdomain,        
        info_domain = req.body.info_domain,
        companies_domain = req.body.companies_domain,
        roles_domain = req.body.roles_domain,
        day_in_the_life_domain = req.body.day_in_the_life_domain,
        competitions_domain = req.body.competitions_domain,
        internships_domain = req.body.internships_domain,
        research_opportunities_domain = req.body.research_opportunities_domain;

        let newSubdomain =  new Subdomain({
                subdomain_name : subdomain_name,
                info_subdomain : info_subdomain,
               companies_subdomain : companies_subdomain,
               roles_subdomain : roles_subdomain,
               day_in_the_life_subdomain : day_in_the_life_subdomain,
               competitions_subdomain : competitions_subdomain,
               internships_subdomain : internships_subdomain,
               research_opportunities_subdomain : research_opportunities_subdomain
        });

        let newDomain = new Domain({
         domainName: domainName,
         subdomain : subdomain,
         info_domain : info_domain,
         companies_domain : companies_domain,
         roles_domain : roles_domain,
         day_in_the_life_domain : day_in_the_life_domain,
         competitions_domain : competitions_domain,
         internships_domain : internships_domain,
         research_opportunities_domain : research_opportunities_domain
        })

        newSubdomain.save()
        // .then((subdomain) => {
        //     res.send(subdomain)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })

        newDomain.save()
       .then((domain) => {
         res.send(domain)
        })
        .catch((err) => {
         console.log(err)
        })
       });



       app.get('/', (req,res) =>{
           Domain.find()
            .then(domain => {
                res.send(domain);
            })
            .catch(err =>{
                res.status(500).send({
                    message: err.message || "Some error has occured."
                });
            });
           
       });
    // Reading an entry from Book

    app.get('/:id', (req, res) =>{
    Domain.findById(req.params.id, (err, user) =>{
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
    console.log('sever listening on port:'+ port);
});