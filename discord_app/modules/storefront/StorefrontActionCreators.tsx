// === Module 8785: StorefrontActionCreators ===

// Module 8785 (StorefrontActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import BillingInfoStore from "BillingInfoStore" /* 4220 */;
import SKUPricesStore from "SKUPricesStore" /* 7232 */;
import StorefrontPromotionOverrideStore from "StorefrontPromotionOverrideStore" /* 8786 */;
import StorefrontPromotionStore from "StorefrontPromotionStore" /* 8787 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 8788 */;

require = fn;
function shouldFetchStorefrontPromotions(arg0) {
  const fetchState = StorefrontPromotionStore.getFetchState(arg0);
  if (undefined === fetchState) {
    return true;
  } else if ("loading" === fetchState) {
    return false;
  } else {
    const fetchedAt = obj.getFetchedAt(arg0);
    if (null == fetchedAt) {
      return true;
    } else {
      const _Date = Date;
      return Date.now() - fetchedAt > ("error" === fetchState ? closure_9 : MINUTE);
    }
  }
  obj = StorefrontPromotionStore;
}
let closure_12 = async function _maybeFetchStorefrontPromotions(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const found = _require.filter(shouldFetchStorefrontPromotions);
          if (0 !== found.length) {
            c2 = 1;
            c1 = 1;
            const obj1 = { value: fetchStorefrontPromotions(found), done: false };
            return obj1;
          }
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
function fetchStorefrontPromotions() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _fetchStorefrontPromotions(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = length;
          closure_129_1 = undefined;
          if (0 !== length.length) {
            c3 = 1;
            let obj5 = DispatcherDefault;
            const obj1 = { type: "STOREFRONT_PROMOTIONS_FETCH_START", applicationIds: tmp39 };
            obj5.dispatch(obj1);
            promotionIdOverride = promotionIdOverride.getPromotionIdOverride();
            const HTTP = HTTPUtils.HTTP;
            let get = HTTP.get;
            const request = { url: constants.STOREFRONT_PROMOTIONS, query: null, rejectWithError: true };
            const obj2 = { application_ids: tmp39 };
            if (null != promotionIdOverride) {
              let obj3 = { promotion_id_override: promotionIdOverride };
              let obj4 = obj3;
            } else {
              obj4 = {};
            }
            const merged = Object.assign(obj4);
            request.query = obj2;
            get = get(request);
            c4 = 2;
            c5 = 1;
          }
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          obj3 = closure_130_1(closure_130_2[8]);
          obj5 = { type: "STOREFRONT_PROMOTIONS_FETCH_FAIL", applicationIds: closure_129_0 };
          obj3.dispatch(obj5);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const promotions = value.body.promotions;
          closure_129_1 = promotions.map((item) => closure_1_7.createFromServer(item));
          obj = closure_130_1(closure_130_2[8]);
          const obj6 = { type: "STOREFRONT_PROMOTIONS_FETCH_SUCCESS", applicationIds: closure_129_0, promotions: closure_129_1 };
          obj.dispatch(obj6);
          c3 = 0;
        }
        c3 = 0;
        c5 = 3;
        const obj7 = { value, done: true };
        return obj7;
      }
      c5 = 3;
    } catch (tmp32) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp32;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_15 = async function _fetchStorefrontPricesForApplicationId(arg0) {
  let applicationId = arg0;
  c3 = 0;
  c4 = 0;
  let iter = (async (arg0) => {
    await closure_130_17({ type: "application", applicationId: applicationId2 });
    await "HermesInternal";
    closure_1 = tmp2;
    applicationId2 = applicationId.applicationId;
    return "PX_16";
  })();
  iter.next();
  return iter;
};
let closure_16 = async function _fetchStorefrontPricesForSkuIds(arg0) {
  let skuIds = arg0;
  c3 = 0;
  c4 = 0;
  let iter = (async (arg0) => {
    await closure_130_17({ type: "skus", skuIds: skuIds2 });
    await "HermesInternal";
    closure_1 = tmp2;
    skuIds2 = skuIds.skuIds;
    return "PX_16";
  })();
  iter.next();
  return iter;
};
function fetchStorefrontPrices() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _fetchStorefrontPrices(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          let body;
        }
      } else {
        if (1 === tmp7) {
          c2 = 0;
          const obj1 = { type: "SKUS_PRICING_FETCH_FAIL", priceId: closure_128_0 };
          closure_129_1(closure_129_2[8]).dispatch(obj1);
          const obj5 = closure_129_1(closure_129_2[8]);
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          body = value.body;
          obj = closure_129_1(closure_129_2[8]);
          let obj2 = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId: closure_128_0, data: null };
          obj2 = closure_129_0(closure_129_2[10]);
          obj2.data = obj2.transformStorefrontPricesServer(body);
          obj.dispatch(obj2);
          c2 = 0;
        }
        c2 = 0;
        c4 = 3;
        const obj3 = { value, done: true };
        return obj3;
      }
      c4 = 3;
    } catch (tmp23) {
      if (tmp4 === c2) {
        c4 = tmp2;
        throw tmp23;
      } else {
        c3 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
let closure_9 = 10 * DurationsDefault.Millis.MINUTE;
const MINUTE = DurationsDefault.Millis.MINUTE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/StorefrontActionCreators.tsx");

export const maybeFetchStorefrontPromotions = function maybeFetchStorefrontPromotions() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { fetchStorefrontPromotions };
export const fetchStorefrontPricesForApplicationId = function fetchStorefrontPricesForApplicationId() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchStorefrontPricesForSkuIds = function fetchStorefrontPricesForSkuIds() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setStorefrontPromotionIdOverride = function setStorefrontPromotionIdOverride(promotionIdOverride) {
  const obj = { type: "STOREFRONT_PROMOTION_ID_OVERRIDE_SET", promotionIdOverride };
  obj.dispatch(obj);
};