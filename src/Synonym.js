import React from "react";
import "./Synonym.css";

export default function Synonym(props){
    if(props.synonyms){
        return (
            <div className="Synonym">
            <ul>
                {props.synonyms.map(function(synonym , index){
                    return (
                    <li key={index}>
                        {synonym}
                    </li>)
                })}
            </ul>
            </div>
        )
    } else{
        return null;
    }
}