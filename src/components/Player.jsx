import {useState, useRef} from 'react';

export default function Player() {
  const playerName = useRef();

  const [enterPlayer, setEnterPlayer] = useState();

  function handleClick(){
    setEnterPlayer(playerName.current.value);


  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayer ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>    
  );
}
