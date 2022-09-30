import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { fetchHelper } from '../helpers/fetch';

const PokemonCard = ({ pokemon }) => {

    const endpoint = pokemon.url.replace( 'https://pokeapi.co/api/v2/pokemon', '' );

    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        fetchHelper( endpoint ).then( resp => {
            resp.json().then( getData => {
                setData( getData );
                setLoading( false );
            });
        });
    }, [endpoint])

    const handleClick = (id, img) => {
        navigate(`/pokemon/${id}?q=${img}`);
    }

    return (
        <div 
            className='card'
            onClick={ () => { handleClick( pokemon.name, data.sprites.front_default ) } }
        >
            <h1>{ pokemon.name.toUpperCase() }</h1>

            {loading 
                ?   <div>-</div>
                :   <img src={ data.sprites.front_default } alt={ pokemon.name } ></img>
            }
            
        </div>
    )
}

export default PokemonCard