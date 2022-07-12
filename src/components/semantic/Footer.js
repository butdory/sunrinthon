import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
    background-color: black;
    color: white;
    padding: 1.5vh 0 1.5vh 0;
    text-align: center;

    .Footer_Main_Contents > p{
        user-select: none;
    }
`

const Footer = () => {
    return (
        <FooterStyle>
            <div className='Footer_Main'>
                <div className='Footer_Main_Contents'>
                    <p>팀명. 지선아 수고했어 &nbsp;&nbsp; 팀장. 정원영 &nbsp;&nbsp; E. butdory04@gmail.com &nbsp;&nbsp; F. 010-4418-3724</p>
                </div>
            </div>
        </FooterStyle>
    );
};

export default Footer;