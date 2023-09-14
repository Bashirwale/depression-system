import { FC } from "react";
import { useNavigate } from "react-router-dom";
import mental from "../Component/asset/mental-health.png";

const Home: FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/quiz");
  };

  return (
    <div className="mt-4 px-2">
      <header>
        <img
          src={mental}
          alt="no img yet"
          className="w-16 sm:w-20 md:w-24 lg:w-32"
        />
      </header>
      <main className="mx-auto mt-4 max-w-sm md:max-w-lg lg:max-w-2xl px-4 border-black">
        <p className="text-base font-semibold">
          Depression can affect anyone, but recovery is possible with proper
          care and support!
        </p>
        <p className="text-base font-semibold mt-5">
          Kindly enter your name and email below to take the text
        </p>
        <form className="mt-3">
          <div>
            <label htmlFor="name" className="block text-sm font-normal">
              Name
            </label>
            <input
              type="text"
              className="p-1 border border-black w-full my-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-normal">
              Email
            </label>
            <input
              type="email"
              className="p-1 border border-black w-full my-2"
            />
          </div>
          <button
            onClick={handleNavigate}
            className="flex justify-center my-4 bg-primaryColor text-white px-10 rounded font-semibold py-2 mx-auto text-center"
          >
            Click here to take test
          </button>
        </form>
      </main>
    </div>
  );
};

export default Home;