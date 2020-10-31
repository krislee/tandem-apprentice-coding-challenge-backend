// DEPENDENCIES
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const json = require('../Apprentice_TandemFor400_Data.json')

// GLOBAL VARIABLE
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

// CORS
const whitelist = ["http://localhost:3000/"]
const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(
          new Error("Not allowed by CORS, domain needs to be added to whitelist")
        );
      }
    },
  };
  
NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions));

// MIDDLEWARE
app.use(express.json())

// ROUTES
app.get('/trivia', function(req, res) {
    console.log(json)
    res.json(json)
})


app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
})