import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;
  const [bodyParts, setBodyParts] = useState([]);
  const baseUrl = "https://exercisedb.p.rapidapi.com/exercises";

  const fetchBodyParts = async () => {
    const options = {
      method: "GET",
      url: `${baseUrl}/bodyPartList`,
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const { data } = await axios.request(options);
      setBodyParts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExercises = async () => {
    const options = {
      method: "GET",
      url: baseUrl,
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const { data } = await axios.request(options);
      setExercises(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterExercises = (bodyPart, id = null) => {
    setLoading(true);
    const list = exercises.filter((exercise) => {
      if (id !== null) {
        return exercise.id === id;
      }
      return exercise.bodyPart === bodyPart;
    });
    console.log(list);
    setLoading(false);
    return list;
  };

  const searchExercises = (search) => {
    setLoading(true);
    const list = exercises.filter((exercise) => {
      return (
        exercise.bodyPart === search ||
        exercise.equipment === search ||
        exercise.target === search ||
        exercise.name === search
      );
    });
    setLoading(false);
    return list;
  };

  useEffect(() => {
    fetchBodyParts();
  }, []);

  const value = {
    baseUrl,
    bodyParts,
    fetchExercises,
    exercises,
    setExercises,
    filterExercises,
    loading,
    setLoading,
    searchExercises,
    search,
    setSearch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
