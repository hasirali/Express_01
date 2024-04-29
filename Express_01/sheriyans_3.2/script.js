const express = require('express')
const app = express()

app.set("view engine","ejs")

app.use(express.static('./public'))

app.get('/' , (req,res)=>{
    res.render('index' , {name:"HASIR ALI"})
})
app.get('/contact' , (req,res)=>{
    res.render('contact' , {contact :" abc@gmail.com"})
})
app.listen(3000)