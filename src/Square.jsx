import './square.css'

const Square = (props) => {
    const {squares} = props
    console.log(props.squares, props.player)

    const handleClick = () => {
        if(!props.squareValue ){
            if (props.player) {
                props.squares.splice(props.index, 1, "X");
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            } else {
                props.squares.splice(props.index, 1, "O");
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            }
        }
    }
    return (
        <div className="square" onClick={handleClick}>   {props.squareValue === "O" ? "O" : props.squareValue }
            {squares}
        </div>
    );
};


export default Square;