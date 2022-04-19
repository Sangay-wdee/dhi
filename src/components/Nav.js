import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <Container> 
            <Image src="/images/dhilogo.png" alt="" />
            
            <SubText>
               <h4>DE-SUUNG NATIONAL SERVICE WATER PROJECT</h4>
            </SubText> 
            <SubTitle>
                <p>Gyelpozshing Integrated Water Supply Pilot Project</p>
            </SubTitle> 
            <List>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/scadadashpage'>SCADA Display</NavLink></li>
                    <li><NavLink to='/vcpage'>Valve Controller</NavLink></li>
                    <li><NavLink to='/wfmpage'>Water Flow Display</NavLink></li>

                    {/* <li><a href="{HomeContent.js}">Home</a></li>
                    <li><a href="#">SCADA Display</a></li>
                    <li><a href='{WFMPage.js}'>Valve Controller</a></li>
                    <li><a href="#">Water Flow Display</a></li> */}
                </ul>
            </List>
            <ListSub>
                <ul>
                    <li style={{fontWeight: 'bold', fontFamily: 'Montserrat'}}>Contact Details</li>
                    <li style={{fontFamily: 'Roboto', color: 'white', opacity:'80%', fontSize:'12px'}}>Random@gmail.com</li>
                    <li style={{fontFamily: 'Roboto', color: 'white', opacity:'80%', fontSize:'12px'}}>12345678</li>
                </ul>
            </ListSub>
            <LastDiv>
                <p>Drive, Innotech Dept DHI</p>
            </LastDiv>
        </Container> 
    )
}
const Container = styled.div`
     width: 100%;
     height: 100vh;
     display: flex;
     flex: 1;
     justify-content: space-around;
     flex-wrap: wrap;
     align-items: center;
     background-color: #132c4e;

`
const Image = styled.img`
        height: 75px;
        width : 100px;
      margin-top: -20px;
      background-color: #132c4e;
`
const SubText = styled.h4`
      color: white;
      margin-top: -15px;
      background-color: #132c4e;
      font-family: montserrat;
      padding:0 1rem;

`
const SubTitle= styled.p`
      color: white;
      opacity: 80%;
      width:180px;
      margin-top: -30px;
      font-family: 'Montserrat', sans-serif;
      font-size: 12px;
`
const List = styled.div`
      display: block;
      text-align: left;
      margin: 0 auto;
      width: 90%;
      background-color: #132c4e;
      font-family: 'Roboto', sans-serif;

      ul{
          list-style: none;
          width: 150px;
          li {
                margin-bottom: 5px;
                a {
                text-decoration: none;
                color: white;
                opacity: 80%;
                }
                
                
          } 
      }
      ul{
          li a:hover{
              color: white;
              padding-left: 10px;
              font-weight: bold;
              opacity: 100%;
          }
          li a:active{
              color: white;
          }
      }
`
const ListSub = styled.div`
     display: block;
      text-align: left;
      margin: 0 auto;
      width: 90%;
      ul{
          list-style: none;
          color: white;
          li{
            margin-bottom: 5px;
          }
      }
`
const LastDiv = styled.p`
      color: white;
      font-size: 14px;
      width: 100%;
      height: 29px;
      align-items: center;
      background-color: #091628;
      display: flex;
      justify-content: center;
      margin-bottom: -24px;
      font-family: 'Roboto', sans-serif;  
`
export default Nav;

