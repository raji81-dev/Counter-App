import { useState } from "react"
function Counter(){
    var [count,setCount]=useState(0)

    function increment(){
       
        setCount(count+1)
    }
    function decrement(){
       
        setCount(count-1)
    }
    return(
        <div style={{textAlign:"center",width:"500px",height:"500px",border:"1px solid black",backgroundColor:"palevioletred",margin:"auto"}}>
            <h1 style={{textAlign:"center",color:"black"}}>React Counter App</h1>
            <h1>{count}</h1>
            <button style={{width:"90px",height:"30px",backgroundColor:"cadetblue",borderRadius:"10px",border:"none"}} onClick={increment}>Increment</button>
            <button style={{width:"90px",height:"30px",marginLeft:"10px",backgroundColor:"cadetblue",borderRadius:"10px",border:"none"}} onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter