import React from 'react'
import '../index.css'
const IMG_API = "https://image.tmdb.org/t/p/w1280"

const Movie = ({ title, poster_path, overview, vote_average }) => {

    const setVoteColor = (vote) => {
        if (vote > 8) {
            return "green"
        } else if (vote >= 6 && vote <= 8) {
            return "yellow"
        } else if (vote < 6) {
            return "red"
        }
    }
    return (
        <div className="movie">

            <img src={
                poster_path
                    ? IMG_API + poster_path
                    : "https://images.unsplash.com/photo-1576788445812-0933cb14461f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdmllJTIwcGxhY2Vob2xkZXJ8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
                alt={title}
            />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteColor(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-overlay">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div >)
}

export default Movie