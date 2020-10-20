import React, { useState } from 'react' 

export default function PigLatin(props) {
const [piggyTalk, setTalk] = useState('')

    function pigLatin(str) {

  
        let one= str.split('')
       let shift = `${one.shift([0])}ay`
       let raw = `${one.slice(0).join('')}${shift}`
        return raw
       
      }
      
      
      
      function input(str) {
        let words = str.split(' ')
        let raw = words.map(word=>pigLatin(word))
        return raw.join(' ')
      
      }
      
      input(props.raw)

   return (
   <div className=''>
       
   </div>
   )
}