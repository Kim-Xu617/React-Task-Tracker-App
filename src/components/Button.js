import React from 'react'
import PropTypes from 'prop-types'

const Button = ({onclick, text, color}) => {

    const btnStyle ={
        backgroundColor: color,
        color: "white"
    }
    return (
        <button
            style={btnStyle}
            className = "btn"
            onClick = {onclick}
        >
            {text}
        </button>
    )
}
Button.defaultProps = {
    text : "Button"
}
Button.propTypes = {
    text : PropTypes.string,
    color : PropTypes.string,
}
export default Button