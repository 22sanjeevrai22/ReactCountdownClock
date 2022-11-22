import { useState, useEffect } from "react";

function useTimer(start, initialnum){
const initialnum1 = initialnum
const [count, setCount] = useState(initialnum1);

useEffect(() => {
    if(start){
    const secondsLeft = setInterval(()=>{
        setCount(prev => prev - 1)
    }, 1000);

    return () => clearInterval(secondsLeft);
    }
}, [start])


return [count, setCount]

}

export default useTimer;