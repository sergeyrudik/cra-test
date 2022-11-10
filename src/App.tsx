import {createElement as e} from 'react';

function App() {
    // return (
    //     <h1>New React app</h1>
    // )
    return e('div', {className: 'container'}, [
        e('h1', {className: 'font-bold'}, 'TEST JSX'),
        e('button', {className: ''}, 'Click me!'),
    ])
}

export default App;
