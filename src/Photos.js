import React from "react";
import "./Photos.css";

export default function Photos(props){
    console.log(props)
    if (props.photo){
     return (
        <section>
            <div className="row photo-display">
               {props.photo.map(function(photo, index){
                return (
                    <div key={index} className="col-4">
                    <img src={photo.src.tiny} alt="searching-word" className="photo img-fluid"/>
                    </div>
                )
            })} 
            </div>
         </section>
     )  
    } else {
        return null
    }
    
}