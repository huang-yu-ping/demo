import styled from "@emotion/styled";

//title part css
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const AsideWrapper = styled.div`
  width: 20%;
  @media (max-width: 540px) {
    height: 22vh;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  width: 80%;
  background: #f1f3f4;
  display: flex;
  @media (max-width: 540px) {
    height: 78vh;
    width: 100%;
  }
`;
