import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Switch,
  Typography,
  Slider,
  Grid,
  Container
} from "@material-ui/core";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

export default props => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <FormControl>
          <FormControlLabel
            value="Power"
            control={
              <Switch
                checked={props.power}
                onChange={props.onPower()}
                color="secondary"
              />
            }
            label="Power"
            labelPlacement="top"
          />
        </FormControl>
        <Box mx="20%">
          <Box
            borderRadius={16}
            width="100%"
            height="5rem"
            bgcolor="secondary.dark"
          >
            <Box py="1.5rem" textAlign="center" color="white">
              <Typography variant="h6">{props.text}</Typography>
            </Box>
          </Box>
        </Box>
        <Typography id="continuous-slider" gutterBottom>
          Volume
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider
              aria-labelledby="continuous-slider"
              color="secondary"
              value={props.volume}
              onChange={props.onVolume}
            />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
        <FormControl>
          <FormControlLabel
            value="bank"
            control={
              <Switch
                checked={props.bank}
                onChange={props.onBank()}
                color="default"
              />
            }
            label="Bank"
            labelPlacement="bottom"
          />
        </FormControl>
      </Box>
    </Container>
  );
};
