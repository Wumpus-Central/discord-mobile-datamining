// === Module 8475: StorefrontPromotionStore ===

// Module 8475 (StorefrontPromotionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

function handleReset() {

}
let obj = {};
const Store = get_initializedDefault.Store;
class StorefrontPromotionStore extends Store {
  getFetchState(arg0) {
    let state;
    if (obj[arg0] != null) {
      state = tmp.state;
    }
    return state;
  }
  getFetchedAt(arg0) {
    let state;
    if (obj[arg0] != null) {
      state = tmp.state;
    }
    if ("success" !== state) {
      let state1;
      if (obj[arg0] != null) {
        state1 = tmp.state;
      }
    }
    return obj[arg0].fetchedAt;
  }
  getPromotionsForApplication(arg0) {
    let tmp4;
    let state;
    if (obj[arg0] != null) {
      state = tmp.state;
    }
    if ("success" === state) {
      let promotions = tmp.promotions;
      if (promotions == null) {
        promotions = null;
      }
      tmp4 = promotions;
    } else {
      let state1;
      if (obj[arg0] != null) {
        state1 = tmp.state;
      }
      tmp4 = null;
    }
    return tmp4;
  }
}
const prototype = StorefrontPromotionStore.prototype;
StorefrontPromotionStore.displayName = "StorefrontPromotionStore";
obj = {
  LOGOUT: handleReset,
  STOREFRONT_PROMOTIONS_FETCH_START: function handleFetchStart(arg0) {
    const iter = arg0.applicationIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = obj[nextResult];
      let state;
      let tmp5 = tmp4;
      let tmp6 = obj;
      if (tmp4 != null) {
        state = tmp4.state;
      }
      let tmp8;
      if ("success" === state) {
        let items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items, tmp5.promotions, 0);
        tmp8 = items;
      }
      obj = { state: "loading", promotions: tmp8 };
      tmp6[nextResult] = obj;
      continue;
    }
  },
  STOREFRONT_PROMOTIONS_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let applicationIds;
    let promotions;
    ({ applicationIds, promotions } = arg0);
    obj = {};
    const timestamp = Date.now();
    const merged = Object.assign(obj);
    for (const item10017 of applicationIds) {
      let obj2 = { state: "success", promotions: [], fetchedAt: timestamp };
      obj[item10017] = obj2;
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
        let promotions1 = obj[tmp5].promotions;
        let arr = promotions1.push(tmp4);
      }
      continue;
    }
  },
  STOREFRONT_PROMOTIONS_FETCH_FAIL: function handleFetchFail(applicationIds) {
    applicationIds = applicationIds.applicationIds;
    for (const item10010 of applicationIds) {
      obj = { state: "error", fetchedAt: tmp };
      obj[item10010] = obj;
      continue;
    }
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: handleReset
};
const storefrontPromotionStore = new StorefrontPromotionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/storefront/StorefrontPromotionStore.tsx");

export default storefrontPromotionStore;