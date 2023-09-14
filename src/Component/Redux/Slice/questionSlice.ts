import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionState {
  currentQuestion: number;
  answers: string[];
}

const initialState: QuestionState = {
  currentQuestion: 0,
  answers: [],
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setCurrentQuestion: (state, action: PayloadAction<number>) => {
      state.currentQuestion = action.payload;
    },
    addAnswer: (state, action: PayloadAction<string>) => {
      state.answers.push(action.payload);
    },
  },
});

export const { setCurrentQuestion, addAnswer } = questionSlice.actions;
export default questionSlice.reducer;
