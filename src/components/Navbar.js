import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        });
        return() => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`navbar ${show && "navbar__black"}`}>
            <img 
                className="navbar__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                alt="Netflix logo"
            />

            <img 
                className="navbar__avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGndWhkMy59wkA_6w4tXXBLrb3hR5ewNLeHw&usqp=CAU"
                alt="Netflix avatar"
            />
        </div>

    )
}

export default Navbar;
