import React, {useState} from 'react';

const Todos = () => {
    const [todo, setTodos] = useState({
        title: '',
        description: ''
    });

    const {title:foo, description:bar} = todo;

    return (
        <div>
            {foo}
            <input type="text" value={foo}
                   onChange={(event) => setTodos({...todo, title: event.target.value})}/>
            <br/>
            {bar}
            <input type="text" value={bar}
                   onChange={(event) => setTodos({...todo, description: event.target.value})}/>
        </div>
    );
};

export default Todos;
