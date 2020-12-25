type ActionsType = ReturnType<typeof setModeAC> |
    ReturnType<typeof setDisplayValueAC> |
    ReturnType<typeof setMinValueAC> |
    ReturnType<typeof setMaxValueAC>;

type CounterType = {
    settingsMode: boolean
    maxValue: number
    minValue: number
    displayValue: number
}

const startMaxValue = Number(localStorage.getItem("maxValue")) || 5;
const startMinValue = Number(localStorage.getItem("minValue")) || 0;

const initialState: CounterType = {
    settingsMode: false,
    maxValue: startMaxValue,
    minValue: startMinValue,
    displayValue: startMinValue
}

export function counterReducer(state: CounterType = initialState, action: ActionsType): CounterType {
    switch (action.type) {
        case 'SET-MODE': {
            debugger
            return {
                ...state,
                settingsMode: action.mode
            }
        }
        case "INCREASE-DISPLAY-VALUE": {
            return {
                ...state,
                displayValue: action.value
            }
        }
        case "SET-MAX-VALUE": {
            return {
                ...state,
                maxValue: action.maxValue
            }
        }
        case "SET-MIN-VALUE": {
            return {
                ...state,
                minValue: action.minValue
            }
        }
        default:
            return state
    }
}

export const setModeAC = (mode: boolean) => {
    return {
        type: 'SET-MODE',
        mode
    } as const;
}
export const setDisplayValueAC = (value: number) => {
    return {
        type: 'INCREASE-DISPLAY-VALUE',
        value
    } as const;
}
export const setMinValueAC = (minValue: number) => {
    return {
        type: 'SET-MIN-VALUE',
        minValue
    } as const;
}
export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        maxValue
    } as const;
}