import { useSelector, useDispatch } from "react-redux";
import { addUserName } from "../Component/Redux/Slice/questionSlice";
import { RootState } from "../Component/Redux/store";
import { useNavigate } from "react-router-dom";

const DepressionResult = () => {
  const currentUser = useSelector(
    (state: RootState) => state.question.userName
  );
  const quizResult = useSelector((state: RootState) => state.question.result);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEndSession = () => {
    dispatch(addUserName(""));
    navigate("/");
  };

  return (
    <div className="mt-4 md:px-8">
      <div className="mx-auto max-w-sm md:max-w-lg lg:max-w-2xl px-4  my-16">
        <p className=" text-base md:text-lg lg:text-xl border text-justify border-black rounded-sm p-5 sm:p-10 md:p-16 lg:p-20 font-normal">
          {quizResult === "depressed"
            ? "After careful evaluation, it appears that you are experiencing symptoms of depression. Please know that we are here to support you and discuss potential treatment options."
            : `Congratulations ${currentUser}
          your test shows you are not depressed. It is adviced you do more
          activities that makes you happy if you feel a little down.`}
        </p>
        <button
          onClick={handleEndSession}
          className="flex justify-center mt-16 bg-primaryColor capitalize text-white px-10 rounded font-semibold py-2 mx-auto text-center"
        >
          take another test
        </button>
      </div>
    </div>
  );
};

export default DepressionResult;
