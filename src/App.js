import {useRef, useState, Suspense,lazy } from 'react';
import Screen from './components/Screen';
import './App.css';
const ButtonOnOff = lazy(() => import('./components/ButtonOnOff'));
const Audio = lazy(() => import('./components/Audio'));


function App() {
  
  const [autoRep,setAutoRep] = useState(false)
  const [flag,setflag] = useState(false)
  const audioRef = useRef()

  
  return (
    <div className="App">
      
      <Screen
        flag={flag}
        setflag={setflag}
        autoRep={autoRep}
        setAutoRep={setAutoRep}
        audioRef={audioRef}
      />

      <Suspense fallback={<div></div>}>
        {flag &&
        
          <ButtonOnOff 
            autoRep={autoRep}
            setAutoRep={setAutoRep}
          />
          
        }
        
        <Audio
          audioRef={audioRef}
          autoRep={autoRep}
        />
      </Suspense>  
    </div>
  );
}

export default App;
