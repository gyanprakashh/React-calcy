import React from 'react';
import './Button.css';

const isoperator=(val)=>{
    return !isNaN(val) || val==="." || val==="="||val==="(" || val===")"
}

export const Button=(props)=> {
  return (
    <>
     <div className={`button-wrapper ${isoperator(props.children)?null:"operator"}`} 
     onClick={()=>{props.handleClick(props.children)}}>{props.children}

     </div>
    
    </>
  );
}
