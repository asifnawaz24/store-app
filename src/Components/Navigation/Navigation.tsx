import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';


interface Props {
    
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const Navigation = (props: Props) => {
    const navigate = useNavigate();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    {/* <Link to="/"><Typography variant="h6" color="inherit">Home</Typography></Link> |{' '}
            <Link to="products/" color="inherit">Products</Link> |{' '}
            <Link to='cart/' color='inherit'>Cart</Link> */}
                    <Button color='inherit' onClick={() => navigate('/')}>Home</Button>
                    <Button color='inherit' onClick={() => navigate('products/')}>Products</Button>
                    <Button color='inherit' onClick={() => navigate('cart/')}>Cart</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navigation
