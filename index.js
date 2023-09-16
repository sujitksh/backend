import dotenv from "dotenv"
import express from "express"
const app = express()
dotenv.config();
const port = 8000
const apiData = [
    {"name":"sujit","age":"20","city":"Bihar"},
    {"name":"aman","age":"29","city":"Pune"}
]

app.get("/api/test",(req,res)=>{
    res.json(apiData);
})

app.listen(port,()=>{
    console.log(`running port ${port}`)
})
