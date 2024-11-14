import { FaCircle, FaPen, FaRegCircle, FaTimes } from "react-icons/fa"
function Icons({player}){
    if(player==="circle"){
        return <FaRegCircle/>
    }
    else if(player==="cross"){
        return <FaTimes/>
    }
    else{
        return <FaPen/>
    }
}
export default Icons