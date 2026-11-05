import React from 'react'
import { useState } from 'react'

export const Usestate = () => {
    
    let [name,setName] = useState("Fabiha M Sohail")
    let [name1,setName1] = useState("Hamna Hassan")

let chngeNames = () =>{
setName("Sohail Anwar")
setName1("Hassan Taimoor")

}

  return (
  <>
   <h1 style={{
    backgroundColor : name == "Fabiha M Sohail" ? "red" : "yellow"
   }}>{name}</h1>
   <hr />
   <h1 style={{
    backgroundColor : name == "Hamna Hassan" ? "pink" : "blue"
   }}>{name}</h1>
   <button onClick={chngeNames}>ChanGinG</button>
  </>
  )
}
export default Usestate