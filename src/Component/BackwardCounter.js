import React from "react";
import { Card } from "./Card";
import useCounter from "./Custem-Hook/useCounter";
const BackWordCounter=()=>{
    const counter = useCounter(false) ;
//     const [counter ,setCounter] = useState(0);

//     useEffect(()=>{
//         const interval = setInterval(() => {
//             setCounter((precount) => precount - 1)
//         }, 1000);
//         return ()=>clearInterval(interval)
//     },[])

    return (
        <Card>
{counter}
        </Card>
    )
}

export {BackWordCounter}