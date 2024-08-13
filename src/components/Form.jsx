import React, { useState } from "react";
import Message from "./Message";

const Form = ({selected}) => {

    const [customer, setCustomer] = useState({
        nombre : "",
        email: "",
        flag: false,
    })

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    /*Evento dinamico de Submit, envio de formulario*/
    const handleSubmit = (e) => {
        e.preventDefault();
        //Aqui van validaciones de campos
        setCustomer({...customer, flag : true });
        console.table(customer);
    }

    /*Evento Dinamico de escucha */
    const handleChange = (e) => {
        e.preventDefault();
        // console.table(e.target)
        //Recibe el identificador del tag
        console.log('clave',e.target.name);
        //Recibe el valor del identificador del tag
        console.log('valor',e.target.value);
        //Aqui van validaciones de campos
        setCustomer({...customer, [e.target.name]: e.target.value});
        
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label >Nombre: </label>
        <input type="text"  name="nombre" value={customer.nombre} onChange={handleChange}/>
        <label >Email: </label>
        <input type="email"  name="email" value={customer.email} onChange={handleChange}/>
        <button >Comprar entrada de {selected.artista}</button>
      </form>

      {customer.flag && <Message nombre={customer.nombre} email={customer.email} /> }
    </div>
  );
};

export default Form;
