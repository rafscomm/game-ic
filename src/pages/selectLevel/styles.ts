import styled from 'styled-components';

export const Principal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`
export const Tela = styled.div `
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 800px;
  height: 600px;
  background-image: url('/src/assets/background.png');
  background-repeat: no-repeat;
  background-size: contain;
`

export const CardMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: pink; */
  position: fixed;
  top: 400px;
  width: 500px;
  height: 12rem;
  /* border: 2px black solid; */
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(148,96,48,255);
  opacity: 0.9;
  border: 2px rgba(92,189,208,255) solid;
  width: 125px;
  height: 12rem;
  border-radius: 20px;
  cursor: pointer;
   :hover{
    transform: scale(1.1);
  }
`

export const H1 = styled.h1`
  display: flex;
  font-family: 'Lobster', cursive;
  color: rgba(92,189,208,255);
  margin-left: 25px;
  margin-top: 25px;
  font-size: 32px;
  text-align: center;
`

export const H2 = styled.h2`
  display: flex;
  font-family: 'Lobster', cursive;
  color: white;
  margin-left: 55px;
  margin-top: 25px;
  font-size: 32px;
  text-align: center;
`
