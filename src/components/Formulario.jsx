import React from 'react';
import { useForm } from 'react-hook-form';
import { useLanguage } from './../LanguageContext'; 



const Formulario = ({ tipo }) => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { language } = useLanguage();

    const onSubmit = ( data ) => {
        console.log( data );
        console.log('sahjdashjd')
    }
  
    return (
  
        <>
        
            <h2> { language ? 'Sign up' : 'Registro' } </h2>


            <form className={ tipo } onSubmit={ handleSubmit( onSubmit ) }>


                {/* Name */}
                <div className='box-input'>

                    <label> { language ? 'First name' : 'Nombres completos' } </label>

                    <input
                        id="name"
                        type="text"
                        name="name"
                        { ...register('name', { required: true }) } />

                    {
                        errors.name?.type === 'required' &&
                        <span className="error"> { language ? 'The name is required' : 'El nombre es requerido' }</span>
                    }

                </div>


                {/* Lastname */}
                <div className='box-input'>
                    
                    <label> { language ? 'Last name' : 'Apellidos completos' } </label>

                    <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        { ...register('lastname', { required: true }) } />

                    {
                        errors.lastname?.type === 'required' &&
                        <span className="error"> { language ? 'Lastname is required' : 'El apellido es requerido' } </span>
                    }

                </div>


                {/* Phone */}
                <div className='box-input'>
                    
                    <label> { language ? 'Phone number' : 'Teléfono' } </label>
                    
                    <input
                        id="phone"
                        type="text"
                        name="phone"
                        { ...register('phone', { required: true }) } />
                    
                    { 
                        errors.phone?.type === 'required' &&
                        <span className="error"> { language ? 'Telephone is required' : 'El teléfono es requerido' } </span>
                    }
                
                </div>


                {/* Email */}
                <div className='box-input'>
                    
                    <label> { language ? 'Email' : 'Correo' } </label>
                    
                    <input
                        id="email"
                        type="email"
                        name="email"
                        { ...register('email', { required: true }) } />
                    
                    {
                        errors.email?.type === 'required' &&
                        <span className="error"> { language ? 'Email is required' : 'El correo es requerido' }</span>
                    }
                
                </div>


                {/* File */}
                { tipo === 'postular' &&
                    <div className='box-input'>
                        <label> { language ? 'Upload' : 'Subir' } </label>
                        <input
                            id="file"
                            type="file"
                            name="file"
                            className='p-0'
                            { ...register('file') } />
                    </div>
                }


                <button className="btn-link" type='submit'> { language ? 'Send' : 'Enviar' } </button>


            </form>

        </>

    )

}



export default Formulario;
