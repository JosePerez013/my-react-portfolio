
import ballDontLie from "../../assets/projectImgs/BDL.jpg";
import FitNFresh from "../../assets/projectImgs/FitNFresh.jpg";

const Projects = () => {

  const projects = [
    {
      id: 1,
      src: ballDontLie,
      alt: "ball dont lie",
      demoLink: "https://balldontlie-5b4e2d2e88fb.herokuapp.com/",
      codeLink: "https://github.com/epicasino/balldontlie-tracker",
    },
    {
      id: 2,
      src: FitNFresh,
      alt: "Fit N Fresh",
      demoLink: "https://james661.github.io/Fitness-and-nutrition/",
      codeLink:"https://github.com/james661/Fitness-and-nutrition",
    },
  ];

    const handleDemoClick = (demoLink) => {
      window.open(demoLink, "_blank");
    };

    const handleCodeClick = (codeLink) => {
      window.open(codeLink, "_blank");
    };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {" "}
            Portfolio
          </p>
          <p className="py-6">Check out my projects here.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, alt, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-6 m-4 duration-200 hover:scale-105"
                  onClick={() => handleDemoClick(demoLink)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-6 m-4 duration-200 hover:scale-105"
                  onClick={() => handleCodeClick(codeLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
