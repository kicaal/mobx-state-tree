import { values } from "mobx";
import { types, flow, getParent } from "mobx-state-tree";

export const TShirtSize = types.model("TShirtSize", {
  size: types.string,
});

export const TShirt = types.model("TShirt", {
  id: types.identifier,
  model: types.string,
  price: types.number,
  size: types.string,
  isAvailable: true,
});

export const TShirtStore = types
  .model("TShirtStore", {
    isLoading: true,
    tShirts: types.map(TShirt),
  })
  .views((self) => ({
    get shop() {
      return getParent(self);
    },
    get sortedAvailableTShirts() {
      return sortTShirts(values(self.tShirts));
    },
  }))
  .actions((self) => {
    function markLoading(loading) {
      self.isLoading = loading;
    }

    function updateTShirts(json) {
      values(self.tShirts).forEach((tShirt) => (tShirt.isAvailable = false));
      json.forEach((tShirtJson) => {
        self.tShirts.put(tShirtJson);
        self.tShirts.get(tShirtJson.id).isAvailable = true;
      });
    }

    const loadTShirts = flow(function* loadTShirts() {
      try {
        const json = yield self.shop.fetch("/tShirts.json");
        updateTShirts(json);
        markLoading(false);
      } catch (err) {
        console.error("Failed to load t-shirts ", err);
      }
    });

    return {
      loadTShirts,
    };
  });

function sortTShirts(tShirts) {
  return tShirts
    .filter((b) => b.isAvailable)
    .sort((a, b) => (a.name > b.name ? 1 : a.name === b.name ? 0 : -1));
}
