// === Module 9232: handleReset ===

// Module 9232 (handleReset)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

function handleReset() {
  closure_0 = {};
}
let closure_0 = {};
const Store = initializeDefault.Store;
class StorefrontPromotionStore extends Store {
}
const prototype = StorefrontPromotionStore.prototype;
prototype["getFetchState"] = function getFetchState(arg0) {
  let state;
  if (dependencyMap[arg0] != null) {
    state = tmp.state;
  }
  return state;
};
prototype["getFetchedAt"] = function getFetchedAt(arg0) {
  let state;
  if (dependencyMap[arg0] != null) {
    state = tmp.state;
  }
  if ("success" !== state) {
    let state1;
    if (tmp != null) {
      state1 = tmp.state;
    }
  }
  return dependencyMap[arg0].fetchedAt;
};
prototype["getPromotionsForApplication"] = function getPromotionsForApplication(arg0) {
  let state;
  if (dependencyMap[arg0] != null) {
    state = tmp.state;
  }
  if ("success" === state) {
    let promotions = tmp.promotions;
    if (promotions == null) {
      promotions = null;
    }
    let tmp4 = promotions;
  } else {
    let state1;
    if (tmp != null) {
      state1 = tmp.state;
    }
    tmp4 = null;
  }
  return tmp4;
};
StorefrontPromotionStore.displayName = "StorefrontPromotionStore";
const storefrontPromotionStore = new StorefrontPromotionStore(dispatcherDefault, {
  LOGOUT: handleReset,
  STOREFRONT_PROMOTIONS_FETCH_START: function handleFetchStart(arg0) {
    const iter = arg0.applicationIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = dependencyMap;
      let tmp3 = dependencyMap[nextResult];
      let state;
      let tmp4 = tmp3;
      let tmp5 = dependencyMap;
      if (tmp3 != null) {
        state = tmp3.state;
      }
      let tmp7;
      if ("success" === state) {
        let tmp8 = tmp3;
        let items = [];
        let tmp9 = items;
        let num = 0;
        let arraySpreadResult = HermesBuiltin.arraySpread(tmp4.promotions, 0);
        tmp7 = items;
      }
      let obj = { state: "loading", promotions: null };
      obj[1] = tmp7;
      tmp5[nextResult] = obj;
      continue;
    }
  },
  STOREFRONT_PROMOTIONS_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ applicationIds, promotions } = arg0);
    let obj = {};
    const timestamp = Date.now();
    const merged = Object.assign(obj);
    for (const item10017 of applicationIds) {
      obj = { state: "success", promotions: null, fetchedAt: null };
      obj[1] = [];
      obj[2] = timestamp;
      obj[item10017] = obj;
      continue;
    }
    const iter = promotions[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let applicationId = nextResult.applicationId;
      let tmp6 = obj[applicationId];
      let state;
      let tmp4 = nextResult;
      let tmp5 = applicationId;
      if (tmp6 != null) {
        state = tmp6.state;
      }
      if ("success" === state) {
        let tmp8 = applicationId;
        promotions = obj[tmp5].promotions;
        let tmp9 = nextResult;
        let arr = promotions.push(tmp4);
      }
      continue;
    }
  },
  STOREFRONT_PROMOTIONS_FETCH_FAIL: function handleFetchFail(arg0) {
    for (const item10010 of tmp) {
      let tmp3 = closure_0;
      let obj = { state: "error", fetchedAt: null };
      obj[1] = tmp2;
      closure_0[item10010] = obj;
      continue;
    }
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: handleReset
});
const result = require("set").fileFinishedImporting("modules/storefront/StorefrontPromotionStore.tsx");

export default storefrontPromotionStore;