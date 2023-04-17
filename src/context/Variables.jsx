import React from 'react';
import { useState } from "react";

const Variables = React.createContext();

const Provider = ({children}) => {

    const [seleccionado, setSeleccionado] = useState('DashBoard');

    return ( 
        <Variables.Provider value={{seleccionado, setSeleccionado}}>
            {children}
        </Variables.Provider>
    );
}

export {Variables, Provider}