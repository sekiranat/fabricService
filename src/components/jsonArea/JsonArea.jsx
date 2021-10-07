
import React from 'react';

export const JsonArea = (props) => {

    const {
        data,
    } = props

    const jsonData = JSON.stringify(data)

    return (
        <>
            JSON Data:
            <textarea value={jsonData} />
        </>
    )
}
