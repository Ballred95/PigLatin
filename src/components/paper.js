import React, { useState } from 'react' 

export default function Paper(props) {

    
   return (
 
   <div className='paper'>
       {props.userInput}
       <button onClick={props.handleClick}>Click</button>
       
   </div>
   )
}