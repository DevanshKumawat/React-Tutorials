import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {}
})

export const ThemeProvider = ThemeContext.Provider


//Using this we maded our custom hook so now we dont have to import useContext in every file our work is done through by importing ThemeContext
export default function useTheme() {
    return useContext(ThemeContext)
}