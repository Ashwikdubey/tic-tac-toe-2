import { useState } from "react"
import Card from "../Cards/Card"
import "./grid.css"
import Winner from "../../helpers/isWinner"

function Grid({numberOfCards}){
    const [board,setBoard]=useState(Array(numberOfCards).fill(""))
    const[turn,setTurn]=useState(true)
    const[winner,setWinner]=useState(null)

    function handleClick(index){
        board[index]=turn?"cross":"circle"
        setBoard([...board])
        setTurn(!turn)
        const win=Winner(board,board[index])
        setWinner(win)
    }
    const gameEnd=winner?true:false
    function reset(){
        setBoard(Array(numberOfCards).fill(""))
        setTurn(true)
        setWinner(null)
    }
    return (
        <>
        {
            winner&&
            <>
             <h1 className="turn-highlight">Winner is {winner}</h1>
             <button className="reset" onClick={reset}>Reset</button>
            </>
        }
        <h1 className="turn-highlight">Current turn:{turn?"cross":"circle"}</h1>
        <div className="grid">
        {board.map((elem,idx)=>
            <Card onclickHandler={handleClick} isgameEnd={gameEnd} player={elem} index={idx}/>
        )}
        </div>
        </>
    )
}
export default Grid