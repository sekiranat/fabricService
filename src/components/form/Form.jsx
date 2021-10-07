import {Button}  from '../btns'
import './style.css'

export const Form = (props) => {
    
    const {
        onInitData,
        onAddSquare,
        onIncreaseObject,
        onDecreaseObject,
        onDeleteObject,
        onClearObjects,
        onChangeColor
    } = props

    return ( 
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
                onClick={onIncreaseObject}
                text='Increase the size of the square '
            />
            <Button
                onClick={onDecreaseObject}
                text='Decrease width'
            />
            <Button
                onClick={onChangeColor}
                text='Change color'
            />
            <Button
                onClick={onDeleteObject}
                text='Delete'
            />
            <Button
                onClick={onClearObjects}
                text='Clear'
            />
    </div>
    )
}
