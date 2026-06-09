# 🎬 Netflix Movie Recommendation System
#### -An AI-powered genre-based movie recommendation system

A modern web-based movie recommendation system built using React and Vite. The system recommends movies based on user-selected genres using a similarity-based recommendation algorithm and presents results through a Netflix-inspired user interface.

---

## 📌 Project Overview

This project demonstrates the fundamentals of recommendation systems by suggesting movies according to user preferences.

Users can:

- Select one or more genres
- Search movies by title
- View personalized recommendations
- See similarity match scores
- Identify the best matching movie
- Understand why a movie was recommended

---

## ✨ Features

#### 🎯 Genre-Based Recommendations

Recommend movies based on genres selected by the user.

#### 🔍 Search Functionality

Instantly search movies by title.

#### 🏆 Best Match Badge

Highlights the highest-ranked recommendation.

#### 📊 Similarity Scoring

Calculates recommendation accuracy using genre matching.

#### 🎬 Movie Posters

Displays attractive movie posters for each recommendation.

#### 📖 Recommendation Explanation

Shows genres responsible for each recommendation.

#### 🎨 Netflix-Inspired UI

Clean and modern streaming-platform-inspired design.

⚡ Interactive Experience

Hover effects and responsive movie cards.

---

## 🧠 Recommendation Logic

The recommendation engine compares user-selected genres with movie genres and calculates a similarity score.

Workflow

1. User selects genres.
2. Movie genres are compared with selected genres.
3. Matching genres are counted.
4. Similarity score is calculated.
5. Movies are ranked according to score.
6. Highest-ranked movie is displayed as Best Match.

### Formula

#### Match Score (%) =

#### (Number of Matched Genres / Number of Selected Genres) × 100

---

## 🛠️ Tech Stack

- React.js
- Vite
- JavaScript (ES6+)
- CSS3
- Git
- GitHub

---

## 📂 Project Structure

```text
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
├── README.md
├── package.json
└── vite.config.js

```
---

## 📸 Screenshots

#### 🏠 Home Page
<img src="screenshots/HomePage.png" width="900">

#### 🎯 Genre Selection
<img src="screenshots/Genre Selected.png" width="900">

#### 🎬 Recommendations
<img src="screenshots/Recommendations shown.png" width="900">

##### 🏆 Best Match Badge
<img src="screenshots/Best Match Badge.png" width="900">

#### 🔍 Search Functionality
<img src="screenshots/Search working.png" width="900">

---

## 🚀 Installation

### Clone Repository

git clone https://github.com/aasthaaa13/Netflix-Movie-Recommendation-System.git

### Navigate to Project

cd netflix-ai-recommender

### Install Dependencies

npm install

Run Development Server

npm run dev

---

## 🔮 Future Enhancements

- TMDB API Integration
- User Authentication
- Watchlist Feature
- Favorite Movies Section
- Advanced Recommendation Algorithms
- Rating-Based Filtering
- Personalized User Profiles
- Dark/Light Theme Toggle

---

## ⭐ Acknowledgements
This project was completed as part of the Artificial Intelligence Industrial Training by **DecodeLabs** and focuses on developing foundational machine learning skills through practical implementation.

Developed as an academic and internship-focused project to demonstrate recommendation system concepts, React development, and modern frontend engineering.

Project Type: AI Movie Recommendation System

Technology: React + Vite

Domain: Recommendation Systems

---

## 🎬 More Than Just Recommendations...
> But more than just code and algorithms, this project is about discovery.
> It's that feeling of finding the perfect movie on a quiet evening, uncovering a hidden gem you never knew existed, or stumbling upon a story that stays with you long after the credits roll.
> Because sometimes, the right recommendation becomes your next favorite memory.
> "Every great movie deserves its audience. Every viewer deserves the right movie."

> Built with ❤️ for movie lovers everywhere!
