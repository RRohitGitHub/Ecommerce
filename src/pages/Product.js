import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container  = styled.div`

`

const Wrapper  = styled.div`

`

const ImageContainer  = styled.div`

`

const InfoContainer  = styled.div`

`

const Image  = styled.img`

`


function Product() {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image />
                </ImageContainer>
                <InfoContainer>
                    <Title></Title>
                    <Desc></Desc>
                    <Price></Price>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
