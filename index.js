import dotenv from "dotenv"
import express from "express"
const app = express()
dotenv.config();
const port = 8000

app.get("/test",(req,res)=>{
    return res.send("Hello World")
})
app.get("/get",(req,res)=>{
    return res.send("This is my first page")
})
app.get("/create",(req,res)=>{
    return res.send("I created my first blog which is very interesting")
})
app.listen(port,()=>{
    console.log(`running port ${port}`)
})
