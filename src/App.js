import React from "react";
import "./index.css";
import TShirts from "./components/TShirts";
import { Provider, ShopStore } from "./stores/ShopStore";
import { Cart } from "./components/Cart";
import AppStyles from "./AppStyles.styles.tw";

const fetcher = (url) =>
  window
    .fetch(url, {
      method: "get",
    })
    .then((response) => response.json());

const shop = ShopStore.create(
  { tShirtStore: {}, cartStore: {} },
  {
    fetch: fetcher,
  }
);
const App = () => (
  <Provider value={shop}>
    <AppStyles>
      <TShirts />
      <Cart />
    </AppStyles>
  </Provider>
);

export default App;
