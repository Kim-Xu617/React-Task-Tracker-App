import React from 'react';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <p>Copyright &copy;</p>
            <p>Link to <Link to="/detail">detail</Link> </p>
        </footer>
    );
}

export default Footer;