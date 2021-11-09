
import PropTypes from 'prop-types'
//We are receiving color and text from header.js and setting them with {}
const Button = ({color,text,onClick}) => {
    //onClick function outputs click to the console

    //onClick function called on this button
    return (
        <button 
        onClick = {onClick} 
        style = {{backgroundColor: color}} 
        className = 'btn'>
        {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
