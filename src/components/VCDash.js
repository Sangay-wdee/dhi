import React from 'react'
import styled from 'styled-components'

const VCDash = () => {
    return (
        <VC>
            <LeftComponents>
                <SorceValve>
                    <SVTitle>
                        <p>Source Valve</p>
                    </SVTitle>
                    <GSR1>
                        <GSR1Title>
                            <p>GSR1</p>
                        </GSR1Title>
                        <GSR1Incomming>
                            <p>Incomming</p>
                            <CheckBoxWrapper>
                                <CheckBox id="checkboxGRS1Incomming" type="checkbox" />
                                <CheckBoxLabel htmlFor="checkboxGRS1Incomming" />
                            </CheckBoxWrapper>
                        </GSR1Incomming>
                        <GSR1Incomming>
                            <p>Out Going</p>
                            <CheckBoxWrapper>
                                <CheckBox id="checkboxGRS1OutGoing" type="checkbox" />
                                <CheckBoxLabel htmlFor="checkboxGRS1OutGoing" />
                            </CheckBoxWrapper>
                        </GSR1Incomming>
                        <GSR1End>
                            <p>Royal</p>
                        </GSR1End>
                    </GSR1>
                    <GSR2>
                        <GSR2Title>
                            <p>GSR2</p>
                        </GSR2Title>
                        <GSR2Incomming>
                            <p>Incomming</p>
                            <CheckBoxWrapper>
                                <CheckBox id="checkboxGRS2Incomming" type="checkbox" />
                                <CheckBoxLabel htmlFor="checkboxGRS2Incomming" />
                            </CheckBoxWrapper>
                        </GSR2Incomming>
                        <GSR2Incomming>
                            <p>Out Going</p>
                            <CheckBoxWrapper>
                                <CheckBox id="checkboxGRS2OutGoing" type="checkbox" />
                                <CheckBoxLabel htmlFor="checkboxGRS2OutGoing" />
                            </CheckBoxWrapper>
                        </GSR2Incomming>
                        <GSR2End>
                            <p>Gyalpozhing Area</p>
                        </GSR2End>
                    </GSR2>
                </SorceValve>
                <LeftBottomWrapper>
                    <MainValveWrapper>
                        <MainValveTitle>
                            <p>Main Valve</p>
                        </MainValveTitle>
                        <Terrace>
                            <p>Terrace</p>
                            <CheckBox id="terrace" type="checkbox" />
                            <CheckBoxLabel htmlFor="terrace" />
                        </Terrace>
                        <MainTown>
                            <p>Main Town</p>
                            <CheckBox id="maintown" type="checkbox" />
                            <CheckBoxLabel htmlFor="maintown" />
                        </MainTown> 
                        <School>
                            <p>School</p>
                            <CheckBox id="school" type="checkbox" />
                            <CheckBoxLabel htmlFor="school" />
                        </School> 
                        <BHU>
                            <p>BHU</p>
                            <CheckBox id="bhu" type="checkbox" />
                            <CheckBoxLabel htmlFor="bhu" />
                        </BHU>
                    </MainValveWrapper>
                    <KSTValveWrapper>
                       <KSTTitle>
                            <p>KST Valve</p>
                        </KSTTitle>
                        <Main>
                            <p>Main</p>
                            <CheckBox id="main" type="checkbox" />
                            <CheckBoxLabel htmlFor="main" />
                        </Main>
                        <KSTSubDiv>
                            <KuriChhuWrapper>
                                <KuriChhuTitle>
                                    <p>Kurichhu</p>
                                </KuriChhuTitle>
                                <KuriChhu>
                                    <p>Incomming</p>
                                    <CheckBoxWrapper>
                                        <CheckBox id="kurichhuIncomming" type="checkbox" />
                                        <CheckBoxLabel htmlFor="kurichhuIncomming" />
                                    </CheckBoxWrapper>
                                </KuriChhu> 
                            </KuriChhuWrapper>
                            <ChabjeyWrapper>
                                <ChabjeyTitle>
                                    <p>Chabjey</p>
                                </ChabjeyTitle>
                                <Chabjey>
                                    <p>Incomming</p>
                                    <CheckBoxWrapper>
                                        <CheckBox id="chabjyeIncomming" type="checkbox" />
                                        <CheckBoxLabel htmlFor="chabjyeIncomming" />
                                    </CheckBoxWrapper>
                                </Chabjey>
                           </ChabjeyWrapper>
                        </KSTSubDiv> 
                    </KSTValveWrapper>
                </LeftBottomWrapper>
            </LeftComponents>
            <RightComponents>
                <ValveControl>
                    <Heading>
                        <p>Valve Control Center</p>
                    </Heading>
                    <OuterDiv>
                        <InnerDiv></InnerDiv>
                    </OuterDiv>
                </ValveControl>
                <IncommingValves>
                    <ValveTitle>
                        <p>Incomming Valves</p>
                    </ValveTitle>
                    <Valves>
                        <ITerrace>
                                <p>Terrace</p>
                                <CheckBox id="iterrace" type="checkbox" />
                                <CheckBoxLabel htmlFor="iterrace" />
                        </ITerrace>
                        <IMainTown>
                                <p>Main Town</p>
                                <CheckBox id="imaintown" type="checkbox" />
                                <CheckBoxLabel htmlFor="imaintown" />
                        </IMainTown>
                        <ISchool>
                                <p>School</p>
                                <CheckBox id="ischool" type="checkbox" />
                                <CheckBoxLabel htmlFor="ischool" />
                        </ISchool>
                        <IBHU>
                                <p>BHU</p>
                                <CheckBox id="ibhu" type="checkbox" />
                                <CheckBoxLabel htmlFor="ibhu" />
                        </IBHU>
                        <IRBP>
                                <p>RBP</p>
                                <CheckBox id="irbp" type="checkbox" />
                                <CheckBoxLabel htmlFor="irbp" />
                        </IRBP>
                        <ISmallTown>
                                <p>Small Town</p>
                                <CheckBox id="ismalltown" type="checkbox" />
                                <CheckBoxLabel htmlFor="ismalltown" />
                        </ISmallTown>
                    </Valves>
                </IncommingValves>
            </RightComponents>
        </VC>
    )
}
const VC = styled.div` 
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 1000px;
  height: 437px;
  position: relative;
`
const LeftComponents = styled.div` 
     display: flex;
  
    justify-content: space-around;
     flex-direction: column;
     width: 600px;
     height: 437px;
`
const SorceValve = styled(LeftComponents)` 
     justify-content: space-around;
     align-items: center;
     background-color: white;
     height: 227px;
     border-radius: 40px;
     box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`
