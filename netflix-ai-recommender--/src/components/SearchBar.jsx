function SearchBar({ search, setSearch }) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "60%",
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px"
        }}
      />
    </div>
  );
}

export default SearchBar;