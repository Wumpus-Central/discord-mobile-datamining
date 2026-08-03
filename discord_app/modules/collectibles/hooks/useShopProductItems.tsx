// === Module 8049: firstAvatarDecoration ===

// Module 8049 (firstAvatarDecoration)
import noop from "noop";

const require = arg1;
class ItemsSortingHat {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.itemsByTypes = obj.sortByTypes(global);
    return obj;
  }
}
const prototype = ItemsSortingHat.prototype;
Object.defineProperty(prototype, "firstAvatarDecoration", {
  get: function firstAvatarDecoration(first) {
    return this.getFirstItemByType(require(1901) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION);
  },
  set: undefined
});
Object.defineProperty(prototype, "firstProfileEffect", {
  get: function firstProfileEffect() {
    return this.getFirstItemByType(require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT);
  },
  set: undefined
});
Object.defineProperty(prototype, "firstNameplate", {
  get: function firstNameplate(first) {
    return this.getFirstItemByType(require(1901) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE);
  },
  set: undefined
});
Object.defineProperty(prototype, "firstProfileFrame", {
  get: function firstProfileFrame(first) {
    return this.getFirstItemByType(require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME);
  },
  set: undefined
});
prototype["getFirstItemByType"] = function getFirstItemByType(AVATAR_DECORATION) {
  const itemsByTypes = this.itemsByTypes;
  let items = itemsByTypes.get(AVATAR_DECORATION);
  if (items == null) {
    items = [];
  }
  const first = items[0];
  return null != first ? first : undefined;
};
prototype["sortByTypes"] = function sortByTypes(items) {
  return items.reduce((get, type) => {
    const value = get.get(type.type);
    if (null != value) {
      value.push(type);
    } else {
      const items = [type];
      const result = get.set(type.type, items);
    }
    return get;
  }, new Map());
};
let result = require("getSystemLocale").fileFinishedImporting("modules/collectibles/hooks/useShopProductItems.tsx");

export { ItemsSortingHat };
export const useShopProductItems = function useShopProductItems(product) {
  let closure_0 = product;
  const items = [product];
  return React.useMemo(() => {
    if (typeof outer1_3 !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    let obj = Object.create(outer1_3.prototype);
    obj.itemsByTypes = obj.sortByTypes(product.items);
    obj = { firstProfileEffect: obj.firstProfileEffect, firstAvatarDecoration: obj.firstAvatarDecoration, firstNameplate: obj.firstNameplate, firstProfileFrame: obj.firstProfileFrame };
    return obj;
  }, items);
};
export const getBundleItemNames = function getBundleItemNames(bundledProducts) {
  const intl = require(1236) /* getSystemLocale */.intl;
  let stringResult = intl.string(require(1236) /* getSystemLocale */.t["7v0T9P"]);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  let stringResult1 = intl2.string(require(1236) /* getSystemLocale */.t.wR5wOo);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  let stringResult2 = intl3.string(require(1236) /* getSystemLocale */.t.x5CoXR);
  let itemThreeName = stringResult2;
  let itemTwoName = stringResult1;
  let itemOneName = stringResult;
  if (null != bundledProducts.bundledProducts) {
    if (bundledProducts.bundledProducts.length > 0) {
      const first = bundledProducts.bundledProducts[0];
      let name;
      if (first != null) {
        name = first.name;
      }
      stringResult = name;
    }
    if (bundledProducts.bundledProducts.length > 1) {
      let name1;
      if (bundledProducts.bundledProducts[1] != null) {
        name1 = tmp9.name;
      }
      stringResult1 = name1;
    }
    if (bundledProducts.bundledProducts.length > 2) {
      let name2;
      if (bundledProducts.bundledProducts[2] != null) {
        name2 = tmp11.name;
      }
      stringResult2 = name2;
    }
    itemThreeName = stringResult2;
    itemTwoName = stringResult1;
    itemOneName = stringResult;
  }
  return { itemOneName, itemTwoName, itemThreeName };
};