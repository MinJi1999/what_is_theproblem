import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";


class Home extends React.Component{
  state = {
    isLoding : true,
    movies : []
  };
  getMovies = async () => {
    const {
      data:{
        data:{
          movies}
        }
      } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
      this.setState({movies:movies, isLoding:false}) //배열 movies, from axios
    }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoding, movies} = this.state;
    return (
     <section className="container">
      {isLoding ? (
        <div className = "loader">
          <span className="loader__text">Loding...</span>
        </div>
       ):(
        <div className="movies">
           {movies.map(movie =>(
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title} 
              year={movie.year} 
              summary={movie.summary} 
              poster={movie.medium_cover_image} 
              genres={movie.genres}
             />
            ))
           }
        </div>
      )}
      </section>
    );
  }
}
export default Home;
