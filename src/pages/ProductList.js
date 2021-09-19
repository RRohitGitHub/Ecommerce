import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div`
`

const Title = styled.h1`
    margin:20px;
`

const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;

`

const Filter = styled.div`
    margin:20px;
`

const FilterText = styled.span`
    font-size:20px;
`
const Select = styled.select`
    margin-left:10px;
    padding:10px;
`

const Option = styled.option`

`

function ProductList() {
    return (
        <Container>
            <Navbar/>
            <Annoucement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select>
                        <Option selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Green</Option>
                        <Option>Yellow</Option>
                        <Option>Red</Option>
                        <Option>Pink</Option>
                    </Select>
                    <Select>
                        <Option selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select>
                        <Option selected>Price</Option>
                        <Option>Newest</Option>
                        <Option>Price(asc)</Option>
                        <Option>Price(desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
