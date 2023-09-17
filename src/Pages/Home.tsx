import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addUserName } from "../Component/Redux/Slice/questionSlice";
import { useNavigate } from "react-router-dom";
import mental from "../Component/asset/mental-health.png";

const Home: FC = () => {
  const [name, setName] = useState<string>("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/quiz");
    dispatch(addUserName(name));
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
      <main className="mx-auto mt-5 max-w-sm md:max-w-lg lg:max-w-2xl px-4 border-black">
        <p className="text-base font-semibold">
          Depression can affect anyone, but recovery is possible with proper
          care and support!
        </p>
        <p className="text-base font-semibold mt-6">
          Kindly enter your name and email below to take the text
        </p>
        <form onSubmit={handleSubmit} className="mt-4">
          <div>
            <label htmlFor="name" className="block text-sm font-normal">
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-1 border border-black w-full my-3 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-normal">
              Email
            </label>
            <input
              type="email"
              required
              className="p-1 border border-black w-full my-3 rounded-md"
            />
          </div>
          <button className="flex justify-center my-4 bg-primaryColor text-white px-10 rounded font-semibold py-2 mx-auto text-center">
            Click here to take test
          </button>
        </form>
      </main>
    </div>
  );
};

export default Home;
