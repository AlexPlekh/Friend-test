import React, { useState } from "react";
import InputBlock from "./InputBlock";

function NicknameInput() {

    const [hint, setHint] = useState('Будет доступен только твоему психологу и личному помощнику');
    const [hintClass, setHintClass] = useState('hint');

    const handleChange = (e) => {
        e.target.value = e.target.value.replace(/[^0-9а-яА-Я]/g, '');

        if (e.target.value.length > 20) {
            setHint(`Превышено допустимое количество символов: сократите ${e.target.value.length - 20} символов`);
            setHintClass('hint color_red');
        } else {
            if (hint !== 'Будет доступен только твоему психологу и личному помощнику') {
                setHint('Будет доступен только твоему психологу и личному помощнику');
            };
            if (hintClass !== 'hint') {
                setHintClass('hint');
            };
        };
    };

    return (
        <InputBlock
            hint={hint}
            hintClass={hintClass}
            handleChange={handleChange}
            pattern='[0-9а-яА-Я]{1,20}'
            type='text'
            header='Имя или псевдоним'
            required= {true}
        />
    );
}

export default NicknameInput;