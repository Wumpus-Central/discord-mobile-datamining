// === Module 7250: map ===

// Module 7250 (map)
import apply from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

require = arg1;
let map = new Map();
let c4 = false;
let c5;
let c6;
let c7;
let c8 = false;
const Store = initializeDefault.Store;
class CollectiblesPurchaseStore extends Store {
}
const prototype = CollectiblesPurchaseStore.prototype;
Object.defineProperty(prototype, "isFetching", {
  get: function isFetching() {
    return c4;
  },
  set: undefined
});
Object.defineProperty(prototype, "isClaiming", {
  get: function isClaiming() {
    return c5;
  },
  set: undefined
});
Object.defineProperty(prototype, "purchases", {
  get: function purchases() {
    return map;
  },
  set: undefined
});
Object.defineProperty(prototype, "fetchError", {
  get: function fetchError() {
    return c6;
  },
  set: undefined
});
Object.defineProperty(prototype, "claimError", {
  get: function claimError() {
    return c7;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasPreviouslyFetched", {
  get: function hasPreviouslyFetched(arg0, items2) {
    return c8;
  },
  set: undefined
});
prototype["getPurchase"] = function getPurchase(skuId) {
  let value;
  if (null != skuId) {
    value = map.get(skuId);
  }
  return value;
};
prototype["getPurchases"] = function getPurchases(arr) {
  const mapped = arr.map((arg0) => closure_3.get(arg0));
  return mapped.filter((arg0) => null != arg0);
};
CollectiblesPurchaseStore.displayName = "CollectiblesPurchaseStore";
const collectiblesPurchaseStore = new CollectiblesPurchaseStore(dispatcherDefault, {
  COLLECTIBLES_PURCHASES_FETCH: function handlePurchasesFetch() {
    c4 = true;
    c6 = undefined;
  },
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: function handlePurchasesFetchSuccess(purchases) {
    if (0 !== purchases.purchases.length) {
      let items = [];
      HermesBuiltin.arraySpread(map.values(), 0);
      if (!obj.isEqual(items, purchases.purchases)) {
        const _Map = Map;
        purchases = purchases.purchases;
        map = new Map(purchases.map((skuId) => {
          const items = [skuId.skuId, skuId];
          return items;
        }));
      }
      obj = apply;
    }
    c8 = true;
    c4 = false;
    c6 = undefined;
  },
  COLLECTIBLES_PURCHASES_FETCH_FAILURE: function handlePurchasesFetchFailure(error) {
    closure_3 = map;
    c4 = false;
    error = error.error;
    c8 = true;
  },
  COLLECTIBLES_CLAIM: function handleClaim(skuId) {
    skuId = skuId.skuId;
    c7 = undefined;
  },
  COLLECTIBLES_CLAIM_SUCCESS: function handleClaimSuccess(purchases) {
    if (null != purchases.purchases) {
      if (0 !== purchases.purchases.length) {
        let items = [];
        HermesBuiltin.arraySpread(map.values(), 0);
        if (!obj.isEqual(items, purchases.purchases)) {
          const _Map = Map;
          purchases = purchases.purchases;
          map = new Map(purchases.map((skuId) => {
            const items = [skuId.skuId, skuId];
            return items;
          }));
        }
        obj = apply;
      }
      c5 = undefined;
      c7 = undefined;
    }
  },
  COLLECTIBLES_CLAIM_FAILURE: function handleClaimFailure(arg0) {
    ({ skuId: c5, error: c7 } = arg0);
  },
  LOGOUT: function handleLogout() {
    closure_3 = map;
    c4 = false;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = false;
  }
});
const result = require("set").fileFinishedImporting("modules/collectibles/CollectiblesPurchaseStore.tsx");

export default collectiblesPurchaseStore;