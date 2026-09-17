// === Module 8366: StorefrontProductActionCreators ===

// Module 8366 (StorefrontProductActionCreators)
import DurationsDefault from "Durations" /* 1091 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LocaleStore from "LocaleStore" /* 2026 */;
import StorefrontProductStore from "StorefrontProductStore" /* 8367 */;
import StorefrontProductRecord from "StorefrontProductRecord" /* 7676 */;

const require = fn;
let closure_10 = async function _maybeFetchProductsWithSkus(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ productIds: closure_129_0, ignoreCache } = closure_0);
          if (ignoreCache === undefined) {
            ignoreCache = false;
          }
          closure_129_1 = ignoreCache;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_129_2 = closure_129_0.filter((item) => {
              if (Boolean(item)) {
                fetchState = fetchState.getFetchState(item);
                if ("loading" === fetchState) {
                  return false;
                } else {
                  const fetchedAt = obj.getFetchedAt(item);
                  if (null != fetchedAt) {
                    const _Date = Date;
                    return Date.now() - fetchedAt > ("error" === fetchState ? closure_1_9 : closure_1_8);
                  } else {
                    return true;
                  }
                }
                obj = fetchState;
              } else {
                return false;
              }
            });
            if (0 !== closure_129_2.length) {
              c4 = 1;
              const obj7 = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH", productIds: closure_129_2 };
              closure_130_1(closure_130_2[6]).dispatch(obj7);
              const obj6 = closure_130_1(closure_130_2[6]);
              const request = { url: closure_130_7.STOREFRONT_PRODUCTS_WITH_SKUS, query: null, rejectWithError: true };
              const obj9 = { product_ids: closure_129_2, locale: closure_130_4.locale, with_bundled_skus: true, include_google_sku_ids: true, ignore_cache: closure_129_1 };
              request.query = obj9;
              c5 = 3;
              c6 = 1;
              const obj10 = { value: closure_130_0(closure_130_2[7]).httpGetWithCountryCodeQuery(request), done: false };
              return obj10;
            }
          }
        } else {
          if (2 === tmp7) {
            c4 = 0;
            closure_129_4 = closure_3;
            const obj11 = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE", productIds: closure_129_2, apiError: null };
            const tmp28 = new closure_130_1(closure_130_2[8])(closure_129_4);
            obj11.apiError = tmp28;
            closure_130_1(closure_130_2[6]).dispatch(obj11);
            const obj4 = closure_130_1(closure_130_2[6]);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_3 = value;
            const obj12 = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS", productIds: closure_129_2, products: null };
            const products = closure_129_3.body.products;
            obj12.products = products.map(closure_130_6.fromServer);
            closure_130_1(closure_130_2[6]).dispatch(obj12);
            c4 = 0;
            let obj = closure_130_1(closure_130_2[6]);
          }
          c4 = 0;
          c6 = 3;
          const obj13 = { value, done: true };
          return obj13;
        }
        c6 = 3;
      }
    } catch (tmp44) {
      closure_3 = tmp44;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp44;
      } else {
        c5 = tmp;
      }
    }
  }
};
function shouldFetchProductBySku(item10006) {
  if (Boolean(item10006)) {
    const fetchStateForSku = StorefrontProductStore.getFetchStateForSku(item10006);
    if ("loading" === fetchStateForSku) {
      return false;
    } else {
      const fetchedAtForSku = StorefrontProductStore.getFetchedAtForSku(item10006);
      if (null != fetchedAtForSku) {
        const _Date = Date;
        return Date.now() - fetchedAtForSku > ("error" === fetchStateForSku ? closure_9 : closure_8);
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
let closure_12 = async function _maybeFetchProductsBySkuIds(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ skuIds: closure_129_0, ignoreCache } = closure_0);
          if (ignoreCache === undefined) {
            ignoreCache = false;
          }
          closure_129_1 = ignoreCache;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_129_2 = closure_129_0.filter(closure_130_11);
            if (0 !== closure_129_2.length) {
              c4 = 1;
              const obj7 = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH", skuIds: closure_129_2 };
              closure_130_1(closure_130_2[6]).dispatch(obj7);
              const obj6 = closure_130_1(closure_130_2[6]);
              const request = { url: closure_130_7.STOREFRONT_PRODUCTS_BY_SKU_IDS, query: null, rejectWithError: true };
              const obj9 = { sku_ids: closure_129_2, locale: closure_130_4.locale, with_bundled_skus: true, include_google_sku_ids: true, ignore_cache: closure_129_1 };
              request.query = obj9;
              c5 = 3;
              c6 = 1;
              const obj10 = { value: closure_130_0(closure_130_2[7]).httpGetWithCountryCodeQuery(request), done: false };
              return obj10;
            }
          }
        } else {
          if (2 === tmp7) {
            c4 = 0;
            closure_129_4 = closure_3;
            const obj11 = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE", skuIds: closure_129_2, apiError: null };
            const tmp28 = new closure_130_1(closure_130_2[8])(closure_129_4);
            obj11.apiError = tmp28;
            closure_130_1(closure_130_2[6]).dispatch(obj11);
            const obj4 = closure_130_1(closure_130_2[6]);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_3 = value;
            const obj12 = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: closure_129_2, products: null };
            const products = closure_129_3.body.products;
            obj12.products = products.map(closure_130_6.fromServer);
            closure_130_1(closure_130_2[6]).dispatch(obj12);
            c4 = 0;
            const obj = closure_130_1(closure_130_2[6]);
          }
          c4 = 0;
          c6 = 3;
          const obj13 = { value, done: true };
          return obj13;
        }
        c6 = 3;
      }
    } catch (tmp44) {
      closure_3 = tmp44;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp44;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
let closure_8 = 12 * DurationsDefault.Millis.HOUR;
let closure_9 = 10 * DurationsDefault.Millis.MINUTE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/StorefrontProductActionCreators.tsx");

export const maybeFetchProductsWithSkus = function maybeFetchProductsWithSkus() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { shouldFetchProductBySku };
export const maybeFetchProductsBySkuIds = function maybeFetchProductsBySkuIds() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};