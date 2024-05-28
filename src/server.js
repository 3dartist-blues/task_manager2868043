const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
});