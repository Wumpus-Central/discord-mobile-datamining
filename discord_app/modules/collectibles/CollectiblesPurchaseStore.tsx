// === Module 7558: CollectiblesPurchaseStore ===

// Module 7558 (CollectiblesPurchaseStore)
import _mod12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

require = fn;
let map = new Map();
let closure_3 = map;
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
    return closure_3;
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
  get: function hasPreviouslyFetched() {
    return c8;
  },
  set: undefined
});
prototype["getPurchase"] = function getPurchase(skuId) {
  value = undefined;
  if (null != skuId) {
    value = closure_3.get(skuId);
  }
  return value;
};
prototype["getPurchases"] = function getPurchases(arr) {
  const mapped = arr.map((item) => closure_1_3.get(item));
  return mapped.filter((item) => null != item);
};
CollectiblesPurchaseStore.displayName = "CollectiblesPurchaseStore";
const collectiblesPurchaseStore = new CollectiblesPurchaseStore(DispatcherDefault, {
  COLLECTIBLES_PURCHASES_FETCH: function handlePurchasesFetch() {
    c4 = true;
    c6 = undefined;
  },
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: function handlePurchasesFetchSuccess(purchases) {
    if (0 === purchases.purchases.length) {
      closure_3 = map;
    } else {
      let items = [];
      HermesBuiltin.arraySpread(closure_3.values(), 0);
      if (!obj.isEqual(items, purchases.purchases)) {
        const _Map = Map;
        purchases = purchases.purchases;
        map = new Map(purchases.map((skuId) => {
          const items = [skuId.skuId, skuId];
          return items;
        }));
        closure_3 = map;
      }
      obj = _mod12;
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
        HermesBuiltin.arraySpread(closure_3.values(), 0);
        if (!obj.isEqual(items, purchases.purchases)) {
          const _Map = Map;
          purchases = purchases.purchases;
          map = new Map(purchases.map((skuId) => {
            const items = [skuId.skuId, skuId];
            return items;
          }));
          closure_3 = map;
        }
        obj = _mod12;
      }
      c5 = undefined;
      c7 = undefined;
    }
    closure_3 = map;
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesPurchaseStore.tsx");

export default collectiblesPurchaseStore;