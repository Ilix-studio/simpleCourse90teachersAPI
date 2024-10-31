import express from "express";
const router = express.Router();

import {
  createGeneralQuestions,
  addMCQforGQ,
  getGeneralQuestions,
  updateGeneralQuestions,
  deleteGeneralQuestions,
} from "../controllers/generalQuestionController.js";

//General Question ROutes
router.get("/get-generalQ", getGeneralQuestions);
router.post("/create-generalQuestions", createGeneralQuestions);
router.post("/add-generalQuestions/:generalQuestionSetId", addMCQforGQ);
router.patch("/updateGQ/:id", updateGeneralQuestions);
router.delete("/deleteGQ/:id", deleteGeneralQuestions);

export default router;

// http://localhost:5000/api/teachers/create-generalQuestions
// http://localhost:5000/api/teachers/get-generalQ
// http://localhost:5000/api/teachers/add-generalQuestions
