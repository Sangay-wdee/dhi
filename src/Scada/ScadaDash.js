import React from 'react';
import styled from 'styled-components';

const ScadaDash = () => {
  return (
     <Container>
        <Indicator>
          <FirstRow>
            <Reading><p>20</p></Reading>
            <Text>Flow Meter Reading</Text>
          </FirstRow>
          <SecondRow>
            <Status>
              <On><p>On</p></On>
              <Off><p>Off</p></Off>
            </Status>
            <Text>Valve Status</Text>
          </SecondRow>
          <ThirdRow>
            <TankStatus>
               <TName><p>GSR1</p></TName>
            </TankStatus>
            <Text>Tank Water Level</Text>
          </ThirdRow>
        </Indicator>
        <RowBase1>
          <TopLeft>
              <MeterReading><p>20</p></MeterReading>
              <Pipe></Pipe>
              <ON><p>On</p></ON>
          </TopLeft>
          <TopRight>
            <Wrapper>
              <EvenPipe1></EvenPipe1>
              <EvenPipe2></EvenPipe2>
              <ON><p>On</p></ON>
            </Wrapper>
          </TopRight>
          <BottomLeft><p>Small Town</p></BottomLeft>
          <BottomRight>
              <Pipe></Pipe>
              <MeterReading><p>20</p></MeterReading>
              <p>RBP</p>
          </BottomRight>
        </RowBase1>
        <RowBase2>
          <TopLeft>
              <MeterReading><p>20</p></MeterReading>
              <Pipe></Pipe>
              <ON><p>On</p></ON>
          </TopLeft>
          <TopRight>
            <Wrapper>
              <EvenPipe1></EvenPipe1>
              <EvenPipe2></EvenPipe2>
              <ON><p>On</p></ON>
            </Wrapper>
          </TopRight>
          <BottomRight>
              <Pipe></Pipe>
              <MeterReading><p>20</p></MeterReading>
              <p>BHU</p>
          </BottomRight>
        </RowBase2>
        <RowBase3>
          <TopLeft>
              <MeterReading><p>20</p></MeterReading>
              <Pipe></Pipe>
              <ON><p>On</p></ON>
          </TopLeft>
          <TopRight>
            <Wrapper>
              <EvenPipe1></EvenPipe1>
              <EvenPipe2></EvenPipe2>
              <ON><p>On</p></ON>
            </Wrapper>
          </TopRight>
          <BottomRight>
              <Pipe></Pipe>
              <MeterReading><p>20</p></MeterReading>
              <p>School</p>
          </BottomRight>
        </RowBase3>
        <RowBase4>
         <TopLeft>
              <MeterReading><p>20</p></MeterReading>
              <Pipe></Pipe>
              <ON><p>On</p></ON>
          </TopLeft>
          <TopRight>
            <Wrapper>
              <EvenPipe1></EvenPipe1>
              <EvenPipe2></EvenPipe2>
              <ON><p>On</p></ON>
            </Wrapper>
          </TopRight>
          <BottomRight>
              <Pipe></Pipe>
              <MeterReading><p>20</p></MeterReading>
              <p>Main Town</p>
          </BottomRight>
        </RowBase4>
        <RowBase5>
         <TopLeft>
              <MeterReading><p>20</p></MeterReading>
              <Pipe></Pipe>
              <ON><p>On</p></ON>
          </TopLeft>
          <TopRight>
            <Wrapper>
              <EvenPipe1></EvenPipe1>
              <EvenPipe2></EvenPipe2>
              <ON><p>On</p></ON>
            </Wrapper>
          </TopRight>
          <BottomRight>
              <Pipe></Pipe>
              <MeterReading><p>20</p></MeterReading>
              <p>Terrace</p>
          </BottomRight>
        </RowBase5>
        <RowBase6>
            <TopLeft>
                <MeterReading><p>20</p></MeterReading>
                <Pipe></Pipe>
                <ON><p>On</p></ON>
            </TopLeft>
            <TopRight>
                    <Pipe1></Pipe1>
                    <ON><p>On</p></ON>
                    <Pipe2></Pipe2>
            </TopRight>
        </RowBase6>
        <RowBase7>
            <TopLeft>
                <MeterReading><p>20</p></MeterReading>
                <Pipe></Pipe>
            </TopLeft>
            <TopRight>
                <TopWrapper>
                    <ON><p>On</p></ON>
                    <EvenPipe2></EvenPipe2>
                </TopWrapper>
                <BottomWrapper>
                  <EvenPipe1></EvenPipe1>
                  <EvenPipe2></EvenPipe2>
                  <ON><p>On</p></ON>
                </BottomWrapper>
            </TopRight>
            <BottomRight>
                <Pipe></Pipe>
                <MeterReading><p>20</p></MeterReading>
                <p>Chabjey</p>
            </BottomRight>
        </RowBase7>

        <Column1>
            <GSR1TopLine>
              <MeterReading><p>20</p></MeterReading>
               <Pipe></Pipe>
            </GSR1TopLine>
            <ATPWrapper>
                <ATP><p>ATP</p></ATP>
                <AtpPipe></AtpPipe>
            </ATPWrapper>
                <GSR1LeftLine>
                    <ON><p>On</p></ON>
                    <Pipe></Pipe>
                    <MeterReading><p>20</p></MeterReading>
                    <Pipe></Pipe>
                </GSR1LeftLine>
            <GSR1>
              <Pipe></Pipe>
              <GSR1Box>
                 <p>GSR1</p>
              </GSR1Box>
            </GSR1>
        </Column1>


        <Column2>
           <TopLine>
              <MeterReading><p>20</p></MeterReading>
              <Pipe></Pipe>
           </TopLine>
           <NTPParentWrapper>
              <LeftPipe>
                <Pipe></Pipe>
              </LeftPipe>
              <NTPWrapper>
                <NtpPipe></NtpPipe>
                <NTP><p>NTP</p></NTP>
                <NtpPipe></NtpPipe>
              </NTPWrapper>
              <RightPipe>
                <Pipe></Pipe>
              </RightPipe>
           </NTPParentWrapper>
           <LineWrapper>
                <LeftLine>
                    <ON><p>On</p></ON>
                    <Pipe></Pipe>
                    <MeterReading><p>20</p></MeterReading>
                    <Pipe></Pipe>
                </LeftLine>
                <RightLine>
                    <ON><p>On</p></ON>
                    <Pipe></Pipe>
                    <MeterReading><p>20</p></MeterReading>
                    <Pipe></Pipe>
                </RightLine>
           </LineWrapper>
           <GSR2>
             <p>GSR2</p>
           </GSR2>
           <BottomLine>
             <Pipe></Pipe>
             <ON><p>On</p></ON>
             <Pipe></Pipe>
             <MeterReading><p>20</p></MeterReading>
             <LPipe></LPipe>
           </BottomLine>
        </Column2>
        <Column3>
           <KST>
              <p>KST</p>
              <MeterReading><p>20</p></MeterReading>
              <Pipe></Pipe>
           </KST>
        </Column3>
        <Column4>
            <Description> Royal Enclave </Description>
            <Column4Wrapper>
               <MeterReading><p>20</p></MeterReading>
               <Pipe></Pipe>
               <ON><p>On</p></ON>
            </Column4Wrapper>
        </Column4>
     </Container>
  )
};


