import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import StudentModel from "./models/Student.model.js"
import {connectDB} from "./config/db.js"
const app = express()
app.use(cors())
dotenv.config();
const port = 8000
connectDB();

app.get("/api/test",async(req,res)=>{
    const data = await StudentModel.find()
    res.json(data);
})
app.get("/api/demo",async(req,res)=>{
    res.json("Hello world");
})

app.listen(port,()=>{
    console.log(`running port ${port}`)
})
