import React, { useContext } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { AppContext } from "../Context/AppContext";
import { NavLink } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  const { gifUrl, name, bodyPart, target } = exercise;

  return (
    <div className="flex flex-col w-[400px] h-[400px] rounded-lg shadow-lg items-center border justify-around p-2 relative">
      <div className="rounded-md w-11/12 h-[300px] relative p-2">
        <img src={gifUrl} className="w-full h-full object-contain" />
        <div className="flex gap-x-5 absolute bottom-5 left-3">
          <span className="rounded-full bg-orange-500 py-1 px-3 text-white capitalize">
            {bodyPart}
          </span>
          <span className="rounded-full bg-orange-500 py-1 px-3 text-white capitalize">
            {target}
          </span>
        </div>
      </div>
      <NavLink to={`/exercises/${exercise.id}`}>
        <p className="text-xl font-semibold capitalize text-center hover:underline">
          {name}
        </p>
      </NavLink>
    </div>
  );
};

export default ExerciseCard;
