import React from 'react'

import Flower from "./assets/Flower.jpg"
import "./Flower.css"

const Props = (props) => {
const MouseOver = (e)=>{
  console.log(e.target)
  console.log("okkk")
  e.target.className = "mouseOver"
}
const MouseOut = (e)=>{
  console.log(e.target)
console.log("thek hai")
e.target.className = "mouseOut"
}


  return (
<>
<h3>{props.name}</h3>
<h3>{props.number}</h3>
<img src={Flower} alt="flower"  onMouseOver={MouseOver} onMouseOut={MouseOut}/>
</>
  )
}

export default Props