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
    if (obj5[id] != null) {
      pricingResultId = tmp2.pricingResultId;
    }
    if (null != pricingResultId) {
      return obj4[pricingResultId];
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
prototype["getPromotionIdsForSkuId"] = function getPromotionIdsForSkuId(arg0) {
  if (null != arg0) {
    let prop;
    if (obj5[arg0] != null) {
      prop = tmp2.storefrontPromotionIds;
    }
    return prop;
  }
};
prototype["getRewardsForSkuId"] = function getRewardsForSkuId(id) {
  if (null != id) {
    if (null != obj5[id]) {
      const mapped = tmp2.rewardResultIds.map((item) => obj6[item]);
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
      const obj3 = {};
      const merged1 = Object.assign(obj4);
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
    const obj = { type: "success", fetchedAt: timestamp };
    let obj8 = obj;
    if ("application" === priceId.type) {
      const obj2 = {};
      const merged = Object.assign(obj4);
      let str2 = { type: "application", applicationId: priceId.applicationId };
      if ("application" === str2.type) {
        const _HermesInternal2 = HermesInternal;
        str2 = "application:";
        let combined = "application:" + str2.applicationId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "skus:" + `application:`.skuId;
      }
      obj2[combined] = obj;
    } else {
      const obj3 = {};
      const merged1 = Object.assign(obj4);
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
      obj4 = obj3;
      if ("application" !== priceId.type) {
        obj4 = {};
        const merged3 = Object.assign(obj4);
        const merged4 = Object.assign(data.pricingResultIdMap);
        obj5 = {};
        const merged5 = Object.assign(obj5);
        const merged6 = Object.assign(data.skuPriceMap);
        obj6 = {};
        const merged7 = Object.assign(obj6);
        const merged8 = Object.assign(data.rewardResultIdMap);
      } else {
        const obj7 = { type: "skus", skuIds: null };
        const _Object3 = Object;
        obj7.skuIds = Object.keys(data.skuPriceMap);
        obj8 = { type: "success", fetchedAt: timestamp };
        if ("application" !== obj7.type) {
          const obj9 = {};
          const merged9 = Object.assign(obj4);
          const _Object2 = Object;
          const skuIds1 = obj7.skuIds;
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
          obj4 = obj9;
        }
        const obj10 = {};
        const merged11 = Object.assign(obj4);
        let obj11 = { type: "application", applicationId: obj7.applicationId };
        if ("application" === obj11.type) {
          obj11 = str.HermesInternal.concat;
          str = "application:";
          let obj20Result = obj11(obj11.applicationId);
        } else {
          const _HermesInternal3 = HermesInternal;
          obj20Result = "skus:" + obj11.skuId;
        }
        obj10[obj20Result] = obj8;
      }
    }
  },
  SKUS_PRICING_FETCH_FAIL: function handleFetchFail(priceId) {
    priceId = priceId.priceId;
    let obj = { type: "error", fetchedAt: Date.now() };
    let str = globalThis;
    if ("application" === priceId.type) {
      const obj2 = {};
      const merged = Object.assign(obj4);
      let obj3 = { type: "application", applicationId: priceId.applicationId };
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
