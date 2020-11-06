const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/main-page', (req,res) => {
    res.sendFile(path.join(__dirname,'views', 'index.html'))
})

app.listen(3000);