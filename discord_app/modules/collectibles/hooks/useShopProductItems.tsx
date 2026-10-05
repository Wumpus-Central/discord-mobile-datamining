// === Module 7842: useShopProductItems ===

// Module 7842 (useShopProductItems)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let map;

class ItemsSortingHat {
  constructor(items) {
    const obj = Object.create(new.target.prototype);
    obj.itemsByTypes = obj.sortByTypes(items);
    return obj;
  }
  getFirstItemByType(AVATAR_DECORATION) {
    const itemsByTypes = this.itemsByTypes;
    let items = itemsByTypes.get(AVATAR_DECORATION);
    if (items == null) {
      items = [];
    }
    const first = items[0];
    return null != first ? first : undefined;
  }
  sortByTypes(items) {
    const reduce = items.reduce;
    map = new Map();
    return reduce((get, type) => {
      const value = get.get(type.type);
      if (null != value) {
        value.push(type);
      } else {
        const items = [type];
        const result = get.set(type.type, items);
      }
      return get;
    }, map);
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
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const self = this;
    if (typeof ItemsSortingHat === "function") {
      const obj2 = Object.create(ItemsSortingHat.prototype);
      obj2.itemsByTypes = obj2.sortByTypes(tmp3);
      const obj5 = { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null };
      ({ firstProfileEffect: obj3.firstProfileEffect, firstAvatarDecoration: obj3.firstAvatarDecoration, firstNameplate: obj3.firstNameplate, firstProfileFrame: obj3.firstProfileFrame } = obj2);
      cResult[0] = arg0;
      cResult[1] = obj5;
      tmp2 = obj5;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    if (typeof ItemsSortingHat === "function") {
      const obj = Object.create(ItemsSortingHat.prototype);
      obj.itemsByTypes = obj.sortByTypes(tmp);
      const obj3 = { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null };
      ({ firstProfileEffect: obj2.firstProfileEffect, firstAvatarDecoration: obj2.firstAvatarDecoration, firstNameplate: obj2.firstNameplate, firstProfileFrame: obj2.firstProfileFrame } = obj);
      return obj3;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }, items);
});
function getProductItems(type) {
  if (typeof ItemsSortingHat === "function") {
    const obj = Object.create(ItemsSortingHat.prototype);
    obj.itemsByTypes = obj.sortByTypes(tmp);
    const obj3 = { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null };
    ({ firstProfileEffect: obj2.firstProfileEffect, firstAvatarDecoration: obj2.firstAvatarDecoration, firstNameplate: obj2.firstNameplate, firstProfileFrame: obj2.firstProfileFrame } = obj);
    return obj3;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let result = size.fileFinishedImporting("modules/collectibles/hooks/useShopProductItems.tsx");

export { ItemsSortingHat };
export { getProductItems };
export const getPurchasedItem = function getPurchasedItem(arg0, firstAvatarDecoration) {
  let tmp;
  if (null != arg0) {
    const self = this;
    if (typeof ItemsSortingHat === "function") {
      const obj = Object.create(tmp2.prototype);
      obj.itemsByTypes = obj.sortByTypes(tmp3);
      const obj3 = { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null };
      ({ firstProfileEffect: obj2.firstProfileEffect, firstAvatarDecoration: obj2.firstAvatarDecoration, firstNameplate: obj2.firstNameplate, firstProfileFrame: obj2.firstProfileFrame } = obj);
      tmp = obj3[firstAvatarDecoration];
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp;
};
export const useShopProductItems = tmp2;
export const getBundleItemNames = function getBundleItemNames(bundledProducts) {
  const intl = intl4.intl;
  let stringResult = intl.string(intl4.t["7v0T9P"]);
  const intl2 = intl4.intl;
  let stringResult1 = intl2.string(intl4.t.wR5wOo);
  const intl3 = intl4.intl;
  let stringResult2 = intl3.string(intl4.t.x5CoXR);
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