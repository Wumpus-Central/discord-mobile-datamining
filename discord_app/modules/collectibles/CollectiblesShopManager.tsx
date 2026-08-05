// discord_app/modules/collectibles/CollectiblesShopManager.tsx
import getFetchState from "getFetchState";
import closure_3 from "getFetchState";
import set from "_maybeFetchProductsWithSkus";

const require = arg1;
function chunk(arr) {
  let length;
  let sum;
  const items = [];
  let num = 0;
  if (0 < arr.length) {
    do {
      sum = num + 100;
      arr = items.push(arr.slice(num, sum));
      num = sum;
      length = arr.length;
    } while (sum < length);
  }
  return items;
}
function flushProducts() {
  let c6 = null;
  const items = [...set];
  set.clear();
  for (const item10016 of tmp2) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let obj = require("../storefront/StorefrontProductActionCreators.tsx") /* _maybeFetchProductsWithSkus */;
    obj = { skuIds: null };
    obj[0] = item10016;
    let result = obj.maybeFetchProductsBySkuIds(obj);
    continue;
  }
}
function flushCollections() {
  let c7 = null;
  const items = [...set1];
  set1.clear();
  for (const item10016 of tmp2) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let obj = require("../storefront/StorefrontCollectionActionCreators.tsx") /* _maybeFetchCollectionsWithProducts */;
    obj = { collectionIds: null };
    obj[0] = item10016;
    let result = obj.maybeFetchCollectionsWithProducts(obj);
    continue;
  }
}
let set = new Set();
const set1 = new Set();
let c6 = null;
let c7 = null;
let obj = {
  requestProducts(items) {
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = "" !== nextResult;
      if (tmp3) {
        let tmp4 = fetchStateForSku;
        let tmp5 = nextResult;
        tmp3 = "loading" !== fetchStateForSku.getFetchStateForSku(tmp2);
      }
      if (tmp3) {
        let tmp6 = set;
        let tmp7 = nextResult;
        let addResult = set.add(tmp2);
      }
      continue;
    }
    let tmp9 = set.size > 0;
    if (tmp9) {
      tmp9 = null == timeout;
    }
    if (tmp9) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(flushProducts, 32);
    }
  },
  requestCollections(items) {
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = "" !== nextResult;
      if (tmp3) {
        let tmp4 = fetchState;
        let tmp5 = nextResult;
        tmp3 = "loading" !== fetchState.getFetchState(tmp2);
      }
      if (tmp3) {
        let tmp6 = set1;
        let tmp7 = nextResult;
        let addResult = set1.add(tmp2);
      }
      continue;
    }
    let tmp9 = set1.size > 0;
    if (tmp9) {
      tmp9 = null == timeout;
    }
    if (tmp9) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(flushCollections, 32);
    }
  },
  reset() {
    set.clear();
    set1.clear();
    if (null != c6) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c6);
      c6 = null;
    }
    if (null != c7) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(c7);
      c7 = null;
    }
  }
};
const subscription = require("dispatcher").subscribe("LOGOUT", obj.reset);
let result = set.fileFinishedImporting("modules/collectibles/CollectiblesShopManager.tsx");

export const CollectiblesShopManager = obj;