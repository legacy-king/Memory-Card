import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import './styles/CardGrid.css';

function CardGrid({score, setScore, bestScore, setBestScore}) {
const [pokemonsList, setPokemonsList] = useState([]);
const [clickedCards, setClickedCards] = useState([]);
const resetGame = () => {
    setScore(0);
    setClickedCards([]);
    setPokemonsList(shuffleArray(pokemonsList));
}
const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

const handleCardClick = (pokemon) => {
    if (clickedCards.includes(pokemon)) {
        resetGame();
    } else {
        const newScore = score + 1;
        setScore(newScore);
        if (newScore > bestScore) {
            setBestScore(newScore);
        }
        setClickedCards([...clickedCards, pokemon]);
        setPokemonsList(shuffleArray(pokemonsList));
    }
}

const getImageUrl = (url) => {
    const id = url.split('/').filter(Boolean).pop();
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
    .then(res => res.json())
    .then(data => {
        setPokemonsList(data.results);
    });
}, []);

return (
    <div className="card-grid">
        {pokemonsList.map((pokemon) => (
            <Card 
            key={pokemon.name} 
            pokemon={{...pokemon, image: getImageUrl(pokemon.url)}} 
            onClick={handleCardClick} 
            />
        ))}
    </div>
)
}

export default CardGrid;