import React, { useContext, useEffect, useState } from "react";
import heroImg from "../assets/heroImg.jpg";
import { AppContext } from "../Context/AppContext";
import { CiDumbbell } from "react-icons/ci";
import ExerciseCard from "../Components/ExerciseCard";

const HomePage = () => {
  const [bodyPart, setBodyPart] = useState("");
  const {
    bodyParts,
    fetchExercises,
    filterExercises,
    setSearch,
    search,
    searchExercises,
  } = useContext(AppContext);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (bodyPart !== "") {
      fetchExercises();
      setFilteredList(filterExercises(bodyPart));
    }
  }, [bodyPart]);

  const handleSearch = () => {
    fetchExercises();
    setFilteredList(searchExercises(search));
  };

  console.log(filteredList);

  return (
    <div className="max-w-[1200px] mx-auto w-11/12 pb-20 ">
      <div className="flex flex-col lg:flex-row my-10 w-full h-[600px] justify-around">
        <div className="w-full lg:w-6/12 flex flex-col items-center lg:items-start justify-center gap-y-4 lg:-translate-y-20 my-5 lg:my-0">
          <h1 className="text-4xl text-center lg:text-start font-bold leading-9">
            Build Muscles and Improve your Personality
          </h1>
          <p className="-translate-y-3 text-lg opacity-70">
            Stay healthy Stay Fit
          </p>
          <a href="#bodyParts">
            <button className="bg-orange-400 text-white py-3 px-6 rounded-lg uppercase">
              Explore
            </button>
          </a>
        </div>
        <div className="w-full lg:w-4/12 flex justify-center rounded-xl overflow-hidden">
          <img src={heroImg} alt="" className="object-scale-down h-full w-full" />
        </div>
      </div>

      <div className="flex flex-col gap-y-10 items-center w-full py-20 rounded-r-md overflow-hidden">
        <h2 className="text-4xl font-bold text-center">
          Awesome Exersices You Should Know
        </h2>
        <div className="items-center gap-y-4 flex lg:flex-row flex-col justify-between w-8/12">
          <input
            type="text"
            placeholder="Search Exercises..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="py-4 px-3 w-10/12 outline-none border"
          />
          <button
            className="bg-orange-600 text-white py-4 w-[100px] md:w-2/12"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div
        className="w-10/12 mx-auto flex overflow-x-auto gap-x-8 scrollbar-hide"
        id="bodyParts"
      >
        {bodyParts.map((bodyPart, index) => {
          return (
            <a href={"#exercises"} key={index}>
              <div
                className="flex flex-col p-6 rounded-lg shadow-md items-center gap-y-5 w-[200px] aspect-square border justify-center"
                onClick={() => setBodyPart(bodyPart)}
              >
                <CiDumbbell size={40} />
                <p className="uppercase">{bodyPart}</p>
              </div>
            </a>
          );
        })}
      </div>

      <div
        className={`${
          filteredList.length === 0 ? "hidden" : "block"
        } mt-32 flex flex-col items-center py-5`}
        id="exercises"
      >
        <h2 className="font-bold text-4xl capitalize">
          Showing result According to your preference
        </h2>
        <div className="flex gap-x-5 gap-y-10 flex-wrap justify-center w-full my-10">
          {filteredList.length === 0 ? (
            <p> No Result Found </p>
          ) : (
            filteredList.map((exercise) => {
              return <ExerciseCard exercise={exercise} key={exercise.id} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
