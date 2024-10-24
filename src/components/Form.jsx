import React, { useState } from "react";
import Message from "./Message";

const Form = ({selected}) => {

    const [customer, setCustomer] = useState({
        nombre : "",
        email: "",
        flag: false,
        edad: 0,
        promocion: "",
    })

    const [show, setShow] = useState(false);
    const [error, setError] = useState("");

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    /*Evento dinamico de Submit, envio de formulario*/
    const handleSubmit = (e) => {
        e.preventDefault();
        //Aqui van validaciones de campos
       
        if (!(customer.edad > 0)) {
          setError("La edad no es válida.");
          setShow(false);
          return;
        }
    
        if (customer.nombre.trim().length < 3) {
          setError("El nombre debe tener al menos 3 caracteres");
          setShow(false);
          return;
        }
    
        if (!emailRegex.test(customer.email)) {
          setError("El correo electrónico no es válido.");
          setShow(false);
          return;
        }
    
        if (customer.promocion === "") {
          setError("Debes seleccionar una promoción.");
          setShow(false);
          return;
        }      

        // Si todo está bien
        setError(""); // Resetea el error
        setShow(true);
        setCustomer({ ...customer, flag: true });
      };
    
      /*Evento Dinamico de escucha */
    const handleChange = (e) => {
        e.preventDefault();
        setCustomer({...customer, [e.target.name]: e.target.value});
        
    }

  return (
    <>
    {customer.flag ? ( <Message recipe={customer} />) 
    :
      (
        <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text"  name="nombre" value={customer.nombre} onChange={handleChange}/>
        <label>Email: </label>
        <input type="email"  name="email" value={customer.email} onChange={handleChange}/>
        <label>Edad: </label>
        <input type="number"  name="edad" value={customer.edad} onChange={handleChange}/>
        <label>Promocion: </label>
        <select name="promocion" value={customer.promocion} onChange={handleChange}>
          <option value="">Selecciona una promocion</option>
          <option value="2x1">2x1</option>
          <option value="comida">Comida gratis</option>
          <option value="baños">Baños limpios</option>
          <option value="VIP">vip</option>
        </select>
        <button >Comprar entrada de {selected.artista}</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
      )
    }
    
    </>
    
  );
};

export default Form;
