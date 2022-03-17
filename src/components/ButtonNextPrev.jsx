import { useState,useEffect } from "react"

export default function ButtonNextPrev({activeItemPosition,setActiveItemPosition,setZise,itemsLength,autoRep}){


    const [showButtonNext,setShowButtonNext] = useState(true)
    const [showButtonPrev,setShowButtonPrev] = useState(false)
    const [flagInt,setFlagInt] = useState(true)


    function autoReplace(){

        if(autoRep){
          let clearInt
      
          if(activeItemPosition < itemsLength - 1 && flagInt){
      
            clearInt = setTimeout(()=>{
              setActiveItemPosition((prev)=>prev + 1)
              setShowButtonPrev(true)
              setZise(-0.4)
              if(activeItemPosition === itemsLength - 2 ) setShowButtonNext(false)
            },3500)
      
          }else{
      
            clearInt = setTimeout(()=>{
              setActiveItemPosition((prev)=>prev - 1)
              setShowButtonNext(true)
              setZise(0.4)
            },3500)
      
            setFlagInt(false)
          }
          if(activeItemPosition === 0){
            setFlagInt(true)
            setShowButtonPrev(false)
          }
          return clearInt
        }
    }

    useEffect(()=>{
  
      let clearInt = autoReplace()
      return () => clearTimeout(clearInt)

    })

return(
    <>
        {
            showButtonPrev && <button className='prev' onClick={()=>{

                if(activeItemPosition > 0 ){
                    setActiveItemPosition((prev) => prev - 1)
                    setShowButtonNext(true)
                    setZise(0.4)
                }
                if(activeItemPosition < 2){
                  setShowButtonPrev(!showButtonPrev)
                }

            }} >{'<'}</button>
        }

        {
            showButtonNext && <button className='next' onClick={()=>{

                if(activeItemPosition < itemsLength - 1 ){
                    setActiveItemPosition((prev)=>prev + 1)
                    setShowButtonPrev(true)
                    setZise(-0.4)
                }
                if(activeItemPosition === itemsLength-2){
                  setShowButtonNext(!showButtonNext)
                }

            }} >{'>'}</button>
        }
    </>
)
}