import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

import { Add, Remove } from '@material-ui/icons'

const Container  = styled.div`

`

const Wrapper  = styled.div`
    padding:50px;
    display:flex;
`

const ImageContainer  = styled.div`
    flex:1;
`

const InfoContainer  = styled.div`
    flex:1;
    padding:0px 50px;
`

const Image  = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
`
const Title  = styled.h1`
    font-weight:200
`

const Desc  = styled.p`
    margin:20px 0px;
`

const Price  = styled.span`
    font-weight:100;
    font-size:40px;
`
const FilterContainer = styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    width:50%;
`
const Filter = styled.div`
    display:flex;
    align-item:center;
`

const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`

const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin:0px 5px;
`

const FilterSize = styled.select`
    padding:5px;
    margin-left:5px;
`

const FilterSizeOption = styled.option`
    
`

const AddContainer = styled.div`
    display:flex;
    align-items:center;
    width:50%;
    justify-content:space-between;
`

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`

const Amount = styled.span`
    width:30px;
    height:30px;
    border-radisus:10px;
    border:1px solid;
    display:flex;
    align-items:center;
    justify-content:center;
    
`


const Button = styled.button`
    padding:15px;
    border:1px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;
`

function Product() {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                    iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                    
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
