import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Service from '../components/Service';
import Project from '../components/Project';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Hero/>            
            <About/>
            <Service/>
            <Project/>
            <Footer/>
        </div>
    );
};

export default HomePage;