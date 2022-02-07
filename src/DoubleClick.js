/**
 * @function
 * Provides ability to detect double clicks
 *
 * Stack Overflow. “Events - Double Click and Click on ReactJS Component.”
 * Accessed February 6, 2022.
 * https://stackoverflow.com/questions/35491425/double-click-and-click-on-reactjs-component.
 */

import React from "react";
let timer;

const DoubleClick = ({ onClick = () => { }, onDoubleClick = () => { }, children}) => {
    const onClickHandler = event => {
        clearTimeout(timer);
        if (event.detail === 1){
            timer = setTimeout(onClick, 200)
        } else if (event.detail >= 2){
            onDoubleClick()
        }
    }
    return (
        <div onClick={onClickHandler}>
            {children}
        </div>
    )
}

export default DoubleClick;