import './App.css';
import { useState } from "react";
import Controller from './component/Controller';
import Viewer from './component/Viewer';

function App() {

  const [count,setCount] = useState(0);
    function handleSetCount(value) {
          setCount(count+value);
     }
    function handleReset() {
          setCount(0);
      }


  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} handleReset={handleReset}/>
      </section>
    </div>
  );
}

export default App;
