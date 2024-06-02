import express from 'express'
import dotenv from 'dotenv'
import authRoute from './Routes/AuthRoutes.js'
import connectDB from './db/connectDB.js';
import messageRoute from './Routes/MessageRoutes.js'
import userRoutes from './Routes/UserRoutes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import { app,server,io } from './socket/socket.js';
dotenv.config();
app.use(cors())
app.use(express.json())
app.use(cookieParser())
const PORT=process.env.PORT || 3000
connectDB()
app.get('/',(req,res)=>{
    res.send('i am at earth')
})
app.use("/api/auth",authRoute)
app.use("/api/messages",messageRoute)
app.use("/api/users/",userRoutes)
server.listen(PORT,()=>{
    console.log(`server is listening to the port ${PORT}`);
})