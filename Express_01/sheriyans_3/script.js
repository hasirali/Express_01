const express = require('express')
const app = express()
app.use((req,res,next)=>{
    console.log(res)
    next();
})
app.get('/' , (req,res)=>{
    console.log(req);
    res.send('Hello World!')
})
app.get('/profile', (req,res)=>{
    res.send('Hello from profile')
})
app.get('/profile/:username/:id', (req,res)=>{
    res.send(`Hello from  ${req.params.username} and id is ${req.params.id}`);
})

app.listen(3000)