import express from "express";
import {
  createGeneralQuestions,
  addMCQforGQ,
  getGeneralQuestions,
  updateGeneralQuestions,
  deleteGeneralQuestions,
  createMockQuestion,
  getMockQuestion,
  updateMockQuestion,
  deleteMockQuestion,
} from "../controllers/questionController.js";
const router = express.Router();

// api http://localhost:5000/api/teachers/

//General Question ROutes
router.get("/get-generalQ", getGeneralQuestions);
router.post("/create-generalQuestions", createGeneralQuestions);
router.post("/add-generalQuestions", addMCQforGQ);

router.patch("/updateGQ/:id", updateGeneralQuestions);
router.delete("/deleteGQ/:id", deleteGeneralQuestions);

//Mock Question Routes
router.get("/get-mockQ", getMockQuestion);
router.post("/create-mockQuestion", createMockQuestion);
router.patch("/updateMQ/:id", updateMockQuestion);
router.delete("/deleteMQ/:id", deleteMockQuestion);

export default router;
