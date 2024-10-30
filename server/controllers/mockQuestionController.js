import asyncHandler from "express-async-handler";
import MockQuestionSet from "../models/mockQModel.js";

//Mock Question COntrollers
const createMockQuestion = asyncHandler(async (req, res) => {
  const { subject, language, testType } = req.body;

  const questionSet = new MockQuestionSet({
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
const addMCQforMQ = asyncHandler(async (req, res) => {
  const { mockQuestionSetId } = req.params;
  const {
    questionName,
    options,
    correctOption,
    duration,
    totalMarks,
    passingMarks,
  } = req.body;

  const mockQuestionSet = await MockQuestionSet.findById(mockQuestionSetId);
  if (!mockQuestionSet) {
    res.status(404).json({
      message: "Question set not found",
    });
  }
  const newMCQset = {
    questionName,
    options,
    correctOption,
    duration,
    totalMarks,
    passingMarks,
  };
  mockQuestionSet.mcqs.push(newMCQset);
  await mockQuestionSet.save();
  res.status(200).json({
    message: "MCQ added ",
    mockQuestionSetId: mockQuestionSetId,
    mcqs: newMCQset,
  });
});
const getMockQuestion = asyncHandler(async (req, res) => {});
const updateMockQuestion = asyncHandler(async (req, res) => {});
const deleteMockQuestion = asyncHandler(async (req, res) => {});

export {
  createMockQuestion,
  addMCQforMQ,
  getMockQuestion,
  updateMockQuestion,
  deleteMockQuestion,
};
