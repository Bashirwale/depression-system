import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionState {
  currentQuestion: number;
  answers: string[];
  userName: string;
}

const initialState: QuestionState = {
  currentQuestion: 0,
  answers: [],
  userName: "",
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
    addUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { setCurrentQuestion, addAnswer, addUserName } =
  questionSlice.actions;
export default questionSlice.reducer;
