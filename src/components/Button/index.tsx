import React, {ButtonHTMLAttributes} from 'react';
import '../../assets/styles/button.scss';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonType) => {
    return (
        <button className="button" {...props}/>
    );
};