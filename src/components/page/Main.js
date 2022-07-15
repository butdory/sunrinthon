import React from 'react';
import styled from 'styled-components';

import Header from './../semantic/Header';
import Footer from './../semantic/Footer';

const MainStyle = styled.div`

`

const Main = () => {
    return (
        <MainStyle>
            <Header />
            <img className='back_img' src="/img/background_img.webp" width="100%" alt="test" />
            <Footer /> 
        </MainStyle>
    );
};

export default Main;