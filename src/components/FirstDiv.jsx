import { useRef, useState } from "react"
import { AiFillPlayCircle } from "react-icons/ai"


export default function FirstDiv({setflag,audioRef,setAutoRep}){

  const [clossButton,setclossButton] = useState(true)
  const firstDivRef = useRef()

  function buttonClick(){
      setAutoRep(true)
      setflag(true)
      setclossButton(false)
      firstDivRef.current.style.opacity="0"
      audioRef.current.play()
  }

  return (
    <div className='first' ref={firstDivRef}>
      
      {clossButton &&
      <>
        <h1 style={{color:"rgba(222,47,106)"}}>Love Story</h1>
        <button 
          className='ButtonONOFF' 
          onClick={buttonClick}
        >
          
          {AiFillPlayCircle({size:300,color:"rgba(28,47,106, 0.619)"})}
          
        </button>
      </>
      }
    
    </div>
  )
}