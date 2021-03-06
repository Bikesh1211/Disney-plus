import React from 'react';
import styled from 'styled-components';

const Movies = () => {
    return (
        <Container>

            <h1>Recommended for You</h1>

            <Content>

                <Wrap>
                    <img src='https://wallpapercave.com/wp/AFtCNLt.jpg' />
                </Wrap>

                <Wrap>
                    <img src='https://wallpapercave.com/wp/AFtCNLt.jpg' />
                </Wrap>

                <Wrap>
                    <img src='https://wallpapercave.com/wp/AFtCNLt.jpg' />
                </Wrap>

                <Wrap>
                    <img src='https://wallpapercave.com/wp/AFtCNLt.jpg' />
                </Wrap>
                <Wrap>
                    <img src='https://wallpapercave.com/wp/AFtCNLt.jpg' />
                </Wrap>

                <Wrap>
                    <img src='https://wallpapercave.com/wp/AFtCNLt.jpg' />
                </Wrap>

                <Wrap>
                    <img src='https://wallpapercave.com/wp/AFtCNLt.jpg' />
                </Wrap>

                <Wrap>
                    <img src='https://wallpapercave.com/wp/AFtCNLt.jpg' />
                </Wrap>
                
            </Content>

            
            
        </Container>
    );
}

export default Movies;

const Container = styled.div`

`
const Content = styled.div`
        display: grid;
        grid-gap: 25px;
        grid-template-columns: repeat(4, minmax(0, 1fr));

`
const Wrap = styled.div`
                cursor: pointer;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                border: 3px solid rgba(249,249,249,0.1);

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;

                }
                &:hover{
                    transition: scale(1.05);
                    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
                    border-color: rgba(249,249,249,0.8);
                }

`
