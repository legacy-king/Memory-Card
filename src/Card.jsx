function Card ({ pokemon, onClick }) {
 return (
    <div className="card" onClick={() => onClick(pokemon.name)}>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>{pokemon.name}</p>
    </div>
 );
}

export default Card;