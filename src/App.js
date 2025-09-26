import './App.css';
import { useState, useEffect, useRef } from "react";
import Controller from './component/Controller';
import Viewer from './component/Viewer';
import Even from './component/Even';

function App() {

  const [count,setCount] = useState(0);
  const [text,setText] = useState("");
  const didMountRef = useRef(false);

    function handleSetCount(value) {
          setCount(count+value);
      }
    function handleReset() {
          setCount(0);
          setText("");
      }
    function handlesetText(e) {
          setText(e.target.value);
      }
    
  //useEffect->랜더링 후에 발생하는 부작용(sideeffect)를 처리하는 함수
  //랜더링후 무조건 실행
  useEffect(()=>{
    if(!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else{
    console.log("컴포넌트 업데이트됨"); //업데이트 단계 제어
    }  
  });
  //의존성 배열[count] 생략하면 랜더링발생시 무조건 실행
  //useEffect의 두번째 인수->의존성 배열(dependency Array=deps)
  
  useEffect(()=>{  //최초 마운트시 1번만 실행되는 함수
    console.log("컴포넌트 마운트됨"); //마운트 단계 제어
  },[]); //의존성 배열을 빈 배열로 입력시, 마운트 시점에서만 콜백함수를 실행

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      console.log("깜빡");
    },1000);
    return()=>{
      console.log("클린업");
      clearInterval(intervalId);
    };
  }); //의존정 배열 전달없음->랜더링 될때마다 실행


  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
        {count % 2 ===0 &&<Even />}
      </section>
       <section>
        <Controller handleSetCount={handleSetCount} handleReset={handleReset}/>
      </section>
      <section>
        <input value={text} onChange={handlesetText} />
        <br></br>
        <div>현재 텍스트:</div>
        <h1>{text}</h1>
      </section>
     
    </div>
  );
}

export default App;
