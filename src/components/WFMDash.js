import React from 'react'
import styled from 'styled-components'

const WFMDash = () => {  
  return (
        <ParentDiv>
            <FirstClild>
                <FirstClildDivision1>
                        <FristDiv1>
                                <p>Select Zone</p>
                        </FristDiv1>
                        <FirstDiv2> 
                                <p style={{ fontFamily: 'Montserrat', color: '#193b6b'
                            
                            }}>Flow Meter Display</p>
                                <select id="dropdown">
                                        <option disabled selected hidden>Select Zone</option>          
                                        <option value="">Source - ATP</option>
                                        <option value="">Source NTP</option>
                                        <option value="">GSR1 - Incomming</option>
                                        <option value="">GSR1 - Outgoing</option>
                                        <option value="">GSR2(A) - Incomming</option>
                                        <option value="">GSR2(B) - Incomming</option> 
                                        <option value="">GSR2 - Outgoing</option>
                                        <option value="">KST</option>
                                        <option value="">Chabjey</option>
                                        <option value="">Terrace</option>
                                        <option value="">Main Town</option>
                                        <option value="">School</option>
                                        <option value="">BHU</option>
                                        <option value="">RBP</option>
                                        <option value="">Small Town</option>
                                        <option value="">Small Town</option>
                                        <option value="">Small Town</option>
                                        <option value="">Small Town</option>
                                        <option value="">Small Town</option>
                                        <option value="">Small Town</option>
                                        <option value="">Small Town</option>
                                        <option value="">Small Town</option>
                                        <option value="">Small Town</option>
                                        <option value="">Small Town</option>
                                        <option value="">Small Town</option>
                                </select>
                                <DisplayBox>
                                    <DisplayBox1>
                                        <p>Flow Rate</p>
                                        <input type="text" onkeydown="return false"></input>
                                    </DisplayBox1>
                                    <DisplayBox2>
                                        <p>Total Flow</p>
                                        <input type="text" value="" onkeydown="return false"></input>
                                    </DisplayBox2>
                                </DisplayBox>
                        </FirstDiv2>
                        <Instruction>
                            <p>Choose the zone to view its Flow Meter Readings</p>
                        </Instruction>
                </FirstClildDivision1>
              
            </FirstClild>
            <SecondChild>
                <SecondChildDivision3>
                    <SecondClildDivicion1>
                        <SecondChildDiv1>
                            <p>Tank Water Level</p>
                        </SecondChildDiv1>
                        <Tank1Name>
                            <p>GSR1</p>  
                        </Tank1Name>
                        <GRS1MainDiv>
                            <p style={{ fontFamily: 'Montserrat',color: '#193b6b'}}>Water Level</p>
                            <GRS1DisplayBox>
                                <GRS1SubDiv1>
                                    <p>Water Level</p>
                                    <input type="text" value="21" onkeydown="return false"></input>
                                </GRS1SubDiv1>
                                <GRS1SubDiv2>
                                    <p>Volume</p>
                                    <input type="text" value="12" onkeydown="return false"></input>
                                </GRS1SubDiv2>
                            </GRS1DisplayBox>
                        </GRS1MainDiv>
                    </SecondClildDivicion1>
                    <SecondChildDivision2>
                    <GRS2TankName>
                        <p>GRS2</p>
                    </GRS2TankName>
                    <SecondChild2SubDiv>
                            <WaterLevelDiv>
                                <WLevelDiv1>
                                        <p>Water Level</p>
                                </WLevelDiv1>
                                <WLevelDiv2>
                                        <p>Water Level</p>
                                        <input type="text" value="13" onkeydown="return false"></input>
                                </WLevelDiv2>
                                <WLevelDiv3>
                                        <p>Volume</p>
                                        <input type="text" value="16" onkeydown="return false"></input> 
                                </WLevelDiv3>
                            </WaterLevelDiv>
                            <QualityWater>
                                <QWFirstDiv>
                                    <p>Quality Of Water</p>
                                </QWFirstDiv>
                                <QWSecondDiv>
                                    <QWSecondDiv1>
                                        <PH>
                                            <p>PH</p>
                                            <input type="text" value="1.3" onkeydown="return false"></input> 
                                        </PH>
                                        <TDS>
                                            <p>TDS</p>
                                            <input type="text" value="1.1" onkeydown="return false"></input> 
                                        </TDS>
                                    </QWSecondDiv1>
                                    <QWSecondDiv2>
                                        <Cl>
                                            <p>Chlorine</p>
                                            <input type="text" value="1.2" onkeydown="return false"></input> 
                                        </Cl>
                                        <TBDT>
                                            <p>Turbidity</p>
                                            <input type="text" value="1.3" onkeydown="return false"></input> 
                                        </TBDT>
                                    </QWSecondDiv2>
                                </QWSecondDiv>
                            </QualityWater>
                    </SecondChild2SubDiv>
                </SecondChildDivision2> 
                </SecondChildDivision3>
                <SecondChildDivision4>
                <FirstClildDivision2>
                                <WaterLossDiv1>
                                            <p>Water Loss</p>
                                    </WaterLossDiv1>
                                    <WaterLossDiv2> 
                                            <DisplayBoxWL>
                                                <DisplayBoxWL1>
                                                    <p>Flow Rate</p>
                                                    <input type="text" value="5.5" onkeydown="return false"></input>
                                                </DisplayBoxWL1>
                                                <DisplayBoxWL2>
                                                    <p>Total Flow</p>
                                                    <input type="text" value="13" onkeydown="return false"></input>
                                                </DisplayBoxWL2>
                                            </DisplayBoxWL>
                                    </WaterLossDiv2>
                        </FirstClildDivision2>
                </SecondChildDivision4> 
            </SecondChild>
        </ParentDiv>
    )
} 

