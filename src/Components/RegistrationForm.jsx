import React, { useEffect } from 'react';
import NicknameInput from './NicknameInput';
import PasswordInput from './PasswordInput';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import useInput from './useInput';


function RegistrationForm() {

    const email = useInput({ isEmpty: true, validEmail: true });
    const telegram = useInput();

    useEffect(() => {
        let datePicker = new AirDatepicker('#datePicker', {
            inline: false,
            dateFormat: 'yyyy-MM-dd'
        });

        return () => { datePicker.destroy() }
    }, [])

    return (
        <>
            <form id='registrationForm' className='form'>
                <h1>Укажи личные данные</h1>
                <PasswordInput />
                <h2>Расскажи о себе</h2>
                <NicknameInput />
                <div className='input-block'>
                    <h3>Дата рождения<span className='color_red'>*</span></h3>
                    <input id='datePicker' className='input-block__input' name='dateOfBirth' type='date' required></input>
                    <p className='hint'>Для получения услуг тебе должно быть 16 или больше лет</p>
                </div>
                <h2>Укажи по желанию</h2>
                <div className='input-block'>
                    <h3>E-mail</h3>
                    <input
                        onChange={e => email.onChange(e)}
                        onBlur={e => email.onBlur(e)}
                        className='input-block__input'
                        name='email'
                        type='email'></input>
                    <p className='hint'>
                        {(!email.isValidEmail && !email.isEmpty) ? 'Пропущен символ @' : 'Присылаем только информацию, связанную с твоими сессиями'}
                    </p>
                </div>
                <div className='input-block'>
                    <h3>Ник телеграм</h3>
                    <input
                        onChange={e => telegram.onChange(e)}
                        onBlur={e => telegram.onBlur(e)}
                        className='input-block__input'
                        name='telegram'
                        type='text'>
                    </input>
                    <p className='hint'>Присылаем только информацию, связанную с твоими сессиями</p>
                </div>
                <button className='button background-color_green' type='submit'>Далее</button>

            </form>
        </>
    )
};

export default RegistrationForm;
