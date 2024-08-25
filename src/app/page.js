'use client'
import Navbar from "../Components/Navbar/index";
import Hero from "../Components/Hero/index"
import Categories from "../Components/Categories/index";
import Explore from "../Components/Explore/index"
import Footer from "../Components/Footer/index";
import About from "../Components/About/index";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Explore />
      <About />
      <Footer />
    </>
  );
}
