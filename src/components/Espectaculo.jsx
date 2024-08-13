const Espectaculo = ({recipe,setSelected}) => {
  return (
   <div>
    <img src={recipe.img} alt="" />
    <h2>{recipe.artista}</h2>
    <h3>{recipe.precio}</h3>
    <h4>{recipe.fecha}</h4>
    <button onClick={()=> setSelected(recipe)}>Comprar</button>
    
   </div>
  )
}

export default Espectaculo;
