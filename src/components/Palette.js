import React from 'react';
import './Palette.css';

const Color = ({color, id, onClick, selected}) => {
    return (
        <div
            className={`square ${selected && 'selected'}`}
            style={{background: color}}
            onClick={() => onClick(id)} >
        </div>
    )
};

const Palette = ({colors, onClick, selectedIndex}) => {
    const palette = colors.map((color, index )=> {
        return <Color
            id={index}
            key={index}
            color={color}
            onClick={onClick}
            selected={selectedIndex===index && 'active'}/>
    });
    return (<div className="palette"> {palette} </div>);
};

export default Palette;