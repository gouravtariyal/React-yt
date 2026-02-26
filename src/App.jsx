import React from 'react'
import Card from './components/card';
import './App.css';
const App = () => {
 
  return (
    <div className='parent'>
      <h1><Card user='Sourav' age={21}/></h1>
          <h1><Card user='Gourav' age={27}/></h1>

    </div>
  )
}

export default App
