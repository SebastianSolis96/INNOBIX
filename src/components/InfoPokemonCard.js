import React from 'react'

export const InfoPokemonCard = ({ data, title, item }) => {

    return (
        <div className='info-pokemon-container'>
            {/* <p>ABILITIES:</p> */}
            <p>{ title }</p>
            <ul>
                {item === 'abilities' 
                    ?   data[item].map( ({ability}) => 
                            <li key={ability.name}>{ ability.name.toUpperCase() }</li>
                        )
                    :   item === 'moves' 
                            ?   data[item].map( ({move}) => 
                                    <li key={move.name}>{ move.name.toUpperCase() }</li>
                                )
                            :   data[item].map( ability => 
                                    <li key={ability.name}>{ ability.name.toUpperCase() }</li>
                                )
                }
            </ul>   
        </div>
    )
}
