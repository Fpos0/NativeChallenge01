import React from 'react'
import { useContext, useState, createContext, ReactNode } from "react";

type StyleContextData = {
    darkMode: boolean;
    toggleDarkMode: () => void;
}
type StyleContextProviderProps = {
    children: ReactNode
}
export const StyleContext = createContext({} as StyleContextData)
export function StyleContextProvider({children}: StyleContextProviderProps){
    const [darkMode , setDarkMode] = useState(false)

    function toggleDarkMode() {
        const boo = !darkMode;
        setDarkMode(boo);
        console.log(darkMode);
    }
    return (
        <StyleContext.Provider
        value={{
            darkMode,
            toggleDarkMode
        }}>
            {children}
        </StyleContext.Provider>

    )
}

export const useStyleContext = () => {
    return useContext(StyleContext);
}