const Container = styled.div` 
    height: 75.7vh;
    width: 100wh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1.5fr;
    grid-template-areas: "Indi Indi . . Column1 Column2 ."
                          "Indi Indi . Column4 Column1 Column2 ."
                          ". . . Column4 Column1 Column2 Column3"
                          "Row-bottom1 Row-bottom2 Row-bottom3 Row-bottom4 Row-bottom5 Row-bottom6 Row-bottom7";
`
const Indicator = styled.div`
  grid-area: Indi;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin: 0.4rem;
`
const FirstRow = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  height: 30%;
  margin-top: 0.7rem;
  align-items: center;
`
const Reading = styled.div` 
  width: 20%;
  height: 65%;
  border-radius: 15px;
  background-color: white;
  border: 5px solid green;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif; 
`
const Text = styled.div` 
  width: 60%;
  height: 65%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 0.5rem;
  font-family: 'Montserrat', sans-serif; 
  color: #193b6b;
  font-size: 14px;
  font-weight: 600;
`
const SecondRow = styled(FirstRow)` 
margin: 0 auto;
`
const Status = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 65%;
`
const On = styled.div` 
  height: 45%;
  width: 90%;
  margin:0 auto;
  background-color: green;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  font-family: 'Montserrat', sans-serif; 
  p{color:white}
`
const Off = styled(On)` 
  background-color: red;
`
const ThirdRow = styled(FirstRow)` 
margin: 0 auto;
`
const TankStatus = styled.div` 
  width: 25%;
  height: 80%;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`
