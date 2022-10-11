import logo from './logo.png';
import Dictionary from './Dictionary.js'

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
        <div className="logo-title">
        <img src={logo} className="App-logo img-fluid rounded float-left" alt="logo"></img>
        <span className="title"><em>Online Dictionary</em></span>
        </div>
        </header>
        <main> <Dictionary defaultKeyword="cloud"/> </main>
        <footer>
          <small> 
            Coded by <a href="https://www.mariaefthymiou.com/about-me.html" target="_blank" rel="noreferrer">Maria Efthymiou</a> within the framework of <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">SheCodes</a> Workshops. 
            This project is <a href="https://github.com/Maria09876/DictionaryAppReact" target="_blank" rel="noreferrer">open sourced on Github</a> and hosted on <a href="https://statuesque-crostata-7a3a03.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>.
          </small>
        </footer>
      </div>
    </div>
  );
}


