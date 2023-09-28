import React from 'react';
import Formulario from './../components/Formulario';
import { Link } from 'react-router-dom';
import { useLanguage } from './../LanguageContext'; 



const Postular = () => {

    const { language } = useLanguage();
  
    return (
  
        <>
        
            <section className="page-form bgColor2">
                <Link to={"/"} className="btn-back">
                    <img src="volver.png" alt="volver" />
                    <span>{ language ? 'Return' : 'Volver' }</span>
                </Link>
                <Formulario tipo={ 'postular' } />
            </section>

        </>
    
    )

}



export default Postular;
