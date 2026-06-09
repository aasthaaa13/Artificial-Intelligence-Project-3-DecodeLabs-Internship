🎬 AI Movie Recommendation System

A modern movie recommendation web application built using React and Vite. The system recommends movies based on user-selected genres using a similarity-based recommendation algorithm and presents results through an intuitive Netflix-inspired user interface.

---

📌 Project Overview

The goal of this project is to demonstrate the core concepts behind recommendation systems by providing personalized movie suggestions based on user preferences.

Users can:

- Select one or more movie genres
- Search movies by title
- View similarity-based recommendations
- See recommendation match scores
- Identify the highest-ranked recommendation
- Understand why a movie was recommended

---

✨ Features

🎯 Genre-Based Recommendations

Recommend movies according to the genres selected by the user.

📊 Similarity Matching

Calculate recommendation scores based on the overlap between selected genres and movie genres.

🏆 Best Match Detection

Automatically highlights the highest-ranked recommendation.

🔍 Movie Search

Search movies instantly using the search bar.

🎬 Movie Posters

Display visual movie posters for better user experience.

📖 Recommendation Explanation

Shows the genres responsible for each recommendation.

🎨 Netflix-Inspired UI

Modern streaming-platform-inspired interface with interactive movie cards.

⚡ Responsive Design

Optimized for desktop and mobile devices.

---

🧠 Recommendation Algorithm

The recommendation engine uses a simple similarity-based approach.

Workflow

1. User selects one or more genres.
2. Each movie is compared against selected genres.
3. Matching genres are counted.
4. A similarity score is calculated.
5. Movies are sorted in descending order of similarity.
6. The highest-scoring movie is marked as the Best Match.

Similarity Formula

Match Score (%) =
(Number of Matched Genres / Number of Selected Genres) × 100

Example

Selected Genres:

Sci-Fi, Adventure

Movie Genres:

Sci-Fi, Adventure, Drama

Result:

Matched Genres = 2

Score = (2 / 2) × 100 = 100%

---

🛠️ Technology Stack

Technology| Purpose
React.js| Frontend Development
Vite| Build Tool
JavaScript| Application Logic
CSS3| Styling
Git| Version Control
GitHub| Project Hosting

---

📂 Project Structure

movie-recommendation-system-react/

netflix-ai-recommender/

├── public/
│   └── netflix-bg.png
│
├── screenshots/
│   ├── HomePage.png
│   ├── Genre Selected.png
│   ├── Recommendations shown.png
│   ├── Best Match Badge.png
│   └── Search working.png
│
├── src/
│   ├── components/
│   │   ├── GenreSelector.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── HeroBanner.css
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   └── SearchBar.jsx
│   │
│   ├── data/
│   │   └── movies.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
└── vite.config.js
---

📸 Screenshots

Add screenshots here after uploading them to GitHub.

Home Page

Insert screenshot

Genre Selection

Insert screenshot

Recommendations

Insert screenshot

Best Match

Insert screenshot

Search Functionality

Insert screenshot

---

🚀 Installation & Setup

Clone the repository:

git clone https://github.com/your-username/movie-recommendation-system-react.git

Navigate to project directory:

cd movie-recommendation-system-react

Install dependencies:

npm install

Start development server:

npm run dev

---

🔮 Future Enhancements

- Integration with TMDB API
- User authentication
- Personalized user profiles
- Watchlist functionality
- Advanced recommendation algorithms
- Rating-based filtering
- Recommendation history
- Dark/Light themes

---

🎓 Learning Outcomes

This project helped in understanding:

- React component architecture
- State management using React Hooks
- Recommendation system fundamentals
- Similarity-based matching algorithms
- UI/UX design principles
- Git and GitHub workflows
- Modern frontend development practices

---

👨‍💻 Author

Developed as part of an internship project focused on recommendation systems, React development, and modern web application design.

Project Type: Internship Project
Domain: Recommendation Systems
Technology: React + Vite