const SVTitle = styled.p` 
     color: black;
     font-size: 16px;
     font-weight: bold;
     font-family: 'Montserrat', sans-serif; 
     color: #193b6b;
`
const GSR1 = styled(SorceValve)` 
     flex-direction: row;
     height: 65px;
     box-shadow: none;
     p{
        font-family: 'Roboto', sans-serif;
     }
`
const GSR1Title = styled.p` 
      font-size: 16px;
      font-weight: bold;
     color: #193b6b;
`
const GSR1Incomming = styled.div` 
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      border-radius: 20px;
      height: 55px;
      width: 100px;
      align-items: center;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      color: #1b75bc;
`
const CheckBoxWrapper = styled.div`
  position: relative;
`
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 24px;
  border-radius: 15px;
  background:  #e6e6e6;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
const CheckBox = styled.input`
  opacity: 0;
  border-radius: 15px;
  width: 42px;
  height: 24px;
  &:checked + ${CheckBoxLabel} {
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
      background:#132c4e;
    }
  }
`
const GSR1End = styled.p` 
  font-size: 16px;
  width: 100px;
`
const GSR2 = styled(GSR1)` 
     
` 
const GSR2Title = styled(GSR1Title)` 
`
const GSR2Incomming = styled(GSR1Incomming)`
` 
const GSR2End = styled(GSR1End)` 
`

const LeftBottomWrapper = styled.div` 
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  height: 200px;
`
const MainValveWrapper = styled(LeftBottomWrapper)` 
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 270px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  
`
const MainValveTitle = styled(SVTitle)` 
`
const Terrace = styled.div` 
  display: flex;
  flex-direction: row;
  p{
      width: 90px;
      text-align: left;
      font-family: 'Roboto', sans-serif;
      color: #1b75bc;
  
  }
  ${CheckBoxLabel}{
      position: inherit;
  }
`
const MainTown = styled(Terrace)` 
`
const School = styled(Terrace)` 
`
const BHU = styled(Terrace)` 
`

const KSTValveWrapper = styled(GSR1Incomming)`  
  width: 300px;
  height: 200px;
  border-radius: 40px;
  justify-content: space-around;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  background-color: white;
`
const KSTTitle = styled(SVTitle)` 
`
const Main = styled(BHU)` 
    font-weight: bold;
`
const KSTSubDiv = styled.div` 
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  width:300px;
  height: 100px;
`
const KuriChhuWrapper = styled(KSTSubDiv)`
  flex-direction: column;
  width: 120px;
  height: 100px;
  align-items: center;
`
const KuriChhuTitle = styled.p` 
    p{
        font-family: 'Roboto', sans-serif;
        color: #193b6b;
        font-weight: bold;
     }
`
const KuriChhu = styled(GSR1Incomming)` 
     p{
        font-family: 'Roboto', sans-serif;
     }
`
const ChabjeyWrapper = styled(KuriChhuWrapper)`
    p{
        font-family: 'Roboto', sans-serif;
     } 
`
const ChabjeyTitle = styled(KuriChhuTitle)``
const Chabjey = styled(KuriChhu)``
const RightComponents = styled(LeftComponents)` 
  width: 370px;
  height: 437px;
  align-items: center;
`
const ValveControl = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 370px;
  height: 130px;
  background-color: #132c4e;
  border-radius: 40px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`
const Heading = styled.p` 
  color: white;
  font-size: 25px;
  font-family: 'Montserrat', sans-serif; 
  font-weight: bold;
`
const OuterDiv = styled.div` 
  display: flex;
  justify-content: right;
  width: 70px;
  height: 40px;
  background-color:  #e6e6e6;
  border-radius: 40px;
`
const InnerDiv = styled.div` 
  width: 35px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
`
const IncommingValves = styled(MainValveWrapper)` 
  width: 370px;
  height: 290px;
`
const ValveTitle = styled(SVTitle)` 
`
const Valves = styled(MainValveWrapper)` 
  box-shadow: none
`
const ITerrace = styled(Terrace)``
const IMainTown = styled(Terrace)``
const ISchool = styled(Terrace)``
const IBHU = styled(Terrace)``
const IRBP = styled(Terrace)``
const ISmallTown = styled(Terrace)``  


export default VCDash
