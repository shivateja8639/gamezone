import { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  const [searchText, setSearchText] = useState('');
  const [theme, setTheme] = useState('dark')
  useEffect(()=>{
    setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
  },[])
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={`${theme}
    ${theme == 'dark' ? 'bg-[#121212]' : null} min-h-[100vh]`}>
        <Header onSearch={(searchText) => setSearchText(searchText)}/>
        <Home searchText={searchText} />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
