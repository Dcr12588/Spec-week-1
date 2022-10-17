import React from 'react';

const Square = (props) => {
    console.log(props.squares, props.players)
}

export default Square;

const handleClick = () => {
    if(!props.squareValue){
        if(props.player){
            props.squares.splice(props.index, 1, "X");
            props.setSquares(props.squares);
            props.setPlayers(props.players);
        
    } else {
        props.squares.splice(props.index, 1 , "O");
        props.setSquares(props.squares);
        props.setPlayers(props.players);
        }
    }
};
