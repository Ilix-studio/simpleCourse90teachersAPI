import mongoose from "mongoose";

const mcqSchema = mongoose.Schema({
  questionName: {
    type: String,
    required: true,
  },
  options: [
    {
      type: String,
      required: true,
    },
  ],
  correctoption: {
    type: String,
  },
});

const questionSchema = mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
  },
  mcqs: [mcqSchema],
  testType: {
    type: String,
    enum: ["general", "mock"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const QuestionSet = mongoose.model("QuestionSet", questionSchema);
export default QuestionSet;
