import React from 'react';
import Clock from "./Clock";
import { Button, Container, } from "semantic-ui-react";

class App extends React.Component {
  state = { showClock: false, };

  toggleShowClock = () => {
    this.setState( state => {
      return { showClock: !state.showClock, };
    })
  }

  render() {
    return (
    <Container style={{ marginTop: "25px", }}>
      { this.state.showClock && <Clock /> }
      <Button onClick={this.toggleShowClock} color="purple">Toggle Clock</Button>
      </Container>
    );
  }
}

export default App;