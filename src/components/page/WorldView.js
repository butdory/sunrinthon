import React from 'react';
import styled from 'styled-components';
import Footer from '../semantic/Footer';
import Header from './../semantic/Header';

const WorldViewStyle = styled.div`

`

const WorldView = () => {
    return (
        <WorldViewStyle>
            <Header /> 
            <Footer />            
        </WorldViewStyle>
    );
};

export default WorldView;