import {useState} from 'react';

export const useCounter = (initialVal = 0) => {

    const [state, setState] = useState(initialVal);

    const increment = () => {
        setState((prev) => prev + 1);
    }

    const decrement = () => {
        setState((prev) => prev - 1);
    }

    const setToZero = () => {
        setState(0);
    }

    return [state, increment, decrement, setToZero];
    
};

