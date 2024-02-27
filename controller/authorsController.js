const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express()

app.use(express.json())


const dataFilePath = path.join('authors.json')
const dataFile = fs.readFileSync(dataFilePath, 'utf8', ()=>{
    })


//create author

exports.createItem = (req, res)=>{

    if (!req.body.name || !req.body.country) {
        return res.status(400).json({
          error: 'Missing required fields. Name and country are required.',
        });
    }

    console.log(dataFile)
const authors = JSON.parse(dataFile)


const {name, country} = req.body


const newAuthor= {name, country, id: Date.now().toString()
};

authors.push(newAuthor);
console.log(authors)

fs.writeFileSync(dataFilePath, JSON.stringify(authors), 'utf8', ()=>{

})


res.status(201).json(authors);




}
// get all 

exports.getAuthors = (req, res)=>{
    const allAuthors = JSON.parse(dataFile)

    res.status(201).json(allAuthors);
}

// get one author by ID
exports.getOneAuthor = (req, res)=>{
    const allAuthors = JSON.parse(dataFile)
    const OneAuthor = allAuthors.find((author)=> author.id === parseInt(req.params.id))
console.log(OneAuthor)
    
    res.status(201).json(OneAuthor);

}

// update authors by ID

exports.updateAuthors = (req, res)=>{
const allAuthors = JSON.parse(dataFile)

const authorIndex = allAuthors.findIndex(author=> author.id === parseInt(req.params.id))
const newUpdate = req.body

const updatedAuthors = {...allAuthors[authorIndex], ...newUpdate}

console.log(updatedAuthors)

allAuthors[authorIndex] = updatedAuthors
console.log(allAuthors)

fs.writeFile(dataFilePath, JSON.stringify(allAuthors), 'utf8', ()=>{

})

res.status(201).json(allAuthors)
}

// delete by id
exports.deleteOneAuthor = (req, res)=>{
    const allAuthors = JSON.parse(dataFile)

    const authorIndex = allAuthors.findIndex(author=> author.id === parseInt(req.params.id))
    if(authorIndex){
        allAuthors.splice(authorIndex, 2)  

    }
    fs.writeFile(dataFilePath, JSON.stringify(allAuthors), 'utf8',()=>{})

    res.status(201).json(allAuthors)

}

// why cant i delete index 0 with id of 1

