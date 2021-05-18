import express from "express"
import bodyParser from  "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import mongodbConnection from "./config/db.js"
import env from "dotenv"
import postRoutes from "./routes/post.js"
 
env.config();

const app = express()

app.use("/api/v1/posts", postRoutes)

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());



const PORT = process.env.LOCAL_PORT || 8080;
app.listen(PORT, () => {
  mongodbConnection();
  console.log(`Server started on port ${PORT}`);
});