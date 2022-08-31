//import express

const express = require("express")

//init express
const app = express()

//config static files
app.use(express.static('public'))

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/views/about.html")
})

app.get("/works", (req, res)=>{
    res.sendFile(__dirname+"/views/works.html")
})

app.get("/galery", (req, res)=>{
    res.sendFile(__dirname+"/views/galery.html")
})

//Init server
app.listen(8080)