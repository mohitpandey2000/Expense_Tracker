import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';


const CustomizedSnackbar = () => {
  return (
    <div className={classes.root}>
        <Snackbar
        anchorOrigin={{ vertical: 'top' , horizontal:'right'}}
        >

        </Snackbar>
    </div>
  )
}

export default CustomizedSnackbar