import { useState,Suspense,lazy} from "react"
import FirstDiv from "./FirstDiv"
const ButtonNextPrev = lazy(() => import('./ButtonNextPrev'));
const Items = lazy(() => import('./Items'));


function Screen ({flag,setflag,autoRep,setAutoRep,audioRef}){

    const [activeItemPosition,setActiveItemPosition] = useState(0)
    const [size,setZise] = useState(-0.4)    
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
    

return(
    <div className='screen'style={{transform:`matrix3d(1,0,${size},0,0,1,0,0,0,0,1,0,0,0,0,1)`}} >  
       
       <Suspense fallback={<div></div>}>
            {flag &&
                <Items 
                    items={items}
                    activeItemPosition={activeItemPosition}
                />
            }
        </Suspense>

        <FirstDiv 
            setflag={setflag}
            audioRef={audioRef}
            setAutoRep={setAutoRep}
        />
        
        <Suspense fallback={<div></div>}>
            {flag &&
                <ButtonNextPrev
                    setZise={setZise}
                    activeItemPosition={activeItemPosition}
                    setActiveItemPosition={setActiveItemPosition}
                    itemsLength={items.length}
                    autoRep={autoRep}
                />
            }
        </Suspense>
    </div>
)

}

export default Screen