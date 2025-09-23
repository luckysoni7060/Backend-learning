import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";


const app = express();

app.use(cors({
    origin: process.env.cors_origin,
    Credentials: true
}))


app.use(express.json({limit: "10kb"}));
app.use(express.urlencoded({extended: true,limit: "10kb"}));
app.use(express.static("public"));
app.use(cookieParser);


// ROUTES IMPORT 
import userRouter from "./routes/user.routes.js";

// routes declaration 
app.use("/api/v1/users",userRouter);


http://localhost:8000/register 

;export { app }
