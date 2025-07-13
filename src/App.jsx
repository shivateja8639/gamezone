import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import GameDetails from './Pages/GameDetails';
import Header from './Components/Header';
import { ThemeContext } from './Context/ThemeContext';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : ''} min-h-screen`}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

function Main() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (text) => {
    navigate(`/?search=${encodeURIComponent(text)}`);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>
    </>
  );
}

export default App;
