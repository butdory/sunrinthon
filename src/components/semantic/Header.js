import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.div`
    :hover{
        background-color: black;
        color: white;
        transition: background-color,color 0.3s;
    }
    :hover a{
        background-color: black;
        color: white;
        transition: background-color,color 0.3s;
    }
    a{
        color: black;
    }

    position: sticky;
    top: 0px;
    background-color: transparent;
    color: black;
    font-size: 1.5em;

    transition: color, background-color 0.3s;
    
    .Header_Main{
        display: flex;
    }
    .Header_Main_Left{
        flex:1;
    }
    .Header_Main_Left_Outer_Ul{
        text-align: center;
        display: flex;
    }
    .Header_Main_Left_Outer_Ul > li{
        padding: 2vh 1.5vh 2vh 1.5vh;
    }
    .Header_Main_Right_Outer_Ul > li{
        padding: 2vh 1.5vh 2vh 1.5vh;
    }
    [class *= Header_Main_Left_Inner_Ul]{
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s;
    }
    [class *= Header_Main_Left_Inner_Ul] > li > a, [class *= Header_Main_Left_Inner_Ul] > li {
        color: #ccc;
        padding-top: 1.5vh;
    }
    .Header_Main_Left_Outer_Ul li:nth-of-type(n):hover [class *= Header_Main_Left_Inner_Ul]{
        cursor: pointer;
        max-height: 100%;
        transition: max-height 0.3s;
        user-select: none;
    }
    .Header_Main_Right_Outer_Ul{
        display: flex;
    }
    [class *= Title]{
        cursor: pointer;
        user-select: none;
    }
    
`

const Header = () => {
    useEffect(() => {
        console.log(document.getElementsByClassName('back_img'))
    },)
    const test = () => {
        console.log("test");
    }
    return (
        <HeaderStyle>
            <div onScroll={test} className='Header_Main'>
                <div className='Header_Main_Left'>
                    <ul className='Header_Main_Left_Outer_Ul'>                        
                        <li>
                            <Link to={'/'} className='Header_Main_Left_Inner_Logo Title white'>Logo</Link>
                        </li>
                        <li>
                            <h3 className='Header_Main_Left_Inner_Title_0'>새소식</h3>
                            <ul className='Header_Main_Left_Inner_Ul_0'>
                                <li><Link to={'/Notice'}>공지사항</Link></li>
                                <li><Link to={'/Update'}>업데이트</Link></li>
                                <li><Link to={'/Event'}>이벤트</Link></li>
                            </ul>
                        </li>
                        <li>
                            <h3 className='Header_Main_Left_Inner_Title_1'>게임소개</h3>
                            <ul className='Header_Main_Left_Inner_Ul_1'>
                                <li><Link to={'/WorldView'}>세계관</Link></li>
                                <li><Link to={'/Class'}>캐릭터</Link></li>
                                <li><Link to={'/Contents'}>콘텐츠</Link></li>
                            </ul>
                        </li>
                        <li>
                            <h3 className='Header_Main_Left_Inner_Title_2'>가이드</h3>
                            <ul className='Header_Main_Left_Inner_Ul_2'>
                                <li><Link to={'/GameGuide'}>게임 가이드</Link></li>
                                <li><Link to={'/ItemDictionary'}>아이템 사전</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='Header_Main_Center'>
                    
                </div>
                <div className='Header_Main_Right'>
                    <ul className='Header_Main_Right_Outer_Ul'>
                        <li>
                            <h3 className='Header_Main_Right_Inner_Title_1'><a className='white' href="https://firebasestorage.googleapis.com/v0/b/sunrinthon-2dc09.appspot.com/o/DiscordSetup.exe?alt=media&token=9775f415-06c4-44cf-a193-38654639815c">Game Start</a></h3>
                        </li>
                    </ul>
                </div>
            </div>
        </HeaderStyle>
    );
};

export default Header;