import  "./HeroBanner.css";
function HeroBanner() {
  return (
    <div className="hero">
      <div className="hero-overlay">

        <h1 className="hero-title">
          See What's Next
        </h1>

        <p className="hero-subtitle">
          WATCH ANYWHERE. CANCEL ANYTIME.
        </p>

        <button className="hero-btn">
          Browse Movies
        </button>

      </div>
    </div>
  );
}

export default HeroBanner;