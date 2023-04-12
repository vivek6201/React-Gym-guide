import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import { useLocation } from "react-router-dom";
import { GiWeightLiftingUp, GiMeditation } from "react-icons/gi";
import { BiTargetLock } from "react-icons/bi";

const ExerciseDetailPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/").at(-1);

  const { filterExercises, loading } = useContext(AppContext);
  const exercise = filterExercises(null, id);

  
  console.log(exercise, id);
  return (
    <div className="h-[1000px] lg:h-[800px] w-full">
      {loading ? (
        <div>
          <p>Loading</p>
        </div>
      ) : (
        <div className="w-11/12 max-w-[1200px] mx-auto h-full overflow-hidden">
          <div className="flex flex-col lg:flex-row h-full items-center justify-between w-full">
            <div className="w-7/12 h-[500px] lg:h-full flex items-start">
              <img src={exercise[0]?.gifUrl} className="object-cover w-full h-full"/>
            </div>
            <div className="w-full lg:w-5/12 flex h-full flex-col space-y-5 py-10 lg:py-28 ">
              <h2 className="text-4xl font-bold capitalize mb-5">{exercise[0]?.name}</h2>
              <p className="opacity-70 mb-1 text-lg w-full lg:max-w-[400px]">
                Exercises keep you strong. 3/4 {exercise[0]?.name} bup is one of
                the best exercise for {exercise[0]?.target}. It will help you to
                improve your mood and gain energy.
              </p>
              <div  className="flex gap-x-5 items-center">
                <div className="w-20 flex items-center justify-center rounded-full aspect-square bg-gray-200">
                  <GiWeightLiftingUp size={30} />
                </div>
                <p className="capitalize text-lg">Body Weight</p>
              </div>
              <div  className="flex gap-x-5 items-center">
                <div className="w-20 flex items-center justify-center rounded-full aspect-square bg-gray-200">
                  <BiTargetLock size={30} />
                </div>
                <p className="capitalize text-lg">{exercise[0]?.target}</p>
              </div>
              <div className="flex gap-x-5 items-center"> 
                <div className="w-20 flex items-center justify-center rounded-full aspect-square bg-gray-200">
                  <GiMeditation size={30} />
                </div>
                <p className="capitalize text-lg">{exercise[0]?.equipment}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseDetailPage;
