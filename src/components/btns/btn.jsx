import './style.css'

export const Button = (props) => {

    const {
        onClick,
        text
    } = props

    return (
            <div className="form-wrapper__btns">
                <button className="button" onClick={onClick}>{text}</button>
            </div>
    )
}

