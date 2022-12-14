import React, { Component } from 'react'
import PropTypes from 'prop-types';
import css from 'components/Modal/Modal.module.css'


class Modal extends Component {
    
    static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired
}
   
  
    componentDidMount() {
            window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    
    handleKeyDown = event => {
    if (event.code === 'Escape') {   
            this.props.onClose();
        }
    }

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }



    render() {     

        const {largeImage} = this.props

        return (      
        <div className={css.overlay} onClick={this.handleBackdropClick}>
                <div >
                <img className={css.modal} src={largeImage} alt="" />    
            </div>
        </div>
        );
    }
}

export default Modal;

