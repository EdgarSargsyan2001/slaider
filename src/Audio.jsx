import { useEffect } from "react"

export default function Audio({audioRef,autoRep}){

    useEffect(()=>{

        audioRef.current.style.display=`${autoRep?"block":"none"}`
        autoRep ? audioRef.current.play() : audioRef.current.pause()
        
    },[autoRep])

    return(
        <audio 
            src='../audio/fly.mp3'  
            className='audio'
            ref={audioRef} 
            controls 
            autoPlay
            loop
        />
    )
}