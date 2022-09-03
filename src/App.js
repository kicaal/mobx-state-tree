import React from "react";
import "./index.css";
import TShirts from "./components/TShirts";
import { ShopStore } from "./stores/ShopStore";
import { Cart } from "./components/Cart";
import { Provider } from "mobx-react";
const fetcher = (url) =>
  window
    .fetch(url, {
      method: "get",
    })
    .then((response) => response.json());

const shop = ShopStore.create(
  { tShirtStore: {}, cart: {} },
  {
    fetch: fetcher,
  }
);
const App = () => (
  <Provider store={shop}>
    <TShirts />
    <Cart />
  </Provider>
);

export default App;
