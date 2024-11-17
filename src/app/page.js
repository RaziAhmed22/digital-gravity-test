import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import BoardOfDirectors from "./components/BoardOfDirectors";
import ContactForm from "./components/ContactForm";

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection/>
      <Services/>
      <BoardOfDirectors/>
      <ContactForm/>
    </main>
  );
};

export default Home;
