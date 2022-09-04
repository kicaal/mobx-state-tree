import { types, getEnv } from "mobx-state-tree";
import { TShirtStore } from "./TShirtStore";
import { CartStore } from "./CartStore";
import React, { useContext } from "react";
import { MobXProviderContext } from "mobx-react";

export const ShopStore = types
  .model("ShopStore", {
    tShirtStore: TShirtStore,
    cartStore: CartStore,
  })
  .views((self) => ({
    get fetch() {
      return getEnv(self).fetch;
    },
    get alert() {
      return getEnv(self).alert;
    },
    get isLoading() {
      return self.tShirtStore.isLoading;
    },
    get tShirts() {
      return self.tShirtStore.tShirts;
    },
    get sortedAvailabletShirts() {
      return self.tShirtStore.sortedAvailableTShirts;
    },
  }))
  .actions((self) => ({
    afterCreate() {
      self.tShirtStore.loadTShirts();
    },
  }));

const MSTContext = React.createContext(null);

// eslint-disable-next-line prefer-destructuring
export const Provider = MSTContext.Provider;

export const useStore = (mapStateToProps) => {
  const store = useContext(MSTContext);

  if (typeof mapStateToProps !== "undefined") {
    return mapStateToProps(store);
  }

  return store;
};
