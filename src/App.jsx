import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import GameDetails from './Pages/GameDetails'; // <-- You will create this
import Header from './Components/Header';
import { ThemeContext } from './Context/ThemeContext';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const [searchText, setSearchText] = useState('');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : ''} min-h-screen`}>
        <BrowserRouter>
          <Header onSearch={(text) => setSearchText(text)} />
          <Routes>
            <Route path="/" element={<Home searchText={searchText} />} />
            <Route path="/game/:id" element={<GameDetails />} /> {/* NEW */}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
