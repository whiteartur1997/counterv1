import React, { ChangeEvent } from 'react';
import s from './DisplaySettings.module.css';

type DisplaySettingsType = {
  maxValue: number
  setMaxValueCallback: (newValue: number) => void
  minValue: number
  setMinValueCallback: (newValue: number) => void
}

export const DisplaySettings: React.FC<DisplaySettingsType> = (props) => {
  let error = false;
  if (props.minValue >= props.maxValue) error = true;

  function onChangeMax(e: ChangeEvent<HTMLInputElement>) {
    props.setMaxValueCallback(+e.currentTarget.value)
  }

  function onChangeMin(e: ChangeEvent<HTMLInputElement>) {
    props.setMinValueCallback(+e.currentTarget.value)
  }
  return (
    <div className={s.displaySettings}>
      <div className={s.setValueWrapper}>
        <span className={s.value}>max value:</span>
        <input
          className={`${s.input} ${error ? s.error : ""}`}
          type="number"
          value={props.maxValue}
          onChange={onChangeMax} />
      </div>
      <div className={s.setValueWrapper}>
        <span className={s.value}>min value:</span>
        <input
          className={`${s.input} ${error ? s.error : ""}`}
          type="number"
          value={props.minValue}
          onChange={onChangeMin} />
      </div>
      {error ? <div className={s.error__message}>Invalid min and max values</div> : ""}
    </div>
  )
}