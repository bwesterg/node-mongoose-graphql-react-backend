const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

uri = `mongodb+srv://newUser:${process.env.MONGO_PASSWORD}@cluster0.bs3ah.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

const app = express();
const port = process.env.PORT || 3001;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected! poo' ))
    .catch(error => console.error(error));

app.listen(port, () => console.log(`listening on port ${port}`)); 