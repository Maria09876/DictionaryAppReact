import React from "react";
import Synonym from "./Synonym";

export default function Meaning(props){
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition , index){
                return (
                    <div key={index}> 
                    <p>
                        {definition.definition}
                        <br/>
                        <em>{definition.example}</em>
                        <Synonym synonyms={definition.synonyms}/>
                    </p>
                    </div>
                );
            })}
          </div>  
    )
}