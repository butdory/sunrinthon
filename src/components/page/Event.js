import React from 'react';
import styled from 'styled-components';

import Header from './../semantic/Header';
import Footer from './../semantic/Footer';

const EventStyle = styled.div`

`

const Event = () => {
    return (
        <EventStyle>
            <Header />
            <Footer />
        </EventStyle>
    );
};

export default Event;