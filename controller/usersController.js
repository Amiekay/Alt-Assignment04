// const fs = require('fs');
// const path = require('path');
// const express = require('express');
// const app = express()

// app.use(express.json())

// const userPath = path.join( 'db', 'users.json')
// const usersFile= fs.readFileSync(userPath, 'utf8', ()=>{
// })

// exports.createItem = (req, res)=>{
// const {username, password} = req.body

// const newUser = {username, password}
// const users = JSON.parse(usersFile)

// users.push(newUser)

// fs.writeFileSync(userPath, JSON.stringify(users), 'utf8', ()=>{

// })
// res.status(201).json(users)
// }
const path = require('path')
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const userPath = path.join( 'db', 'users.json')

const users = JSON.parse(fs.readFileSync(userPath, 'utf-8'));

// Function to create a new user
exports.createUser = (req, res) => {
  const { username } = req.body;
  const role = 'user';
  // Check if the username already exists
  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  // Generate a unique API key
  const apiKey = uuidv4();

  // Add the new user to the users array with the generated API key
  users.push({ username, role, apiKey });

  // Save the updated user data to users.json
  fs.writeFileSync('users.json', JSON.stringify(users), 'utf-8');
  // Return the generated API key to the user
  res.status(201).json({ message: 'User created successfully', apiKey });
};
