import React from 'react'
import styled from 'styled-components'

const HomeDash = () => {
    return (
       <ParentWrapper>
           <TopDivWrapper>
                <TopLeftDivWrapper>
                    <TWLHeading>
                        <p>Tank Water Level</p>
                    </TWLHeading>
                </TopLeftDivWrapper>      
                <TopRightDivWrapper>
                     <FRDHeading>
                         <p>Flow Rate Display</p>
                     </FRDHeading>
                    <FRD> 
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
                     </ATPIncomming><ATPIncomming>
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
                   </FRD>  
                </TopRightDivWrapper>     
           </TopDivWrapper>
           <BottomDivWrapper>
                <BottomLeftDivWrapper>
                       
                </BottomLeftDivWrapper>
                <BottomMiddleDivWrapper>
               
                </BottomMiddleDivWrapper>
                <BottomRightDivWrapper>

                </BottomRightDivWrapper>
           </BottomDivWrapper>
       </ParentWrapper>
    )
}
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
const TopLeftDivWrapper = styled.div` 
  display: flex;
  flex: 25%;
  width: 100%auto;
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
const Indicator = styled.div``
const ATPIncomming = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 10%;
  height: 30%;
  width: 100%auto;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  background-color: white;
  border-radius: 15px;
  margin: 0.2rem;
  ${ATPName}{
      p{
        font-size: 13px;
        font-weight: 100px;
        color: #1b75bc;
        font-family: 'Roboto', sans-serif;
      }
  }
  ${Rate}{
      border-bottom: 3px solid green;
      padding: 0 0.5rem;
      h4{
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
      }
  }
`
const FRDHeading = styled(TWLHeading)``
const BottomDivWrapper = styled(TopDivWrapper)` 
`
const BottomLeftDivWrapper = styled(TopLeftDivWrapper)` 
  background-color: white;
  flex: 40%;
  height: 100%auto;
`
const BottomMiddleDivWrapper = styled(TopLeftDivWrapper)` 
  background-color: white;
  flex: 20%;
  height: 100%auto;
`
const BottomRightDivWrapper = styled(TopLeftDivWrapper)` 
  background-color: white;
  flex: 40%;
  height: 100%auto;
`
export default HomeDash
