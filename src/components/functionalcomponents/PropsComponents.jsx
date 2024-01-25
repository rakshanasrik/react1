import "../css/PropsComponents.css"
function PropsComponents(props){
    const StyleAttrs={
        backgroundColor:"#282c34",
        color:"white"

    }
    return(
        <div style={StyleAttrs}>
            <h1>Hello,{props.name} <br></br>This is again {props.course} class</h1> 
        </div>
    )
}
export default  PropsComponents;