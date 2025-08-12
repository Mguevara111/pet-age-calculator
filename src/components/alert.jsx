import React from "react";

export function Alert({msg}){

    const alertcolor={
        color:'red'
    }

    return(
        <span style={alertcolor}>{msg}</span>
    );
}