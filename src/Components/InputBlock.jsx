import React from "react";

function InputBlock(props) {

    return (
        <div className='input-block'>
            <h3>{props.header}{props.required ? <span className='color_red'>*</span> : ''}</h3>
            <input onChange={props.handleChange}
            className='input-block__input'
            name='nickname'
            type={props.type}
            pattern={props.pattern}
            required={props.required} // надо ли? Выдает invalid при рендере
            ></input>
            <p className={props.hintClass}>{props.hint}</p>
        </div>
    );
}

export default InputBlock;