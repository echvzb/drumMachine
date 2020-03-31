import React from "react";
import { Box, Container } from "@material-ui/core";
import "./App.css";
import Pad from "./components/Pad";
import Control from "./components/Control";
import Header from "./components/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { bankOne, bankTwo } from "./state";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00bcd4"
    },
    secondary: {
      main: "#651fff"
    }
  }
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "",
      power: false,
      bank: false,
      volume: 100
    };
    this.setDisplay = this.setDisplay.bind(this);
    this.setPower = this.setPower.bind(this);
    this.setBank = this.setBank.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
  }
  setDisplay(text) {
    this.setState({
      display: text
    });
  }
  setPower() {
    this.setState({
      power: !this.state.power,
      display: ""
    });
  }
  setBank() {
    if (!this.state.power) {
      return;
    }
    const displayBank = test => {
      if (test) {
        return "Smooth Piano Kit";
      }
      return "Heater Kit";
    };
    let bankText = displayBank(!this.state.bank);
    this.setState({
      bank: !this.state.bank,
      display: bankText
    });
  }
  adjustVolume(e, newValue) {
    if(!this.state.power){
      return
    }
    let value = newValue;
    this.setState({
      volume: value,
      display: "Volume: " + value
    });
  }
  render() {
    return (
      <div className="App">
        <Header text="Drum Machine" />
        <Box mt="8rem">
          <Container maxWidth="md">
            <Box bgcolor="primary.light" borderRadius={16} py="1rem">
              <Box p="1rem">
                <Control
                  onDisplay={this.setDisplay}
                  text={this.state.display}
                  power={this.state.power}
                  onPower={() => this.setPower}
                  onBank={() => this.setBank}
                  bank={this.state.bank}
                  onVolume={this.adjustVolume}
                  volume={this.state.volume}
                />
              </Box>
              <Box display="flex" justifyContent="center" height="100%">
                <Pad
                  bankOne={bankOne}
                  bankTwo={bankTwo}
                  onDisplay={this.setDisplay}
                  power={this.state.power}
                  bank={this.state.bank}
                  volume={this.state.volume}
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
    );
  }
}

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};
