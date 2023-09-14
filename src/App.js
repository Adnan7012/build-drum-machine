import './App.css';
import Botton from './component/Botton/Botton';
import { useState } from 'react';
function App() {
  const [dataFromButton,setDataFromButton]=useState("");

  const updateDataFromButton=(data)=>{
    setDataFromButton(data)
  }

  return (
    <div className="App">
      <div id='drum-machine'>
      <div id='display'>{dataFromButton}</div>
      <div id='drum-pads'>
      <Botton setDataToApp={updateDataFromButton} />
      </div>
      </div>
    </div>
  );
}

export default App;