const TName = styled.p` 
  font-size: 10px;
  font-family: 'Montserrat', sans-serif; 
`
const RowBase1 = styled.div`
  grid-area: Row-bottom1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "top1 top2"
                        "bottom1 bottom2";
`
const TopLeft = styled.div`
  grid-area: top1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const MeterReading = styled(Reading)`
  width: 50%;
  height: 50%;
  border: 3px solid green;

`
const ON = styled(On)` 
  width: 40%;
  height:30%;
  border-radius: 7px;
  p{
    font-size: 12px;
  }
`
const Pipe = styled.div`
  width:10%;
  height: 10%;
  background-color: blue;
`
const TopRight = styled.div`
  grid-area: top2;
`
const Wrapper = styled.div` 
  width: 100%;
  height: 55%;
  margin-top: 2.1rem;
  ${ON}{
    height: 50%;
  }
`
const EvenPipe1 = styled.div` 
  width: 100%;
  height: 15%;
  background-color: blue;
`
const EvenPipe2 = styled.div`
  width: 10%;
  height: 33%;
  background-color: blue;
  margin-left: 2rem;
`
const BottomLeft = styled.div`
  p{
    font-family: 'Montserrat', sans-serif; 
    color: #193b6b;
    text-align: left;
    font-weight: bold;
    font-size: 12px;
  }
`
const BottomRight = styled.div`
  grid-area: bottom2;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', sans-serif; 
  color: #193b6b;
  font-weight: bold;
  font-size: 12px;
`
const RowBase2 = styled(RowBase1)`
  grid-area: Row-bottom2;
`
const RowBase3 = styled(RowBase1)` 
  grid-area: Row-bottom3;
`
const RowBase4 = styled(RowBase1)` 
  grid-area: Row-bottom4;
`
const RowBase5 = styled(RowBase1)` 
  grid-area: Row-bottom5;
`
const RowBase6 = styled(RowBase1)` 
  grid-area: Row-bottom6;
  ${TopRight}{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`
const Pipe1 = styled(Pipe)` 
  width:10%;
  border-top: 2.2rem solid blue;
  margin-bottom: 44%;
`
const Pipe2 = styled(Pipe)` 
  width: 50%;
`
const RowBase7 = styled(RowBase1)` 
  grid-area: Row-bottom7;
  ${ON}{
    height: 50%;
  }
  ${TopLeft}{
    ${Pipe}{
      width: 50%;
    }
  }
  ${TopRight}{
    display: flex;
    flex-direction: column;
  }
`
const TopWrapper = styled.div` 
  height: 45%;
  width: 100%;
  ${ON}{
    height: 58%;
  }
  ${EvenPipe2}{
    height: 42%;
  }
`
const BottomWrapper = styled.div` 
  height: 55%;
  ${EvenPipe1}{
      width: 55%;
      height: 18%;
    }
`
const Column1 = styled.div` 
  grid-area: Column1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const GSR1TopLine = styled.div`
    width: 100%;
    height: 14%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    ${MeterReading}{
      width: 25%;
      height:70%;
    }
    ${Pipe}{
      height: 10%;
      width: 5%;
    }
`
const ATPWrapper = styled.div`
    margin: 0 auto;
    width: 43%;
    height: 11%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const AtpPipe = styled.div`
  width: 12%;
  height: 10%;
  background-color: blue;
`
const ATP = styled.div`
  width: 70%;
  height: 90%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    font-family: 'Montserrat', sans-serif; 
    color: #193b6b;
    font-weight: bold;
  }
