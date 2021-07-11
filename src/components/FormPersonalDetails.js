import React, { useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const FormPersonalDetails = (props) => {

      const { values, handleChange } = props;

    const [occuErr, setOccuErr] = useState(false);
    const [cityErr, setCityErr] = useState(false);

  const continueBtn = (e) => {
    e.preventDefault();

    if (values.occupation === "") {
      setOccuErr(true);
    } else if (values.city === "") {
      setCityErr(true);
    }else{
    props.nextStep();
    }
  };

  const backBtn = (e) => {
    e.preventDefault();
    props.prevStep();
  };



  const classes = useStyles();

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar position="static" style={{ marginBottom: 15 }}>
          <Typography variant="h6" color="inherit" className={classes.root}>
            Enter User Personal Details
          </Typography>
        </AppBar>

        <TextField
          placeholder="Lawyer"
          label="Occupation"
          required
          error={occuErr}
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          placeholder="Lahore"
          label="City"
          required
          error={cityErr}
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          placeholder="I make things great."
          label="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
        <Button variant="contained" style={styles.button} onClick={backBtn}>
          Back
        </Button>
        <Button
          variant="contained"
          style={styles.button}
          color="primary"
          onClick={continueBtn}
        >
          Continue
        </Button>
      </React.Fragment>
    </MuiThemeProvider>
  );
};
const styles = {
  button: {
    margin: 15,
  },
};

export default FormPersonalDetails;
