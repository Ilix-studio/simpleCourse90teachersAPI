import mongoose from "mongoose";
const mcqSchema = mongoose.Schema(
  {
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
      required: true,
    },
    mcqs: [
      {
        question: {
          type: String,
          required: true,
        },
        options: [
          {
            type: String,
            required: true,
          },
        ],
        correctQption: {
          type: String,
          required: true,
        },
      },
    ],
    testType: {
      type: String,
      enum: ["general", "mock"],
      required: true,
    },
  },
  { timestamps: true }
);

const MCQmodel = mongoose.model("MCQ", mcqSchema);
export default MCQmodel;
