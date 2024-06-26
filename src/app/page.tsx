// pages/index.tsx
"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import EventsText from "./components/EventsText";
import Events from "../../pages/Events";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Slider />
      <AboutUs />
      <Services />
      <Doctors />
      <EventsText />
      <Events />
      <Accordion />
      <Footer />
    </main>
  );
}
