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

// http://localhost:5000/api/teachers/create-generalQuestions
// http://localhost:5000/api/teachers/get-generalQ
// http://localhost:5000/api/teachers/add-generalQuestions

//General Question ROutes
router.get("/get-generalQ", getGeneralQuestions);
router.post("/create-generalQuestions", createGeneralQuestions);
router.post("/add-generalQuestions/:questionSetId", addMCQforGQ);

router.patch("/updateGQ/:id", updateGeneralQuestions);
router.delete("/deleteGQ/:id", deleteGeneralQuestions);

//Mock Question Routes
router.get("/get-mockQ", getMockQuestion);
router.post("/create-mockQuestion", createMockQuestion);
router.patch("/updateMQ/:id", updateMockQuestion);
router.delete("/deleteMQ/:id", deleteMockQuestion);

export default router;
