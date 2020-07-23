import React, { Component } from 'react';
import './styles.css';

let dialogStyles = {
  width: '500px',
  maxWiidth: '100%',
  margin: '0 auto',
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '999',
  backgroundColor: '#eee',
  padding: '10px 20px 40px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column'
};

let dialogClosedButtonStyles = {
  marginBottom: '15px',
  padding: '3px 8px',
  cursor: 'pointer',
  borderRadius: '50%',
  border: 'none',
  width: '30px',
  height: '30px',
  fontWeight: 'bold',
  alignSelf: 'flex-end'
};

class Dialog extends Component {
  render() {
    let dialog = (
      <div style={dialogStyles}>
        <button style={dialogClosedButtonStyles} onClick={this.props.onClose}>x</button>
        <div>{this.props.children}</div>
      </div>

    );

    if ( !this.props.isOpen ) {
      dialog = null;
    }

    return (
      <div>
        {dialog}
      </div>
    );
  }
}

export default Dialog;