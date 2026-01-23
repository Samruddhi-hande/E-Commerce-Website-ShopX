// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config({ path: '/.env' })
// const express = require('express')
import express from 'express';
const app = express()
// const port = 3000 n
//there are ~6500 ports
app.get('/', (req, res) => {
    res.send("server is ready");
})
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "sas",
            content: "jasasd asndajd",
        },
        {
            id: 2,
            title: "sas",
            content: "jasasd asndajd",
        },

        {
            id: 3,
            title: "sas",
            content: "jasasd asndajd",
        },
        {
            id: 4,
            title: "sas",
            content: "jasasd asndajd",
        }
    ];
    res.send(jokes);
});
app.get('/twiter', (req, res) => {
    res.send("hite")
})
app.listen(3000, () => {
    console.log(`example app listen on port`);
})