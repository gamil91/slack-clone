import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import {StarBorder, InfoOutlined} from '@material-ui/icons';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import { useParams } from 'react-router-dom'


const Chat = () => {

    let { channelId } = useParams();
    const [ channel, setChannel ] = useState();

    const getChannel = () => {
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snap)=> {
            setChannel(snap.data())
        })
    }

    useEffect(() => {
        getChannel()
    }, [channelId])

    console.log(channel)
    // debugger
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # {channel.name}<StarBorder/>
                    </ChannelName>
                    <ChannelInfo>
                        Your go to debugging team
                    </ChannelInfo>
                </Channel>

                <Details>
                    <div>
                    Details 
                    </div>
                    <InfoIcon/>
                </Details>
            </Header>

            <MessageContainer>

                <ChatMessage/>

            </MessageContainer>

            <ChatInput/>

        </Container>

    );
}

export default Chat;

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
    `
    
const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items:center;
    border-bottom: 1px solid rgba(83, 39, 83,.13);
    justify-content: space-between;
`

const Channel = styled.div`
    
`
const Details = styled.div`
    display:flex;
    align-items:center;
    color:#606060;
    padding-right: 16px;
`

const ChannelName = styled.div`
    font-weight: 700;
    display:flex;
    font-size: 19px;
`

const ChannelInfo= styled.div`
    font-weight: 400;
    color:#606060;
    font-size: 13px;
    margin-top: 8px;
`

const InfoIcon = styled(InfoOutlined)`
    margin-left: 10px;
`

const MessageContainer = styled.div`
`

