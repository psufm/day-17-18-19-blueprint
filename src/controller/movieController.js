/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "../models/Movie";

export const index = (req, res) => {
  res.render("movies", {
    movies: getMovies(), //수정(실제 db에서 전체 조회 기능으로({}) <<<)
    pageTitle: "Movies!"
  });
};

export const movieDetail = (req, res) => {
  const movie = getMovieById(req.params.id); //수정(실제 db에서 id값 조회기능으로)
  !movie
    ? res.status(404).render("404", { pageTitle: "404 Error" })
    : res.render("detail", { pageTitle: movie.title, movie });
};

export const searchMovie = (req, res) => {
  const {
    query: { rating: rating, year: year }
  } = req;

  const movies = !year //수정(실제 db 조회 부분으로)
    ? getMovieByMinimumRating(parseInt(rating))
    : getMovieByMinimumYear(parseInt(year));
  res.render("movie", {
    pageTitle: `Searching by ${!year ? `rating:${rating} ` : `year:${year}`}`,
    movies
  });
};

export const addMovie = (req, res) => {
  if (req.method === "GET") {
    return res.render("create", { pageTitle: "Create" });
  } else if (req.method === "POST") {
  } //실제 추가로직
};

export const editMovie = (req, res) => {
  if (req.method === "GET") {
    return res.render("edit", { pageTitle: "Edit", movie: getMovieById() }); //하튼고쳐야됨
  } else if (req.method === "POST") {
  } //실제 수정로직
};

export const deleteMovie = (req, res) => {}; //id값 req에서 뽑아와서 삭제하면됨
// Add your magic here!
