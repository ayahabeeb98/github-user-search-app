import React, {useState} from 'react';
import moon from '../assets/icon-moon.svg';
import sun from '../assets/icon-sun.svg';

const INITIAL_THEME = {hint: 'dark', icon: moon};
const CHECK_THEME = document.body.classList;

export default function Header() {
    const [toggleTheme, setToggle] = useState(INITIAL_THEME)

    function handleToggle() {
        if (CHECK_THEME.contains('dark-theme')) {
            CHECK_THEME.remove('dark-theme')
            setToggle(INITIAL_THEME)
        } else {
            CHECK_THEME.add('dark-theme')
            setToggle({hint: 'light', icon: sun})

        }
    }

    return (
        <header className="pageHeader container">
            <h1>devfinder</h1>
            <button onClick={handleToggle} className="toggleIcon">
                <span>{toggleTheme.hint}</span>
                <img src={toggleTheme.icon} alt=""/>
            </button>
        </header>
    )
}