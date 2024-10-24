const Message = ({ recipe }) => {
  console.table(recipe);
  return (
    <div>
      <h2>Gracias, {recipe.nombre}!</h2>
      <h4>Te enviamos tu entrada a {recipe.email} tu promocion es {recipe.promocion}</h4>
    </div>
  );
};

export default Message;
