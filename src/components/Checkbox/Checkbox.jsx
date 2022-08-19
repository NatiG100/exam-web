import './checkbox.css';
import {ReactComponent as Check} from './../../assets/svg/right-icon.svg'
const Checkbox = ({text,selected,...props})=>{
    return(
        <div 
            className='check-box'
        style={{
            display:"flex",
            gap:"10px",
            alignItems:"center",
        }}>
            <label className={`checkbox-container }`}>
                <input className="checkbox" type="checkbox" {...props} checked={selected}/>
                <span className="checkboxmark" > 
                    <Check className="checkboxmark-icon" style={{display:selected?"block":"none"}}/>
                </span>
            </label>
            <label className="radio-label" htmlFor={props?.id}>{text}</label>
        </div>
    );
}

export default Checkbox;