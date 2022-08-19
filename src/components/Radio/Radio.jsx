import './radio.css';
import {ReactComponent as Check} from './../../assets/svg/right-icon.svg'
import { useEffect, useRef, useState } from 'react';

const Radio = ({text,selected,...props})=>{
    const radioRef = useRef(null);
    
    return(
        <div 
            className='radio-box'
        style={{
            display:"flex",
            gap:"10px",
            alignItems:"center",
        }}>
            <label className={`radio-container ${selected===props.value&&"selected-radio"}`}>
                <input className="radio" type="radio" {...props} ref={radioRef} checked={selected===props.value}/>
                <span className="radiomark">
                    <Check className="radiomark-icon"/>
                </span>
            </label>
            <label className="radio-label" htmlFor={props?.id}>{text}</label>
        </div>
    );
}

export default Radio;