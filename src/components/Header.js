import React from 'react'
import PropTypes from 'prop-types';
import Button from "./Button";
import {useLocation} from "react-router-dom"

const Header = ({title, onSwitchAddButton,showAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            {useLocation().pathname==="/" && (<Button onclick={onSwitchAddButton}
                     text={showAdd ? "Close" : "Add"}
                     color={showAdd ? "lightgreen" : "lightblue"}/>)
            }
        </header>
    )
}
Header.defaultProps = {
    title : "Task Tracker",
}
Header.propTypes = {
    title : PropTypes.string,
}

export default Header