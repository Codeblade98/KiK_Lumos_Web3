import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const[data, SetData] = useState(0); //data is the variable and SetData is the functionthat works on data
  try{
    async function getQuote() {
      await fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then((quote)=> {
          SetData(quote);
        })
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className='Hello'>
            <h1 className="Title">Random Quote Generator</h1>
            <h3 className="Quote">Quote:{data.quote}</h3>
            <h3 className="Author">Author:{data.author}</h3>
            <button onClick={getQuote}>Get Quote</button>
          </div>
        </header>
      </div>
    );
  }
  catch(e){
    console.log(e)
  }
}

export default App;
