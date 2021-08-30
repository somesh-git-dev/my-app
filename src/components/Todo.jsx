import React, {useState} from 'react';

const Todo = () => {

    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');

    const handleInput = (event) => {
        const inputValue = event.target.value;
        const warns = inputValue.includes('.js') ? 'You need JavaScript skill to complete the task. Do you have it?' : null;
        setTodo(inputValue)
        setWarning(warns)
    }

    return (
        <div>
            <p>{todo}</p>
            <p>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => handleInput(e)}

                />
            </p>
            <hr/>
            <h3>{warning || 'Good choice!'}</h3>
        </div>
    );
};

export default Todo;
