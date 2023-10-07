import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import { movies } from "../data";

function Home() {
  const movieList = movies.map((movie) => (
    <MovieCard key={movie.title} title={movie.title} />
  ));

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
}

export default Home;
