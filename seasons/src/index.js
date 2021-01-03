import React from 'react';
import ReactDOM from 'react-dom';

// Function based component
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         error => console.log(error)

//     )
//     return <div> Hi There </div>;
// };

// Class based component
class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            error => console.log(error)
            
            );
        return <div> Hi There </div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));


