import { Container } from '@mui/material';
import React from 'react'
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services';

const Home = () => {
  return (
    <Container>
      <Navigation/>
      <Services/>
    </Container>
  )
}

export default Home;