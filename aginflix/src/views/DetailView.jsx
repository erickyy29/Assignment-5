import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesByGenre } from "../services/api";
import "../styles/DetailView.css";

const DetailView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movies = await fetchMoviesByGenre(id);
        setMovie(movies[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  return (
    <div className="detail-container">
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailView;
