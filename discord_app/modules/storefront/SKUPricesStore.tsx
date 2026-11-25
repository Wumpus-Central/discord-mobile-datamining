// === Module 7563: SKUPricesStore ===

// Module 7563 (SKUPricesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import LocaleStore from "LocaleStore" /* 2188 */;

require = fn;
function setPriceIdState(priceId, arg1) {
  closure_0 = arg1;
  if ("application" === priceId.type) {
    const obj2 = {};
    const merged = Object.assign(obj4);
    let str = { type: "application", applicationId: priceId.applicationId };
    if ("application" === str.type) {
      const _HermesInternal2 = HermesInternal;
      str = "application:";
      let combined = "application:" + str.applicationId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "skus:" + `application:`.skuId;
    }
    obj2[combined] = arg1;
  } else {
    const obj = {};
    const merged1 = Object.assign(obj4);
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
      items = [combined, obj];
      return items;
    })));
  }
}
function resetStoreState() {

}
const Store = initializeDefault.Store;
class SKUPricesStore extends Store {
}
const prototype = SKUPricesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(LocaleStore);
  items = [LocaleStore];
  this.syncWith(items, resetStoreState);
};
prototype["getPricesForSkuId"] = function getPricesForSkuId(id) {
  if (null != id) {
    let pricingResultId;
    if (obj4[id] != null) {
      pricingResultId = tmp2.pricingResultId;
    }
    if (null != pricingResultId) {
      return obj3[pricingResultId];
    }
  }
};
prototype["getFetchStateForSkuId"] = function getFetchStateForSkuId(skuId) {
  if (null != skuId) {
    const obj = { type: "sku", skuId };
    if ("application" === obj.type) {
      const _HermesInternal2 = HermesInternal;
      let combined = "application:" + obj.applicationId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "skus:" + obj.skuId;
    }
    return obj4[combined];
  }
};
prototype["getFetchStateForApplicationId"] = function getFetchStateForApplicationId(applicationId) {
  if (null != applicationId) {
    const obj = { type: "application", applicationId };
    if ("application" === obj.type) {
      const _HermesInternal2 = HermesInternal;
      let combined = "application:" + obj.applicationId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "skus:" + obj.skuId;
    }
    return obj4[combined];
  }
};
prototype["getPromotionIdsForSkuId"] = function getPromotionIdsForSkuId(skuId) {
  if (null != skuId) {
    let prop;
    if (obj4[skuId] != null) {
      prop = tmp2.storefrontPromotionIds;
    }
    return prop;
  }
};
prototype["getOffersForSkuId"] = function getOffersForSkuId(arg0) {
  if (null != arg0) {
    let offerResultIds;
    if (obj4[arg0] != null) {
      offerResultIds = tmp2.offerResultIds;
    }
    if (null != offerResultIds) {
      const mapped = offerResultIds.map((item) => obj6[item]);
      return mapped.filter(GlobalUtils.isNotNullish);
    }
  }
};
prototype["getRewardsForSkuId"] = function getRewardsForSkuId(id) {
  if (null != id) {
    if (null != obj4[id]) {
      const mapped = tmp2.rewardResultIds.map((item) => obj5[item]);
      return mapped.filter(GlobalUtils.isNotNullish);
    }
  }
};
SKUPricesStore.displayName = "SKUPricesStore";
const sKUPricesStore = new SKUPricesStore(DispatcherDefault, {
  LOGOUT: resetStoreState,
  SKUS_PRICING_FETCH_START: function handleFetchStart(priceId) {
    priceId = priceId.priceId;
    const obj = { type: "loading" };
    if ("application" === priceId.type) {
      const obj2 = {};
      const merged = Object.assign(obj4);
      let str = { type: "application", applicationId: priceId.applicationId };
      if ("application" === str.type) {
        const _HermesInternal2 = HermesInternal;
        str = "application:";
        let combined = "application:" + str.applicationId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "skus:" + `application:`.skuId;
      }
      obj2[combined] = obj;
    } else {
      obj3 = {};
      const merged1 = Object.assign(obj4);
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
        items = [combined, obj];
        return items;
      })));
    }
  },
  SKUS_PRICING_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ priceId, data } = arg0);
    const timestamp = Date.now();
    setPriceIdState(priceId, { type: "success", fetchedAt: timestamp });
    if ("application" === priceId.type) {
      const obj = { type: "skus", skuIds: null };
      const _Object = Object;
      obj.skuIds = Object.keys(data.skuPriceMap);
      const obj2 = { type: "success", fetchedAt: timestamp };
      setPriceIdState(obj, obj2);
    }
    const merged = Object.assign({});
    const merged1 = Object.assign(data.pricingResultIdMap);
    obj4 = {};
    const merged2 = Object.assign(obj4);
    const merged3 = Object.assign(data.skuPriceMap);
    if ("skus" === priceId.type) {
      const skuIds = priceId.skuIds;
      const iter = skuIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (null == data.skuPriceMap[nextResult]) {
          delete tmp2[tmp];
        }
        continue;
      }
    }
    const merged4 = Object.assign({});
    const merged5 = Object.assign(data.rewardResultIdMap);
    const merged6 = Object.assign({});
    const merged7 = Object.assign(data.offerResultIdMap);
    obj3 = {};
    obj5 = {};
    obj6 = {};
  },
  SKUS_PRICING_FETCH_FAIL: function handleFetchFail(priceId) {
    priceId = priceId.priceId;
    let obj = { type: "error", fetchedAt: Date.now() };
    let str = globalThis;
    if ("application" === priceId.type) {
      const obj2 = {};
      const merged = Object.assign(obj4);
      obj3 = { type: "application", applicationId: priceId.applicationId };
      if ("application" === obj3.type) {
        obj3 = str.HermesInternal.concat;
        str = "application:";
        let obj5Result = obj3(obj3.applicationId);
      } else {
        let _HermesInternal = HermesInternal;
        obj5Result = "skus:" + obj3.skuId;
      }
      obj2[obj5Result] = obj;
    } else {
      obj4 = {};
      const merged1 = Object.assign(obj4);
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
        items = [combined, obj];
        return items;
      })));
    }
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: resetStoreState
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/SKUPricesStore.tsx");

export default sKUPricesStore;