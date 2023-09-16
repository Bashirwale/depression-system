import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { questionsData } from "../../../data/questionsData";

interface Question {
  question: string;
  answer: string | null;
}

interface QuestionState {
  currentQuestion: number;
  questions: Question[];
  userName: string;
}

const initialState: QuestionState = {
  currentQuestion: 0,
  questions: questionsData.map((q) => ({ question: q.question, answer: null })),
  userName: "",
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
      action: PayloadAction<{ index: number; answer: string }>
    ) => {
      const { index, answer } = action.payload;
      state.questions[index].answer = answer;
    },
    addUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { setCurrentQuestion, addAnswer, addUserName } =
  questionSlice.actions;
export default questionSlice.reducer;
