import React, {useState} from "react";
import axios from "axios";

export default function Dictionary(){
const[keyword,setKeyword]=useState(null);

    function search(event){
        //documentation:https://dictionaryapi.dev/
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

        event.preventDefault()    

        axios.get(apiUrl).then(handleResponse);
        
    }

    function handleResponse(response){
        console.log(response.data);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }

    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
        </form>
    </div>
    )
}