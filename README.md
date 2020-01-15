Visit-counter is an express middleware to track the number of GET, POST, PUT, etc. requests for each page of your webapp or API. Required: connect to MongoDB with Mongoose.
We are always happy to hear your feedback! Submit your feedback in our github issues page.

Setup
---
To install the necessary dependencies, run:
    npm i --save express mongoose visit-counter
  
Use the visit-counter middleware just like any other middleware in express (also use it before setting up routes):
    const express = require('express');
    const app = express();
    const mongoose = require('mongoose');

    const visitCounter = require('visit-counter');

    const dbURL = 'MongoDB Connection URL Here';
    mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.log('Error connecting to MongoDB:\n' + err));

    app.use(visitCounter);

    // other routes

    app.listen(5000);

Record in Database
---
All requests will be recorded in MongoDB in the following form:
    {
      page: "/url/path",
      method: "GET | POST | PUT | DELETE | ETC.",
      count: 3
    }
