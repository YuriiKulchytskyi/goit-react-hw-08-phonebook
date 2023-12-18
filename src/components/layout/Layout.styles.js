import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid rgb(176 176 176);
  padding: 15px 30px;
  max-width: 650px;
  min-height: calc(100vh - 70px);
  margin: 0 auto;

  box-shadow: 0 0 10px 2px #787878bf;
  border-radius: 5px;
`;

export const Header = styled.header`
  padding-bottom: 10px;
  margin: 0 auto;
`;

export const PageContainer = styled.div`
  max-width: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-height: 85vh;


  p.TextAuth {
    font-size: 20px;
    padding-top: 15px;
  }

  a {
    &:hover,
    &:focus {
      color: blue;
    }
  }
`;

