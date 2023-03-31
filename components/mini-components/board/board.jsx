import { useState } from "react"
import Button from "../../micro-components/Button/button"
import Message from "../../micro-components/Message/message"


const board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isNxt, setIsNxt] = useState(true)

    const handleClick = (i) =>{
        if(squares[i] || calclateWinner(squares)) return
        const nextSquares = squares.slice()
        isNxt ? nextSquares[i] = "X" : nextSquares[i] = "O"
        setSquares(nextSquares)
        setIsNxt(!isNxt)
    }

    const winner = calclateWinner(squares)
    let status
    
    if(winner === "draw") {
        status = 'It\'s a draw!'
        setTimeout(() => {
            setSquares(Array(9).fill(null));
          }, 3000);
    }
    else if(winner) {
        status = 'Winner is: ' + winner
        setTimeout(() => {
            setSquares(Array(9).fill(null));
          }, 3000);
    }
    else status = 'Next player is: ' +  (isNxt?'X':'O')
    

    return (
        <>
            <div className="flex justify-center">
                <Button value={squares[0]} onButtonClick = {()=>handleClick(0)}/>
                <Button value={squares[1]} onButtonClick = {()=>handleClick(1)}/>
                <Button value={squares[2]} onButtonClick = {()=>handleClick(2)}/>
            </div>

            <div className="flex justify-center">
                <Button value={squares[3]} onButtonClick = {()=>handleClick(3)}/>
                <Button value={squares[4]} onButtonClick = {()=>handleClick(4)}/>
                <Button value={squares[5]} onButtonClick = {()=>handleClick(5)}/>
            </div>

            <div className="flex justify-center">
                <Button value={squares[6]} onButtonClick = {()=>handleClick(6)}/>
                <Button value={squares[7]} onButtonClick = {()=>handleClick(7)}/>
                <Button value={squares[8]} onButtonClick = {()=>handleClick(8)}/>
            </div>

            <Message propVariable={status}/>
        </>
    )
}

export default board

const calclateWinner = (squares) => {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for( let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a]
    }


    if(isBoardFull(squares)) {
        return "draw"
    }
    return null
}


const isBoardFull = (squares) => {
    return squares.every((square) => square !== null);
}



