import React from 'react';
import s from './Button.module.css';

type ButtonType = {
  descr: string
  onClick: () => void
  isDisabled?: boolean
}

export const Button = (props: ButtonType) => {
  return (
    <button
      disabled={props.isDisabled}
      onClick={props.onClick}
      className={s.button}>{props.descr}</button>
  )
}