import asyncHandler from "express-async-handler";
import QuestionSet from "../models/teachersModel.js";

//General Question COntrollers
const createGeneralQuestions = asyncHandler(async (req, res) => {
  const { subject, language, topic } = req.body;

  const questionSet = new QuestionSet({
    subject,
    language,
    topic,
    mcqs: [], // Empty initially, MCQs will be add later in UI
  });
  const savedQuestionSet = await questionSet.save();
  if (savedQuestionSet) {
    res.status(201).json({
      message: "General Exam save successfully",
      questionSetId: savedQuestionSet._id,
      data: questionSet,
    });
  } else {
    res.status(404);
    throw new Error("something is wrong");
  }
});
const addMCQforGQ = asyncHandler(async (req, res) => {
  const { questionSetId } = req.params;
  const { questionName, options, correctOption } = req.body;

  const questionSet = await QuestionSet.findById(questionSetId);
  if (!questionSet) {
    res.status(404).json({
      message: "Question set not found",
    });
  }
  const newMCQset = { questionName, options, correctOption };
  questionSet.mcqs.push(newMCQset);
  await questionSet.save();
  res
    .status(200)
    .json({
      message: "MCQ added ",
      questionSetId: questionSetId,
      mcqs: newMCQset,
    });
});

const getGeneralQuestions = asyncHandler(async (req, res) => {
  const allQuestions = await QuestionSet.find({});
  if (!allQuestions || allQuestions.length === 0) {
    res.status(404).json({
      message: "Not Found",
    });
  }
  res.status(200).json({
    message: "Fetch Successfull ",
    data: allQuestions,
  });
});
const updateGeneralQuestions = asyncHandler(async (req, res) => {});
const deleteGeneralQuestions = asyncHandler(async (req, res) => {});

//Mock Question COntrollers
const createMockQuestion = asyncHandler(async (req, res) => {
  const { subject, language, testType } = req.body;

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
