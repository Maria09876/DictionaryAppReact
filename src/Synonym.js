import React from "react";

export default function Synonym(props){
    if(props.synonyms){
        return (
            <ul>
                {props.synonyms.map(function(synonym , index){
                    return (
                    <li key={index}>
                        {synonym}
                    </li>)
                })}
            </ul>
        )
    } else{
        return null;
    }
}