import React from "react";
import BookList from "../../Components/BookList/BookList";
import Description from "../../Components/Description/Description";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
import './Home.css';
import Hero from "../../Components/Hero/Hero";

function Home() {
    return ( 
  <>
    <Header />
    <Hero/>
    <Outlet/>
    </>
    );
}

export default Home;