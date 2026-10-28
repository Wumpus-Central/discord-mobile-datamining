// discord_app/modules/collectibles/hooks/useShopProductItems.tsx
import c from "../../../../_runtime/00576_c.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
  set: undefined,
});
Object.defineProperty(prototype, "firstProfileEffect", {
  get: function firstProfileEffect() {
    return this.getFirstItemByType(require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT);
  },
  set: undefined,
});
Object.defineProperty(prototype, "firstNameplate", {
  get: function firstNameplate() {
    return this.getFirstItemByType(require("CollectiblesItemType").CollectiblesItemType.NAMEPLATE);
  },
  set: undefined,
});
Object.defineProperty(prototype, "firstProfileFrame", {
  get: function firstProfileFrame() {
    return this.getFirstItemByType(require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME);
  },
  set: undefined,
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
const ReactCompilerGating = fn(558);
function getProductItems(product) {
  if (typeof ItemsSortingHat === "function") {
    const obj = Object.create(ItemsSortingHat.prototype);
    obj.itemsByTypes = obj.sortByTypes(tmp);
    ({
      firstProfileEffect: obj2.firstProfileEffect,
      firstAvatarDecoration: obj2.firstAvatarDecoration,
      firstNameplate: obj2.firstNameplate,
      firstProfileFrame: obj2.firstProfileFrame,
    } = obj);
    return { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/hooks/useShopProductItems.tsx");

export { ItemsSortingHat };
export { getProductItems };
export const getPurchasedItem = function getPurchasedItem(arg0, firstAvatarDecoration) {
  let tmp;
  if (null != arg0) {
    if (typeof ItemsSortingHat === "function") {
      const obj = Object.create(tmp2.prototype);
      obj.itemsByTypes = obj.sortByTypes(tmp3);
      ({
        firstProfileEffect: obj2.firstProfileEffect,
        firstAvatarDecoration: obj2.firstAvatarDecoration,
        firstNameplate: obj2.firstNameplate,
        firstProfileFrame: obj2.firstProfileFrame,
      } = obj);
      tmp = { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null }[
        firstAvatarDecoration
      ];
      const obj3 = {
        firstProfileEffect: null,
        firstAvatarDecoration: null,
        firstNameplate: null,
        firstProfileFrame: null,
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp;
};
export const useShopProductItems = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShopProductItems(arg0) {
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        if (typeof ItemsSortingHat === "function") {
          const obj2 = Object.create(ItemsSortingHat.prototype);
          obj2.itemsByTypes = obj2.sortByTypes(tmp3);
          const obj5 = {
            firstProfileEffect: null,
            firstAvatarDecoration: null,
            firstNameplate: null,
            firstProfileFrame: null,
          };
          ({
            firstProfileEffect: obj3.firstProfileEffect,
            firstAvatarDecoration: obj3.firstAvatarDecoration,
            firstNameplate: obj3.firstNameplate,
            firstProfileFrame: obj3.firstProfileFrame,
          } = obj2);
          cResult[0] = arg0;
          cResult[1] = obj5;
          let tmp2 = obj5;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : function useShopProductItems(arg0) {
      closure_0 = arg0;
      const items = [arg0];
      return noop.useMemo(() => {
        if (typeof ItemsSortingHat === "function") {
          const obj = Object.create(ItemsSortingHat.prototype);
          obj.itemsByTypes = obj.sortByTypes(tmp);
          ({
            firstProfileEffect: obj2.firstProfileEffect,
            firstAvatarDecoration: obj2.firstAvatarDecoration,
            firstNameplate: obj2.firstNameplate,
            firstProfileFrame: obj2.firstProfileFrame,
          } = obj);
          return {
            firstProfileEffect: null,
            firstAvatarDecoration: null,
            firstNameplate: null,
            firstProfileFrame: null,
          };
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, items);
    };
