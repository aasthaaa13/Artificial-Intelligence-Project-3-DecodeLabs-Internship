import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import GenreSelector from "./components/GenreSelector";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";

import { movies } from "./data/movies";

function App() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [search, setSearch] = useState("");

  const recommendations = movies
    .map((movie) => {
      const matchedGenres = movie.genres.filter((genre) =>
        selectedGenres.includes(genre)
      ).length;

      const score =
        selectedGenres.length > 0
          ? Math.round(
              (matchedGenres / selectedGenres.length) * 100
            )
          : 0;

      return {
        ...movie,
        score,
      };
    })
    .filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesGenre =
        selectedGenres.length === 0
          ? true
          : movie.score > 0;

      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => b.score - a.score);

  return (
    <div>
      <Navbar />

      <HeroBanner />

      <GenreSelector
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />
      <p
      style= {{
        textAlign: "center",
        fontSize: "18px"
      }}
      >
        Found {recommendations.length}
      </p>

      <h2
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Recommended Movies
      </h2>

      {selectedGenres.length === 0 &&
      search.trim() === "" ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            marginTop: "30px",
          }}
        >
          Select genres or search a movie to get recommendations
        </p>
      ) : recommendations.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          No movies found.
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {recommendations.map((movie) => (
            <MovieCard
              key={movie.title}
              movie={movie}
              score={movie.score}
              isBestMatch={movie.score === recommendations[0].score}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;