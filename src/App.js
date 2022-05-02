import React from "react";
import Main from "./pages/Main";
import store from "./services/store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}
