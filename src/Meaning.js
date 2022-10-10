import React from "react";
import Synonym from "./Synonym";
import "./Meaning.css";

export default function Meaning(props){
    return (
        <div className="Meaning">
            
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition , index){
                return (
                    <div key={index}> 
                    <div className="Definitions">
                        {definition.definition}
                    </div>
                    <div className="Examples">
                       {definition.example} 
                    </div>
                        <Synonym synonyms={definition.synonyms}/>
                    
                    </div>
                );
            })}
            
          </div>  
    )
}