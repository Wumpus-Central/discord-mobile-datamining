// discord_app/modules/storefront/StorefrontActionCreators.tsx
import setDefault from "../../utils/Durations.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import resetStoreStateDefault from "SKUPricesStore.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../stores/billing/BillingInfoStore.tsx";
import closure_5 from "StorefrontPromotionOverrideStore.tsx";
import closure_6 from "StorefrontPromotionStore.tsx";
import closure_7 from "records/StorefrontPromotionRecord.tsx";
import { Endpoints } from "../../Constants.tsx";

const require = arg1;
function shouldFetchStorefrontPromotions(arg0) {
  fetchState = fetchState.getFetchState(arg0);
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
  obj = fetchState;
}
function _maybeFetchStorefrontPromotions() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const found = closure_0.filter(closure_1_11);
              if (0 !== found.length) {
                c2 = 1;
                c1 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_13(found);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c1 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp8) {
          c1 = tmp;
          throw tmp8;
        }
      }
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchStorefrontPromotions() {
  const self = this;
  const apply = _fetchStorefrontPromotions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchStorefrontPromotions() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    c3 = 0;
    return (function*(arg0, body) {
      if (promotionIdOverride === 2) {
        promotionIdOverride = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          promotionIdOverride = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              promotionIdOverride = 3;
              throw body;
            } else if (arg0 === 2) {
              promotionIdOverride = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              dependencyMap = tmp3;
              let callback = tmp7;
              callback = undefined;
              if (0 !== lib.length) {
                c3 = 1;
                let obj5 = closure_1_1(closure_1_2[8]);
                obj1 = { type: "STOREFRONT_PROMOTIONS_FETCH_START", applicationIds: null };
                obj1[1] = tmp40;
                obj5.dispatch(obj1);
                promotionIdOverride = promotionIdOverride.getPromotionIdOverride();
                const HTTP = lib(closure_1_2[9]).HTTP;
                let get = HTTP.get;
                const obj2 = { url: null, query: null, rejectWithError: true };
                obj2[0] = closure_1_8.STOREFRONT_PROMOTIONS;
                let obj3 = { application_ids: null };
                obj3[0] = tmp40;
                if (null != promotionIdOverride) {
                  const obj4 = { promotion_id_override: null };
                  obj4[0] = promotionIdOverride;
                  obj5 = obj4;
                } else {
                  obj5 = {};
                }
                const merged = Object.assign(obj5);
                obj2[1] = obj3;
                get = get(obj2);
                c4 = 2;
                promotionIdOverride = 1;
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              obj3 = callback(709);
              const obj6 = { type: "STOREFRONT_PROMOTIONS_FETCH_FAIL", applicationIds: null };
              obj6[1] = lib;
              obj3.dispatch(obj6);
            } else if (arg0 === 1) {
              promotionIdOverride = 3;
              throw body;
            } else if (arg0 !== 2) {
              const promotions = body.body.promotions;
              callback = promotions.map((arg0) => closure_7.createFromServer(arg0));
              obj = callback(709);
              const obj7 = { type: "STOREFRONT_PROMOTIONS_FETCH_SUCCESS", applicationIds: null, promotions: null };
              obj7[1] = lib;
              obj7[2] = callback;
              obj.dispatch(obj7);
              c3 = 0;
            }
            c3 = 0;
            promotionIdOverride = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = body;
            return obj8;
          }
          promotionIdOverride = 3;
        } catch (tmp32) {
          if (tmp4 === c3) {
            promotionIdOverride = tmp2;
            throw tmp32;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchStorefrontPricesForApplicationId() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              let applicationId;
              applicationId = applicationId.applicationId;
              c3 = 1;
              c4 = 1;
              return { value: "PX_16", done: null };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { type: "application", applicationId: null };
              obj2[1] = applicationId;
              c3 = 2;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback(obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          c4 = tmp;
          throw tmp11;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchStorefrontPricesForSkuIds() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              let skuIds;
              skuIds = skuIds.skuIds;
              c3 = 1;
              c4 = 1;
              return { value: "PX_16", done: null };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { type: "skus", skuIds: null };
              obj2[1] = skuIds;
              c3 = 2;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback(obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          c4 = tmp;
          throw tmp11;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchStorefrontPrices() {
  const self = this;
  const apply = _fetchStorefrontPrices.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchStorefrontPrices() {
  const self = this;
  const tmp = callback(function*(arg0) {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let body = tmp3;
            let callback = tmp7;
            callback = undefined;
            body = undefined;
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            obj1 = { type: "SKUS_PRICING_FETCH_FAIL", priceId: null };
            obj1[1] = callback;
            body(709).dispatch(obj1);
            const obj5 = body(709);
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            body = arg1.body;
            obj = body(709);
            let obj2 = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId: null, data: null };
            obj2[1] = callback;
            obj2 = callback(6078);
            obj2[2] = obj2.transformStorefrontPricesServer(body);
            obj.dispatch(obj2);
            dependencyMap = 0;
          }
          dependencyMap = 0;
          c4 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        }
        c4 = 3;
      } catch (tmp23) {
        if (tmp4 === dependencyMap) {
          c4 = tmp2;
          throw tmp23;
        } else {
          c3 = tmp;
        }
      }
    }
  });
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
resetStoreStateDefault;
let closure_9 = 10 * setDefault.Millis.MINUTE;
let MINUTE = setDefault.Millis.MINUTE;
MINUTE = setDefault.Millis.MINUTE;
const result = require("set").fileFinishedImporting("modules/storefront/StorefrontActionCreators.tsx");

export const maybeFetchStorefrontPromotions = function maybeFetchStorefrontPromotions() {
  const self = this;
  const apply = _maybeFetchStorefrontPromotions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { fetchStorefrontPromotions };
export const fetchStorefrontPricesForApplicationId = function fetchStorefrontPricesForApplicationId(arg0) {
  const self = this;
  const apply = _fetchStorefrontPricesForApplicationId.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchStorefrontPricesForSkuIds = function fetchStorefrontPricesForSkuIds(arg0) {
  const self = this;
  const apply = _fetchStorefrontPricesForSkuIds.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setStorefrontPromotionIdOverride = function setStorefrontPromotionIdOverride(promotionIdOverride) {
  let obj = dispatcherDefault;
  obj = { type: "STOREFRONT_PROMOTION_ID_OVERRIDE_SET", promotionIdOverride };
  obj.dispatch(obj);
};