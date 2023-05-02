import './css/navbar.scss';
import { NavLink } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import Logo from './Logo.jsx'

function fontAwesome(value, className) {
    return <FontAwesomeIcon className={className} icon={value} />
}

function NavBar() {
    const [navbarStatus, setNavbarStatus] = useState('');
    function showMobileNavBar() {
        if (window.innerWidth < 800) {
            if (navbarStatus !== 'flex') {
                setNavbarStatus('flex')
            } else {
                setNavbarStatus('')
            }
        }
    }

    return (        
        <div className='NavBarWrapper'>
            <div className='MenuShowHideBtn'
                onClick={() => showMobileNavBar()}
            >
                {fontAwesome(faBars)}
            </div>
            <div className='NavBar' style={{ display: navbarStatus }}>
                <Logo />
                <div className='MenuShowHideBtn' onClick={() => showMobileNavBar()} >
                    {fontAwesome(faBars)}
                </div>
                <div className='navBarLinksWrapper'>
                    <NavLink
                        to={`${process.env.PUBLIC_URL}/`} onClick={() => { showMobileNavBar(); window.scrollTo(0, 0); }} >
                        HOME
                    </NavLink>
                    <NavLink
                    to={`${process.env.PUBLIC_URL}/about`} onClick={() => { showMobileNavBar(); window.scrollTo(0, 0); }}> ABOUT
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar;