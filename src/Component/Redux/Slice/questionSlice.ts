import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { questionsData } from "../../../data/questionsData";

interface Question {
  question: string;
  answer: string | null;
  isDepressed: boolean | null;
}

interface QuestionState {
  currentQuestion: number;
  questions: Question[];
  userName: string;
  result: string | null;
}

const initialState: QuestionState = {
  currentQuestion: 0,
  questions: questionsData.map((q) => ({
    question: q.question,
    answer: null,
    isDepressed: null,
  })),
  userName: "",
  result: "",
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setCurrentQuestion: (state, action: PayloadAction<number>) => {
      state.currentQuestion = action.payload;
    },
    addAnswer: (
      state,
      action: PayloadAction<{
        index: number;
        answer: string;
        val: string;
      }>
    ) => {
      const { index, answer, val } = action.payload;
      const calc = val === "b";
      state.questions[index].answer = answer;
      state.questions[index].isDepressed = calc;
    },
    addUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    addDepressedResult: (state, action: PayloadAction<string>) => {
      state.result = action.payload;
    },
    clearAnswers: (state) => {
      // Clear all answers by resetting them to null
      state.questions.forEach((q) => {
        q.answer = null;
      });
    },
  },
});

export const {
  setCurrentQuestion,
  addAnswer,
  clearAnswers,
  addUserName,
  addDepressedResult,
} = questionSlice.actions;
export default questionSlice.reducer;
