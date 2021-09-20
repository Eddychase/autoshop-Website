import React from 'react'
import styled from "styled-components"
import Section from './Section'


function Home() {
    return (
        <Container>
            <Section
                title="AMG GT 2021 Model"
                description="Mercedes With A Touch of Class"
                backgroundImg="amg-gt-01.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory" />


            <Section
                title="EQS 2021 Model"
                description="The Future Is In Our Hands"
                backgroundImg="EQS-2.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory" />

            <Section
                title="Dodge 2019 Model"
                description="Muscle Keeps You In Charge"
                backgroundImg="dodge-01.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory" />

            <Section
                title="BMW i8 2020 Model"
                description="Leave Everything In The Rear View"
                backgroundImg="BMW-i8-01.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory" />

            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories-01.jpg"
                leftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
            height:100vh;

`
