import { getParent, types } from "mobx-state-tree";
import { TShirt } from "./TShirtStore";

export const CartEntry = types
  .model("CartEntry", {
    tShirt: types.reference(TShirt),
    quantity: 0,
  })
  .views((self) => ({
    get price() {
      return self.tShirt.price * self.quantity;
    },
    get isValidTShirt() {
      return self.tShirt.isAvailable;
    },
    get shop() {
      return getParent(self);
    },
  }))
  .actions((self) => ({
    increaseQuantity(number) {
      self.quantity += number;
    },
    setQuantity(number) {
      self.quantity = number;
    },
  }));

export const CartStore = types
  .model("CartStore", {
    entries: types.array(CartEntry),
  })
  .actions((self) => ({
    addTShirt(tShirt, quantity = 1) {
      //let entry = self.entries.find((entry) => entry.tShirt.id === tShirt.id);
      //if (!entry) {
      self.entries.push({ tShirt: tShirt });
      //entry = self.entries[self.entries.length - 1];
      //}
      //entry.increaseQuantity(quantity);
    },
  }));
