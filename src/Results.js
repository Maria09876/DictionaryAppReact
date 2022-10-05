import React, {useState} from "react";
import Meaning from "./Meaning";


export default function Results(props){
    //goal:target audio url (<a href="#">🔉</a>), store it in a state because it constantly changes. 
    //put an event lisener to play on click. or make a component to handle it!
    //console.log(props.results.phonetics[0].audio)
    //const[audio, setAudio]=useState("")
    //const audioElement=new Audio(props.results[0].phonetics[0].audio)
    //setAudio(audioElement)
    //let audioUrl=`https://api.dictionaryapi.dev/media/pronunciations/en/${audio}.mp3`
    
    if (props.results){
        return (
            <div>
                <h2> {props.results.word} </h2>
                <h3> {props.results.phonetic} </h3>
                {props.results.meanings.map(function(meaning, index){
                    return (
                        <div key={index}> 
                        <Meaning meaning={meaning}/>
                        </div>
                    )
                })}
            </div>
        );
    } else {
        return null;
    }
      
}