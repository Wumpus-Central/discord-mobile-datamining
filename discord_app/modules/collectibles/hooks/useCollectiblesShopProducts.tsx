// === Module 8536: useCollectiblesShopProducts ===

// Module 8536 (useCollectiblesShopProducts)
import c from "c" /* 576 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import StorefrontProductActionCreators from "StorefrontProductActionCreators" /* 7889 */;
import CollectiblesShopManager2 from "CollectiblesShopManager" /* 8538 */;
import StorefrontCollectionActionCreators from "StorefrontCollectionActionCreators" /* 8539 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import StorefrontCollectionStore from "StorefrontCollectionStore" /* 8537 */;
import StorefrontProductStore from "StorefrontProductStore" /* 7890 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7054 */;
import CollectiblesProductRecord from "CollectiblesProductRecord" /* 7055 */;

const require = globalThis.__r;

require = fn;
function computeEntryState(arg0) {
  ({ productFetchState, needsCategory, product } = arg0);
  let str = "error";
  if ("error" !== productFetchState) {
    str = "error";
    if (!tmp) {
      if (!needsCategory) {
        if ("success" !== productFetchState) {
          if (null == product) {
            let str5 = "loading";
          } else {
            str5 = "ready";
            if (needsCategory) {
              str5 = "ready";
            }
          }
          str = str5;
        } else {
          str = "error";
          if (null != product) {
            if (needsCategory) {
              str = "error";
            }
          }
        }
      } else {
        str = "error";
        if ("error" !== tmp2) {
          str = "error";
        }
      }
    }
  }
  return str;
}
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  const cResult = c.c(2);
  if (cResult[0] !== id) {
    const obj2 = { id, sawFetch: false };
    cResult[0] = id;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  [tmp4, tmp5] = noop.useState(tmp2);
  let flag = tmp4.sawFetch;
  if (tmp4.id !== id) {
    const obj3 = { id, sawFetch: null != arg1 };
    tmp5(obj3);
    flag = tmp10;
  } else {
    if (!tmp7) {
      const obj4 = { id, sawFetch: true };
      tmp5(obj4);
      flag = true;
    }
    tmp7 = null == arg1 || tmp4.sawFetch;
  }
  let tmp12 = "" !== id;
  if (tmp12) {
    tmp12 = null == arg1;
  }
  if (tmp12) {
    tmp12 = flag;
  }
  return tmp12;
}) : ((id, arg1) => {
  [tmp2, tmp3] = noop.useState({ id, sawFetch: false });
  let flag = tmp2.sawFetch;
  if (tmp2.id !== id) {
    const obj2 = { id, sawFetch: null != arg1 };
    tmp3(obj2);
    flag = tmp8;
  } else {
    if (!tmp5) {
      const obj3 = { id, sawFetch: true };
      tmp3(obj3);
      flag = true;
    }
    tmp5 = null == arg1 || tmp2.sawFetch;
  }
  let tmp10 = "" !== id;
  if (tmp10) {
    tmp10 = null == arg1;
  }
  if (tmp10) {
    tmp10 = flag;
  }
  return tmp10;
});
let closure_9 = tmp2;
fn(558);
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = first1(576).c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      return new Set();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const obj = first1(576);
  first1 = _slicedToArray(noop.useState(first), 2)[0];
  if (cResult[1] === arg0) {
    if (cResult[2] === first1) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    if (cResult[5] === tmp7) {
      if (cResult[6] === first1) {
        if (cResult[7] === tmp6) {
          let tmp9 = cResult[8];
        }
        dependencyMap = tmp9;
        if (tmp7) {
          tmp5(tmp9);
        }
        if (cResult[9] === tmp9) {
          if (cResult[10] === arg0) {
            let obj3 = cResult[11];
          }
          const str2 = obj3.join(",");
          if (cResult[12] !== str2) {
            if ("" === str2) {
              let items = [];
            } else {
              items = str2.split(",");
            }
            const set = new Set(items);
            cResult[12] = str2;
            cResult[13] = set;
          } else {
            return cResult[13];
          }
        }
        const _Object = Object;
        const entries = Object.entries(arg0);
        const found = entries.filter((item) => {
          const first = _slicedToArray(item, 2)[0];
          let hasItem = "" !== first;
          if (hasItem) {
            hasItem = null == tmp3;
          }
          if (hasItem) {
            hasItem = set.has(first);
          }
          return hasItem;
        });
        const mapped = found.map((item) => _slicedToArray(item, 1)[0]);
        cResult[9] = tmp9;
        cResult[10] = arg0;
        cResult[11] = mapped;
        obj3 = mapped;
      }
    }
    let set1 = first1;
    if (tmp7) {
      const _Set = Set;
      const items1 = [];
      HermesBuiltin.arraySpread(tmp6, HermesBuiltin.arraySpread(first1, 0));
      set1 = new Set(items1);
    }
    cResult[5] = tmp7;
    cResult[6] = first1;
    cResult[7] = tmp6;
    cResult[8] = set1;
    tmp9 = set1;
  }
  const entries1 = Object.entries(arg0);
  const found1 = entries1.filter((item) => {
    let tmp3 = "" !== _slicedToArray(item, 2)[0];
    if (tmp3) {
      tmp3 = null != tmp2;
    }
    return tmp3;
  });
  const mapped1 = found1.map((item) => _slicedToArray(item, 1)[0]);
  const someResult = mapped1.some((item) => !first1.has(item));
  cResult[1] = arg0;
  cResult[2] = first1;
  cResult[3] = mapped1;
  cResult[4] = someResult;
  tmp7 = someResult;
  tmp6 = mapped1;
}) : ((arg0) => {
  const tmp = _slicedToArray(noop.useState(() => new Set()), 2);
  const first = tmp[0];
  const entries = Object.entries(arg0);
  const found = entries.filter((item) => {
    [tmp, tmp2] = item;
    let tmp3 = "" !== tmp;
    if (tmp3) {
      tmp3 = null != tmp2;
    }
    return tmp3;
  });
  const mapped = found.map((item) => {
    [tmp] = item;
    return tmp;
  });
  const someResult = mapped.some((item) => !first.has(item));
  let set = first;
  if (someResult) {
    const _Set = Set;
    let items = [];
    HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(first, 0));
    set = new Set(items);
  }
  if (someResult) {
    tmp[1](set);
  }
  const entries1 = Object.entries(arg0);
  const found1 = entries1.filter((item) => {
    [tmp, tmp2] = item;
    let hasItem = "" !== tmp;
    if (hasItem) {
      hasItem = null == tmp2;
    }
    if (hasItem) {
      hasItem = set.has(tmp);
    }
    return hasItem;
  });
  const mapped1 = found1.map((item) => {
    [tmp] = item;
    return tmp;
  });
  const joined = mapped1.join(",");
  const items1 = [joined];
  return noop.useMemo(() => {
    if ("" === joined) {
      let items = [];
    } else {
      items = joined.split(",");
    }
    return new Set(items);
  }, items1);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesShopProducts.tsx");

export const useFetchResolvedAbsent = tmp2;
export const useCollectiblesShopProduct = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(49);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ needsCategory, seedCategoryStore, shouldFetchProduct, includeUnpublished, flattenVariants } = tmp4);
  dependencyMap = tmp5;
  closure_2 = undefined !== seedCategoryStore && seedCategoryStore;
  noop = tmp6;
  closure_4 = tmp7;
  if (cResult[2] === (undefined === shouldFetchProduct || shouldFetchProduct)) {
    if (cResult[3] === arg0) {
      let tmp8 = cResult[4];
      let tmp9 = cResult[5];
    }
    const effect = noop.useEffect(tmp8, tmp9);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [str3];
      cResult[6] = items;
      let tmp13 = items;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== arg0) {
      class F {
        constructor() {
          obj = { products: closure_5.getProductsForSku(closure_0), fetchState: closure_5.getFetchStateForSku(closure_0) };
          return obj;
        }
      }
      let items1 = [arg0];
      cResult[7] = arg0;
      cResult[8] = F;
      cResult[9] = items1;
      let tmp16 = items1;
    } else {
      class F {
        constructor() {
          obj = { products: closure_5.getProductsForSku(closure_0), fetchState: closure_5.getFetchStateForSku(closure_0) };
          return obj;
        }
      }
      tmp16 = cResult[9];
    }
    const stateFromStoresObject = tmp(504).useStateFromStoresObject(tmp13, F, tmp16);
    ({ products, fetchState } = stateFromStoresObject);
    if (products != null) {
      class F {
        constructor() {
          obj = { products: closure_5.getProductsForSku(closure_0), fetchState: closure_5.getFetchStateForSku(closure_0) };
          return obj;
        }
      }
    }
    str3 = "";
    if (tmp5) {
      class F {
        constructor() {
          obj = { products: closure_5.getProductsForSku(closure_0), fetchState: closure_5.getFetchStateForSku(closure_0) };
          return obj;
        }
      }
      if (tmp19 != null) {
        class F {
          constructor() {
            obj = { products: closure_5.getProductsForSku(closure_0), fetchState: closure_5.getFetchStateForSku(closure_0) };
            return obj;
          }
        }
      }
      if (tmp20 == null) {
        class F {
          constructor() {
            obj = { products: closure_5.getProductsForSku(closure_0), fetchState: closure_5.getFetchStateForSku(closure_0) };
            return obj;
          }
        }
      }
      str3 = tmp20;
    }
    if (cResult[10] === str3) {
      class F {
        constructor() {
          obj = { products: closure_5.getProductsForSku(closure_0), fetchState: closure_5.getFetchStateForSku(closure_0) };
          return obj;
        }
      }
    }
    class A {
      constructor() {
        tmp = needsCategory;
        if (needsCategory) {
          tmp2 = c5;
          str = "";
          tmp = "" !== c5;
        }
        if (tmp) {
          tmp3 = closure_0;
          tmp4 = closure_1;
          CollectiblesShopManager = closure_0(closure_1[8]).CollectiblesShopManager;
          tmp5 = c5;
          items = [];
          items[0] = c5;
          obj = { includeUnpublished: null };
          tmp6 = includeUnpublished;
          obj.includeUnpublished = includeUnpublished;
          collections = CollectiblesShopManager.requestCollections(items, obj);
        }
        return;
      }
    }
    const items2 = [tmp5, str3, tmp7];
    cResult[10] = str3;
    cResult[11] = tmp7;
    cResult[12] = tmp5;
    cResult[13] = A;
    cResult[14] = items2;
    let tmpResult = tmp(504);
  }
  const fn = function b() {
    if (closure_3) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const items = [closure_0];
      const products = CollectiblesShopManager.requestProducts(items);
    }
  };
  const items3 = [arg0, undefined === shouldFetchProduct || shouldFetchProduct];
  cResult[2] = undefined === shouldFetchProduct || shouldFetchProduct;
  cResult[3] = arg0;
  cResult[4] = fn;
  cResult[5] = items3;
  tmp9 = items3;
  tmp8 = fn;
  let obj = require("c");
  tmp = _require;
}) : ((arg0) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.needsCategory;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = obj.seedCategoryStore;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = obj.shouldFetchProduct;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let flag4 = obj.includeUnpublished;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = obj.flattenVariants;
  if (flag5 === undefined) {
    flag5 = false;
  }
  fetchState = undefined;
  let str2;
  let collection;
  let fetchState2;
  let memo;
  let memo1;
  closure_13 = undefined;
  closure_14 = undefined;
  let items = [arg0, flag3];
  const effect = flag3.useEffect(() => {
    if (flag3) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const items = [closure_0];
      const products = CollectiblesShopManager.requestProducts(items);
    }
  }, items);
  let items1 = [flag5];
  const items2 = [arg0];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => ({ products: StorefrontProductStore.getProductsForSku(closure_0), fetchState: StorefrontProductStore.getFetchStateForSku(closure_0) }), items2);
  ({ products, fetchState } = stateFromStoresObject);
  let first;
  if (products != null) {
    first = products[0];
  }
  let str = "";
  str2 = "";
  if (flag) {
    let primaryCollectionId;
    if (first != null) {
      primaryCollectionId = first.primaryCollectionId;
    }
    if (primaryCollectionId == null) {
      primaryCollectionId = str;
    }
    str2 = primaryCollectionId;
  }
  const items3 = [flag, str2, flag4];
  const effect1 = obj2.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = "" !== str2;
    }
    if (tmp) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const items = [str2];
      const obj = { includeUnpublished: flag4 };
      const collections = CollectiblesShopManager.requestCollections(items, obj);
    }
  }, items3);
  let obj3 = require("initialize");
  const items4 = [flag4];
  const items5 = [str2];
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(items4, () => ({ collection: StorefrontCollectionStore.getCollection(str2), fetchState: StorefrontCollectionStore.getFetchState(str2) }), items5);
  collection = stateFromStoresObject1.collection;
  fetchState2 = stateFromStoresObject1.fetchState;
  const items6 = [first, flag5, arg0];
  memo = obj2.useMemo(() => {
    let tmp2 = null;
    if (null != first) {
      let tmp5;
      if (flag5) {
        tmp5 = closure_0;
      }
      const obj = { flattenVariantSkuId: tmp5 };
      let result = CollectiblesProductRecord.fromStorefrontProductRecord(tmp, obj);
      if (result == null) {
        result = null;
      }
      tmp2 = result;
    }
    return tmp2;
  }, items6);
  const items7 = [flag, collection];
  memo1 = obj2.useMemo(() => {
    let result = null;
    if (flag) {
      result = null;
      if (null != collection) {
        result = CollectiblesCategoryRecord.fromStorefrontCollectionRecord(tmp2);
      }
    }
    return result;
  }, items7);
  const tmp12 = collection(arg0, fetchState);
  closure_13 = tmp12;
  if (flag) {
    str = str2;
  }
  const tmp11Result = collection(str, fetchState2);
  closure_14 = tmp11Result;
  const items8 = [fetchState, tmp12, fetchState2, tmp11Result, flag, str2, memo, memo1];
  const items9 = [flag2, memo];
  const memo2 = obj2.useMemo(() => {
    let str = "error";
    if ("error" !== fetchState) {
      str = "error";
      if (!tmp2) {
        if (!flag) {
          if ("success" !== tmp) {
            if (null == memo) {
              let str5 = "loading";
            } else {
              str5 = "ready";
              if (flag) {
                str5 = "ready";
              }
            }
            str = str5;
          } else {
            str = "error";
            if (null != memo) {
              if (flag) {
                str = "error";
              }
            }
          }
        } else {
          str = "error";
          if ("error" !== tmp3) {
            str = "error";
          }
        }
      }
    }
    return str;
  }, items8);
  const effect2 = obj2.useEffect(() => {
    let tmp = flag2;
    if (flag2) {
      tmp = null != memo;
    }
    if (tmp) {
      const result = CollectiblesActionCreators.seedCollectiblesProductFromStandaloneLoad(memo);
    }
  }, items9);
  const items10 = [arg0, flag, str2, flag4];
  const tmp2Result = require("initialize");
  return {
    product: memo,
    category: memo1,
    state: memo2,
    retry: flag3.useCallback(() => {
      const obj2 = { skuIds: null, ignoreCache: true };
      const items = [closure_0];
      obj2.skuIds = items;
      const result = StorefrontProductActionCreators.maybeFetchProductsBySkuIds(obj2);
      let tmp4 = flag;
      if (flag) {
        tmp4 = "" !== str2;
      }
      if (tmp4) {
        const obj3 = { collectionIds: null, includeUnpublishedCollections: null, includeUnpublishedProducts: null, ignoreCache: true };
        const items1 = [str2];
        obj3.collectionIds = items1;
        obj3.includeUnpublishedCollections = flag4;
        obj3.includeUnpublishedProducts = flag4;
        const result1 = StorefrontCollectionActionCreators.maybeFetchCollectionsWithProducts(obj3);
        const tmpResult = StorefrontCollectionActionCreators;
      }
    }, items10)
  };
});
export const useCollectiblesShopProducts = function useCollectiblesShopProducts(skuIds) {
  _require = skuIds;
  let obj = cResult;
  if (cResult === undefined) {
    obj = {};
  }
  let flag = obj.needsCategory;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.flattenVariants;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let memo;
  let stateFromStoresObject1;
  let set;
  let items = [skuIds];
  memo = memo.useMemo(() => skuIds.filter((item) => "" !== item), items);
  const items1 = [memo.join(",")];
  const effect = memo.useEffect(() => {
    if (memo.length > 0) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const products = CollectiblesShopManager.requestProducts(tmp);
    }
  }, items1);
  const items2 = [stateFromStoresObject1];
  const items3 = [memo];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => {
    const obj = {};
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let productsForSku = StorefrontProductStore.getProductsForSku(nextResult);
      let first;
      if (productsForSku != null) {
        first = productsForSku[0];
      }
      obj[nextResult] = first;
      continue;
    }
    return obj;
  }, items3);
  let obj3 = require("initialize");
  const items4 = [stateFromStoresObject1];
  const items5 = [memo];
  stateFromStoresObject1 = require("initialize").useStateFromStoresObject(items4, () => {
    const obj = {};
    for (const item10006 of memo) {
      obj[item10006] = StorefrontProductStore.getFetchStateForSku(item10006);
      continue;
    }
    return obj;
  }, items5);
  const items6 = [memo, stateFromStoresObject, flag];
  const memo1 = memo.useMemo(() => {
    const obj = {};
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let str = "";
      if (flag) {
        let tmp7 = stateFromStoresObject[tmp3];
        let str2;
        if (tmp7 != null) {
          str2 = tmp7.primaryCollectionId;
        }
        if (str2 == null) {
          str2 = "";
        }
        str = str2;
      }
      obj[nextResult] = str;
      continue;
    }
    return obj;
  }, items6);
  const items7 = [memo1];
  const memo2 = memo.useMemo(() => {
    const values = Object.values(memo1);
    const items = [...new Set(values.filter((item) => "" !== item))];
    return items;
  }, items7);
  const items8 = [flag, memo2.join(",")];
  const effect1 = memo.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = memo2.length > 0;
    }
    if (tmp) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const collections = CollectiblesShopManager.requestCollections(memo2);
    }
  }, items8);
  let obj4 = require("initialize");
  const items9 = [stateFromStoresObject];
  const items10 = [memo2];
  const stateFromStoresObject2 = require("initialize").useStateFromStoresObject(items9, () => {
    const obj = {};
    for (const item10006 of memo2) {
      obj[item10006] = StorefrontCollectionStore.getCollection(item10006);
      continue;
    }
    return obj;
  }, items10);
  const obj6 = require("initialize");
  const items11 = [stateFromStoresObject];
  const items12 = [memo2];
  const stateFromStoresObject3 = require("initialize").useStateFromStoresObject(items11, () => {
    const obj = {};
    for (const item10006 of memo2) {
      obj[item10006] = StorefrontCollectionStore.getFetchState(item10006);
      continue;
    }
    return obj;
  }, items12);
  const tmp8 = set(stateFromStoresObject1);
  set = tmp8;
  let tmp9 = set(stateFromStoresObject3);
  const items13 = [memo, stateFromStoresObject, stateFromStoresObject1, memo1, stateFromStoresObject2, stateFromStoresObject3, tmp8, tmp9, flag, flag2];
  return memo.useMemo(() => {
    const obj = {};
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = stateFromStoresObject[nextResult];
      let tmp7 = stateFromStoresObject1[nextResult];
      let str = memo1[nextResult];
      if (str == null) {
        str = "";
      }
      let tmp9 = str;
      let tmp11 = stateFromStoresObject2[str];
      if (tmp11 == null) {
        tmp11 = null;
      }
      let tmp12 = tmp11;
      let tmp15 = stateFromStoresObject3[tmp9];
      let tmp17 = null;
      if (null != tmp5) {
        let tmp21;
        if (flag2) {
          tmp21 = nextResult;
        }
        let obj2 = { flattenVariantSkuId: tmp21 };
        let result = CollectiblesProductRecord.fromStorefrontProductRecord(tmp5, obj2);
        if (result == null) {
          result = null;
        }
        tmp17 = result;
      }
      let tmp23 = tmp17;
      let result1 = null;
      if (flag) {
        result1 = null;
        if (null != tmp12) {
          result1 = CollectiblesCategoryRecord.fromStorefrontCollectionRecord(tmp12);
        }
      }
      let obj3 = { product: null, category: null, state: null };
      obj3.product = tmp23;
      obj3.category = result1;
      let obj4 = { productFetchState: null, productAbsent: null, collectionFetchState: null, collectionAbsent: null, needsCategory: null, collectionId: null, product: null, category: null };
      obj4.productFetchState = tmp7;
      let tmp29 = result1;
      obj4.productAbsent = set.has(tmp3);
      obj4.collectionFetchState = tmp15;
      let hasItem = "" !== tmp9;
      if (hasItem) {
        hasItem = set2.has(tmp9);
      }
      obj4.collectionAbsent = hasItem;
      obj4.needsCategory = flag;
      obj4.collectionId = tmp9;
      obj4.product = tmp23;
      obj4.category = tmp29;
      obj3.state = computeEntryState(obj4);
      obj[tmp3] = obj3;
      continue;
    }
    return obj;
  }, items13);
};