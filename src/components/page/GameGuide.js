import React from 'react';
import styled from 'styled-components';
import Footer from '../semantic/Footer';
import Header from '../semantic/Header';

const GameGuideStyle = styled.div`

`

const GameGuide = () => {
    return (
        <GameGuideStyle>
            <Header />
            <Footer />
        </GameGuideStyle>
    );
};

export default GameGuide;