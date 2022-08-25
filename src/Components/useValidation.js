import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [isPassValid, setPassValid] = useState(false);
    const [isNickname, setNickname] = useState(false);
    const [isValidEmail, setValidEmail] = useState(false);


    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                case 'validPassSymbols':
                    {
                        const regExp = /^(?=.*[\d])(?=.*[A-ZА-ЯЁ])(?=.*[!@#$%^&*]).{8}$/;
                        regExp.test(value) ? setPassValid(true) : setPassValid(false);
                        break;
                    }
                case 'validNickname':
                    {
                        const regExp = /^[^0-9а-яА-Я].{1,20}$/;
                        regExp.test(value) ? setNickname(true) : setNickname(false);
                        break;
                    }
                case 'validEmail':
                    {
                        const regExp = /^.{1,}@.{1,}\..{1,}$/;
                        regExp.test(value) ? setValidEmail(true) : setValidEmail(false);
                        break;
                    }
                default:
                    break;
            }
        }
    }, [value])

    return {
        isEmpty,
        isPassValid,
        isNickname,
        isValidEmail,
    }
}

export default useValidation;