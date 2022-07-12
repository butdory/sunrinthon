import React from 'react';
import styled from 'styled-components';
import Header from './../semantic/Header';
import Footer from './../semantic/Footer';

const NoticeStyle = styled.div`

`

const Notice = () => {
    return (
        <NoticeStyle>
            <Header />
            <Footer />
        </NoticeStyle>
    );
};

export default Notice;