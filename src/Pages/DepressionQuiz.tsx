import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../Component/Redux/store";
import {
  setCurrentQuestion,
  addAnswer,
} from "../Component/Redux/Slice/questionSlice";
import { questionsData } from "../data/questionsData";

const DepressionQuiz: FC = () => {
  const dispatch = useDispatch();
  const currentQuestion = useSelector(
    (state: RootState) => state.question.currentQuestion
  );
  const userQuestion = useSelector(
    (state: RootState) => state.question.questions
  );
  const userAnswer = useSelector(
    (state: RootState) => state.question.questions[currentQuestion].answer
  );
  const [selected, setSelected] = useState<string | null>(
    userQuestion[currentQuestion].answer || null
  );

  useEffect(() => {
    setSelected(userQuestion[currentQuestion].answer || null);
  }, [currentQuestion, userQuestion]);

  const navigate = useNavigate();
  // Access the current question and its answer choices
  const questionData = questionsData[currentQuestion];
  const questionText = questionData.question;
  const answerChoices = questionData.answers;

  const handleAnswer = (answer: string) => {
    setSelected(answer);

    dispatch(addAnswer({ index: currentQuestion, answer }));
  };
  const handleNext = () => {
    if (currentQuestion < questionsData.length - 1) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      dispatch(setCurrentQuestion(currentQuestion - 1));
    }
  };
  const handleNavigate = () => {
    navigate("/");
    dispatch(setCurrentQuestion(0));
  };

  return (
    <div className="mt-4 md:px-8">
      <p className="text-right w-full p-3">
        {currentQuestion + 1}/{questionsData.length}
      </p>
      <div className="mx-auto mt-4 max-w-sm md:max-w-lg lg:max-w-2xl px-4 border-black mb-16">
        <div className="flex gap-2 mb-10 md:mb-20">
          <span>{currentQuestion + 1}.</span>
          <p>{questionText}</p>
        </div>
        {answerChoices.map((choice, index) => (
          <button
            className={
              selected === userAnswer && selected === choice
                ? "bg-primaryColor text-white text-center border border-black p-2 rounded-md w-full mb-6 md:mb-12"
                : "text-center border border-black p-2 rounded-md w-full mb-6 md:mb-12"
            }
            key={index}
            onClick={() => handleAnswer(choice)}
          >
            {choice}
          </button>
        ))}

        <div className="flex items-center justify-between w-full mb-6 md:mb-12">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="border border-black py-1 px-4 rounded-md"
          >
            prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestion === questionsData.length - 1}
            className="border border-black py-1 px-4 rounded-md"
          >
            next
          </button>
        </div>
      </div>
      {currentQuestion === questionsData.length - 1 && (
        <button
          onClick={handleNavigate}
          className="flex justify-center my-4 bg-primaryColor capitalize text-white px-10 rounded font-semibold py-2 mx-auto text-center"
        >
          submit
        </button>
      )}
    </div>
  );
};

export default DepressionQuiz;
