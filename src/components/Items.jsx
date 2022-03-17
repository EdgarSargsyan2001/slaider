



export default function Items({activeItemPosition,items}){

    const translateLength = activeItemPosition * ( (window.screen.width > 500)?1023:295 )
    const ulStyle = {transform:`translateX(-${translateLength+activeItemPosition*2}px)`}

    return(

    <ul className='ul' style={ulStyle}>     
        {
         items.map( (item)=> <li key={Math.random()} className='list'
                                
                             ><img className='imges' alt={item} src={item}/></li>
                                    
         )
        }
    </ul>

    )
}