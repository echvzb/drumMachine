import React from "react";
import { Grid, Button, Container } from "@material-ui/core";

class DrumButton extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      active: "contained"
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
      this.setState({
        active: "outlined"
      });
      this.setState({
        active: "contained"
      });
    }
  }
  playSound(e) {
    if (!this.props.on) {
      return;
    }
    this.props.onDisplay(this.props.id);
    const sound = document.getElementById(this.props.id);
    sound.currentTime = 0;
    sound.volume = (this.props.volume*0.01);
    sound.play();
  }
  render() {
    return (
      <Grid item xs={4}>
        <Button
          variant={this.state.active}
          fullWidth
          size="large"
          color="secondary"
          onClick={this.playSound}
        >
          {this.props.keyTrigger}
          <audio id={this.props.id} src={this.props.url}></audio>
        </Button>
      </Grid>
    );
  }
}

export default props => {
  let state = props.bank;
  let KEYS = [];
  state ? (KEYS = props.bankTwo) : (KEYS = props.bankOne);
  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        {KEYS.map(obj => {
          return (
            <DrumButton
              url={obj.url}
              id={obj.id}
              keyTrigger={obj.keyTrigger}
              keyCode={obj.keyCode}
              on={props.power}
              onDisplay={props.onDisplay}
              volume={props.volume}
            />
          );
        })}
      </Grid>
    </Container>
  );
};
