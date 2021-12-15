import React from 'react';
import {Card,CardHeader,CardContent,Typography} from '@material-ui/core';
import {Doughnt} from 'react-chartjs-2';
import useStyles from './styles';
const Details = ({title}) => {
    const classes= useStyles();
  return (
    <Card className={title ==='Income'? classes.income:classes.expense}>
        <CardHeader title={title}/>
        <CardContent>
            <Typography variant="h5">Rs50</Typography>
            {/* <Doughnt data="DATA"/> */}
        </CardContent>
    </Card>
  )
}

export default Details