import React, { useEffect } from "react";
import LocalStorage from './LocalStorage';




const DarkMode = (initialValue) => {
const [darkMode, setDarkMode] = LocalStorage("Dark Mode", initialValue);

useEffect(() => {
 if(darkMode) {
document.querySelector('body').classList.add('dark-mode')
 } else {
    document.querySelector('body').classList.remove('dark-mode')   
 }
}, [darkMode])


 return [darkMode, setDarkMode]
}

export default DarkMode;
