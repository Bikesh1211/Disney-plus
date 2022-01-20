import React from 'react';
import styled from 'styled-components';

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="https://gh.cdn.sewest.net/assets/ident/news/e80b73da/Avenger_Blog_IronMan_Imagery4-ho31fqax6.jpg?quality=65&width=66%25&height=66%25" />
            </Background>

                <ImageTitle>
                        <img src='https://logos-world.net/wp-content/uploads/2020/12/Iron-Man-Logo-2008.png'/>
                </ImageTitle>


                        <Controls>
                            <PlayButton>
                                <img src='images/play-icon-black.png'/>
                                <span>PLAY</span>
                            </PlayButton>

                            <TrailerButton>
                            <img src='images/play-icon-white.png'/>
                            <span>TRAILER</span>

                            </TrailerButton>
                            <AddButton>
                                {/* <img src=''/> */}
                                <span>+</span>
                            </AddButton>

                            <GroupWatchButton>
                                <img src='images/group-icon.png'/>

                            </GroupWatchButton>
                        </Controls>

                        <SubTitle>
                            Iron man 2008 
                        </SubTitle>
                        <Description>
                            The first MCU movies ever made
                        </Description>
            
        </Container>
    );
}

export default Detail;




const SubTitle = styled.div`
color: rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;

`

const Description = styled.div`
line-height:1.4%;
font-size: 20px;
margin-top: 16px;


`



const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
display: flex;
align-items: center;
height: 56px;
background: rgb(249,249,249);
border: none;
padding: 0px 24px;
margin-right: 22px;
letter-spacing: 1.8px;
cursor: pointer;

        &:hover{
                background: rgb(198,198,198);
        }

`
const TrailerButton = styled(PlayButton)`
                background: rgb(0,0,0,0.3);
                border: 1px solid rgb(198,198,198);
                color: rgb(198,198,198);

`

const AddButton = styled.button`
width: 44px;
height: 44px;
align-items: center;
justify-content:center;
border-radius:50%;
border:2px solid white;
background: rgb(0,0,0,0.3);
color: rgb(198,198,198);


cursor: pointer;

display:flex;
            span{
                font-size:30px;
            }

`

const GroupWatchButton = styled(AddButton)`

            margin-left:20px;

`

const Controls = styled.div`
display: flex;
display:flex;
align-items: center;   

`

const ImageTitle = styled.div`
                height: 30vh;
                min-height: 170px;
                width: 35px;
                min-width: 200px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    
                }


`

const Container = styled.div`

            min-height: calc(100vh -70px);
            padding: 0 calc(3.5vw + 5px);
            position: relative;
            
`
const Background = styled.div`
            position: fixed;    
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
            opacity: 0.8;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

`
