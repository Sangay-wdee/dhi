import React from 'react'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'
import { Reading } from './Reading'
const HomeDashOption2 = () => {
    return (
       <ParentWrapper>
           <TopDivWrapper>
                <TopLeftDivWrapper>
                    <TWLHeading>
                        <p>Tank Water Level</p>
                    </TWLHeading>
                    <TWLBar>
                              <Reading/>  
                    </TWLBar>
                </TopLeftDivWrapper>    
                <TopRightDivWrapper>
                     <FRDHeading>
                         <p>Flow Rate Display</p>
                     </FRDHeading>
                    <FRD> 
                        <FRDColumn1>
                                <ATPIncomming>
                                    <ATPName>
                                        <p>ATP</p>
                                    </ATPName>
                                    <Rate>
                                        <h4>21</h4>
                                    </Rate>
                                </ATPIncomming>
                                <ATPIncomming>
                                    <ATPName>
                                        <p>ATP</p>
                                    </ATPName>
                                    <Rate>
                                        <h4>21</h4>
                                    </Rate>
                                </ATPIncomming>
                                <ATPIncomming>
                                    <ATPName>
                                        <p>ATP</p>
                                    </ATPName>
                                    <Rate>
                                        <h4>21</h4>
                                    </Rate> 
                                </ATPIncomming>
                                <ATPIncomming>
                                    <ATPName>
                                        <p>ATP</p>
                                    </ATPName>
                                    <Rate>
                                        <h4>21</h4>
                                    </Rate>
                                </ATPIncomming>  
                                <ATPIncomming>
                                    <ATPName>
                                        <p>ATP</p>
                                    </ATPName>
                                    <Rate>
                                        <h4>21</h4>
                                    </Rate>
                                </ATPIncomming>
                                <ATPIncomming>
                                    <ATPName>
                                        <p>ATP</p>
                                    </ATPName>
                                    <Rate>
                                        <h4>21</h4>
                                    </Rate>
                                </ATPIncomming>
                                <ATPIncomming>
                                    <ATPName>
                                        <p>ATP</p>
                                    </ATPName>
                                    <Rate>
                                        <h4>21</h4>
                                    </Rate>
                                </ATPIncomming>
                        </FRDColumn1>
                        <FRDColumn2>
                            <ATPIncomming>
                                <ATPName>
                                    <p>ATP</p>
                                </ATPName>
                                <Rate>
                                    <h4>21</h4>
                                </Rate>
                            </ATPIncomming>
                            <ATPIncomming>
                                <ATPName>
                                    <p>ATP</p>
                                </ATPName>
                                <Rate>
                                    <h4>21</h4>
                                </Rate>
                            </ATPIncomming>
                            <ATPIncomming>
                                <ATPName>
                                    <p>ATP</p>
                                </ATPName>
                                <Rate>
                                    <h4>21</h4>
                                </Rate> 
                            </ATPIncomming>
                            <ATPIncomming>
                                <ATPName>
                                    <p>ATP</p>
                                </ATPName>
                                <Rate>
                                    <h4>21</h4>
                                </Rate>
                            </ATPIncomming>  
                            <ATPIncomming>
                                <ATPName>
                                    <p>ATP</p>
                                </ATPName>
                                <Rate>
                                    <h4>21</h4>
                                </Rate>
                            </ATPIncomming>
                            <ATPIncomming>
                                <ATPName>
                                    <p>ATP</p>
                                </ATPName>
                                <Rate>
                                    <h4>21</h4>
                                </Rate>
                            </ATPIncomming>
                            <ATPIncomming>
                                    <ATPName>
                                        <p>ATP</p>
                                    </ATPName>
                                    <Rate>
                                        <h4>21</h4>
                                    </Rate>
                            </ATPIncomming>
                        </FRDColumn2>
                        <FRDColumn3>
                            <ATPIncomming>
                                <ATPName>
                                    <p>ATP</p>
                                </ATPName>
                                <Rate>
                                    <h4>21</h4>
                                </Rate>
                            </ATPIncomming>
                            <ATPIncomming>
                                <ATPName>
                                    <p>ATP</p>
                                </ATPName>
                                <Rate>
                                    <h4>21</h4>
                                </Rate>
                            </ATPIncomming>
                            <ATPIncomming>
                                <ATPName>
                                    <p>ATP</p>
                                </ATPName>
                                <Rate>
                                    <h4>21</h4>
                                </Rate> 
                            </ATPIncomming>
                            <ATPIncomming>
                                <ATPName>
                                    <p>ATP</p>
                                </ATPName>
                                <Rate>
                                    <h4>21</h4>
                                </Rate>
                            </ATPIncomming>  
                            <ATPIncomming>
                                <ATPName>
                                    <p>ATP</p>
                                </ATPName>
                                <Rate>
                                    <h4>21</h4>
                                </Rate>
                            </ATPIncomming>
                            <ATPIncomming>
                                <ATPName>
                                    <p>ATP</p>
                                </ATPName>
                                <Rate>
                                    <h4>21</h4>
                                </Rate>
                            </ATPIncomming>
                            <ATPIncomming>
                                    <ATPName>
                                        <p>ATP</p>
                                    </ATPName>
                                    <Rate>
                                        <h4>21</h4>
                                    </Rate>
                            </ATPIncomming>
                        </FRDColumn3>
                   </FRD>  
                </TopRightDivWrapper>     
           </TopDivWrapper>
           <BottomDivWrapper>
                <BottomLeftDivWrapper>
                    <ValveStatusHeading>
                        <p>Valve Status</p>
                    </ValveStatusHeading>
                    <ValvesWrapper>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status>
                                <p>A</p>
                            </Status>
                            <OnOffStatus>
                                <p>ON</p>
                            </OnOffStatus>
                        </Valve>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status>
                                <p>A</p>
                            </Status>
                            <OnOffStatus>
                                <p>ON</p>
                            </OnOffStatus>
                        </Valve>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status>
                                <p>A</p>
                            </Status>
                            <OnOffStatus style={{backgroundColor: 'red'}}>
                                <p>OFF</p>
                            </OnOffStatus>
                        </Valve>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status>
                                <p>A</p>
                            </Status>
                            <OnOffStatus>
                                <p>ON</p>
                            </OnOffStatus>
                        </Valve>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status>
                                <p>A</p>
                            </Status>
                            <OnOffStatus>
                                <p>ON</p>
                            </OnOffStatus>
                        </Valve>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status>
                                <p>A</p>
                            </Status>
                            <OnOffStatus>
                                <p>ON</p>
                            </OnOffStatus>
                        </Valve>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status>
                                <p>A</p>
                            </Status>
                            <OnOffStatus>
                                <p>ON</p>
                            </OnOffStatus>
                        </Valve>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status>
                                <p>A</p>
                            </Status>
                            <OnOffStatus>
                                <p>ON</p>
                            </OnOffStatus>
                        </Valve>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status >
                                <p style={{color: 'brown'}}>M</p>
                            </Status>
                            <OnOffStatus style={{backgroundColor: 'red'}}>
                                <p>OFF</p>
                            </OnOffStatus>
                        </Valve>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status>
                                <p>A</p>
                            </Status>
                            <OnOffStatus>
                                <p>ON</p>
                            </OnOffStatus>
                        </Valve>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status>
                                <p>A</p>
                            </Status>
                            <OnOffStatus>
                                <p>ON</p>
                            </OnOffStatus>
                        </Valve>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status>
                                <p>A</p>
                            </Status>
                            <OnOffStatus style={{backgroundColor: 'red'}}>
                                <p>OFF</p>
                            </OnOffStatus>
                        </Valve>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status>
                                <p>A</p>
                            </Status>
                            <OnOffStatus>
                                <p>ON</p>
                            </OnOffStatus>
                        </Valve>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status>
                                <p>A</p>
                            </Status>
                            <OnOffStatus>
                                <p>ON</p>
                            </OnOffStatus>
                        </Valve>
                        <Valve>
                            <ValveName>
                                <p>Source - ATP</p>
                            </ValveName>
                            <Status>
                                <p>A</p>
                            </Status>
                            <OnOffStatus>
                                <p>ON</p>
                            </OnOffStatus>
                        </Valve>
                    </ValvesWrapper>
                </BottomLeftDivWrapper>
                <BottomMiddleDivWrapper>
                    <QualityOWHeading>
                        <p>Quality Of Water</p>
                    </QualityOWHeading>
                    <PBWrap>
                            <PBTitle>
                                <p>PH</p>
                            </PBTitle>
                            <PBBar>
                            <Phscale> 
                            </Phscale>   
                            <ProgressBar  bgcolor="#193b6b" progress='80' />
                            </PBBar>
                            </PBWrap>
                            <PBWrap>
                            <PBTitle>
                                <p>Chlorine</p>
                            </PBTitle>
                            <PBBar>
                            <ProgressBar  bgcolor="#193b6b" progress='20'   />
                            </PBBar>
                            </PBWrap>
                            <PBWrap>
                            <PBTitle>
                                <p>Turbidity</p>
                            </PBTitle>
                            <PBBar>
                            <ProgressBar  bgcolor="#193b6b" progress='30'   />
                            </PBBar>
                            </PBWrap>
                            <PBWrap>
                            <PBTitle>
                                <p>TDS</p>
                            </PBTitle>
                            <PBBar>
                            <ProgressBar  bgcolor="#193b6b" progress='10'  />
                            </PBBar>
                    </PBWrap>
                </BottomMiddleDivWrapper>
                <BottomRightDivWrapper>
                    <ValveStatusHeading>
                        <p>Alarms and Events</p>
                    </ValveStatusHeading>
                    <AlarmParent>
                        <Alarm1>
                             <AlarmName>
                                 <p>Water Loss</p>
                             </AlarmName>
                             <AlarmIndicator>
                                 <p>No Issue</p>
                             </AlarmIndicator>
                        </Alarm1>
                        <Alarm2>
                             <AlarmName>
                                 <p>Valve Operation</p>
                             </AlarmName>
                             <AlarmIndicator className="blink">
                                 <p>Issue</p>
                             </AlarmIndicator>
                        </Alarm2>
                        <Alarm3>
                             <AlarmName>
                                 <p>Quality Of Water</p>
                             </AlarmName>
                             <AlarmIndicator>
                                 <p>No Issue</p>
                             </AlarmIndicator>
                        </Alarm3>
                    </AlarmParent>
                </BottomRightDivWrapper>
           </BottomDivWrapper>
       </ParentWrapper>
    )
}
const Phscale = styled.div`
    height:10px;
    width:80%;
    background: rgb(254,0,2);
    background: linear-gradient(90deg, rgba(254,0,2,1) 0%, rgba(254,0,2,1) 16%, rgba(217,253,7,1) 32%, rgba(55,167,55,1) 50%, rgba(0,77,255,1) 66%, rgba(68,0,139,1) 100%);
`
const PBTitle = styled.div`
    width: 40px;
    p{
        text-align: left;
        font-size: 13px;
        font-weight: 100px;
        color: #1b75bc;
        font-family: 'Roboto', sans-serif;  
    }
`
const PBBar = styled.div``

