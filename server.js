
require('dotenv').config();

const fs = require('fs');
const cors = require('cors')
const express = require('express');
const PORT = process.env.PORT
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./Timber_Client'));

app.get('/', (req,res) => res.sendFile('/index.html', {root: '../Timber-Client'})
);
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));