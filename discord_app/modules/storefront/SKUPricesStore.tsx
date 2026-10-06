// discord_app/modules/storefront/SKUPricesStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const f93181 = (skuId) => {
  let combined;
  obj = { type: "sku", skuId };
  if ("application" === obj.type) {
    const _HermesInternal2 = HermesInternal;
    combined = "application:" + obj.applicationId;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "skus:" + obj.skuId;
  }
  const items = [combined, obj];
  return items;
};
function resetStoreState() {}
let obj4 = {};
let obj10 = {};
let obj12 = {};
let obj11 = {};
let obj13 = {};
const Store = get_initializedDefault.Store;
class SKUPricesStore extends Store {
  initialize() {
    this.waitFor(LocaleStore);
    const items = [LocaleStore];
    this.syncWith(items, resetStoreState);
  }
  getPricesForSkuId(id) {
    if (null != id) {
      let pricingResultId;
      if (obj11[id] != null) {
        pricingResultId = tmp2.pricingResultId;
      }
      if (null != pricingResultId) {
        return obj10[pricingResultId];
      }
    }
  }
  getFetchStateForSkuId(skuId) {
    if (null != skuId) {
      let combined;
      const obj = { type: "sku", skuId };
      if ("application" === obj.type) {
        const _HermesInternal2 = HermesInternal;
        combined = "application:" + obj.applicationId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "skus:" + obj.skuId;
      }
      return obj4[combined];
    }
  }
  getFetchStateForApplicationId(applicationId) {
    if (null != applicationId) {
      let combined;
      const obj = { type: "application", applicationId };
      if ("application" === obj.type) {
        const _HermesInternal2 = HermesInternal;
        combined = "application:" + obj.applicationId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "skus:" + obj.skuId;
      }
      return obj4[combined];
    }
  }
  getPromotionIdsForSkuId(arg0) {
    if (null != arg0) {
      let prop;
      if (obj11[arg0] != null) {
        prop = tmp2.storefrontPromotionIds;
      }
      return prop;
    }
  }
  getOffersForSkuId(arg0) {
    if (null != arg0) {
      let offerResultIds;
      if (obj11[arg0] != null) {
        offerResultIds = tmp2.offerResultIds;
      }
      if (null != offerResultIds) {
        const mapped = offerResultIds.map((item) => obj13[item]);
        return mapped.filter(GlobalUtils.isNotNullish);
      }
    }
  }
  getRewardsForSkuId(id) {
    if (null != id) {
      if (null != obj11[id]) {
        const rewardResultIds = obj11[id].rewardResultIds;
        const mapped = rewardResultIds.map((item) => obj12[item]);
        return mapped.filter(GlobalUtils.isNotNullish);
      }
    }
  }
}
const prototype = SKUPricesStore.prototype;
SKUPricesStore.displayName = "SKUPricesStore";
let obj = {
  LOGOUT: resetStoreState,
  SKUS_PRICING_FETCH_START: function handleFetchStart(priceId) {
    priceId = priceId.priceId;
    const obj = { type: "loading" };
    if ("application" === priceId.type) {
      let combined;
      const obj2 = {};
      const merged = Object.assign(obj4);
      const obj3 = { type: "application", applicationId: priceId.applicationId };
      if ("application" === obj3.type) {
        const _HermesInternal2 = HermesInternal;
        combined = "application:" + obj3.applicationId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "skus:" + obj3.skuId;
      }
      obj2[combined] = obj;
      obj4 = obj2;
    } else {
      obj4 = {};
      const merged1 = Object.assign(obj4);
      const _Object = Object;
      const skuIds = priceId.skuIds;
      const merged2 = Object.assign(Object.fromEntries(skuIds.map(f93181)));
    }
  },
  SKUS_PRICING_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let data;
    let priceId;
    ({ priceId, data } = arg0);
    const timestamp = Date.now();
    const obj = { type: "success", fetchedAt: timestamp };
    if ("application" === priceId.type) {
      let combined;
      const obj2 = {};
      const merged = Object.assign(obj4);
      const obj3 = { type: "application", applicationId: priceId.applicationId };
      if ("application" === obj3.type) {
        const _HermesInternal2 = HermesInternal;
        combined = "application:" + obj3.applicationId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "skus:" + obj3.skuId;
      }
      obj2[combined] = obj;
      obj4 = obj2;
    } else {
      obj4 = {};
      const merged1 = Object.assign(obj4);
      const _Object = Object;
      const skuIds = priceId.skuIds;
      const merged2 = Object.assign(Object.fromEntries(skuIds.map(f93181)));
    }
    if ("application" === priceId.type) {
      let obj9;
      const obj5 = { type: "skus", skuIds: Object.keys(data.skuPriceMap) };
      const _Object3 = Object;
      const obj6 = { type: "success", fetchedAt: timestamp };
      if ("application" === obj5.type) {
        let combined1;
        const obj7 = {};
        const merged3 = Object.assign(obj4);
        const obj8 = { type: "application", applicationId: obj5.applicationId };
        if ("application" === obj8.type) {
          const _HermesInternal4 = HermesInternal;
          combined1 = "application:" + obj8.applicationId;
        } else {
          const _HermesInternal3 = HermesInternal;
          combined1 = "skus:" + obj8.skuId;
        }
        obj7[combined1] = obj6;
        obj9 = obj7;
      } else {
        obj9 = {};
        const merged4 = Object.assign(obj4);
        const _Object2 = Object;
        const skuIds1 = obj5.skuIds;
        const merged5 = Object.assign(Object.fromEntries(skuIds1.map(f93181)));
      }
      obj4 = obj9;
    }
    obj10 = {};
    const merged6 = Object.assign(obj10);
    const merged7 = Object.assign(data.pricingResultIdMap);
    obj11 = {};
    const merged8 = Object.assign(obj11);
    const merged9 = Object.assign(data.skuPriceMap);
    obj12 = {};
    const merged10 = Object.assign(obj12);
    const merged11 = Object.assign(data.rewardResultIdMap);
    obj13 = {};
    const merged12 = Object.assign(obj13);
    const merged13 = Object.assign(data.offerResultIdMap);
  },
  SKUS_PRICING_FETCH_FAIL: function handleFetchFail(priceId) {
    priceId = priceId.priceId;
    let obj = { type: "error", fetchedAt: Date.now() };
    if ("application" === priceId.type) {
      let combined;
      const obj2 = {};
      const merged = Object.assign(obj4);
      const obj3 = { type: "application", applicationId: priceId.applicationId };
      if ("application" === obj3.type) {
        let _HermesInternal2 = HermesInternal;
        combined = "application:" + obj3.applicationId;
      } else {
        let _HermesInternal = HermesInternal;
        combined = "skus:" + obj3.skuId;
      }
      obj2[combined] = obj;
      obj4 = obj2;
    } else {
      obj4 = {};
      const merged1 = Object.assign(obj4);
      const _Object = Object;
      const skuIds = priceId.skuIds;
      const merged2 = Object.assign(Object.fromEntries(skuIds.map(f93181)));
    }
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: resetStoreState,
};
const sKUPricesStore = new SKUPricesStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/storefront/SKUPricesStore.tsx");

export default sKUPricesStore;