const PBWrap = styled.div` 
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const ParentWrapper = styled.div` 
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 75.7vh;
  width: 100wh;
`
const TopDivWrapper = styled(ParentWrapper)` 
  flex-direction: row;
  height: 50%;  
  justify-content: space-between;
`
const TWLBar = styled.div`
    padding:0 1rem;   
`
const TopLeftDivWrapper = styled.div` 
  display: flex;
  flex-direction: column;
  flex: 25%;
  justify-content: space-around;
  height: 100%auto;
  background-color: white;
  margin: 0.3rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`
const TWLHeading = styled.p` 
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: bold;
  color: #193b6b;
`
const TopRightDivWrapper = styled(TopLeftDivWrapper)` 
  flex: 75%;
  width: 100%auto;
  background-color: white;
  flex-direction: column;
  flex-wrap: wrap;
`
const FRD = styled(TopRightDivWrapper)`
  flex-direction: row;
  box-shadow: none;
`
const ATPName = styled.p``
const Rate = styled.p``
const ATPIncomming = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${ATPName}{
      p{
        font-size: 13px;
        font-weight: 100px;
        color: #1b75bc;
        font-family: 'Roboto', sans-serif;
      }
      margin: 0 1rem;
  }
  ${Rate}{
      border-right: 8px solid green;
      padding-right:1rem;
      h4{
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
      }
      margin: 0 1rem;
  }
`
const FRDColumn1 = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex: 26%;
  width: 100%;
  height: auto;
