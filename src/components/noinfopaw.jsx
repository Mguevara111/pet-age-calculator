import React from "react";
import shiba from '../images/cute-shiba-inu-dog.png'
import './noinfopaw.css'

export function Noinfopaw(){
    return(
        <div className="noinfo-container col-12 col-sm-12 col-md-6 col-lg-6 col-xg-6 font-xs font-sm font-md font-lg font-xl">
            <p>There's no info to show.</p>
            <img src={shiba} alt="shiba" className="noinfo-img"/>
        </div>
    );
}