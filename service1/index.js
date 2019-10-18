const app = require('express')()
const request  = require('request')
app.get("/",(req,res)=>{
    request('http://service2:8001/',(err,resp,body)=>{
        res.send(body)
    })
    //res.send("This is service 1  edited text " + process.env.APP_NAME)
})

app.listen(8000,()=>{
    console.log("Service port 8000");
})