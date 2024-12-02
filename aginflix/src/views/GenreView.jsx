import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Genres.css';

const GenreView = () => {
    const [genres, setGenres] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchGenres();
    }, []);

    const fetchGenres = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=39717e4efb03f034ec122d46955ea423`
            );
            setGenres(response.data.genres);
        } catch (err) {
            setError('Failed to load genres');
            console.error(err);
        }
    };

    return (
        <div className="genre-view">
            <h1>Genres</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="genres-container">
                {genres.map((genre) => (
                    <div key={genre.id} className="genre-item">
                        <a href={`/movies/genre/${genre.id}`}>{genre.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GenreView;
