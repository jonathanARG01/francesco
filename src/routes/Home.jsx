import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './../LanguageContext';



const Home = () => {
  

    const { language, toggleLanguage } = useLanguage();


    return (
    
        <>
        
            <section id='home'>

                <div className="bgColor1">
                    <img className="logo" src="logo.svg" alt="logo" />
                    <h6> { language ? 'Be part of our trial run VIP List' : 'Se parte de nuestra lista vip de la marcha blanca' } </h6>
                    <Link to={"/registro"} className="btn-link color1"> { language ? 'Sign up' : 'Registro' } </Link>
                </div>

                <div className="bgColor2">
                    <h6> { language ? 'Be part of a new gastronomic journey' : 'Se parte de una nueva travesía gastronómica' } </h6>
                    <Link to={"/postular"} className="btn-link color2"> { language ? 'Apply here' : 'Postula aquí' } </Link>
                    <button className="lenguage" onClick={ toggleLanguage }> { language ? 'Español' : 'English (US)' } </button>
                </div>

            </section>

        </>
    
    )

}



export default Home;
