import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  svg {
    cursor: pointer;
  }

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 30px;
  color: #000000;
`;