const Instruction = styled.div`
    color:white;
    font-family: 'Roboto',sans-serif;
    padding:2rem;
    opacity: 80%;
`
const SecondChildDivision3 = styled.div` 
    display: flex;
    flex:60%auto;
    flex-direction: column;
    margin:0 1rem;
`
const SecondChildDivision4 = styled.div` 
    display: flex;
    flex:40%auto;
    flex-direction: column;
`
const ParentDiv = styled.div`
     display: flex;
     justify-content: space-between;
     flex-direction: row;
     height:100%auto;
     width:auto;
`
const FirstClild = styled.div`
     height: 437px;
     width: auto;
     display: flex;
     flex:20%auto;
     box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
     background-color: #132c4e;
     border-radius: 40px;

   
`
const FirstClildDivision1 = styled.div`
     width: auto;     
`
const FristDiv1 = styled.p`
     height: 50px;
     width: auto;
     color: white;
     font-weight: bold;
     font-size: 20px;
     align-items: center;
     display:flex;
     justify-content: center;
     border-radius: 50px 50px 0 0 ;
     background-color: #132c4e;
     font-family: 'Montserrat', sans-serif; 
`
const FirstDiv2 = styled.div`
      display: flex;
      flex-wrap: wrap;
      background-color: white;
      border-radius: 40px;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      justify-content: space-around;
      align-items: center;
      margin-top: 10px;
      height:60%;
      
      p{
          font-size: 16px;
          font-weight: bold;
          color: #193b6b;
      }
      select{
        height: 30px;
        width: 170px;
        outline: none !important;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
        border-radius: 5px;
        font-weight: bold;
        text-align: center;
        border: none;
        color: #132c4e;
        font-family: 'Roboto', sans-serif;
          option {
                margin-bottom: 5px;
                text-align: center;
                border: 2px solid #BEBBBB !important;
                border-radius: 5px;
          } 
            option:hover{
              background-color:#BEBBBB;
          }
      }
      select:focus > option:checked { 
              background: #BEBBBB !important;
}     
`
const DisplayBox = styled.div`
       display: flex;
       flex-direction: row;
       justify-content: space-around;
       width:190px;
       height:60px;
      color: #1b75bc;
      font-family: 'Roboto', sans-serif;
`
const DisplayBox1 = styled.div`
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       p{
           font-size: 13px;
           font-weight: 100px;
           color: #1b75bc;
       }
       input{
        text-align: center;
        border-radius: 10px;
        background-color: #e6e6e6;
        border-width: 0;
        outline: none !important;
        width: 70px;
        height: 40px;
       }
       
`
const DisplayBox2 = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p{
           font-size: 13px;
           font-weight: 100px;
           color: #1b75bc;
       }
        input{
            text-align: center;
            border-radius: 10px;
            background-color: #e6e6e6;
            border-width: 0;
            outline: none !important;
            width: 70px;
            height: 40px;
       }

