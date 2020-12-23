import React from "react";
import HomeHeader from "./HomeHeader";

//import logo from './logo.svg';
//import './App.css';
import BootstrapCarousel from '../Cmp-Slider/HomeSlider'
import HomeNavbar from '../Cmp-Navbar/HomeNavbar';
import  HomeCards  from "../Cmp-Cards/HomeCards";
import Footer from "../Cmp-Footer/Footer";


const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeNavbar />
      
      <div className="App">
        <BootstrapCarousel />
      </div>
      <HomeCards/>
      <Footer/>

    </div>
  );
};
export default Home;