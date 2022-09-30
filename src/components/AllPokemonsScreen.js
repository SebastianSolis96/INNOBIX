import React, { useEffect, useState } from 'react';

import { fetchHelper } from '../helpers/fetch';

import './Pokemon.css';
import PokemonCard from './PokemonCard';

const endpoint = '?limit=10&offset=0';

export const AllPokemonsScreen = () => {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetchHelper( endpoint ).then( resp => {
            resp.json().then( getData => {
                setData( getData );
                setLoading( false );
            });
        });

    }, [])

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
                <div className='card-container'>
                    {data.results?.map( pokemon => 
                        <PokemonCard 
                            key={ pokemon.name }
                            pokemon={ pokemon } 
                        />
                    )}
                </div>
            </header>
        </div>
    );
}
