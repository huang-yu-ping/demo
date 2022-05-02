import { Component } from "react";
import Logo from "../../../assets/images/taipeilogo.png";
import {
  FigureLogo,
  TitleWrapper
} from "../../../assets/style/aside/aside.styled";

import { Trans } from "react-i18next";

class Aside extends Component {
  render() {
    return (
      <>
        <FigureLogo>
          <img src={Logo} alt="logo" />
        </FigureLogo>
        <TitleWrapper>
          <Trans>title</Trans>
        </TitleWrapper>
      </>
    );
  }
}

export default Aside;
