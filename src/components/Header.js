import React from 'react';
import styled from 'styled-components'

const Header = () => {
    return (
        <Nav>

                <Logo src="images/logo.svg"/>

                <NavMenu>
                    <a>
                        <img src='/images/home-icon.svg' />
                        <span>Home</span>
                    </a>
                    <a>
                        <img src='/images/search-icon.svg' />
                        <span>Search</span>
                    </a>
                    <a>
                        <img src='/images/watchlist-icon.svg' />
                        <span>Whatlist</span>
                    </a>
                    <a>
                        <img src='/images/original-icon.svg' />
                        <span>Original</span>
                    </a>
                    <a>
                        <img src='/images/movie-icon.svg' />
                        <span>Movies</span>
                    </a>
                    <a>
                        <img src='/images/series-icon.svg' />
                        <span>Series</span>
                    </a>

                </NavMenu>

                    <UserImg src='https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/269694322_3114941648826214_3314068302110756398_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=q4cIYKsNdBkAX8tjKTO&tn=mhzU9cicOmIWZmsI&_nc_ht=scontent.fktm8-1.fna&oh=00_AT-LlduRjiZgxTX0uutn1Y4woeT0cKdQsnMTlXo_WeFq1A&oe=61EDBB30' alt='user' />

        </Nav>
    );
}

export default Header;

const Nav = styled.div`
overflow-x: hidden;
height: 70px;
background-color: #090b13;
display: flex;
align-items: center;
padding: 0 36px;
`
const Logo = styled.img`
width: 80px;

`

const NavMenu = styled.div`
        display: flex;
        flex: 1;
        margin-left: 25px;
        align-items: center;
        

        a{
            display: flex;
            align-items: center;
            padding: 0 12px;
            cursor: pointer;
        
        img{
            height: 20px;

        }

        span{
            font-size: 14px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content:  "";
                height: 2px;
                background-color: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
                transform: scaleX(0);
                
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;

    background-color: white;


`