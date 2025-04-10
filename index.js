
const express = require('express')
const app = express()

app.get('/', (req, res)=>{ 
    res.send("Hello From Server slash endpoint")
})


app.listen("3000", ()=>{ 
    console.log("Your server is running on 3000")
})