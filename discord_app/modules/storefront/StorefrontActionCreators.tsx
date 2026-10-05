// === Module 8440: StorefrontActionCreators ===

// Module 8440 (StorefrontActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import BillingInfoStore from "BillingInfoStore" /* 4530 */;
import SKUPricesStore from "SKUPricesStore" /* 6733 */;
import StorefrontPromotionOverrideStore from "StorefrontPromotionOverrideStore" /* 8441 */;
import StorefrontPromotionStore from "StorefrontPromotionStore" /* 8442 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 8443 */;
import size from "module_2" /* 2 */;

let apiError, c1, closure_4, promotions;

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
      const tmp4 = "error" === fetchState ? closure_9 : MINUTE;
      return Date.now() - fetchedAt > tmp4;
    }
  }
}
let obj = function _maybeFetchStorefrontPromotions() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const found = closure_0.filter(shouldFetchStorefrontPromotions);
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
          obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp7) {
        c1 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
function fetchStorefrontPromotions() {
  return obj(...arguments);
}
obj = function _fetchStorefrontPromotions() {
  obj = _asyncToGenerator(async (applicationIds) => {
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (async (arg0) => {
      let obj7;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              promotions = undefined;
              if (0 !== applicationIds.length) {
                let obj9;
                c3 = 1;
                const obj5 = { type: "STOREFRONT_PROMOTIONS_FETCH_START", applicationIds };
                const obj6 = DispatcherDefault;
                obj6.dispatch(obj5);
                promotionIdOverride = promotionIdOverride.getPromotionIdOverride();
                const HTTP = HTTPUtils.HTTP;
                const request = { url: constants.STOREFRONT_PROMOTIONS, query: obj7, rejectWithError: true };
                const get = HTTP.get;
                obj7 = { application_ids: applicationIds };
                if (null != promotionIdOverride) {
                  obj9 = { promotion_id_override: promotionIdOverride };
                  const obj8 = { promotion_id_override: promotionIdOverride };
                } else {
                  obj9 = {};
                }
                const merged = Object.assign(obj9);
                c4 = 2;
                c5 = 1;
                const obj10 = { value: get(request), done: false };
                return obj10;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            const obj11 = { type: "STOREFRONT_PROMOTIONS_FETCH_FAIL", applicationIds };
            const obj4 = closure_130_1(closure_130_2[8]);
            obj4.dispatch(obj11);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            return { value, done: true };
          } else {
            promotions = value.body.promotions;
            promotions = promotions.map((item) => closure_1_7.createFromServer(item));
            const obj13 = { type: "STOREFRONT_PROMOTIONS_FETCH_SUCCESS", applicationIds, promotions };
            obj = closure_130_1(closure_130_2[8]);
            obj.dispatch(obj13);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp29) {
          if (0 === c3) {
            c5 = 3;
            throw tmp29;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _claimStorefrontPromotion() {
  obj = _asyncToGenerator(async (promotionId, arg1) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              body = undefined;
              apiError = undefined;
              const obj4 = { type: "STOREFRONT_PROMOTION_CLAIM_START", promotionId };
              const obj12 = DispatcherDefault;
              obj12.dispatch(obj4);
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.STOREFRONT_PROMOTION_CLAIM(promotionId), body: {}, rejectWithError: true };
              const post = HTTP.post;
              c6 = 3;
              c7 = 1;
              const obj5 = { value: post(request), done: false };
              return obj5;
            }
          } else if (1 === c6) {
            c5 = 0;
            const self = this;
            const self2 = this;
            apiError = new closure_131_1(closure_131_2[10])(closure_4);
            const obj6 = { type: "STOREFRONT_PROMOTION_CLAIM_FAIL", promotionId, apiError };
            const tmp22 = new closure_131_1(closure_131_2[10])(closure_4);
            const obj7 = closure_131_1(closure_131_2[8]);
            obj7.dispatch(obj6);
            throw apiError;
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              c7 = 3;
              return { value: body.body, done: true };
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            body = value;
            c5 = 0;
            const obj11 = { type: "STOREFRONT_PROMOTION_CLAIM_SUCCESS", promotionId };
            obj = closure_131_1(closure_131_2[8]);
            obj.dispatch(obj11);
            const items = [closure_1];
            c6 = 2;
            c7 = 1;
            const obj13 = { value: closure_131_13(items), done: false };
            return obj13;
          }
        } catch (tmp30) {
          closure_4 = tmp30;
          if (0 === c5) {
            c7 = 3;
            throw tmp30;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchStorefrontPricesForApplicationId() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let closure_2;
    let applicationId = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0) => {
      const obj5 = { type: "application", applicationId };
      await closure_130_18(obj5);
      await "IconComponent";
      applicationId = applicationId.applicationId;
      return "Set";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _fetchStorefrontPricesForSkuIds() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let closure_2;
    let skuIds = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0) => {
      const obj5 = { type: "skus", skuIds };
      await closure_130_18(obj5);
      await "IconComponent";
      skuIds = skuIds.skuIds;
      return "Set";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function fetchStorefrontPrices() {
  return obj(...arguments);
}
obj = function _fetchStorefrontPrices() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj2;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c2;
      try {
        let priceId;
        let body;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_1 = tmp;
            let closure_0 = tmp4;
            priceId = undefined;
            body = undefined;
          }
        } else if (1 === c3) {
          c2 = 0;
          const obj6 = { type: "SKUS_PRICING_FETCH_FAIL", priceId };
          const obj4 = closure_129_1(closure_129_2[8]);
          obj4.dispatch(obj6);
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          body = value.body;
          obj = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId, data: obj2.transformStorefrontPricesServer(body) };
          const dispatch = closure_129_1(closure_129_2[8]).dispatch;
          const tmp9 = closure_129_1(closure_129_2[8]);
          obj2 = closure_129_0(closure_129_2[11]);
          dispatch(obj);
          c2 = 0;
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp21) {
        if (0 === c2) {
          c4 = 3;
          throw tmp21;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let closure_9 = 10 * DurationsDefault.Millis.MINUTE;
const MINUTE = DurationsDefault.Millis.MINUTE;
const result = size.fileFinishedImporting("modules/storefront/StorefrontActionCreators.tsx");

export const maybeFetchStorefrontPromotions = function maybeFetchStorefrontPromotions() {
  return obj(...arguments);
};
export { fetchStorefrontPromotions };
export const claimStorefrontPromotion = function claimStorefrontPromotion() {
  return obj(...arguments);
};
export const fetchStorefrontPricesForApplicationId = function fetchStorefrontPricesForApplicationId() {
  return obj(...arguments);
};
export const fetchStorefrontPricesForSkuIds = function fetchStorefrontPricesForSkuIds() {
  return obj(...arguments);
};
export const setStorefrontPromotionIdOverride = function setStorefrontPromotionIdOverride(promotionIdOverride) {
  obj = DispatcherDefault;
  const obj2 = { type: "STOREFRONT_PROMOTION_ID_OVERRIDE_SET", promotionIdOverride };
  obj.dispatch(obj2);
};