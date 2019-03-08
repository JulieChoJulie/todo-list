import React from 'react';
import './Palette.css';

const Color = ({color, id, onClick}) => {
    return (
        <div
            className="square"
            style={{background: color}}
            onClick={() => onClick(id)}
        >
        </div>
    )
};

const Palette = ({colors, onClick}) => {
    const palette = colors.map((color, index )=> {
        return <Color
            id={index}
            key={index}
            color={color}
            onClick={onClick} />
    });
    return (<div className="palette"> {palette} </div>);
};

export default Palette;