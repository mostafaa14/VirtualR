import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import Workflow from "./Components/Workflow/Workflow";
import Pricing from "./Components/Pricing/Pricing";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div className=" max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features/>
        <Workflow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  );
}
