import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import queryString from 'query-string';

import { fetchHelper } from '../helpers/fetch';
import { InfoPokemonCard } from './InfoPokemonCard';

export const PokemonScreen = () => {

    const navigate = useNavigate();
    const { pokemonId } = useParams();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const endpoint = `/${ pokemonId }`;

    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetchHelper( endpoint ).then( resp => {
            resp.json().then( getData => {
                setData( getData );
                setLoading( false );
            });
        });
    }, [endpoint])

    const handleReturn = () => {
        navigate(`/`, {
            replace: true
        });
    }

    const handleAddToFavorites = () => {
        const oldInfo = JSON.stringify( localStorage.getItem('favorites'));

        const myObject = {
            name : pokemonId.toUpperCase(),
            url : q, 

        }

        localStorage.setItem('favorites', JSON.stringify([ ...oldInfo, myObject ]));
        
    }

    if( loading ){ 
        return (
            <div className="App">
                <header className="App-header">
                <p>Cargando...</p>
                </header>
            </div>
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>{ pokemonId.toUpperCase() }</h1>

                <img className='pokemon-img' src={ q } alt={ pokemonId } ></img>

                <button 
                    className='btn-favorites'
                    onClick={ handleAddToFavorites }
                >
                    Add to 'favorites'
                </button>

                <div className='container-info'>
                    <InfoPokemonCard data={ data } title={ 'ABILITIES:' } item={ 'abilities' } />
                    <InfoPokemonCard data={ data } title={ 'FORMS:' } item={ 'forms' } />
                    <InfoPokemonCard data={ data } title={ 'MOVES:' } item={ 'moves' } />
                </div>

                <button
                    className='btn-back'
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </header>
        </div>
    );
}
