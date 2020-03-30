import React, { FunctionComponent, useState, useEffect } from 'react';
import animejs from 'animejs';
import './App.css';

const Box: FunctionComponent<{
    initial?: string
  }> = ({
    initial = 'rgb(255,0, 0)'
  }
  ) => {

  let tl = animejs.timeline({
    easing: 'easeOutExpo',
    duration: 5000
  })

  useEffect(() => {
    tl.add({
      targets: '.aqui',
      backgroundColor: initial
    })

    console.log("coño")
  }, [initial]);


  return (
    <div className="App">
        <p className= 'aqui'>
          Crazy Image Page with React :D {initial}
        </p>
    </div>
  );
}

const App: FunctionComponent = () => {

  const [alterPos, setAlterPos] = useState('rgb(0,255, 0)')

return (

  <div className="App">
  <button
    onClick={() =>
      setAlterPos('rgb(255,0, 0)')
    }
  >
    red
  </button>

  <button
    onClick={() =>
      setAlterPos('rgb(0,255, 0)')
    }
  >
    green
  </button>
  <Box initial = {alterPos}/>
</div>
);
}

export default App;
