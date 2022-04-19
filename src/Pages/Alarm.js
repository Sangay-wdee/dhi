import React from 'react'
import TopComponent from '../components/TopComponent'
import Nav from '../components/Nav'
import styled from 'styled-components'
import { useState } from 'react'

const Alarm = () => {

    const hello = 90;
const[val,setVal] = useState(10)

    const alarm = (n) =>{
        if(n<5 || n>20){
            
        var audio = new Audio("http://psychic3d.free.fr/extra_fichiers/sons/alerte3.wav");
        audio.play(); 
        }
    }

    const pause = () =>{
        setVal(10);
    }

    alarm(val);
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
               <div className="comp">
               <div className={`${val<5 || val>20? 'blink':'normal'}`} >
                    <h1>{`${val<5 || val>20 ? 'Problem in : Valve 1':'No issue'}`}</h1>
                </div>
              
                <div className='normal-style'>
                    <h1>Valve Reading</h1>
                    <h2>{`${hello}`}</h2>
                </div>
                <button className="btn" onClick={pause}> Acknowledged</button>
               </div>
               <div className="comp">

               <div className='normal' >
                    <h1>No issue</h1>
                </div>
              
                <div className='normal-style'>
                    <h1>Valve Reading</h1>
                    <h2>10</h2>
                </div>
                <button className="btn" onClick={pause}> Acknowledged</button>
               </div>
               <div className="comp">
               <div className='normal' >
                    <h1>No issue</h1>
                </div>
              
                <div className='normal-style'>
                    <h1>Valve Reading</h1>
                    <h2>17</h2>
                </div>
                <button className="btn" onClick={pause}> Acknowledged</button>
               </div>
                </PageContent>
            </ChildComponent>
        </ParentComponent>
    )
}
const ParentComponent = styled.div`
       width: 100%;
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
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-evenly;
       /* any changes*/
`
export default Alarm
