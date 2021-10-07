export const Button = (props) => {

    const {
        onClick,
        text
    } = props

    return (
            <div className="form-wrapper__btns">
            <button onClick={onClick}>{text}</button>
            </div>
    )
}

