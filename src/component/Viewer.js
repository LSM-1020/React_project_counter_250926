import { useState } from "react";

function Viewer({count}) {
    // const [count,setCount] = useState();
    // function handleSetCount(value) {
    //     setCount(count+value);
    // }

    return(
        <div>
            <div>현재 카운트:</div>
            <h1>{count}</h1>
        </div>
    );
}
export default Viewer;