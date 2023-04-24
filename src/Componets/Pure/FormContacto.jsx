import React, {useRef} from 'react';

const FormContacto = ( {AddContacto} ) => {
    const name= useRef('');
    const mail= useRef('');

    function addContacto(e) {
        e.preventDefault();

        const newContacto = {nombre: name.current.value , email: mail.current.value, conectado: true};
        AddContacto(newContacto);
        name.current.value='';
        mail.current.value=''

    }
    return (
        <form onSubmit={addContacto} className="contact-component">
        <h2>Añadir Contacto: </h2>
        <input ref={name} name="name" placeholder="Nombre contacto" className="form-control mb-2" />
        <input ref={mail} name="email" type="email" placeholder="Email contacto" />
        <button onClick={addContacto} type="submit" className="submit-button">
          Añadir
        </button>
      </form>
    );
}

export default FormContacto;
