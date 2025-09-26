import { useEffect } from "react";
function Even(){
    useEffect(()=>{ //컴포넌트가 언마운트 될때 실행
        return() => {//리턴에서 콜백되어 클린업 함수가 됨
    console.log("Even컴포넌트 언마운트되었습니다")
        };    
    },[]);

    return (
        <div>
            현재 카운트는 짝수입니다
        </div>
    );
}
export default Even;