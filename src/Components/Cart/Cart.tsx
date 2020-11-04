import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Avatar, IconButton, Grid, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { StateType } from '../../API/state';
import { deleteItem } from '../../API/store';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    demo: {
        width: '60%',
        backgroundColor: theme.palette.background.paper,
    },
}));

interface Props {
    
}

const Cart = (props: Props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { cart, product } = useSelector((state: StateType) => {
        return { cart: state.cart, product: state.product }
    });
    const dispatch = useDispatch();
    // const { item, product, deleteItem } = useContext(GlobalContext);

    const getTotal = (products: StateType['cart']) => {
        return products.reduce((total, items) => total + product[items.product].price, 0)
    }

    return (cart.length !== 0 ?
        <Grid container item direction='column' justify='flex-start' alignItems='center' xs={12} lg={12} style={{ padding: '25px' }}>
            <Typography variant='h4'>Bill: ${getTotal(cart)}</Typography>
            <div className={classes.demo}>
                <List>
                    {cart.map((items) =>
                        (
                            <ListItem key={items.id} style={{ height: '100px' }}>
                                <ListItemAvatar>
                                    <Avatar style={{ height: '64px', width: '64px' }}>
                                        <img src={product[items.product].img} alt={product[items.product].name} style={{ height: '64px', width: '64px' }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Button onClick={() => navigate(`/products/${items.product}`)}>
                                            <Typography variant='h6'>
                                                {product[items.product].name}  (${product[items.product].price})
                                          </Typography>
                                        </Button>
                                    }
                                    style={{ textAlign: 'center' }}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteItem(items.id))}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    )}{console.log(cart)}
                </List>
            </div>
        </Grid> : <Grid container item direction='column' justify='center' alignItems='center' xs={12} lg={12} style={{ padding: '25px', height: '90vh' }}><Typography variant='h4'>Nothing to show :'(</Typography></Grid>
    );}

export default Cart
