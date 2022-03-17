import { AiFillPlayCircle,AiFillPauseCircle } from "react-icons/ai"

export default function ButtonOnOff({setAutoRep,autoRep}){

    return(

        <button 
            className='ButtonONOFF' 
            onClick={ () => setAutoRep(!autoRep) }>
            {!autoRep?AiFillPlayCircle({size:45,color:"white"}):AiFillPauseCircle({size:45,color:"white"})}
        </button>
        
    )
}