
import React from 'react';

const ContactComp = ({contacto, changeState, remove}) => {

    function ConexionIcon(){
        if (contacto.estado) {
             return (<i onClick={()=>changeState(contacto)} className='bi-toggle-on task-action' style={{color:'green', fontWeight:'bold', cursor:'pointer'}}>Conectado</i>)
        }
         else{
             return (<i onClick={()=>changeState(contacto)}  className='bi-toggle-off task-action' style={{color:'red', fontWeight:'bold', cursor:'pointer'}}>Desconectado</i>)
         }
         }    
    return (
        <tr className='fw-normal'>
             <th>
             <span>{contacto.nombre}</span>
             </th>
      <td className='aling-middle'>
      <span>{contacto.email}</span>
      </td>

      <td className='aling-middle'>
        {ConexionIcon()}
        <i onClick={()=>remove(contacto)} className='bi-trash' style={{color:'black'}}></i>
      </td>
      
        </tr>
    );
}

export default ContactComp;
