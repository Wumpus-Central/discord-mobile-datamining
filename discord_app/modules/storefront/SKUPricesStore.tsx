// discord_app/modules/storefront/SKUPricesStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";

require = fn;
function resetStoreState() {}
const Store = initializeDefault.Store;
class SKUPricesStore extends Store {}
const prototype = SKUPricesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(LocaleStore);
  const items = [LocaleStore];
  this.syncWith(items, resetStoreState);
};
prototype["getPricesForSkuId"] = function getPricesForSkuId(id) {
  if (null != id) {
    let pricingResultId;
    if (obj2[id] != null) {
      pricingResultId = tmp2.pricingResultId;
    }
    if (null != pricingResultId) {
      return obj1[pricingResultId];
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
    return obj1[combined];
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
    return obj1[combined];
  }
};
prototype["getPromotionIdsForSkuId"] = function getPromotionIdsForSkuId(arg0) {
  if (null != arg0) {
    let prop;
    if (obj2[arg0] != null) {
      prop = tmp2.storefrontPromotionIds;
    }
    return prop;
  }
};
prototype["getRewardsForSkuId"] = function getRewardsForSkuId(id) {
  if (null != id) {
    if (null != obj2[id]) {
      const mapped = tmp2.rewardResultIds.map((item) => obj3[item]);
      return mapped.filter(GlobalUtils.isNotNullish);
    }
  }
};
SKUPricesStore.displayName = "SKUPricesStore";
const sKUPricesStore = new SKUPricesStore(DispatcherDefault, {
  LOGOUT: resetStoreState,
  SKUS_PRICING_FETCH_START: function handleFetchStart(priceId) {
    priceId = priceId.priceId;
    let obj = { type: "loading" };
    if ("application" === priceId.type) {
      obj = {};
      const merged = Object.assign(obj1);
      let str = { type: "application", applicationId: priceId.applicationId };
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
      const merged1 = Object.assign(obj1);
      const _Object = Object;
      const skuIds = priceId.skuIds;
      const merged2 = Object.assign(
        Object.fromEntries(
          skuIds.map((skuId) => {
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
          }),
        ),
      );
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
      const merged = Object.assign(obj1);
      let str2 = { type: "application", applicationId: priceId.applicationId };
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
      const merged1 = Object.assign(obj1);
      const _Object = Object;
      const skuIds = priceId.skuIds;
      const merged2 = Object.assign(
        Object.fromEntries(
          skuIds.map((skuId) => {
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
          }),
        ),
      );
      obj1 = obj;
      if ("application" !== priceId.type) {
        obj1 = {};
        const merged3 = Object.assign(obj1);
        const merged4 = Object.assign(data.pricingResultIdMap);
        obj2 = {};
        const merged5 = Object.assign(obj2);
        const merged6 = Object.assign(data.skuPriceMap);
        obj3 = {};
        const merged7 = Object.assign(obj3);
        const merged8 = Object.assign(data.rewardResultIdMap);
      } else {
        const obj4 = { type: "skus", skuIds: null };
        const _Object3 = Object;
        obj4.skuIds = Object.keys(data.skuPriceMap);
        obj5 = { type: "success", fetchedAt: timestamp };
        if ("application" !== obj4.type) {
          const obj6 = {};
          const merged9 = Object.assign(obj1);
          const _Object2 = Object;
          const skuIds1 = obj4.skuIds;
          const merged10 = Object.assign(
            Object.fromEntries(
              skuIds1.map((skuId) => {
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
              }),
            ),
          );
          obj1 = obj6;
        }
        const obj7 = {};
        const merged11 = Object.assign(obj1);
        let obj8 = { type: "application", applicationId: obj4.applicationId };
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
      obj = { type: "application", applicationId: priceId.applicationId };
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
      const merged2 = Object.assign(
        Object.fromEntries(
          skuIds.map((skuId) => {
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
          }),
        ),
      );
    }
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: resetStoreState,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/SKUPricesStore.tsx");

export default sKUPricesStore;
