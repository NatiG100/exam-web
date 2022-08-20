import './input.css';
const Input = ({Icon, maxWidth,endText,error,...props})=>{
    return(
        <div className='input-wrapper' style={{maxWidth,borderColor:error&&"red"}}>
            {Icon&&<Icon className='input-icon'/>}
            <input className='input' {...props}/>
            {endText&&<p style={{color:"#777", fontSize:"13px",marginRight:"7px"}}>{endText}</p>}
        </div>
    );
}
export default Input;