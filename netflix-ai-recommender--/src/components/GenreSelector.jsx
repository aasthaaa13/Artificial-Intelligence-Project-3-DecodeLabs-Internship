const genres = [
  "Action",
  "Sci-Fi",
  "Adventure",
  "Drama",
  "Comedy",
  "Romance",
  "Thriller",
  "Crime",
  "Mystery"
];

function GenreSelector({ selectedGenres, setSelectedGenres }) {

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(
        selectedGenres.filter((g) => g !== genre)
      );
    } else {
      setSelectedGenres([
        ...selectedGenres,
        genre
      ]);
    }
  };

  return (
    <div>
      <h2>Select Your Favorite Genres</h2>

      {genres.map((genre) => (
        <button
  key={genre}
  onClick={() => toggleGenre(genre)}
  style={{
    margin: "5px",
    background: selectedGenres.includes(genre)
      ? "#E50914"
      : "#333",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  {genre}
</button>
      ))}
    </div>
  );
}

export default GenreSelector;