
import HeroImage from "../../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-6xl font-bold text-white">
              Hello!!
            </h2>
            <p className="text-gray-400 py-4 max-w-md">
              My name is Jose Perez and I am a full stack web developer.
            </p>

            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={23} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>

          <div>
            <img
              src={HeroImage}
              alt="PFP of Jose Perez"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
