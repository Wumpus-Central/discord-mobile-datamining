// === Module 8962: _maybeFetchProductsWithSkus ===

// Module 8962 (_maybeFetchProductsWithSkus)
import setDefault from "set" /* 687 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_getSystemLocale" /* 1994 */;
import closure_5 from "getFetchState" /* 8963 */;
import closure_6 from "fromServer" /* 5329 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function _maybeFetchProductsWithSkus() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (fromServer === 2) {
        fromServer = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          fromServer = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              fromServer = 3;
              throw arg1;
            } else if (arg0 === 2) {
              fromServer = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let length = tmp3;
              ignoreCache = tmp7;
              let lib;
              ignoreCache = undefined;
              ({ productIds: c0, ignoreCache } = lib);
              if (ignoreCache === undefined) {
                ignoreCache = false;
              }
              length = undefined;
              let body;
              c5 = 1;
              fromServer = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                fromServer = 3;
                throw arg1;
              } else if (arg0 === 2) {
                fromServer = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                length = lib.filter((arg0) => {
                  if (Boolean(arg0)) {
                    fetchState = fetchState.getFetchState(arg0);
                    if ("loading" === fetchState) {
                      return false;
                    } else {
                      const fetchedAt = obj.getFetchedAt(arg0);
                      if (null != fetchedAt) {
                        const _Date = Date;
                        return Date.now() - fetchedAt > ("error" === fetchState ? closure_9 : closure_8);
                      } else {
                        return true;
                      }
                    }
                    obj = fetchState;
                  } else {
                    return false;
                  }
                });
                if (0 !== length.length) {
                  let locale = 1;
                  let obj5 = ignoreCache(length[6]);
                  const obj2 = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH", productIds: null };
                  obj2[1] = length;
                  obj5.dispatch(obj2);
                  let obj7 = lib(length[7]);
                  let obj3 = { url: null, query: null, rejectWithError: true };
                  obj3[0] = constants.STOREFRONT_PRODUCTS_WITH_SKUS;
                  const obj4 = { product_ids: null, locale: null, with_bundled_skus: true, include_google_sku_ids: true, ignore_cache: null };
                  obj4[0] = length;
                  obj4[1] = locale.locale;
                  obj4[4] = ignoreCache;
                  obj3[1] = obj4;
                  c5 = 3;
                  fromServer = 1;
                  obj5 = { value: null, done: false };
                  obj5[0] = obj7.httpGetWithCountryCodeQuery(obj3);
                  return obj5;
                }
              }
            } else {
              if (2 === tmp7) {
                locale = 0;
                locale = body;
                obj3 = ignoreCache(length[6]);
                const obj6 = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE", productIds: null, apiError: null };
                obj6[1] = length;
                const tmp28 = new ignoreCache(length[8])(locale);
                obj6[2] = tmp28;
                obj3.dispatch(obj6);
              } else if (arg0 === 1) {
                fromServer = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                body = arg1;
                obj = ignoreCache(length[6]);
                obj7 = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS", productIds: null, products: null };
                obj7[1] = length;
                const products = body.body.products;
                obj7[2] = products.map(fromServer.fromServer);
                obj.dispatch(obj7);
                locale = 0;
              }
              locale = 0;
              fromServer = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            }
            fromServer = 3;
          }
        } catch (tmp44) {
          body = tmp44;
          if (tmp4 === locale) {
            fromServer = tmp2;
            throw tmp44;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function shouldFetchProductBySku(closure_0) {
  if (Boolean(closure_0)) {
    fetchStateForSku = fetchStateForSku.getFetchStateForSku(closure_0);
    if ("loading" === fetchStateForSku) {
      return false;
    } else {
      const fetchedAtForSku = obj.getFetchedAtForSku(closure_0);
      if (null != fetchedAtForSku) {
        const _Date = Date;
        return Date.now() - fetchedAtForSku > ("error" === fetchStateForSku ? closure_9 : closure_8);
      } else {
        return true;
      }
    }
    obj = fetchStateForSku;
  } else {
    return false;
  }
}
function _maybeFetchProductsBySkuIds() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (fromServer === 2) {
        fromServer = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          fromServer = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              fromServer = 3;
              throw arg1;
            } else if (arg0 === 2) {
              fromServer = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let length = tmp3;
              ignoreCache = tmp7;
              let lib;
              ignoreCache = undefined;
              ({ skuIds: c0, ignoreCache } = lib);
              if (ignoreCache === undefined) {
                ignoreCache = false;
              }
              length = undefined;
              let body;
              c5 = 1;
              fromServer = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                fromServer = 3;
                throw arg1;
              } else if (arg0 === 2) {
                fromServer = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                length = lib.filter(closure_11);
                if (0 !== length.length) {
                  let locale = 1;
                  let obj5 = ignoreCache(length[6]);
                  const obj2 = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH", skuIds: null };
                  obj2[1] = length;
                  obj5.dispatch(obj2);
                  let obj7 = lib(length[7]);
                  let obj3 = { url: null, query: null, rejectWithError: true };
                  obj3[0] = constants.STOREFRONT_PRODUCTS_BY_SKU_IDS;
                  const obj4 = { sku_ids: null, locale: null, with_bundled_skus: true, include_google_sku_ids: true, ignore_cache: null };
                  obj4[0] = length;
                  obj4[1] = locale.locale;
                  obj4[4] = ignoreCache;
                  obj3[1] = obj4;
                  c5 = 3;
                  fromServer = 1;
                  obj5 = { value: null, done: false };
                  obj5[0] = obj7.httpGetWithCountryCodeQuery(obj3);
                  return obj5;
                }
              }
            } else {
              if (2 === tmp7) {
                locale = 0;
                locale = body;
                obj3 = ignoreCache(length[6]);
                const obj6 = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE", skuIds: null, apiError: null };
                obj6[1] = length;
                const tmp28 = new ignoreCache(length[8])(locale);
                obj6[2] = tmp28;
                obj3.dispatch(obj6);
              } else if (arg0 === 1) {
                fromServer = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                body = arg1;
                obj = ignoreCache(length[6]);
                obj7 = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: null, products: null };
                obj7[1] = length;
                const products = body.body.products;
                obj7[2] = products.map(fromServer.fromServer);
                obj.dispatch(obj7);
                locale = 0;
              }
              locale = 0;
              fromServer = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            }
            fromServer = 3;
          }
        } catch (tmp44) {
          body = tmp44;
          if (tmp4 === locale) {
            fromServer = tmp2;
            throw tmp44;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
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
let closure_8 = 12 * setDefault.Millis.HOUR;
let closure_9 = 10 * setDefault.Millis.MINUTE;
const result = require("set").fileFinishedImporting("modules/storefront/StorefrontProductActionCreators.tsx");

export const maybeFetchProductsWithSkus = function maybeFetchProductsWithSkus() {
  const self = this;
  const apply = _maybeFetchProductsWithSkus.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { shouldFetchProductBySku };
export const maybeFetchProductsBySkuIds = function maybeFetchProductsBySkuIds(arg0) {
  const self = this;
  const apply = _maybeFetchProductsBySkuIds.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};