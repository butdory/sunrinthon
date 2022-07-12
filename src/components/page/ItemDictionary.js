import React from 'react';
import styled from 'styled-components';
import Footer from '../semantic/Footer';
import Header from '../semantic/Header';

const ItemDictionaryStyle = styled.div`

`

const ItemDictionary = () => {
    return (
        <ItemDictionaryStyle>
            <Header />
            <Footer />
        </ItemDictionaryStyle>
    );
};

export default ItemDictionary;