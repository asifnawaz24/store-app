import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import { StateType } from '../../API/state';
import { addItem } from '../../API/store';
import NotFound from '../NotFound/NotFound';

interface Props {
    
}

const ProductDetail = (props: Props) => {
    const { productID } = useParams();
    const product = useSelector((state: StateType) => state.product);
    const dispatch = useDispatch();

    if (!product[productID]) {
        return (<NotFound />)
    }

    const { name, price, img, description } = product[productID];

    const add = (slug: string) => {
        const newPurchase = {
            id: Math.floor(Math.random() * 100000000),
            product: slug,
        };
        dispatch(addItem(newPurchase));
    }

    return (
        <Grid container item direction='column' justify='flex-start' alignItems='flex-start' md={6} style={{ padding: '25px', margin: '0px auto' }}>
            <Grid container item direction='row' style={{ padding: '25px', margin: '0px auto' }}>

                <Grid item md={9}>
                    <Typography variant='h5'>
                        {name} (${price})
            </Typography>
                </Grid>

                <Grid item md={3} justify='flex-end'>
                    <Button variant="contained" onClick={() => { add(productID) }} ><Typography variant='button' >Add to cart</Typography></Button>
                </Grid>

            </Grid>

            <Grid item md={12} direction='row' justify='center'>
                <img src={img} alt={name} style={{ width: '100%', height: '600px' }} />
            </Grid>

            <Grid item md={11}>
                <Typography variant='h4'>Description:</Typography>
                <Typography variant='body1'>{description}</Typography>
            </Grid>

        </Grid>    )
}

export default ProductDetail
