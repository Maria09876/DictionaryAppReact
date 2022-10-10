import logo from './logo.png';
import Dictionary from './Dictionary.js'

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"></img>
        </header>
        <main> <Dictionary defaultKeyword="cloud"/> </main>
        <footer><small> Coded by Maria Efthymiou within the framework of SheCodes Workshops. This project is open sourced on Github and hosted on Netlify.</small></footer>
      </div>
    </div>
  );
}


