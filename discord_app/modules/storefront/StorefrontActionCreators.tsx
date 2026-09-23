// === Module 9141: StorefrontActionCreators ===

// Module 9141 (StorefrontActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1091 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import BillingInfoStore from "BillingInfoStore" /* 4483 */;
import SKUPricesStore from "SKUPricesStore" /* 7563 */;
import StorefrontPromotionOverrideStore from "StorefrontPromotionOverrideStore" /* 9142 */;
import StorefrontPromotionStore from "StorefrontPromotionStore" /* 9143 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 9144 */;

require = fn;
function shouldFetchStorefrontPromotions(arg0) {
  const fetchState = StorefrontPromotionStore.getFetchState(arg0);
  if (undefined === fetchState) {
    return true;
  } else if ("loading" === fetchState) {
    return false;
  } else {
    const fetchedAt = StorefrontPromotionStore.getFetchedAt(arg0);
    if (null == fetchedAt) {
      return true;
    } else {
      const _Date = Date;
      return Date.now() - fetchedAt > ("error" === fetchState ? closure_9 : MINUTE);
    }
  }
}
let closure_12 = async function _maybeFetchStorefrontPromotions(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const found = _require.filter(shouldFetchStorefrontPromotions);
          if (0 !== found.length) {
            c2 = 1;
            c1 = 1;
            const obj4 = { value: fetchStorefrontPromotions(found), done: false };
            return obj4;
          }
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
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
let closure_14 = async function _fetchStorefrontPromotions(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = length;
          closure_129_1 = undefined;
          if (0 !== length.length) {
            c3 = 1;
            const obj5 = { type: "STOREFRONT_PROMOTIONS_FETCH_START", applicationIds: length };
            DispatcherDefault.dispatch(obj5);
            promotionIdOverride = promotionIdOverride.getPromotionIdOverride();
            const HTTP = HTTPUtils.HTTP;
            let get = HTTP.get;
            const request = { url: constants.STOREFRONT_PROMOTIONS, query: null, rejectWithError: true };
            const obj7 = { application_ids: length };
            if (null != promotionIdOverride) {
              const obj8 = { promotion_id_override: promotionIdOverride };
              let obj9 = obj8;
            } else {
              obj9 = {};
            }
            const merged = Object.assign(obj9);
            request.query = obj7;
            get = get(request);
            c4 = 2;
            c5 = 1;
          }
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          const obj10 = { type: "STOREFRONT_PROMOTIONS_FETCH_FAIL", applicationIds: closure_129_0 };
          closure_130_1(closure_130_2[8]).dispatch(obj10);
          const obj4 = closure_130_1(closure_130_2[8]);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const promotions = value.body.promotions;
          closure_129_1 = promotions.map((item) => closure_1_7.createFromServer(item));
          const obj11 = { type: "STOREFRONT_PROMOTIONS_FETCH_SUCCESS", applicationIds: closure_129_0, promotions: closure_129_1 };
          closure_130_1(closure_130_2[8]).dispatch(obj11);
          c3 = 0;
          const obj = closure_130_1(closure_130_2[8]);
        }
        c3 = 0;
        c5 = 3;
        const obj12 = { value, done: true };
        return obj12;
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
    return "flex";
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
    return "flex";
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
let closure_18 = async function _fetchStorefrontPrices(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          let body;
        }
      } else {
        if (1 === tmp7) {
          c2 = 0;
          const obj6 = { type: "SKUS_PRICING_FETCH_FAIL", priceId: closure_128_0 };
          closure_129_1(closure_129_2[8]).dispatch(obj6);
          const obj5 = closure_129_1(closure_129_2[8]);
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          body = value.body;
          const obj7 = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId: closure_128_0, data: null };
          const obj = closure_129_1(closure_129_2[8]);
          obj7.data = closure_129_0(closure_129_2[10]).transformStorefrontPricesServer(body);
          obj.dispatch(obj7);
          c2 = 0;
          const obj3 = closure_129_0(closure_129_2[10]);
        }
        c2 = 0;
        c4 = 3;
        const obj8 = { value, done: true };
        return obj8;
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
  DispatcherDefault.dispatch({ type: "STOREFRONT_PROMOTION_ID_OVERRIDE_SET", promotionIdOverride });
};