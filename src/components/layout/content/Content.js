import { Component } from "react";
import ApexChart from "./Bar";
import LocalSelect from "./LocalSelect";
import { Wrapper } from "../../../assets/style/content/content.styled";

class Content extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <LocalSelect />
          <ApexChart />
        </Wrapper>
      </>
    );
  }
}

export default Content;
