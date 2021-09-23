import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Wrapper = styled.div`
    padding:20px;;
    width:40%;
    background-color:white;
`

const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`

const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
`
const Agreement = styled.span`
    font-size:12px;
    margin:20px 0px;
`
const Button = styled.button`
        width:40%;
        border:none;
        cursor:pointer;
`
const Link = styled.a`
        
`

function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>FORGOT PASSWORD</Link>
                    <Link>CREATE ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
