import axios from "axios";
const BASE_URL = import.meta.env.VITE_MOVIE_API_URL;

export const fetchMoviesService = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    return error;
  }
};
