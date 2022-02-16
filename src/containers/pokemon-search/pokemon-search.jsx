/* Va dire de contacter le pokemon.jsx si il y a un résultat de requête. Si il n'y en a pas, il fait autre chose */
/* But: quand on clic sur un bouton, il fait une requête Ajax */

import { useState } from "react";
import axios from "axios";
/* import style from "./pokemon-search.module.css" */

const PokemonSearch = () => {

    const [isLoading, setLoadind] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [pokemonData, setPokemonData] = useState(null);

    /* Lancement de la requête */
    const handleSearchPokemon = () => {

        /* Remise à zéro du state */
        /* Dès qu'on lance la méthode, on est en chargement, donc: */
        setLoadind(true);
        setErrorMsg('');
        setPokemonData(null);

        /* Envoi de la requête */
        axios.get('https://pokeapi.co/api/v2/pokemon-species/725')
            .then(response => {
                setPokemonData({
                    name: response.data.name,
                    legendary: response.data.is_legendary,
                    habitat: response.data.habitat?.name,
                    captureRate: response.data.capture_rate,
                    flavorText: 'TODO ;)'
                });
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    return (
        <main>
            <h1>Démo des requêtes AJAX</h1>
            <button onClick={handleSearchPokemon}>Rechercher un pokemon</button>
            {isLoading ? (
                <LoadingScreen />) : errorMessage ? (
                    <h2>{errorMessage}</h2>
                ) : pokemonData !== null && (
                    <Pokemon {...pokemonData} />
                )}
        </main>
    )
}

export default PokemonSearch;