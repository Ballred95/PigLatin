import React, { useState, useEffect } from 'react' 
import Paper from './paper'
import Piggy from './piggy'


export default function App(props) {

  const [value, setValue] = useState('')
  const [pigLatin, setPigLatin] = useState('')
  const [animate, setAnimate] = useState('')
  
  function handleChange(e) {
    setValue(e.target.value)
  }

  function pigyLatin(str) {

  
    let one= str.split('')
   let shift = `${one.shift([0])}ay`
   let raw = `${one.slice(0).join('')}${shift}`
    return raw
   
  }
  
  
  
  function input(str) {
    let words = str.split(' ')
    let raw = words.map(word=>pigyLatin(word))
    setPigLatin(raw.join(' ')) 
  
  }
  useEffect(() => {
    setAnimate("animate__animated animate__shakeY")
  }, [animate])

  function handleClick() {
    input(value)
    animate === "animate__animated animate__shakeY" ? setAnimate('') : setAnimate("animate__animated animate__shakeY")
    
  }


   return (
     
   <div className='app'>
       <Paper userInput={<textarea value={value} onChange={handleChange} />} handleClick={handleClick}/>
        <div className="piggy-flex">
       <Piggy />
       <h1 className={animate} >{pigLatin}</h1>
       </div>
   </div>
   )
}


    

    

    

