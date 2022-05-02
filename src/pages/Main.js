import { Component } from "react";
import Aside from "../components/layout/aside/Aside";
import Content from "../components/layout/content/Content";

import {
  Container,
  AsideWrapper,
  ContentWrapper
} from "../assets/style/pages/main.styled";

class Main extends Component {
  render() {
    return (
      <>
        <Container>
          <AsideWrapper>
            <Aside></Aside>
          </AsideWrapper>
          <ContentWrapper>
            <Content></Content>
          </ContentWrapper>
        </Container>
      </>
    );
  }
}

export default Main;
