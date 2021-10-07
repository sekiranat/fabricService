import {Button}  from '../btns'
import './style.css'

export const Form = (props) => {
    
    const {
        data,
        onInitData,
        onAddSquare,
        onResizeObject
    } = props

    const jsonData = JSON.stringify(data)

    return ( 
    <div className="form-wrapper">
        JSON Data:
        
        <textarea value={jsonData} />
            <div className="form-wrapper__btns">
                <Button
                    onClick={onInitData}
                    text='Load'
                />
                <Button
                    onClick={onAddSquare}
                    text='Add square'
                />
                <Button
                    onClick={onResizeObject}
                    text='Increase the size of the square '
                />
                <Button
                    onClick={onInitData}
                    text='Delete'
                />
            </div>
    </div>
    )
}
