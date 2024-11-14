import Icons from "../icons/Icons"
import "./Card.css"

function Card({player,onclickHandler,index,isgameEnd}){
    return (
        <>
        <div className="card" onClick={()=>{!isgameEnd&&onclickHandler(index)}}>
            <Icons player={player}/>
        </div>
        </>
    )
}
export default Card