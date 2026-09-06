// discord_app/modules/collectibles/CollectiblesShopManager.tsx
import StorefrontProductActionCreators from "../storefront/StorefrontProductActionCreators.tsx";
import StorefrontCollectionActionCreators from "../storefront/StorefrontCollectionActionCreators.tsx";
import StorefrontCollectionStore from "../storefront/StorefrontCollectionStore.tsx";
import StorefrontProductStore from "../storefront/StorefrontProductStore.tsx";
import Dispatcher from "../../Dispatcher.tsx";

require = fn;
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
  c6 = null;
  const items = [...set];
  set.clear();
  for (const item10016 of tmp2) {
    let obj = StorefrontProductActionCreators;
    obj = { skuIds: item10016 };
    let result = obj.maybeFetchProductsBySkuIds(obj);
    continue;
  }
  const tmp2 = chunk(items);
}
function flushCollections() {
  c7 = null;
  const items = [...set1];
  set1.clear();
  c8 = false;
  for (const item10018 of tmp3) {
    let obj = StorefrontCollectionActionCreators;
    obj = { collectionIds: item10018, includeUnpublishedCollections: tmp, includeUnpublishedProducts: tmp };
    let result = obj.maybeFetchCollectionsWithProducts(obj);
    continue;
  }
  const tmp3 = chunk(items);
}
const set = new Set();
const set1 = new Set();
let c6 = null;
let c7 = null;
let c8 = false;
let obj = {
  requestProducts(items) {
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = "" !== nextResult;
      if (tmp3) {
        tmp3 = "loading" !== StorefrontProductStore.getFetchStateForSku(tmp2);
      }
      if (tmp3) {
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
  requestCollections(items, arg1) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let flag = obj.includeUnpublished;
    if (flag === undefined) {
      flag = false;
    }
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = "" !== nextResult;
      if (tmp3) {
        tmp3 = "loading" !== StorefrontCollectionStore.getFetchState(tmp2);
      }
      if (tmp3) {
        let addResult = set1.add(tmp2);
      }
      continue;
    }
    if (flag) {
      c8 = true;
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
    c8 = false;
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
  },
};
const subscription = Dispatcher.subscribe("LOGOUT", obj.reset);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/CollectiblesShopManager.tsx");

export const CollectiblesShopManager = obj;
