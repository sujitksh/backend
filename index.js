import dotenv from "dotenv"
import express from "express"
const app = express()
dotenv.config();
const port = 8000

app.get("/test",(req,res)=>{
    return res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`running port ${port}`)
})
