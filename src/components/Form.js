import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress, color}) => {
    console.log('value: ' + value);
    return(
        <div className="form">
            <input style={{color: color}} value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                Add
            </div>
        </div>
    );
};

export default Form;