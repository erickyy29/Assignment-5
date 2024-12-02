import axios from "axios";

const API_KEY = "39717e4efb03f034ec122d46955ea423";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMoviesByGenre = async (genreId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies by genre:", error);
    throw error;
  }
};
