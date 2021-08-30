import React, {useEffect, useState} from 'react';

const useCustomHook = (initializer, componentName) => {

    const [counter, setCounter] = useState(initializer);

    function resetCounter() {
        setCounter((counter) => counter + 1);
    }

    useEffect(() => {
        console.log("The button of the "
            + componentName + " is clicked "
            + counter + " times.");
    }, [counter, componentName]);

    return resetCounter;
};

export default useCustomHook;
