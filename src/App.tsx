import React from 'react';
import './App.css';
import {Button} from './components/Button/Button';
import {DisplaySettings} from "./components/DisplaySettings/DisplaySettings";
import {useDispatch, useSelector} from "react-redux";
import {setDisplayValueAC, setMaxValueAC, setMinValueAC, setModeAC} from "./redux/counterReducer";
import {AppStateType} from "./redux/store";


function App() {
   const settingsMode = useSelector<AppStateType, boolean>(state => state.counter.settingsMode);
   let displayValue = useSelector<AppStateType, number>(state => state.counter.displayValue);
   const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
   const minValue = useSelector<AppStateType, number>(state => state.counter.minValue);
   const dispatch = useDispatch();

    function setMaxValueCallback(newValue: number) {
        dispatch(setMaxValueAC(newValue));
        localStorage.setItem("maxValue", String(newValue));
    }

    function setMinValueCallback(newValue: number) {
        dispatch(setMinValueAC(newValue));
        localStorage.setItem("minValue", String(newValue));
    }

    function incValue() {
        if (displayValue < maxValue) {
            dispatch(setDisplayValueAC(++displayValue));
        }
    }

    function resetValue() {
        dispatch(setDisplayValueAC(minValue));
    }

    function setSettingsModeHandler() {
        dispatch(setDisplayValueAC(minValue));
        dispatch(setModeAC(!settingsMode));
    }
    return (
        <div className="App">
            <div className="wrapper">
                  <div className={"display"}>
                    {settingsMode ?
                        <DisplaySettings
                            maxValue={maxValue}
                            setMaxValueCallback={setMaxValueCallback}
                            minValue={minValue}
                            setMinValueCallback={setMinValueCallback} /> :
                        <span className={`digit ${displayValue === maxValue ? "red" : ""}`}>{displayValue}</span>
                    }
                  </div>
                <div className={"buttons"}>
                    {settingsMode ?
                        <Button descr={"set"} onClick={setSettingsModeHandler} isDisabled={maxValue <= minValue}/>
                        : (<div className={"buttons__main"}>
                            <Button descr={"inc"} onClick={incValue} isDisabled={displayValue === maxValue}/>
                            <Button descr={"reset"} onClick={resetValue} isDisabled={displayValue === minValue}/>
                            <Button descr={"set"} onClick={setSettingsModeHandler}/>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
