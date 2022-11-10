import {createElement as e, useState} from 'react';

function App() {
    const [count, setCount] = useState(0)

    return e('div', {className: 'container', key: 1}, [
        e('h1', {className: 'font-bold', key: 2}, `TEST JSX ${count}`),
        e('button', {
            className: 'py-2 px-4 border',
            key: 3,
            onClick: () => setCount(count + 1)
        }, 'Click me!'),
    ])
}

export default App;
