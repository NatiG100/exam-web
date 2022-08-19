import './container.css';
const Container = ({children,maxWidth})=>{
    return(
        <div className="form-container" sx={{maxWidth:maxWidth&&maxWidth}}>
            {children}
        </div>
    )
}
export default Container;