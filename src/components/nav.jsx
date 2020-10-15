import React from 'react';
import Link from 'gatsby-link';

const NavBar = () => {

    return (
        <>
        <Link to="/">Home</Link>
        <br />
        <Link to="/services">services</Link>
        <br />
        <Link to="/page-2">page-2</Link>
        </>
    );
}

export default NavBar;