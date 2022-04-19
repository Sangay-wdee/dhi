import React from 'react'
import styled from 'styled-components'
import TopComponent from '../components/TopComponent'
import Nav from '../components/Nav'
import HomeDash from '../components/HomeDash'
import HomeDashOption2 from '../components/HomeDashOption2'

const Home = () => {
    return (
        <ParentComponent>
            <NavComponent>
               <Nav />
            </NavComponent>
            <ChildComponent>
                <TopHeader>
                    <TopComponent />
                </TopHeader>
                    
                <PageContent>
                    <HomeDashOption2 />
                    {/* <HomeDash /> */}
                </PageContent>
            </ChildComponent>
        </ParentComponent>
    )
}
const ParentComponent = styled.div`
       width: fit-content;
       height: 100vh;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       background-color: #e6e6e6;
       
`
const ChildComponent = styled.div`
       display: flex;
       flex-direction: column;
       justify-content: space-around;
       padding:1rem;
`
const NavComponent = styled.div` 
        flex:20% auto;
        width:100%;
        height: 100%;
     
       /* any changes*/
`
const TopHeader = styled.div` 
         padding:0.5rem 0;
       /* any changes*/
`
const PageContent = styled.div` 
       /* any changes*/
`
export default Home
