import './container.css';
const Container = ({Children,maxWidth})=>{
    return(
        <div className="form-container" sx={{maxWidth:maxWidth&&maxWidth}}>
            {Children}
        </div>
    )
}
export default Container;