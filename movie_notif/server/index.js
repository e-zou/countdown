// Dependencies
// yar add express cors twilio

const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

// twilio requirements -- texting API
const accountSid = '';
const authToken = '';
const client = (accountSid, authToken);

const app = express(); //alias
app.use(cors()); // prevents restricting data

// Welcome Page for Server
app.get('/', (req, res) => {
    res.send('Welcome to Express Server')
})

// Twilio Text
app.get('/send-text', (req, res) => {
    // GET passed via query string
    const {recipient, textmessage} = req.query
    // send text
    client.message.create()
})
// install nodemon, https://localhost:4000
app.listen(4000, ()=> console.log("Running on Port 4000"))