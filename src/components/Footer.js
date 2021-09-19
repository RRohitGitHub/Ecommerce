import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import { FacebookOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1`

`

const Description = styled.p`
    margin:20px 0px;
`

const SocialContainer = styled.div`
    display:flex;
`

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    cursor:pointer;
`

const Right = styled.div`
    flex:1;
    padding:20px;
`
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`

const Payment = styled.img`
    width:50%;
`

const Center = styled.div`
    flex:1;
    padding:20px;
`

const Title = styled.h3`
    margin-bottom:30px;
`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;

`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>ROHIT PARAB</Logo>
                <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?   
                </Description>
                <SocialContainer>
                    <SocialIcon color="#4267B2">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="#8a3ab9">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="#1DA1F2">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="#E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Usefull Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}} /> +1 234 56 78</ContactItem>
                <ContactItem><MailOutlined style={{marginRight:"10px"}}/> rohitparab213@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer