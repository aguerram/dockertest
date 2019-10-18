const app = require('express')()

app.get("/",(req,res)=>{
    res.send("This is service 2 sds d s " + JSON.stringify(process.env))
})

app.listen(8001,()=>{
    console.log("Service port 8001");
})