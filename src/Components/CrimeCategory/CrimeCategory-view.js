import React from 'react';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '../Common/Input'


const style = theme => ({
    contain: {
        padding: theme.spacing.unit * 2,
    }
})

const CrimeCategoryView = props => {
    const { classes, search,toSearch,list } = props;
    return (
        <Grid container className={classes.contain} >
            <Grid item xs={12} >
                <Typography variant='display1' >CRIME CATEGORIES</Typography>
            </Grid>
            <Grid item xs={12} >
                <Input onChange={search} value={toSearch} label='Search' />
            </Grid>
            <Grid item xs={12} >
                <ol>
                    {list && list.map(item => {
                        return <li key={item.url} >{item.name}</li>
                    })}
                </ol>
            </Grid>
        </Grid>
    );
};

CrimeCategoryView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(CrimeCategoryView);