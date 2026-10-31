// === Module 8742: useShopProductItems ===

// Module 8742 (useShopProductItems)
import noop from "module_19" /* 19 */;

const require = fn;
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
export function getProductItems(product) {
  if (typeof ItemsSortingHat === "function") {
    const obj = Object.create(ItemsSortingHat.prototype);
    obj.itemsByTypes = obj.sortByTypes(tmp);
    ({ firstProfileEffect: obj2.firstProfileEffect, firstAvatarDecoration: obj2.firstAvatarDecoration, firstNameplate: obj2.firstNameplate, firstProfileFrame: obj2.firstProfileFrame } = obj);
    return { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export function getPurchasedItem(arg0, firstAvatarDecoration) {
  let tmp;
  if (null != arg0) {
    if (typeof ItemsSortingHat === "function") {
      const obj = Object.create(tmp2.prototype);
      obj.itemsByTypes = obj.sortByTypes(tmp3);
      ({ firstProfileEffect: obj2.firstProfileEffect, firstAvatarDecoration: obj2.firstAvatarDecoration, firstNameplate: obj2.firstNameplate, firstProfileFrame: obj2.firstProfileFrame } = obj);
      tmp = { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null }[firstAvatarDecoration];
      const obj3 = { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp;
}
export function useShopProductItems(product) {
  closure_0 = product;
  const items = [product];
  return noop.useMemo(() => {
    if (typeof ItemsSortingHat === "function") {
      const obj = Object.create(ItemsSortingHat.prototype);
      obj.itemsByTypes = obj.sortByTypes(tmp);
      ({ firstProfileEffect: obj2.firstProfileEffect, firstAvatarDecoration: obj2.firstAvatarDecoration, firstNameplate: obj2.firstNameplate, firstProfileFrame: obj2.firstProfileFrame } = obj);
      return { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }, items);
}