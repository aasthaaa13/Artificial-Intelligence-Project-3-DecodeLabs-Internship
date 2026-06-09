function MovieCard({
  movie,
  score,
  isBestMatch
}) {
  return (
    <div
      style={{
        background: "#1f1f1f",
        width: "320px",
        margin: "15px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow:
          "0 4px 10px rgba(0,0,0,0.3)",
        transition:
          "transform 0.3s ease"
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform =
          "scale(1.05)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform =
          "scale(1)")
      }
    >
      <img
        src={movie.poster}
        alt={movie.title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "12px" }}>

        {isBestMatch && (
          <p
            style={{
              background: "#E50914",
              color: "white",
              padding: "6px",
              borderRadius: "5px",
              textAlign: "center",
              fontWeight: "bold"
            }}
          >
            🏆 BEST MATCH
          </p>
        )}

        <h3>{movie.title}</h3>

        <p>
          ⭐ Rating: {movie.rating}
        </p>

        <p>
          📅 Year: {movie.year}
        </p>

        <p
          style={{
            color: "#E50914",
            fontWeight: "bold"
          }}
        >
          🎯 Match Score: {score}%
        </p>

        <h4>Why Recommended?</h4>

        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>
              ✓ {genre}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default MovieCard;