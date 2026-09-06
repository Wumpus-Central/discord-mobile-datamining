// === Module 8171: useShopProductItems ===

// Module 8171 (useShopProductItems)
import util from "util" /* 1114 */;
import noop from "module_19" /* 19 */;

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
  get: function firstAvatarDecoration() {
    return this.getFirstItemByType(require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION);
  },
  set: undefined
});
Object.defineProperty(prototype, "firstProfileEffect", {
  get: function firstProfileEffect() {
    return this.getFirstItemByType(require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT);
  },
  set: undefined
});
Object.defineProperty(prototype, "firstNameplate", {
  get: function firstNameplate() {
    return this.getFirstItemByType(require("CollectiblesItemType").CollectiblesItemType.NAMEPLATE);
  },
  set: undefined
});
Object.defineProperty(prototype, "firstProfileFrame", {
  get: function firstProfileFrame() {
    return this.getFirstItemByType(require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME);
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
prototype["sortByTypes"] = function sortByTypes(arr) {
  return arr.reduce((get, type) => {
    value = get.get(type.type);
    if (null != value) {
      value.push(type);
    } else {
      const items = [type];
      const result = get.set(type.type, items);
    }
    return get;
  }, new Map());
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/hooks/useShopProductItems.tsx");

export { ItemsSortingHat };
export const getProductItems = function getProductItems(arg0) {
  if (typeof ItemsSortingHat === "function") {
    let obj = Object.create(ItemsSortingHat.prototype);
    obj.itemsByTypes = obj.sortByTypes(tmp);
    obj = { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null };
    ({ firstProfileEffect: obj2.firstProfileEffect, firstAvatarDecoration: obj2.firstAvatarDecoration, firstNameplate: obj2.firstNameplate, firstProfileFrame: obj2.firstProfileFrame } = obj);
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const getPurchasedItem = function getPurchasedItem(arg0, firstAvatarDecoration) {
  let tmp;
  if (null != arg0) {
    if (typeof ItemsSortingHat === "function") {
      let obj = Object.create(tmp2.prototype);
      obj.itemsByTypes = obj.sortByTypes(tmp3);
      obj = { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null };
      ({ firstProfileEffect: obj2.firstProfileEffect, firstAvatarDecoration: obj2.firstAvatarDecoration, firstNameplate: obj2.firstNameplate, firstProfileFrame: obj2.firstProfileFrame } = obj);
      tmp = obj[firstAvatarDecoration];
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp;
};
export const useShopProductItems = function useShopProductItems(product) {
  closure_0 = product;
  const items = [product];
  return noop.useMemo(() => {
    if (typeof ItemsSortingHat === "function") {
      let obj = Object.create(ItemsSortingHat.prototype);
      obj.itemsByTypes = obj.sortByTypes(tmp);
      obj = { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null };
      ({ firstProfileEffect: obj2.firstProfileEffect, firstAvatarDecoration: obj2.firstAvatarDecoration, firstNameplate: obj2.firstNameplate, firstProfileFrame: obj2.firstProfileFrame } = obj);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }, items);
};
export const getBundleItemNames = function getBundleItemNames(bundledProducts) {
  const intl = util.intl;
  let stringResult = intl.string(util.t["7v0T9P"]);
  const intl2 = util.intl;
  let stringResult1 = intl2.string(util.t.wR5wOo);
  const intl3 = util.intl;
  let stringResult2 = intl3.string(util.t.x5CoXR);
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