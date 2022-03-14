import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [activeItemPosition,setActiveItemPosition] = useState(0)
  const [showButtonNext,setShowButtonNext] = useState(true)
  const [showButtonPrev,setShowButtonPrev] = useState(false)
  const [flagInt,setFlagInt] = useState(true)
  const [autoRep,setAutoRep] = useState(true)
  const [size,setZise] = useState(-0.4)
  
  const translateLength = activeItemPosition * ( (window.screen.width > 500)?1023:295 )
  
  const items = [
    "https://artworld.ru/images/cms/content/catalog2/rodriguez_kartina_maslom_citrusovyj_fresh_apelsiny_jr190515.jpg",
    "https://zvetnoe.ru/upload/images/blog/kartini/001.jpg",
    "https://artworld.ru/images/cms/content/catalog2/vlodarchyk_kartina_maslom_derevo_zhelanij_sirenevyj_cvet_av200802.jpg",
    "https://www.vinterier.ru/pictures/shop/v-sele-kartina-maslom-40x30.JPG",
    "https://cdn1.ozone.ru/s3/multimedia-3/c1200/6000199911.jpg",
    "https://molbert.com.ua/img/gallery/big/picture_8438_6064.webp",
    "http://kraski-zhizni.com/wp-content/uploads/2020/06/IMG_4418.jpeg",
  
  ]
  
  // useEffect(()=>{
  //   fetch('https://www.pexels.com/assets/packs/js/application-1bc31b573f096778eeb2').then(val =>{
  //     console.log(val)
  //     return val.json()
  //   }).then(response => console.log(response) )   

  // })

  function nextClick(){
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

      <select className='select' onChange={(e)=>{
          if(e.target.value === "on"){
            setAutoRep(true)
          }else if(e.target.value === "off"){
            setAutoRep(false)
          }

        }}>
            <option value="on">autoRep:ON</option>
            <option value="off">autoRep:OFF</option>
        </select>
    </div>
  );
}

export default App;
