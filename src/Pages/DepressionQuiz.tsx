import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../Component/Redux/store";
import {
  setCurrentQuestion,
  addAnswer,
  clearAnswers,
  addDepressedResult,
} from "../Component/Redux/Slice/questionSlice";
import { questionsData } from "../data/questionsData";

const DepressionQuiz: FC = () => {
  const dispatch = useDispatch();

  //index of the questions
  const currentQuestion = useSelector(
    (state: RootState) => state.question.currentQuestion
  );

  const userQuestion = useSelector(
    (state: RootState) => state.question.questions
  );

  const userAnswer = useSelector(
    (state: RootState) => state.question.questions[currentQuestion].answer
  );

  //stores the selected answer locally
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(
    userQuestion[currentQuestion].answer || null
  );

  useEffect(() => {
    setSelectedAnswer(userQuestion[currentQuestion].answer);
  }, [currentQuestion, userQuestion]);

  const navigate = useNavigate();

  // Access the current question and its answer choices
  const questionData = questionsData[currentQuestion];
  const questionText = questionData.question;
  const answerChoiceA = questionData.answers.a;
  const answerChoiceB = questionData.answers.b;

  //STORES THE ANSWERS GLOBALLY/LOCALLY TO IT INDIVIDUAL QUESTION INDEX
  const handleAnswer = (answer: string, val: string) => {
    setSelectedAnswer(answer);
    console.log(answer, "ans", val);
    dispatch(addAnswer({ index: currentQuestion, answer, val }));
  };

  const handleNext = () => {
    if (currentQuestion < questionsData.length - 1 && selectedAnswer !== null) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      dispatch(setCurrentQuestion(currentQuestion - 1));
    }
  };

  //RESETS THE STORE
  const handleSubmit = async () => {
    navigate("/quiz_result");
    dispatch(setCurrentQuestion(0));
    dispatch(clearAnswers());
    setSelectedAnswer(null);
    console.log(userQuestion);
    const depressed = [];
    const notDepressed = [];
    const response = userQuestion.forEach((q) => {
      q.isDepressed === true ? depressed.push(true) : notDepressed.push(false);
    });
    console.log(depressed.length, notDepressed.length);
    const result =
      depressed.length > notDepressed.length ? "depressed" : "not depressed";

    dispatch(addDepressedResult(result));

    /* const userQuestionsStrings = userQuestion?.map((item) => {
      return `${item.question} ${item.answer}`;
    });
    const payload = { text: userQuestionsStrings };
    console.log(payload, "payload");
    const url = "https://depression-analyser.onrender.com/predict";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    } */
  };

  return (
    <div className="mt-4 md:px-8">
      <p className="text-right w-full p-3">
        {currentQuestion + 1}/{questionsData.length}
      </p>
      <div className="mx-auto mt-4 max-w-sm md:max-w-lg lg:max-w-2xl px-4 border-black mb-16">
        <div className="flex gap-2 mb-10 md:mb-20 font-semibold">
          <span>{currentQuestion + 1}.</span>
          <p className="">{questionText}</p>
        </div>

        <button
          className={
            selectedAnswer === userAnswer && selectedAnswer === answerChoiceA
              ? "bg-primaryColor text-white text-center border border-black p-2 rounded-md w-full mb-6 md:mb-12"
              : "text-center border border-black p-2 rounded-md w-full mb-6 md:mb-12"
          }
          onClick={() => handleAnswer(answerChoiceA, "a")}
        >
          {answerChoiceA}
        </button>
        <button
          className={
            selectedAnswer === userAnswer && selectedAnswer === answerChoiceB
              ? "bg-primaryColor text-white text-center border border-black p-2 rounded-md w-full mb-6 md:mb-12"
              : "text-center border border-black p-2 rounded-md w-full mb-6 md:mb-12"
          }
          onClick={() => handleAnswer(answerChoiceB, "b")}
        >
          {answerChoiceB}
        </button>

        <div className="flex items-center justify-between w-full mb-6 md:mb-12">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="border border-black py-1 px-4 rounded-md"
          >
            prev
          </button>

          {currentQuestion === questionsData.length - 1 &&
          selectedAnswer !== null ? (
            <button
              onClick={handleSubmit}
              className=" bg-primaryColor capitalize text-white px-4 rounded font-semibold py-1"
            >
              submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={currentQuestion === questionsData.length - 1}
              className="border border-black py-1 px-4 rounded-md"
            >
              next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepressionQuiz;
