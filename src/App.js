
import './App.css';
import React,{useState, useEffect} from 'react';
import FormContacto from './Componets/Pure/FormContacto';
import ContactComp from './Componets/Pure/ContactComp';



const App = () => {
  const defaultContact = [
    { nombre: 'Lohana', email: 'Lohana@mail', conectado: true },
    { nombre: 'Benjamin', email: 'Benja@mail', conectado: false },
  ];

  const [nuevoContacto, setNuevoContacto] = useState(defaultContact);

  function changeState(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];

    tempContact[index].estado = !tempContact[index].estado;
    setNuevoContacto(tempContact);
  }

  function remove(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact.splice(index, 1);
    setNuevoContacto(tempContact);
  }

  function addContact(contacto) {
    const tempContact = [...nuevoContacto];
    tempContact.push(contacto);
    setNuevoContacto(tempContact);
  }

  return (
    <div className="App">
      <div className='col-12'>
        <div className='card'>
        {/**Card header (Title) */}
        <div className='card-header p-3 '>
            <h5>Lista de Contactos</h5>
        </div>
        {/**Card Body (Content)  */}
        <div className='card-body' data-mb-perfect-scrollbar='true' style={{position:'relative',height:'400px'}}>
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Mail</th>
                        <th scope='col'>Conexión</th>
                        
                    </tr>
                </thead>
               
                <tbody>
        {nuevoContacto.map((contacto, index) => {
          return (
            <ContactComp key={index} contacto={contacto} changeState={changeState} remove={remove} />
          );
        })}
        </tbody>
            </table>
        </div>
                       
        </div>
      </div>

      <FormContacto onAddContact={addContact}></FormContacto>
    </div>
  );
};
export default App;
