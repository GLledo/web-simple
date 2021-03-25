import React from 'react';
import '../../../App.css'
import  {Button}  from '../button/Button';
import './home.css';
import Cards from '../cards/Cards'
import Footer from '../footer/Footer'

function Home() {
  return (
    <>
        <div className='hero-container'>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
            GET STARTED
            </Button>
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
            >
            WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>
        </div>
        <Cards></Cards>
        <Footer></Footer>
    </>
  );
}

export default Home;