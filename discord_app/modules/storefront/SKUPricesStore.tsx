// === Module 6031: resetStoreState ===

// Module 6031 (resetStoreState)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import closure_2 from "_getSystemLocale" /* 1996 */;

require = arg1;
function resetStoreState() {
  closure_3 = {};
  closure_4 = {};
  closure_5 = {};
  closure_6 = {};
}
let closure_3 = {};
let closure_4 = {};
let closure_5 = {};
let closure_6 = {};
const Store = initializeDefault.Store;
class SKUPricesStore extends Store {
}
const prototype = SKUPricesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2);
  const items = [closure_2];
  this.syncWith(items, resetStoreState);
};
prototype["getPricesForSkuId"] = function getPricesForSkuId(id) {
  if (null != id) {
    let pricingResultId;
    if (dependencyMap[id] != null) {
      pricingResultId = tmp2.pricingResultId;
    }
    if (null != pricingResultId) {
      return table[pricingResultId];
    }
  }
};
prototype["getFetchStateForSkuId"] = function getFetchStateForSkuId(arg0) {
  if (null != arg0) {
    const obj = { type: "sku", skuId: null };
    obj[1] = arg0;
    if ("application" === obj.type) {
      const _HermesInternal2 = HermesInternal;
      let combined = "application:" + obj.applicationId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "skus:" + obj.skuId;
    }
    return closure_3[combined];
  }
};
prototype["getFetchStateForApplicationId"] = function getFetchStateForApplicationId(arg0) {
  if (null != arg0) {
    const obj = { type: "application", applicationId: null };
    obj[1] = arg0;
    if ("application" === obj.type) {
      const _HermesInternal2 = HermesInternal;
      let combined = "application:" + obj.applicationId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "skus:" + obj.skuId;
    }
    return closure_3[combined];
  }
};
prototype["getPromotionIdsForSkuId"] = function getPromotionIdsForSkuId(arg0) {
  if (null != arg0) {
    let prop;
    if (dependencyMap[arg0] != null) {
      prop = tmp2.storefrontPromotionIds;
    }
    return prop;
  }
};
prototype["getRewardsForSkuId"] = function getRewardsForSkuId(id) {
  if (null != id) {
    if (null != dependencyMap[id]) {
      const mapped = tmp2.rewardResultIds.map((arg0) => table[arg0]);
      return mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
    }
  }
};
SKUPricesStore.displayName = "SKUPricesStore";
const sKUPricesStore = new SKUPricesStore(dispatcherDefault, {
  LOGOUT: resetStoreState,
  SKUS_PRICING_FETCH_START: function handleFetchStart(priceId) {
    priceId = priceId.priceId;
    let obj = { type: "loading" };
    if ("application" === priceId.type) {
      obj = {};
      const merged = Object.assign(obj);
      let str = { type: "application", applicationId: null };
      str[1] = priceId.applicationId;
      if ("application" === str.type) {
        const _HermesInternal2 = HermesInternal;
        str = "application:";
        let combined = "application:" + str.applicationId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "skus:" + `application:`.skuId;
      }
      obj[combined] = obj;
    } else {
      obj = {};
      const merged1 = Object.assign(obj);
      const _Object = Object;
      const skuIds = priceId.skuIds;
      const merged2 = Object.assign(Object.fromEntries(skuIds.map((skuId) => {
        obj = { type: "sku", skuId };
        if ("application" === obj.type) {
          const _HermesInternal2 = HermesInternal;
          let combined = "application:" + obj.applicationId;
        } else {
          const _HermesInternal = HermesInternal;
          combined = "skus:" + obj.skuId;
        }
        const items = [combined, obj];
        return items;
      })));
    }
  },
  SKUS_PRICING_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ priceId, data } = arg0);
    let str = globalThis;
    const timestamp = Date.now();
    let obj = { type: "success", fetchedAt: timestamp };
    let obj5 = obj;
    if ("application" === priceId.type) {
      obj = {};
      const merged = Object.assign(obj6);
      let str2 = { type: "application", applicationId: null };
      str2[1] = priceId.applicationId;
      if ("application" === str2.type) {
        const _HermesInternal2 = HermesInternal;
        str2 = "application:";
        let combined = "application:" + str2.applicationId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "skus:" + `application:`.skuId;
      }
      obj[combined] = obj;
    } else {
      obj = {};
      const merged1 = Object.assign(obj6);
      const _Object = Object;
      const skuIds = priceId.skuIds;
      const merged2 = Object.assign(Object.fromEntries(skuIds.map((skuId) => {
        obj = { type: "sku", skuId };
        if ("application" === obj.type) {
          const _HermesInternal2 = HermesInternal;
          let combined = "application:" + obj.applicationId;
        } else {
          const _HermesInternal = HermesInternal;
          combined = "skus:" + obj.skuId;
        }
        const items = [combined, obj];
        return items;
      })));
      obj6 = obj;
      if ("application" !== priceId.type) {
        obj1 = {};
        const merged3 = Object.assign(obj1);
        const merged4 = Object.assign(data.pricingResultIdMap);
        const obj2 = {};
        const merged5 = Object.assign(obj2);
        const merged6 = Object.assign(data.skuPriceMap);
        const obj3 = {};
        const merged7 = Object.assign(obj3);
        const merged8 = Object.assign(data.rewardResultIdMap);
      } else {
        const obj4 = { type: "skus", skuIds: null };
        const _Object3 = Object;
        obj4[1] = Object.keys(data.skuPriceMap);
        obj5 = { type: "success", fetchedAt: null };
        obj5[1] = timestamp;
        if ("application" !== obj4.type) {
          obj6 = {};
          const merged9 = Object.assign(obj6);
          const _Object2 = Object;
          const skuIds1 = obj4.skuIds;
          const merged10 = Object.assign(Object.fromEntries(skuIds1.map((skuId) => {
            obj = { type: "sku", skuId };
            if ("application" === obj.type) {
              const _HermesInternal2 = HermesInternal;
              let combined = "application:" + obj.applicationId;
            } else {
              const _HermesInternal = HermesInternal;
              combined = "skus:" + obj.skuId;
            }
            const items = [combined, obj];
            return items;
          })));
        }
        const obj7 = {};
        const merged11 = Object.assign(obj6);
        let obj8 = { type: "application", applicationId: null };
        obj8[1] = obj4.applicationId;
        if ("application" === obj8.type) {
          obj8 = str.HermesInternal.concat;
          str = "application:";
          let obj9Result = obj8(obj8.applicationId);
        } else {
          const _HermesInternal3 = HermesInternal;
          obj9Result = "skus:" + obj8.skuId;
        }
        obj7[obj9Result] = obj5;
      }
    }
  },
  SKUS_PRICING_FETCH_FAIL: function handleFetchFail(priceId) {
    priceId = priceId.priceId;
    let obj = { type: "error", fetchedAt: Date.now() };
    let str = globalThis;
    if ("application" === priceId.type) {
      obj = {};
      const merged = Object.assign(obj1);
      obj = { type: "application", applicationId: null };
      obj[1] = priceId.applicationId;
      if ("application" === obj.type) {
        obj = str.HermesInternal.concat;
        str = "application:";
        let obj1Result = obj(obj.applicationId);
      } else {
        let _HermesInternal = HermesInternal;
        obj1Result = "skus:" + obj.skuId;
      }
      obj[obj1Result] = obj;
    } else {
      obj1 = {};
      const merged1 = Object.assign(obj1);
      const _Object = Object;
      const skuIds = priceId.skuIds;
      const merged2 = Object.assign(Object.fromEntries(skuIds.map((skuId) => {
        obj = { type: "sku", skuId };
        if ("application" === obj.type) {
          const _HermesInternal2 = HermesInternal;
          let combined = "application:" + obj.applicationId;
        } else {
          const _HermesInternal = HermesInternal;
          combined = "skus:" + obj.skuId;
        }
        const items = [combined, obj];
        return items;
      })));
    }
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: resetStoreState
});
const result = require("set").fileFinishedImporting("modules/storefront/SKUPricesStore.tsx");

export default sKUPricesStore;