`
const FirstClildDivision2= styled.div`
     height: auto;
     width: 100%auto;     
`
const WaterLossDiv1 = styled(FristDiv1)`
     background-color: red;
     border-radius: 50px;
`
const WaterLossDiv2 = styled(FirstDiv2)`
      height: 167px;
     /* any changes*/
`
const DisplayBoxWL = styled(DisplayBox)`
     /* any changes*/
`
const DisplayBoxWL1 = styled(DisplayBox1)`
     /* any changes*/
`
const DisplayBoxWL2 = styled(DisplayBox2)`
     /* any changes*/
`
const SecondChild = styled.div`
     height: 100%auto;
     width: auto;    
     flex:80%auto;
     display: flex;
     flex-direction:row ;
    
`
const SecondClildDivicion1 = styled.div`
        width: 100%;
        height:auto;
`
const Tank1Name = styled.p`
    p{
        margin-top: 8px;
        font-family: Montserrat;
        color: #193b6b;
        font-weight: bold;
     }
`
const SecondChildDiv1 = styled(FristDiv1)`
     width: auto;
     border-radius: 50px;
     
`
const GRS1MainDiv = styled(FirstDiv2)`
     font-size: 16px;
     font-weight: bold;
     height: 110px;
     width: auto;
     flex-direction: column;
     p{
         color: black;
     }

`
const GRS1DisplayBox = styled(DisplayBox)`
       width: 500px;     
`
const GRS1SubDiv1 = styled(DisplayBox1)`
       p{
        color: #1b75bc;
       }
       input{
           width: 150px;
       }

`
const GRS1SubDiv2 = styled(DisplayBox2)`
       p{
        color: #1b75bc;
       }
       input{
           width: 150px;
       }
`

const SecondChildDivision2 = styled.div`
           display: flex;
           flex-direction: column;
           width: 100%;
           height:auto;
`
const GRS2TankName = styled(Tank1Name)`
margin-bottom: 8px;
          
`
const SecondChild2SubDiv = styled.div`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          
          
`
const WaterLevelDiv = styled(FirstDiv2)`
           flex: 1 1 0;
           flex-direction: column;
           height: 200px;
           width : auto;
           align-items: center;
         margin:0 1rem;
`
const WLevelDiv1 = styled.p`
     /* any changes*/
     font-family: Montserrat;
     color: #193b6b;
`
const WLevelDiv2 = styled(DisplayBox1)`
           p{
               margin-bottom: 4px;
               font-family: 'Roboto', sans-serif;
           }
           input{
               width: 90px;
           }     
`
const WLevelDiv3 = styled(WLevelDiv2)`
            p{
               margin-bottom: 4px;
           }
           input{
               width: 90px;
           }
`
const QualityWater = styled(FirstDiv2)`
    flex: 2 1 0;
     height: 200px;
     width: auto;
     flex-direction: column;
     margin:0 1rem;
`
const QWFirstDiv = styled(WLevelDiv1)`
      /* any changes*/
`
const QWSecondDiv = styled.div`
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-around;
      width: auto;
      height: 150px;
`
const QWSecondDiv1 = styled(QWSecondDiv)`
     flex-direction: column;
     width: auto;
     justify-content: space-between;
`
const QWSecondDiv2 = styled(QWSecondDiv1)`
       /* any changes*/
`
const PH = styled(WLevelDiv2)` 
     input{
       width: 75px;        
     }
     padding:0 1rem;
      
`
const TDS = styled(PH)` 
     /* any changes*/
`
const Cl = styled(PH)` 
     /* any changes*/ 
`
const TBDT = styled(PH)` 
    /* any changes*/
`
export default WFMDash