import { types, getEnv } from "mobx-state-tree";
import { TShirtStore } from "./TShirtStore";
import { CartStore } from "./CartStore";
import React from "react";
import { MobXProviderContext } from "mobx-react";

export const ShopStore = types
  .model("ShopStore", {
    tShirtStore: TShirtStore,
    cart: CartStore,
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
    get allEntries() {
      return self.cart.entries;
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

export function useStore() {
  return React.useContext(MobXProviderContext).store;
}
