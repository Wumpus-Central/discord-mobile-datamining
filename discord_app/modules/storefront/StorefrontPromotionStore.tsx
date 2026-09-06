// === Module 8787: StorefrontPromotionStore ===

// Module 8787 (StorefrontPromotionStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

function handleReset() {

}
let obj = {};
const Store = initializeDefault.Store;
class StorefrontPromotionStore extends Store {
}
const prototype = StorefrontPromotionStore.prototype;
prototype["getFetchState"] = function getFetchState(arg0) {
  let state;
  if (obj[arg0] != null) {
    state = tmp.state;
  }
  return state;
};
prototype["getFetchedAt"] = function getFetchedAt(arg0) {
  let state;
  if (obj[arg0] != null) {
    state = tmp.state;
  }
  if ("success" !== state) {
    let state1;
    if (tmp != null) {
      state1 = tmp.state;
    }
  }
  return obj[arg0].fetchedAt;
};
prototype["getPromotionsForApplication"] = function getPromotionsForApplication(arg0) {
  let state;
  if (obj[arg0] != null) {
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
obj = {
  LOGOUT: handleReset,
  STOREFRONT_PROMOTIONS_FETCH_START: function handleFetchStart(arg0) {
    const iter = arg0.applicationIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = obj[nextResult];
      let state;
      let tmp4 = tmp3;
      let tmp5 = obj;
      if (tmp3 != null) {
        state = tmp3.state;
      }
      let tmp7;
      if ("success" === state) {
        let items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(tmp4.promotions, 0);
        tmp7 = items;
      }
      obj = { state: "loading", promotions: tmp7 };
      tmp5[nextResult] = obj;
      continue;
    }
  },
  STOREFRONT_PROMOTIONS_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ applicationIds, promotions } = arg0);
    obj = {};
    const timestamp = Date.now();
    const merged = Object.assign(obj);
    for (const item10017 of applicationIds) {
      obj = { state: "success", promotions: [], fetchedAt: timestamp };
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
        promotions = obj[tmp5].promotions;
        let arr = promotions.push(tmp4);
      }
      continue;
    }
  },
  STOREFRONT_PROMOTIONS_FETCH_FAIL: function handleFetchFail(arg0) {
    for (const item10010 of tmp) {
      obj = { state: "error", fetchedAt: tmp2 };
      obj[item10010] = obj;
      continue;
    }
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: handleReset
};
const storefrontPromotionStore = new StorefrontPromotionStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/StorefrontPromotionStore.tsx");

export default storefrontPromotionStore;