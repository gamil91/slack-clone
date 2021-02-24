import React from 'react';
import styled from 'styled-components'
import {StarBorder, InfoOutlined} from '@material-ui/icons';



const Chat = () => {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # baby cocoons<StarBorder/>
                    </ChannelName>
                    <ChannelTopic>
                        Your go to debugging team
                    </ChannelTopic>
                </Channel>

                <Details>
                    Details <InfoOutlined/>
                </Details>
            </Header>


        </Container>

    );
}

export default Chat;

const Container = styled.div`
    
    `
    
const Header = styled.div`
    border-bottom: 1px solid #bec4c2;
    height: 64px;
    display: flex;
    padding-left: 20px;
    align-items:center;

`

const Channel = styled.div`
    
`
const Details = styled.div`
    display:flex;
    color:#8b9e9e;
    position:absolute;
    right: 0;
    padding-right: 16px;
    
`


const ChannelName = styled.div`
    font-weight: bold;
    display:flex;
    font-size: 19px;
`

const ChannelTopic = styled.div`
    color:#8b9e9e;
`