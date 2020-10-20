import React, { useState } from 'react' 
import Paper from './paper'
import Piggy from './piggy'


export default function App(props) {

  const [value, setValue] = useState('')
  const [pigLatin, setPigLatin] = useState('')
  
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


  function handleClick() {
    input(value)
  }


   return (
     
   <div className='app'>
       <Paper userInput={<textarea value={value} onChange={handleChange} />} handleClick={handleClick}/>
       <Piggy />
       {pigLatin}
   </div>
   )
}


    

    

    

