const Message = ({ nombre, email }) => {
  return (
    <div>
      <h2>Gracias, {nombre}!</h2>
      <h4>Te enviamos tu entrada a {email}.</h4>
    </div>
  );
};

export default Message;
