import React, { useEffect, useState } from "react";
import useInput from "./useInput";

const PasswordInput = () => {
    const password = useInput({ validPassSymbols: true });
    const repeatPassword = useInput({ validPassSymbols: true });

    const [isPassEqual, setPassEqual] = useState(true);

    useEffect(() => {
        (password.value === repeatPassword.value) ? setPassEqual(true) : setPassEqual(false)
    }, [password.value, repeatPassword.value])

    return (
        <>
            <h2>Придумай пароль</h2>
            <div className='input-block'>
                <h3>Пароль <span className='color_red'>*</span></h3>
                <input
                    onChange={e => password.onChange(e)}
                    onBlur={e => password.onBlur(e)}
                    value={password.value}
                    className={'input-block__input ' + (!password.isPassValid && password.isDirty && 'input_invalid')}
                    name='password'
                    type='password'>
                </input>
                <p className={'hint ' + (!password.isPassValid && password.isDirty && 'color_red')}>
                    Пароль должен состоять из 8ми символов и включать заглавную букву, специальный символ и цифру
                </p>
            </div>
            <div className='input-block'>
                <h3>Повтори пароль<span className='color_red'>*</span></h3>
                <input
                    onChange={e => repeatPassword.onChange(e)}
                    onBlur={e => repeatPassword.onBlur(e)}
                    value={repeatPassword.value}
                    className={'input-block__input ' + (!isPassEqual && repeatPassword.isDirty && 'input_invalid')}
                    name='repeatPassword'
                    type='password'>
                </input>
                <p className='hint color_red'>{!isPassEqual && repeatPassword.isDirty && 'Пароли не совпадают'}</p>
            </div>
        </>
    )
}

export default PasswordInput;