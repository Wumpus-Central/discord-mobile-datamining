// === Module 9205: firstAvatarDecoration ===

// Module 9205 (firstAvatarDecoration)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import noop from "noop" /* 19 */;

require = fn;
class ItemsSortingHat {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.itemsByTypes = obj.sortByTypes(global);
    return obj;
  }
}
const prototype = ItemsSortingHat.prototype;
Object.defineProperty(prototype, "firstAvatarDecoration", {
  get: function firstAvatarDecoration(closure_2) {
    return this.getFirstItemByType(require(1949) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION);
  },
  set: undefined
});
Object.defineProperty(prototype, "firstProfileEffect", {
  get: function firstProfileEffect() {
    return this.getFirstItemByType(require(1949) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT);
  },
  set: undefined
});
Object.defineProperty(prototype, "firstNameplate", {
  get: function firstNameplate(closure_2) {
    return this.getFirstItemByType(require(1949) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE);
  },
  set: undefined
});
Object.defineProperty(prototype, "firstProfileFrame", {
  get: function firstProfileFrame(closure_2) {
    return this.getFirstItemByType(require(1949) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME);
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
  return items.reduce((acc, item, index) => {
    const value = acc.get(item.type);
    if (null != value) {
      value.push(item);
    } else {
      const items = [item];
      const result = acc.set(item.type, items);
    }
    return acc;
  }, new Map());
};
let result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useShopProductItems.tsx");

export { ItemsSortingHat };
export const useShopProductItems = function useShopProductItems(product) {
  closure_0 = product;
  const items = [product];
  return React.useMemo(() => {
    if (typeof ItemsSortingHat !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = Object.create(ItemsSortingHat.prototype);
    obj.itemsByTypes = obj.sortByTypes(product.items);
    obj = { firstProfileEffect: obj.firstProfileEffect, firstAvatarDecoration: obj.firstAvatarDecoration, firstNameplate: obj.firstNameplate, firstProfileFrame: obj.firstProfileFrame };
    return obj;
  }, items);
};
export const getBundleItemNames = function getBundleItemNames(bundledProducts) {
  const intl = getSystemLocale.intl;
  let stringResult = intl.string(getSystemLocale.t["7v0T9P"]);
  const intl2 = getSystemLocale.intl;
  let stringResult1 = intl2.string(getSystemLocale.t.wR5wOo);
  const intl3 = getSystemLocale.intl;
  let stringResult2 = intl3.string(getSystemLocale.t.x5CoXR);
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