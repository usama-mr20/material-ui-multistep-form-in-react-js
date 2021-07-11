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

const FormUserDetails = (props) => {
  const { values, handleChange } = props;
  const [fNameErr, setFNameErr] = useState(false);
  const [lNameErr, setLNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  

  const continueBtn = (e) => {
    e.preventDefault();

    if (values.firstName === "") {
      setFNameErr(true);
    } else if (values.lastName === "") {
      setLNameErr(true);
      
    }else if (values.email === "") {
      setEmailErr(true);
    }else{
      props.nextStep();
    }
  };

  const classes = useStyles();

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar position="static" style={{ marginBottom: 15 }}>
          <Typography variant="h6" color="inherit" className={classes.root}>
            Enter User Details
          </Typography>
        </AppBar>

        <TextField
          placeholder="John "
          label="First Name"
          required
          error={fNameErr}
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          placeholder="Wick"
          label="Last Name"
          required
          error={lNameErr}
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          placeholder="john@youremail.com"
          label="Email"
          required
          error={emailErr}
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
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

export default FormUserDetails;
