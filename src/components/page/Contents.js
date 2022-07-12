import React from 'react';
import styled from 'styled-components';
import Header from '../semantic/Header';
import Footer from './../semantic/Footer';

const ContentsStyle = styled.div`
`

const Contents = () => {
    return (
        <ContentsStyle>
            <Header />
            <Footer />
        </ContentsStyle>
    );
};

export default Contents;