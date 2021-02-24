import React from 'react';
import styled from 'styled-components'
import {StarBorder, Info} from '@material-ui/icons';



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
                    Details <Info/>
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
    padding-left: 12px;
    align-items:center;

`

const Channel = styled.div`

`
const Details = styled.div`
    position:absolute;
    right: 0;
    padding-right: 16px;
`


const ChannelName = styled.div``

const ChannelTopic = styled.div``