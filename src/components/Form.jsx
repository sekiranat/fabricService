const Form = (props) => {
    
    const {
        initialJSON,
        onClick
    } = props

    return ( 
    <>
    JSON Data:<br/>
    <textarea value={initialJSON}/>
    <br/>
    <button onClick={onClick}>Load</button>
    </>
    )
}

export default Form;
