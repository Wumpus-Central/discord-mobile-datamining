// === Module 7889: StorefrontProductActionCreators ===

// Module 7889 (StorefrontProductActionCreators)
import Constants from "Constants" /* 1085 */;
import StorefrontCacheUtils from "StorefrontCacheUtils" /* 7891 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import StorefrontProductStore from "StorefrontProductStore" /* 7890 */;
import StorefrontProductRecord from "StorefrontProductRecord" /* 7073 */;
import size from "module_2" /* 2 */;

let obj = function _maybeFetchProductsWithSkus() {
  obj = _asyncToGenerator(async function(arg0) {
    let body;
    let c0;
    let closure_1;
    let ignoreCache;
    let length;
    let obj6;
    let obj8;
    let products;
    let tmp25;
    let closure_0 = arg0;
    if (1 === tmp4) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        length = c0.filter((item) => {
          let shouldRefetchEntryResult = Boolean(item);
          if (shouldRefetchEntryResult) {
            obj = { fetchState: closure_1_5.getFetchState(item), fetchedAt: closure_1_5.getFetchedAt(item), needsPricing: true, hasPricingCoverage: closure_1_5.hasPricingCoverage(item) };
            const shouldRefetchEntry = closure_1_0(length[5]).shouldRefetchEntry;
            closure_1_0(length[5]);
            shouldRefetchEntryResult = shouldRefetchEntry(obj);
          }
          return shouldRefetchEntryResult;
        });
        if (0 !== length.length) {
          let c4 = 1;
          const obj7 = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH", productIds: length };
          const obj4 = closure_130_1(closure_130_2[6]);
          obj4.dispatch(obj7);
          const request = { url: closure_130_7.STOREFRONT_PRODUCTS_WITH_SKUS, query: obj8, rejectWithError: true };
          obj8 = { product_ids: length, locale: closure_130_4.locale, with_bundled_skus: true, include_google_sku_ids: true, ignore_cache: ignoreCache };
          let c5 = 3;
          c6 = 1;
          const obj9 = { value: obj6.httpGetWithCountryCodeQuery(request), done: false };
          obj6 = closure_130_0(closure_130_2[7]);
          return obj9;
        }
      }
    } else if (2 === tmp4) {
      c4 = 0;
      let closure_4 = body;
      const obj10 = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE", productIds: length, apiError: tmp25 };
      const dispatch2 = closure_130_1(closure_130_2[6]).dispatch;
      const self = this;
      const self2 = this;
      const tmp20 = closure_130_1(closure_130_2[6]);
      tmp25 = new closure_130_1(closure_130_2[8])(closure_4);
      dispatch2(obj10);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      const obj11 = { value, done: true };
      return obj11;
    } else {
      body = value;
      obj = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS", productIds: length, products: products.map(closure_130_6.fromServer) };
      products = body.body.products;
      const dispatch = closure_130_1(closure_130_2[6]).dispatch;
      const tmp9 = closure_130_1(closure_130_2[6]);
      dispatch(obj);
      c4 = 0;
    }
    await "IconComponent";
    length = tmp;
    ({ productIds: c0, ignoreCache } = closure_0);
    if (ignoreCache === undefined) {
      ignoreCache = false;
    }
    return "Set";
  });
  return obj(...arguments);
};
function shouldFetchProductBySku(item10006) {
  if (Boolean(item10006)) {
    const fetchStateForSku = StorefrontProductStore.getFetchStateForSku(item10006);
    if ("loading" === fetchStateForSku) {
      return false;
    } else {
      const fetchedAtForSku = StorefrontProductStore.getFetchedAtForSku(item10006);
      if (null != fetchedAtForSku) {
        let TWELVE_HOURS_MS;
        if ("error" === fetchStateForSku) {
          TWELVE_HOURS_MS = StorefrontCacheUtils.ERROR_STALE_THRESHOLD_MS;
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
obj = function _maybeFetchProductsBySkuIds() {
  obj = _asyncToGenerator(async function(arg0) {
    let body;
    let c0;
    let closure_1;
    let ignoreCache;
    let length;
    let obj6;
    let obj8;
    let products;
    let tmp25;
    let closure_0 = arg0;
    if (1 === c5) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        length = c0.filter(closure_130_9);
        if (0 !== length.length) {
          let c4 = 1;
          const obj7 = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH", skuIds: length };
          const obj4 = closure_130_1(closure_130_2[6]);
          obj4.dispatch(obj7);
          const request = { url: closure_130_7.STOREFRONT_PRODUCTS_BY_SKU_IDS, query: obj8, rejectWithError: true };
          obj8 = { sku_ids: length, locale: closure_130_4.locale, with_bundled_skus: true, include_google_sku_ids: true, ignore_cache: ignoreCache };
          c5 = 3;
          c6 = 1;
          const obj9 = { value: obj6.httpGetWithCountryCodeQuery(request), done: false };
          obj6 = closure_130_0(closure_130_2[7]);
          return obj9;
        }
      }
    } else if (2 === c5) {
      c4 = 0;
      let closure_4 = body;
      const obj10 = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE", skuIds: length, apiError: tmp25 };
      const dispatch2 = closure_130_1(closure_130_2[6]).dispatch;
      const self = this;
      const self2 = this;
      const tmp20 = closure_130_1(closure_130_2[6]);
      tmp25 = new closure_130_1(closure_130_2[8])(closure_4);
      dispatch2(obj10);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      const obj11 = { value, done: true };
      return obj11;
    } else {
      body = value;
      obj = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: length, products: products.map(closure_130_6.fromServer) };
      products = body.body.products;
      const dispatch = closure_130_1(closure_130_2[6]).dispatch;
      const tmp9 = closure_130_1(closure_130_2[6]);
      dispatch(obj);
      c4 = 0;
    }
    await "IconComponent";
    length = tmp;
    ({ skuIds: c0, ignoreCache } = closure_0);
    if (ignoreCache === undefined) {
      ignoreCache = false;
    }
    return "Set";
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/storefront/StorefrontProductActionCreators.tsx");

export const maybeFetchProductsWithSkus = function maybeFetchProductsWithSkus() {
  return obj(...arguments);
};
export { shouldFetchProductBySku };
export const maybeFetchProductsBySkuIds = function maybeFetchProductsBySkuIds() {
  return obj(...arguments);
};