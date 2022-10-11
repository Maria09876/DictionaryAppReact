import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css"

export default function Phonetics(props){
 
    if (props.phonetics.audio){
         return (
        <div className="Phonetics">
            <h4>
            {props.phonetics.text}
            </h4>
            <div className="Phonetic">
            <ReactAudioPlayer 
            src={props.phonetics.audio}
            autoPlay={false}
            controls={true} />
            </div>
        </div>
    )
    } else {
        return null;
    }
   ;

}