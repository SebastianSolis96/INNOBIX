import { AppRouter } from './routes/AppRouter';

const App = () => {

  localStorage.setItem('favorites', []);

  return (
    <AppRouter />
  );
}

export default App;
