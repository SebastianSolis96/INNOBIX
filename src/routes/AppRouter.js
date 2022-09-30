import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AllPokemonsScreen } from '../components/AllPokemonsScreen';
import { PokemonScreen } from '../components/PokemonScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllPokemonsScreen />} />

                <Route path="pokemon/:pokemonId" element={<PokemonScreen />} />

                <Route path="/*" element={<AllPokemonsScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
