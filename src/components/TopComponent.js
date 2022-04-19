import React from 'react'
import styled from "styled-components"

function TopComponent() {
    return (
      <Wrap>
         <Image src="/images/desu-2.png" alt=""/> 
         <Text>
             <p>DE-SUUNG NATIONAL SERVICE WATER PROJECT</p>
         </Text>
         <Image2 src="/images/rogb.png" atl="" />
       </Wrap>
    )
}
const Wrap = styled.div`
      height: 100px;   
      width: 1000px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      border-radius: 40px;
      background-color: white;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`
const Image = styled.img`
      height: 100px;
      width: 100px;
` 
const Text = styled.p`
      width: 500px;
      font-size: 25px;
      color: black;
      margin-top: 15px;
      font-family: 'Montserrat', sans-serif; 
      font-weight: bold;
      color: #193b6b;
`
const Image2 = styled.img`
      height: 100px;
      width: 100px;
      margin-top: 7px;
`
export default TopComponent;
