import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInput from './useInput';

const SignIn = () => {
    const [isError, setError] = useState(false);
    const tel = useInput();
    const password = useInput();

    const handlerSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            "phone": tel.value,
            "password": password.value
    };

        // const formData = '{"phone": "+79991234567","password": "Пароль123!"}'
        console.log(JSON.stringify(formData));

        let response = await fetch('https://cors-anywhere.herokuapp.com/http://158.160.4.55:49161/v1/auth/login', { // https://cors-anywhere.herokuapp.com используется только для обхода CORS
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        let result = await response.json();

        alert(result.id || result.Текст);
    }

    return (
        <>
            <h1>Вход</h1>
            <form
                onSubmit={e => handlerSubmit(e)}
                className='sign-in-form form'
                id='signInForm'
            >
                <h3>
                    {
                        isError ? 'Что-то пошло не так. Проверь правильность ввода данных' : 'Продолжим работу с психологом? Введи свой номер телефона и пароль'
                    }
                </h3>
                <input
                    name='phone'
                    type="tel"
                    className='input-block__input'
                    placeholder='+7 (000) 000-00-00'
                    onChange={e => tel.onChange(e)}
                />
                <input
                    name='password'
                    type="text"
                    className='input-block__input'
                    placeholder='Пароль'
                    onChange={e => password.onChange(e)}
                />
                <button
                    className='button background-color_violet'
                    type='submit'
                >
                    Отправить
                </button>
            </form>
            <p>Впервые у нас? Сначала <Link to={'/registration'} className='link'>зарегистрируйся</Link></p>
        </>
    )
};

export default SignIn;