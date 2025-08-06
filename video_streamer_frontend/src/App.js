import React, { useState, useEffect } from "react";
import "./App.css";
import "./global.css";
import "./design-system.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FilterBar from "./components/FilterBar";
import VideoCard from "./components/VideoCard";
import VideoCardSkeleton from "./components/VideoCardSkeleton";
import Footer from "./components/Footer";

// Example static video data (use API integration for real app)
const MOCK_VIDEOS = [
  {
    thumbnail: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=compress&w=500",
    duration: "3:15",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=compress&w=64",
    title: "Ma première fois au ski",
    channel: "MichelVar",
    verified: true,
    views: "1 M de vues",
    date: "il y a 15 jours",
    live: true,
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=compress&w=500",
    duration: "3:15",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=compress&w=64",
    title: "Behind the moon",
    channel: "Jane Cooper",
    verified: false,
    views: "1 M de vues",
    date: "il y a 15 jours",
    live: false,
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=compress&w=500",
    duration: "3:15",
    avatar: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=compress&w=64",
    title: "Top 10 cities of the world",
    channel: "Leslie Alexander",
    verified: true,
    views: "1 M de vues",
    date: "il y a 15 jours",
    live: false,
  },
];

function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // -- show skeletons during loading (replace with state management async in real app)
  return (
    <div className="App" style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <main className="main-content" style={{ flex: 1 }}>
          <FilterBar />
          <div className="feed">
            <div className="feed-row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
              {loading
                ? Array(8).fill(0).map((_, i) => <VideoCardSkeleton key={i} />)
                : MOCK_VIDEOS.map((video, i) => <VideoCard key={i} {...video} />)
              }
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
