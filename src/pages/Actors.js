import NavBar from "../components/NavBar";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((actor) => {
    return (
      <article key={actor.name}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie) => {
            return <li key={movie}>{movie}</li>;
          })}
        </ul>
      </article>
    );
  });
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorsList}
      </main>
    </>
  );
}

export default Actors;
