import React from 'react';

class Clock extends React.Component {
    state = { date: new Date(), };

    componentDidMount() {
        this.ticker = setInterval ( () => this.tick(), 1000 );
    }

    componentWillUnmount() {
        clearInterval(this.ticker);
    }

    tick = () => this.setState({ date: new Date() });

    render() {
        return (
            <p>
                { this.state.date.toLocaleTimeString() }
            </p>
        )
    }
}

export default Clock;