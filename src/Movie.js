import React from "react";
import propTypes from "prop-types";
import "./Movie.css";


function Movie({title, summary, poster, year, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <ul className="movie__genres">
                    {genres.map((genre, index) =>( 
                        <li key={index} className="genre">{genre}</li> 
                    ))}
                </ul>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary.slice(0,140)}...</p>
            </div>
    </div>)
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    year : propTypes.number.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;