`
const GSR1LeftLine = styled.div`
  width: 100%;
  height: 24%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${ON}{
      width: 20%;
  }
  ${MeterReading}{
    width: 25%;
  }
  ${Pipe}{
    height: 7%;
    width: 5%;
  }
`
const GSR1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 25%;
  align-items: center; 
  p{
    font-family: 'Montserrat', sans-serif; 
    color: #193b6b;
    font-weight: bold;
  }
`
const GSR1Box = styled.div` 
  width: 83%;
  height: 100%;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`
const Column2 = styled.div` 
  grid-area: Column2;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TopLine = styled.div`
    width: 100%;
    height: 14%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    ${MeterReading}{
      width: 25%;
      height:70%;
    }
    ${Pipe}{
      height: 10%;
      width: 5%;
    }
`
const NTPParentWrapper = styled.div` 
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;

`
const LeftPipe = styled.div` 
  width: 27.5%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  ${Pipe}{
    height: 57.5%;
    width: 16.5%;
    margin-top: 0.75rem;
  }
`
const RightPipe = styled(LeftPipe)` 
  width: 27.5%;
  height: 100%;
  justify-content: flex-start;
  
`
const NTPWrapper = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const NtpPipe = styled.div`
  width: 20%;
  height: 20%;
  background-color: blue;
`
const NTP = styled.div`
  width: 70%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    font-family: 'Montserrat', sans-serif; 
    color: #193b6b;
    font-weight: bold;
  }
`
const LineWrapper = styled.div` 
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const LeftLine = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${ON}{
      width: 80%;
  }
  ${MeterReading}{
    width: 100%;
  }
  ${Pipe}{
    width: 20%;
  }
`
const RightLine = styled(LeftLine)``
const GSR2 = styled.div`
  width: 83%;
  height: 25%;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  p{
    font-family: 'Montserrat', sans-serif; 
    color: #193b6b;
    font-weight: bold;
  }
`
const BottomLine = styled.div`
  height: 26%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${Pipe}{
    width: 5%;
  }
  ${MeterReading}{
      width: 25%;
      height:60%;
    }
  ${ON}{
    width:21%;
    height: 33%;
  }
`
const LPipe = styled.div` 
  width: 5%;
  background-color: blue;
  height: 10%;
  margin-left: 5%;
`
const Column3 = styled.div` 
  grid-area: Column3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
                      ". right";
`
const KST = styled.div` 
  grid-area: right;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.8rem;
  height: 100%;
  p{
    font-family: 'Montserrat', sans-serif; 
    color: #193b6b;
    font-weight: bold;
    font-size: 12px;
  }
  ${MeterReading}{
    height: 39%;
  }
  ${Pipe}{
    height: 10%;
  }
`
const Column4 = styled.div` 
  grid-area: Column4;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "C4Left C4Right";
`
const Column4Wrapper = styled.div` 
  grid-area: C4Right;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 47%;
  ${MeterReading}{
    height: 37%;
    width: 50%;
  }
  ${Pipe}{
    width:5%;
    height: 8%;
  }
  ${ON}{
    width:45%;
    height:22%;
  }
`
const Description = styled.div` 
  grid-area: C4Left;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25%;
  font-family: 'Montserrat', sans-serif; 
  color: #193b6b;
  font-weight: bold;
  font-size: 12px;
`

export default ScadaDash;
