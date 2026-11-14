// discord_app/modules/storefront/StorefrontProductActionCreators.tsx
import StorefrontCacheUtils from "StorefrontCacheUtils.tsx";
import getStorefrontNativeStoreQuery from "getStorefrontNativeStoreQuery.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import StorefrontProductStore from "StorefrontProductStore.tsx";
import StorefrontProductRecord from "records/StorefrontProductRecord.tsx";

require = fn;
let closure_8 = async function _maybeFetchProductsWithSkus(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
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
          return { value: "Path", done: true };
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
              let shouldRefetchEntryResult = Boolean(item);
              if (shouldRefetchEntryResult) {
                const obj2 = {
                  fetchState: closure_1_5.getFetchState(item),
                  fetchedAt: closure_1_5.getFetchedAt(item),
                  needsPricing: true,
                  hasPricingCoverage: closure_1_5.hasPricingCoverage(item),
                };
                shouldRefetchEntryResult = closure_1_0(dependencyMap[5]).shouldRefetchEntry(obj2);
                const obj = closure_1_0(dependencyMap[5]);
              }
              return shouldRefetchEntryResult;
            });
            if (0 !== closure_129_2.length) {
              c4 = 1;
              const obj7 = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH", productIds: closure_129_2 };
              closure_130_1(closure_130_2[6]).dispatch(obj7);
              const obj6 = closure_130_1(closure_130_2[6]);
              const request = { url: closure_130_7.STOREFRONT_PRODUCTS_WITH_SKUS, query: null, rejectWithError: true };
              const obj9 = {
                product_ids: closure_129_2,
                locale: closure_130_4.locale,
                with_bundled_skus: true,
                include_google_sku_ids: true,
                ignore_cache: closure_129_1,
              };
              request.query = obj9;
              c5 = 3;
              c6 = 1;
              const obj10 = {
                value: closure_130_0(closure_130_2[7]).httpGetWithCountryCodeQuery(request),
                done: false,
              };
              return obj10;
            }
          }
        } else {
          if (2 === tmp7) {
            c4 = 0;
            closure_129_4 = closure_3;
            const obj11 = {
              type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE",
              productIds: closure_129_2,
              apiError: null,
            };
            const tmp28 = new closure_130_1(closure_130_2[8])(closure_129_4);
            obj11.apiError = tmp28;
            closure_130_1(closure_130_2[6]).dispatch(obj11);
            const obj4 = closure_130_1(closure_130_2[6]);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_3 = value;
            const obj12 = {
              type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS",
              productIds: closure_129_2,
              products: null,
            };
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
let closure_9 = async function _maybeFetchProductsBySkuIds(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
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
          dependencyMap = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ skuIds: closure_129_0, ignoreCache } = closure_0);
          if (ignoreCache === undefined) {
            ignoreCache = false;
          }
          closure_129_1 = ignoreCache;
          let storefrontNativeStoreQuery;
          let storefrontPricingKey;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Path", done: true };
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
            storefrontNativeStoreQuery = closure_130_0(closure_130_2[9]).getStorefrontNativeStoreQuery();
            const obj15 = closure_130_0(closure_130_2[9]);
            storefrontPricingKey = closure_130_0(closure_130_2[9]).getStorefrontPricingKey(storefrontNativeStoreQuery);
            closure_129_4 = closure_129_0.filter((item) => {
              let storefrontPricingKey = closure_1_3;
              if (closure_1_3 === undefined) {
                storefrontPricingKey = closure_0(8582).getStorefrontPricingKey();
                const obj = closure_0(8582);
              }
              let diff = globalThis;
              let flag = false;
              if (Boolean(item)) {
                fetchStateForSku = fetchStateForSku.getFetchStateForSku(item);
                flag = false;
                if ("loading" !== fetchStateForSku) {
                  if ("success" !== fetchStateForSku) {
                    const fetchedAtForSku = obj2.getFetchedAtForSku(item);
                    flag = true;
                    if (null != fetchedAtForSku) {
                      if ("error" === fetchStateForSku) {
                        let TWELVE_HOURS_MS = closure_0(8581).ERROR_STALE_THRESHOLD_MS;
                      } else {
                        TWELVE_HOURS_MS = closure_0(8581).TWELVE_HOURS_MS;
                      }
                      const _Date = diff.Date;
                      diff = _Date.now() - fetchedAtForSku;
                    }
                  } else {
                    flag = true;
                  }
                }
                obj2 = fetchStateForSku;
              }
              return flag;
            });
            if (0 !== closure_129_4.length) {
              c4 = 1;
              const obj7 = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH", skuIds: closure_129_4 };
              closure_130_1(closure_130_2[6]).dispatch(obj7);
              const obj6 = closure_130_1(closure_130_2[6]);
              const request = { url: closure_130_7.STOREFRONT_PRODUCTS_BY_SKU_IDS, query: null, rejectWithError: true };
              const obj9 = {};
              const merged = Object.assign(storefrontNativeStoreQuery);
              obj9.sku_ids = closure_129_4;
              obj9.locale = closure_130_4.locale;
              obj9.with_bundled_skus = true;
              obj9.include_google_sku_ids = true;
              obj9.ignore_cache = closure_129_1;
              request.query = obj9;
              c5 = 3;
              c6 = 1;
              const obj10 = {
                value: closure_130_0(closure_130_2[7]).httpGetWithCountryCodeQuery(request),
                done: false,
              };
              return obj10;
            }
            const obj16 = closure_130_0(closure_130_2[9]);
          }
        } else {
          if (2 === tmp7) {
            c4 = 0;
            closure_129_6 = closure_3;
            const obj11 = {
              type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE",
              skuIds: closure_129_4,
              apiError: null,
            };
            const tmp29 = new closure_130_1(closure_130_2[8])(closure_129_6);
            obj11.apiError = tmp29;
            closure_130_1(closure_130_2[6]).dispatch(obj11);
            const obj4 = closure_130_1(closure_130_2[6]);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_5 = value;
            const obj12 = {
              type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS",
              skuIds: closure_129_4,
              products: null,
              pricingKey: null,
            };
            const products = closure_129_5.body.products;
            obj12.products = products.map(closure_130_6.fromServer);
            obj12.pricingKey = storefrontPricingKey;
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
    } catch (tmp48) {
      closure_3 = tmp48;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp48;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/StorefrontProductActionCreators.tsx");

export function maybeFetchProductsWithSkus() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function shouldFetchProductBySku(item10006) {
  let storefrontPricingKey = arg1;
  if (arg1 === undefined) {
    storefrontPricingKey = getStorefrontNativeStoreQuery.getStorefrontPricingKey();
  }
  if (Boolean(item10006)) {
    const fetchStateForSku = StorefrontProductStore.getFetchStateForSku(item10006);
    if ("loading" === fetchStateForSku) {
      return false;
    } else {
      if ("success" === fetchStateForSku) {
        if (StorefrontProductStore.getPricingKeyForSku(item10006) !== storefrontPricingKey) {
          return true;
        }
      }
      const fetchedAtForSku = StorefrontProductStore.getFetchedAtForSku(item10006);
      if (null != fetchedAtForSku) {
        if ("error" === fetchStateForSku) {
          let TWELVE_HOURS_MS = StorefrontCacheUtils.ERROR_STALE_THRESHOLD_MS;
        } else {
          TWELVE_HOURS_MS = StorefrontCacheUtils.TWELVE_HOURS_MS;
        }
        const _Date = Date;
        return Date.now() - fetchedAtForSku > TWELVE_HOURS_MS;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
export function maybeFetchProductsBySkuIds() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
