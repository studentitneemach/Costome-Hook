import React from "react";

const useCounter = (forword= true )=>{
    const [counter ,setCounter] = React.useState(0);

    React.useEffect(()=>{
        const interval = setInterval(() => {
            if(forword){
                setCounter((precount) => precount + 1)
            }else  setCounter((precount) => precount - 1)
        }, 1000);

        return ()=>clearInterval(interval)
    },[forword])

    // return counter;

}

export default useCounter;