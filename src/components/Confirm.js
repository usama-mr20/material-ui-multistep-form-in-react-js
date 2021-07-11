import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  table: {
    minWidth: 300,
  },
}));

const Confirm = (props) => {
  const continueBtn = (e) => {
    e.preventDefault();

    //process form
    props.nextStep();
  };
  const backBtn = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const classes = useStyles();
  const { firstName, lastName, email, occupation, city, bio } = props.values;

  function createData(key, value) {
    return { key, value };
  }

  const rows = [
    createData("First Name", firstName),
    createData("Last Name", lastName),
    createData("Email", email),
    createData("Occupation", occupation),
    createData("City", city),
    createData("Bio", bio),
  ];

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar position="static" style={{ marginBottom: 15 }}>
          <Typography variant="h6" color="inherit" className={classes.root}>
            Confirm Your Details
          </Typography>
        </AppBar>

        <Container maxWidth="sm">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.key}
                    </TableCell>
                    <TableCell align="centre">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>

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
          Confirm & Continue
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

export default Confirm;
