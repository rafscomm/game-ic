import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 200px;
  width: 400px;
  background-color: rgba(148,96,48,255);
  opacity: 0.4;
  margin-top: 15px;
  margin-bottom: 15px;
  z-index: 1;
`

export const DivQuest = styled.div`
  height: 80px;
  width: 400px;
  padding: 15px;
`

export const Question = styled.h3`
  font-family: PixelArt;
  font-size: 16px;

`

export const DivOpt = styled.div`
  width: 300px;
  height: 120px;
  display: flex;
`
export const Opt1 = styled.div`
  height: 15px;
  width: 25px;
  background-color: black;
`