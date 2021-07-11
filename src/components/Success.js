import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";


const Success = () => {



const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));
const classes = useStyles();

  return (
    <MuiThemeProvider>
      <AppBar position="static" style={{ marginBottom: 15 }}>
        <Typography variant="h6" color="inherit" className={classes.root}>
          Success
        </Typography>
      </AppBar>

      <Typography variant="h6" color="inherit" className={classes.root}>
        Thank You for your form submission
      </Typography>

    </MuiThemeProvider>
  );
};

export default Success;
