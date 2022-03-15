import { useEffect, useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './App.css';


function App() {
  

  const [activeItemPosition,setActiveItemPosition] = useState(0)
  const [showButtonNext,setShowButtonNext] = useState(true)
  const [showButtonPrev,setShowButtonPrev] = useState(false)
  const [flagInt,setFlagInt] = useState(true)
  const [autoRep,setAutoRep] = useState(true)
  const [size,setZise] = useState(-0.4)
  const audioRef = useRef()

  
  const translateLength = activeItemPosition * ( (window.screen.width > 500)?1023:295 )


  const items = [
    
    "https://i.pinimg.com/736x/51/8f/eb/518feb311dfc20fb22da411ef3e2a60a.jpg",
    "https://cdn.pixabay.com/photo/2018/08/03/04/36/couple-3581038_960_720.jpg",
    "https://img.artpal.com/699991/14-20-12-22-8-20-22m.jpg",
    "https://i.pinimg.com/736x/a6/f5/1d/a6f51d9370e421cbf493a4c119890006.jpg",
    "https://st3.depositphotos.com/1428083/12725/i/600/depositphotos_127251668-stock-photo-lovers-in-the-moonlight.jpg",
    "https://www.hdimages.pics/images/quotes/english/general/romantic-hd-wallpapers-1080p-52650-310743-mobile.jpg",
    "https://i.pinimg.com/736x/c6/66/cf/c666cf7c7197b29b8b28c89441146f4d.jpg",
    // "https://cdn.pixabay.com/photo/2018/02/12/10/45/heart-3147976__340.jpg",
    // "https://www.jagranimages.com/images/newimg/11122019/11_12_2019-love_19834716.jpg",
    // "https://dradospiritualsolutions.com/images/blog/love-s.jpeg",
    // "https://www.unigreet.com/wp-content/uploads/2020/02/Couple-love-dp.jpg",
 
  
  ]
  

  function nextClick(){
    
    // console.log(audioRef.current.audioEl.current.style.display="none")

    if(activeItemPosition < items.length - 1 ){
      setActiveItemPosition((prev)=>prev + 1)
      setShowButtonPrev(true)
      setZise(-0.4)
      
  }
  if(activeItemPosition === items.length-2){
    setShowButtonNext(!showButtonNext)
  }
}

function prevClick(){
  // console.log(audioRef.current.audioEl.current.style.display="inline")
  if(activeItemPosition > 0 ){
    setActiveItemPosition((prev)=>prev - 1)
    setShowButtonNext(true)
    setZise(0.4)
  }
  if(activeItemPosition < 2){
    setShowButtonPrev(!showButtonPrev)
  }

}
function autoReplace(){
  if(autoRep){
  let clearInt

  if(activeItemPosition < items.length - 1 && flagInt){

    clearInt = setTimeout(()=>{
      setActiveItemPosition((prev)=>prev + 1)
      setShowButtonPrev(true)
      setZise(-0.4)
      if(activeItemPosition === items.length - 2 ) setShowButtonNext(false)
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



  return (
    <div className="App">
        
      <div className='screen'
      
        style={
               
                {transform:` matrix3d(1, 0, ${size}, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)` }
                   
                 
            
              }
      >
        
        <ul className='ul'
            style={{
              transform:`translateX(-${translateLength+activeItemPosition*2}px)`,
            
            }}>
          {
            items.map( (item) =>
              <li 
                key={Math.random()}
                className='list'
              //   style={
              //     (activeItemPosition !== parseInt(items.length/2)) ? 
              //     {transform:` rotateY(${ (activeItemPosition > parseInt(items.length/2)? 150-(activeItemPosition*12) : 100-(activeItemPosition*15))}deg)` }
              //      : 
              //     {transform:` rotateY(0deg)`,boxShadow:'rgb(0 0 0 / 45%) 0px 19px 15px -2px' }
            
              // }
        
              ><img className='imges' alt={item} src={item}/></li>
            
            )
          }
        </ul>
        {
          showButtonPrev && <button className='prev' onClick={prevClick} >{'<'}</button>
        }
        {
          showButtonNext && <button className='next' onClick={nextClick} >{'>'}</button>
        }



      </div>

      <button className='ButtonONOFF' onClick={ () => setAutoRep(!autoRep) }>{autoRep?"ON":"OFF"}</button>

      <ReactAudioPlayer
        src="../audio/fly.mp3"
        className='audio'
        autoPlay={true}
        controls={true}
        loop={true}
        ref={audioRef}
      />


    </div>
  );
}

export default App;
