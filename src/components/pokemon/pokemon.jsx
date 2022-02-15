
/* On est pas obligé de garder les noms de l'api */
const Pokemon = ({ name, legendary, habitat, captureRate, flavorText }) => {


    return (
        <div>
            <h1>{name}</h1>
            {legendary && (

                <p>✨ Pokemon legendaire ✨</p>
            )}

            <p>{habitat}</p>
            <p>{captureRate}</p>

            <p>{flavorText}</p>
        </div>
    );
};

export default Pokemon;