import React from "react";
import { Outlet } from "react-router-dom";
import Genres from "../components/Genres";
import Footer from "../components/Footer";
import "../styles/Movies.css";

const MoviesView = () => {
  return (
    <div className="movies-view">
      <Genres />
      <div className="movies-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MoviesView;
