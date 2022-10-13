import React, { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [selectedItem, setSelectedItem] = useState<any>();
  const [scorePlayer, setScorePlayer] = useState<number>(0);
  const [scoreBot, setScoreBot] = useState<number>(0);

  useEffect(() => {
    if(selectedItem){
      const botValue = array[Math.floor(Math.random() * array.length)];
      if(selectedItem.id == 'ciseaux' && botValue.id == 'feuille'){
        setScorePlayer(scorePlayer + 1);
      } else if(selectedItem.id == 'ciseaux' && botValue.id == 'pierre'){
        setScoreBot(scoreBot + 1);
      }

    }
  }, [selectedItem])

  const array = [
    {id:"ciseaux", src:"/img/ciseaux.png",alt:"ciseaux"},
    {id: "feuille", src:"/img/feuille.png", alt:"feuille" },
    {id: "pierre", src:"/img/pierre.png",alt:"pierre" }
  ];
  
  return (
    <div className="App">
      <h1>Jeux du pierre - feuille - ciseau</h1>
      <h2>Score player : {scorePlayer}</h2>
      <h2>Score bot : {scoreBot}</h2>
      
      <div className='images'>
        {array.map((item)=>
          <img key={item.src} src={item.src} alt={item.alt} onClick={() =>setSelectedItem(item)}/>
        )};
      </div>
    </div>
  );
}

export default App;
