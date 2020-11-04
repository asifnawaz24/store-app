import React, { useState } from 'react';
import { Grid, Slide, Typography } from '@material-ui/core';


interface Props {
    
}

const Home = (props: Props) => {
    const [nextSlide, setNextSlide] = useState<boolean>(false);
    const [nextSlide2, setNextSlide2] = useState<boolean>(false);
    const timeout: number = 650;

    return (
        <Grid container direction="column" justify="center" alignItems="center" style={{ height: '80vh' }}>
            <Slide direction='up' in={true} timeout={timeout} onEntered={() => setNextSlide(true)} mountOnEnter>
                <Typography variant='h2'>Welcome</Typography>
            </Slide>
            <Slide direction='up' in={nextSlide} timeout={timeout} onEntered={() => setNextSlide2(true)} mountOnEnter>
                <Typography variant='h2'>to</Typography>
            </Slide>
            <Slide direction='up' in={nextSlide2} timeout={timeout} mountOnEnter>
                <Typography variant='h2'>PIAIC Shoe Store</Typography>
            </Slide>
        </Grid>
    )
}

export default Home
