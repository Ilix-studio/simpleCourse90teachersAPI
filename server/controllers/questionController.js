import asyncHandler from "express-async-handler";
import QuestionSet from "../models/teachersModel.js";

//General Question COntrollers
const createGeneralQuestions = asyncHandler(async (req, res) => {
  const { subject, language, topic } = req.body;
  if (!subject || !language || topic) {
    res.status(400);
    throw new Error("Please add all the fields");
  }
  const questionSet = new QuestionSet({
    subject,
    language,
    mcqs: [], // Empty initially, MCQs will be add later in UI
  });
  const savedQuestionSet = await questionSet.save();
  if (savedQuestionSet) {
    res.status(201).json({
      message: "Form save successfully",
      questionSetId: savedQuestionSet._id,
    });
  } else {
    res.status(404);
    throw new Error("something is wrong");
  }
});
const addMCQforGQ = asyncHandler(async (req, res) => {
  const { questionSetId, question, option, correctQption } = req.body;
  if (!question || !option || !correctQption) {
    res.status(400);
    throw new Error("Please add all the fields");
  }
  const questionSet = await QuestionSet.findbyId(questionSetId);
  if (!questionSet) {
    return res.status(404).json({ error: " Server Error" });
  }
  questionSet.mcqs.push({ question, options, correctQption });
  await questionSet.save();
  res.status(200).json({ message: "MCQ added ", questionSet });
});
const getGeneralQuestions = asyncHandler(async (req, res) => {});
const updateGeneralQuestions = asyncHandler(async (req, res) => {});
const deleteGeneralQuestions = asyncHandler(async (req, res) => {});

//Mock Question COntrollers
const createMockQuestion = asyncHandler(async (req, res) => {
  const { subject, language, topic, testType } = req.body;
  if (!subject || !language || topic || testType) {
    res.status(400);
    throw new Error("Please add all the fields");
  }
  const questionSet = new QuestionSet({
    subject,
    language,
    testType,
    mcqs: [], // Empty initially, MCQs will be add later in UI
  });
  const savedQuestionSet = await questionSet.save();
  if (savedQuestionSet) {
    res.status(201).json({
      message: "Form save successfully",
      questionSetId: savedQuestionSet._id,
    });
  } else {
    res.status(404);
    throw new Error("something is wrong");
  }
});
const getMockQuestion = asyncHandler(async (req, res) => {});
const updateMockQuestion = asyncHandler(async (req, res) => {});
const deleteMockQuestion = asyncHandler(async (req, res) => {});

export {
  createGeneralQuestions,
  addMCQforGQ,
  getGeneralQuestions,
  updateGeneralQuestions,
  deleteGeneralQuestions,
  createMockQuestion,
  getMockQuestion,
  updateMockQuestion,
  deleteMockQuestion,
};
