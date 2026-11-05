import React from 'react'
import { useState,useEffect } from 'react'



export const UseEffect = () => {

let[count,setCount] = useState(0)
let [name,setName] = useState("fabiha")
let [arr,setarr] = useState(["apple", "mango","banana"])



let increase = () =>{
    setCount(count = count + 1);
}
let changeName = () =>{
  setName("Hamna")
}
let chngeFruit =() =>{
  setarr([...arr])
}
let fruitChange =() =>{
  setarr([arr[0] = arr.push("fabiha")])
}

useEffect(() =>{
    console.log("counting!");
},[name,count])

  return (
   <>
    <h1>{count}</h1>
    <button onClick={increase}>Click</button>

    <h1>{name}</h1>
    <button onClick={changeName}>ChangeName</button>

   {
    arr.map((fruit) =>{
    return <div key={fruit}>
       <ul >
        <li>{fruit}</li>
      </ul>
      <button onClick={fruitChange}>fruitsname</button>
    </div>
    })
   }
   <button onClick={chngeFruit}>ChnageFruit</button>
    </>
  )
}
export default UseEffect