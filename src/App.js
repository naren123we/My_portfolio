import React, { useState, useEffect } from "react";
import Preloader from "../src/components/preloader/Preloader";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/footer/Footer";
import Experience from "./components/Experience/experience";
import Achievements from "./components/Achievements/Achievements";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CodingProfile from "./components/codingProfile/codingProfile";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`dark app`}>
      <Router>
        {load ? (
          <Preloader load={load} />
        ) : (
          <div className="App" id={load ? "no-scroll" : "scroll"}>
            <Navbar />
            <ScrollToTop />
            <Home />
            <About />
            <CodingProfile />
            <Experience />
            <Projects />
            <Achievements />

            <Footer />
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
