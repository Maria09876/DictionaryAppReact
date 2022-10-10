import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"; 

export default function Dictionary(props){
const[keyword,setKeyword]=useState(props.defaultKeyword);
const[results, setResults]=useState(null);
const[loaded, setLoaded]=useState(false)


    function search(){
        //documentation:https://dictionaryapi.dev/
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
   }

    function handleSubmit(event){
        event.preventDefault()
        search();
        
    }

    function load(){
       setLoaded(true);
       search();
    }

    function handleResponse(response){
        setResults(response.data[0]);
        console.log(response.data[0]);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }
if (loaded){
    return (
    <div className="Dictionary">
        <section>
            <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
        </form>
        <div className="hint">Suggested words: sea, coffee, breeze, nature...</div>
        </section>
        <Results results={results}/>
        
    </div>
    )
} else {
    load()
}
    
}