// discord_app/modules/storefront/StorefrontProductActionCreators.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import StorefrontProductStore from "StorefrontProductStore.tsx";
import StorefrontProductRecord from "records/StorefrontProductRecord.tsx";

const require = fn;
let closure_10 = async function _maybeFetchProductsWithSkus(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
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
            const obj1 = { value, done: true };
            return obj1;
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
              let obj5 = closure_130_1(closure_130_2[6]);
              const obj2 = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH", productIds: closure_129_2 };
              obj5.dispatch(obj2);
              let obj7 = closure_130_0(closure_130_2[7]);
              const request = { url: closure_130_7.STOREFRONT_PRODUCTS_WITH_SKUS, query: null, rejectWithError: true };
              let obj3 = {
                product_ids: closure_129_2,
                locale: closure_130_4.locale,
                with_bundled_skus: true,
                include_google_sku_ids: true,
                ignore_cache: closure_129_1,
              };
              request.query = obj3;
              c5 = 3;
              c6 = 1;
              const obj4 = { value: obj7.httpGetWithCountryCodeQuery(request), done: false };
              return obj4;
            }
          }
        } else {
          if (2 === tmp7) {
            c4 = 0;
            closure_129_4 = closure_3;
            obj3 = closure_130_1(closure_130_2[6]);
            obj5 = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE", productIds: closure_129_2, apiError: null };
            const tmp28 = new closure_130_1(closure_130_2[8])(closure_129_4);
            obj5.apiError = tmp28;
            obj3.dispatch(obj5);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_3 = value;
            obj = closure_130_1(closure_130_2[6]);
            const obj6 = {
              type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS",
              productIds: closure_129_2,
              products: null,
            };
            const products = closure_129_3.body.products;
            obj6.products = products.map(closure_130_6.fromServer);
            obj.dispatch(obj6);
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          obj7 = { value, done: true };
          return obj7;
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
      const fetchedAtForSku = obj.getFetchedAtForSku(item10006);
      if (null != fetchedAtForSku) {
        const _Date = Date;
        return Date.now() - fetchedAtForSku > ("error" === fetchStateForSku ? closure_9 : closure_8);
      } else {
        return true;
      }
    }
    obj = StorefrontProductStore;
  } else {
    return false;
  }
}
let closure_12 = async function _maybeFetchProductsBySkuIds(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
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
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_129_2 = closure_129_0.filter(closure_130_11);
            if (0 !== closure_129_2.length) {
              c4 = 1;
              let obj5 = closure_130_1(closure_130_2[6]);
              const obj2 = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH", skuIds: closure_129_2 };
              obj5.dispatch(obj2);
              let obj7 = closure_130_0(closure_130_2[7]);
              const request = { url: closure_130_7.STOREFRONT_PRODUCTS_BY_SKU_IDS, query: null, rejectWithError: true };
              let obj3 = {
                sku_ids: closure_129_2,
                locale: closure_130_4.locale,
                with_bundled_skus: true,
                include_google_sku_ids: true,
                ignore_cache: closure_129_1,
              };
              request.query = obj3;
              c5 = 3;
              c6 = 1;
              const obj4 = { value: obj7.httpGetWithCountryCodeQuery(request), done: false };
              return obj4;
            }
          }
        } else {
          if (2 === tmp7) {
            c4 = 0;
            closure_129_4 = closure_3;
            obj3 = closure_130_1(closure_130_2[6]);
            obj5 = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE", skuIds: closure_129_2, apiError: null };
            const tmp28 = new closure_130_1(closure_130_2[8])(closure_129_4);
            obj5.apiError = tmp28;
            obj3.dispatch(obj5);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_3 = value;
            obj = closure_130_1(closure_130_2[6]);
            const obj6 = {
              type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS",
              skuIds: closure_129_2,
              products: null,
            };
            const products = closure_129_3.body.products;
            obj6.products = products.map(closure_130_6.fromServer);
            obj.dispatch(obj6);
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          obj7 = { value, done: true };
          return obj7;
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
