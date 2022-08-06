import React from 'react'
import PropTypes from 'prop-types';
import css from 'components/Button/Button.module.css'


const Button = ({onClick}) => {
    
    return (
        <button type='button' className={css.button} onClick={onClick}>Load more</button>
    )
};

export default Button;

Button.propTypes = {
    onClick: PropTypes.func.isRequired,    
};