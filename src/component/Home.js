import React from "react";
import About from "./About";
import Contact from "./Contect";
import Content from "./Content";
import Footer from "./Footer";
import Front from "./Front";
import Navbar from "./Navbar";
import OurTeam from "./OurTeam";
import Portfolio from "./Portfolio";
import Services from "./Services";
import SomeAbout from "./SomeAbout";
import CardsScroll from './CardsScroll';

const Home = () => {
    return(
<>
    <Navbar/>
    <Front/>
    <Services/> 
    <About/>
    <SomeAbout/>
    <OurTeam/>
    <CardsScroll/>
    <Content/>
    <Portfolio/>
    <Contact/>
    <Footer/> 
</>
)}
export default Home ;