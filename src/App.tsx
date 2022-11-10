import {createElement as e} from 'react';

function App() {
    return e('div', {className: 'container', key: 1}, [
        e('h1', {className: 'font-bold', key: 2}, 'TEST JSX'),
        e('button', {
            className: 'py-2 px-4 border',
            key: 3,
            onClick: () => console.log('Clicked at button!')
        }, 'Click me!'),
    ])
}

export default App;