`
const FRDColumn2 = styled(FRDColumn1)` 
  border-right: 2px solid #c7c7c7;
  border-left: 2px solid #c7c7c7;
`
const FRDColumn3 = styled(FRDColumn1)``

const FRDHeading = styled(TWLHeading)``
const BottomDivWrapper = styled(TopDivWrapper)``
const BottomLeftDivWrapper = styled(TopLeftDivWrapper)` 
  background-color: white;
  flex: 40%;
  height: 100%auto;
`
const ValveStatusHeading = styled(FRDHeading)``
const ValveName = styled.div``
const Status = styled.div``
const OnOffStatus = styled.div``
const ValvesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const Valve = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.1rem 0;
  ${ValveName}{
      p{
        font-size: 13px;
        font-weight: 100px;
        color: #1b75bc;
        font-family: 'Roboto', sans-serif;
      }
      margin: 0 1rem;
  }
  ${Status}{
     p{
        font-size: 13px;
        font-weight: bold;
        color: #132c4e;
        font-family: 'Roboto', sans-serif;
     }
     margin: 0 1rem;
  }
  ${OnOffStatus}{
      width: 30px;
      height: 17px;
      border-radius: 10px;
      background-color: green;
      align-items: center;
      display: flex;
      justify-content: center;
      p{
          color: white;
          font-size: 10px;
          font-family: 'Roboto', sans-serif;
      }
  }
`
const BottomMiddleDivWrapper = styled.div` 
  background-color: white;
  flex: 20%;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  margin-top: 4.5px;
  margin-bottom: 4px;
`
const QualityOWHeading = styled(TWLHeading)``
const BottomRightDivWrapper = styled(TopLeftDivWrapper)` 
  background-color: white;
  flex: 40%;
  height: 100%auto;
  ${ValveStatusHeading}{
      margin-top: 5px;
  }
`
const AlarmParent = styled.div` 
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: left;
  flex: 100%;
`
const Alarm1 = styled.div` 
  display: flex;
  flex: row; 
  justify-content: space-around;
  flex: 80%;
  width: 100%;
  height: auto;
`
const AlarmName = styled.p` 
    width: 7rem;
    font-size: 13px;
    font-weight: 100px;
    color: #1b75bc;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: left;
    align-items: left;
`
const AlarmIndicator = styled(AlarmName)` 
     width: 7rem;
     display: flex;
     justify-content: left;
     align-items: left;
` 
const Alarm2 = styled(Alarm1)`
  ${AlarmIndicator}{
      display: flex;
      height: fit-content;
      width: 6rem;
      height: 2rem;
      background-color: red;
      border-radius: 5px;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      cursor: pointer;
      align-items: center;
      justify-content: center;
      margin-right: 40px;
      p{
          color: white;
          font-size: 16px;
      }
  }
`
const Alarm3 = styled(Alarm1)` `
export default HomeDashOption2
