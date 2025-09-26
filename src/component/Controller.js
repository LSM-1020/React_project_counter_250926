import { useState } from "react";

function Controller ({ handleSetCount, handleReset }){
    // const [count,setCount] = useState(0);
    // function handleSetCount(value){
    //     setCount(count+value);

    // }    
    return(
        <div>
             <button onClick={() => handleSetCount(-1)}>-1</button>
             <button onClick={() => handleSetCount(-10)}>-10</button>
             <button onClick={() => handleSetCount(-100)}>-100</button>
             <button onClick={() => handleSetCount(100)}>+100</button>
             <button onClick={() => handleSetCount(10)}>+10</button>
             <button onClick={() => handleSetCount(1)}>+1</button>
             <br></br>
             <button onClick={handleReset}>reset</button>
        </div>
    );
}

export default Controller;