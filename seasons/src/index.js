import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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
    state = { latitude: null, errorMessage: '' }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            // to change the value dynamically we need to use setState
            position => this.setState({ latitude: position.coords.latitude }),
            error => this.setState({ errorMessage: error.message })
        );
    };

    // Render the class based component (always)
    render() {
        if ( this.state.errorMessage && !this.state.latitude ) {
            return <div> Error: { this.state.errorMessage }</div>
        };

        if ( !this.state.errorMessage && this.state.latitude ) {
            return <SeasonDisplay latitude={ this.state.latitude } />
        };

        return <Spinner message="Please accept the location request"/>
    };
};

ReactDOM.render(<App/>, document.querySelector('#root'));


