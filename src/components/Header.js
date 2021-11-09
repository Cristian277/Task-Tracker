
//Type in RAFCE to create basic layout
//title coming from app.js 
import Proptypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className ='header'>
            <h1>{title}</h1>

            <Button color = {showAdd?'red':'green'} 
            text={showAdd?'Close':'Add'} 
            onClick = {onAdd}>
            </Button>

        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
//need comma at the end
Header.propTypes = {
    title: Proptypes.string.isRequired,
}

//CSS IN JS
//const headingStyle = {
    //color:'red',
    //backgroundColor: 'black',
//}

export default Header
