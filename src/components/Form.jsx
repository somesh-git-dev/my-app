import React, {useState} from 'react';

const Form = () => {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
        console.log(e.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => handleChange(e)}/>
            </form>
            {name}
        </div>
    );
};

export default Form;
