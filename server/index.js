import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/dbConnection.js";
import teacherRoutes from "./routes/teacherRoutes.js";
const port = 5000;

dotenv.config();
connectDB();

const app = express();

//use middleware
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("server is ready"));
app.use("/api/teachers", teacherRoutes);

// http://localhost:5000/api/teachers
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
