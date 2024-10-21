import express from "express";
const router = express.Router();

//General Question ROutes
router.get("/get-generalQ");
router.post("/create-generalQuestions");
router.patch("/updateGQ/:id");
router.delete("/deleteGQ/:id");

//Mock Question Routes
router.get("/get-mockQ");
router.post("/create-mockQuestion");
router.patch("/updateMQ/:id");
router.delete("/deleteMQ/:id");

export default router;
