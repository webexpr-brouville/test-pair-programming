import React, { useEffect } from 'react';
import './App.scss';

function App() {
  const array = [
    {src:"/img/ciseaux.png",alt:"ciseaux"},
    {src:"/img/feuille.png", alt:"feuille" },
    {src:"/img/pierre.png",alt:"pierre" }
  ];
  
  return (
   

    <div className="App">
      <h1>Jeux du pierre - feuille - ciseau</h1>
      

     <div className='images'>
      {array.map((item)=>
           <img key={item.src} src={item.src} alt={item.alt}/>
          )};
     {/*<img onClick src={"} alt=""/> 
      <img onClick="" src={"/img/feuille.png" }  alt="feuille"/>
      <img onClick="" src={"/img/pierre.png" } alt="pierre"/>*/}
      
      </div>
    </div>
  );
}

export default App;
