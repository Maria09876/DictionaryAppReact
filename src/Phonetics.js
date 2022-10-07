import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css"

export default function Phonetics(props){
    console.log(props)
    return (
        <div className="Phonetic">
            <ReactAudioPlayer 
            src={props.phonetics.audio}
            autoPlay={false}
            controls={true}
            />
            
            <h4>
                {props.phonetics.text}
            </h4>
        </div>
    )
}