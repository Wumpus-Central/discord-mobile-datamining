// === Module 8536: useCollectiblesShopProducts ===

// Module 8536 (useCollectiblesShopProducts)
import react2 from "react" /* 576 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import StorefrontProductActionCreators from "StorefrontProductActionCreators" /* 7889 */;
import CollectiblesShopManager2 from "CollectiblesShopManager" /* 8538 */;
import StorefrontCollectionActionCreators from "StorefrontCollectionActionCreators" /* 8539 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import StorefrontCollectionStore from "StorefrontCollectionStore" /* 8537 */;
import StorefrontProductStore from "StorefrontProductStore" /* 7890 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7054 */;
import CollectiblesProductRecord from "CollectiblesProductRecord" /* 7055 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set, set2;

function computeEntryState(arg0) {
  let needsCategory;
  let product;
  let productFetchState;
  ({ productFetchState, needsCategory, product } = arg0);
  let str = "error";
  if ("error" !== productFetchState) {
    str = "error";
    if (!tmp) {
      if (!needsCategory) {
        if ("success" !== productFetchState) {
          let str5;
          if (null == product) {
            str5 = "loading";
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
let react = react_mod;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  let tmp2;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== id) {
    const obj2 = { id, sawFetch: false };
    cResult[0] = id;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  [tmp4, tmp5] = react.useState(tmp2);
  let flag = tmp4.sawFetch;
  _slicedToArray(react.useState(tmp2), 2);
  if (tmp4.id !== id) {
    const obj3 = { id, sawFetch: null != arg1 };
    tmp5(obj3);
    flag = tmp10;
  } else {
    const tmp7 = null == arg1 || tmp4.sawFetch;
    if (!tmp7) {
      const obj4 = { id, sawFetch: true };
      tmp5(obj4);
      flag = true;
    }
  }
  return "" !== id && null == arg1 && flag;
}) : ((id, arg1) => {
  let tmp2;
  let tmp3;
  const obj = { id, sawFetch: false };
  [tmp2, tmp3] = react.useState(obj);
  let flag = tmp2.sawFetch;
  _slicedToArray(react.useState(obj), 2);
  if (tmp2.id !== id) {
    const obj2 = { id, sawFetch: null != arg1 };
    tmp3(obj2);
    flag = tmp8;
  } else {
    const tmp5 = null == arg1 || tmp2.sawFetch;
    if (!tmp5) {
      const obj3 = { id, sawFetch: true };
      tmp3(obj3);
      flag = true;
    }
  }
  return "" !== id && null == arg1 && flag;
});
let closure_9 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let closure_3;
  let fetchState;
  let flattenVariants;
  let includeUnpublished;
  let needsCategory;
  let products;
  let seedCategoryStore;
  let shouldFetchProduct;
  let str3;
  let tmp4;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(49);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ needsCategory, seedCategoryStore, shouldFetchProduct, includeUnpublished, flattenVariants } = tmp4);
  dependencyMap = tmp5;
  let closure_2 = undefined !== seedCategoryStore && seedCategoryStore;
  react = tmp6;
  let closure_4 = tmp7;
  if (cResult[2] === (undefined === shouldFetchProduct || shouldFetchProduct)) {
    let tmp8;
    let tmp9;
    let tmp13;
    let tmp16;
    if (cResult[3] === arg0) {
      tmp8 = cResult[4];
      tmp9 = cResult[5];
    }
    const effect = react.useEffect(tmp8, tmp9);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [str3];
      cResult[6] = items;
      tmp13 = items;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== arg0) {
      class F {
        constructor() {
          const obj = { products: StorefrontProductStore.getProductsForSku(closure_0), fetchState: StorefrontProductStore.getFetchStateForSku(closure_0) };
          return obj;
        }
      }
      let items1 = [arg0];
      cResult[7] = arg0;
      cResult[8] = F;
      cResult[9] = items1;
      tmp16 = items1;
    } else {
      class F {
        constructor() {
          const obj = { products: StorefrontProductStore.getProductsForSku(closure_0), fetchState: StorefrontProductStore.getFetchStateForSku(closure_0) };
          return obj;
        }
      }
      tmp16 = cResult[9];
    }
    let tmpResult = tmp(504);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp13, F, tmp16);
    ({ products, fetchState } = stateFromStoresObject);
    if (products != null) {
      class F {
        constructor() {
          const obj = { products: StorefrontProductStore.getProductsForSku(closure_0), fetchState: StorefrontProductStore.getFetchStateForSku(closure_0) };
          return obj;
        }
      }
    }
    str3 = "";
    if (undefined === needsCategory || needsCategory) {
      class F {
        constructor() {
          const obj = { products: StorefrontProductStore.getProductsForSku(closure_0), fetchState: StorefrontProductStore.getFetchStateForSku(closure_0) };
          return obj;
        }
      }
      if (tmp19 != null) {
        class F {
          constructor() {
            const obj = { products: StorefrontProductStore.getProductsForSku(closure_0), fetchState: StorefrontProductStore.getFetchStateForSku(closure_0) };
            return obj;
          }
        }
      }
      if (tmp20 == null) {
        class F {
          constructor() {
            const obj = { products: StorefrontProductStore.getProductsForSku(closure_0), fetchState: StorefrontProductStore.getFetchStateForSku(closure_0) };
            return obj;
          }
        }
      }
      str3 = tmp20;
    }
    if (cResult[10] === str3) {
      class F {
        constructor() {
          const obj = { products: StorefrontProductStore.getProductsForSku(closure_0), fetchState: StorefrontProductStore.getFetchStateForSku(closure_0) };
          return obj;
        }
      }
    }
    class A {
      constructor() {
        const tmp = closure_1 && "" !== str3;
        if (tmp) {
          const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
          const items = [str3];
          const obj = { includeUnpublished };
          const collections = CollectiblesShopManager.requestCollections(items, obj);
        }
      }
    }
    const items2 = [undefined === needsCategory || needsCategory, str3, undefined !== includeUnpublished && includeUnpublished];
    cResult[10] = str3;
    cResult[11] = undefined !== includeUnpublished && includeUnpublished;
    cResult[12] = undefined === needsCategory || needsCategory;
    cResult[13] = A;
    cResult[14] = items2;
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
}) : ((arg0) => {
  let closure_0;
  let fetchState;
  let products;
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
  let closure_13;
  let closure_14;
  let obj2 = flag3;
  let items = [arg0, flag3];
  const effect = flag3.useEffect(() => {
    if (flag3) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const items = [closure_0];
      const products = CollectiblesShopManager.requestProducts(items);
    }
  }, items);
  let tmp2 = _require;
  const tmp3 = flag;
  let obj3 = require("get initialized");
  let items1 = [flag5];
  const items2 = [arg0];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    const obj = { products: StorefrontProductStore.getProductsForSku(closure_0), fetchState: StorefrontProductStore.getFetchStateForSku(closure_0) };
    return obj;
  }, items2);
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
    const tmp = flag && "" !== str2;
    if (tmp) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const items = [str2];
      const obj = { includeUnpublished: flag4 };
      const collections = CollectiblesShopManager.requestCollections(items, obj);
    }
  }, items3);
  const items4 = [flag4];
  const items5 = [str2];
  const tmp2Result = tmp2(tmp3[9]);
  const stateFromStoresObject1 = tmp2Result.useStateFromStoresObject(items4, () => {
    const obj = { collection: StorefrontCollectionStore.getCollection(str2), fetchState: StorefrontCollectionStore.getFetchState(str2) };
    return obj;
  }, items5);
  collection = stateFromStoresObject1.collection;
  fetchState2 = stateFromStoresObject1.fetchState;
  const items6 = [first, flag5, arg0];
  memo = obj2.useMemo(() => {
    let tmp2 = null;
    if (null != first) {
      let tmp5;
      const fromStorefrontProductRecord = CollectiblesProductRecord.fromStorefrontProductRecord;
      if (flag5) {
        tmp5 = closure_0;
      }
      const obj = { flattenVariantSkuId: tmp5 };
      let result = fromStorefrontProductRecord(tmp, obj);
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
  const tmp11 = collection;
  if (flag) {
    str = str2;
  }
  const tmp11Result = tmp11(str, fetchState2);
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
            let str5;
            if (null == memo) {
              str5 = "loading";
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
    const tmp = flag2 && null != memo;
    if (tmp) {
      const obj = CollectiblesActionCreators;
      const result = obj.seedCollectiblesProductFromStandaloneLoad(memo);
    }
  }, items9);
  const items10 = [arg0, flag, str2, flag4];
  const obj4 = {
    product: memo,
    category: memo1,
    state: memo2,
    retry: obj2.useCallback(() => {
      let items;
      let items1;
      const obj2 = { skuIds: items, ignoreCache: true };
      items = [closure_0];
      const obj = StorefrontProductActionCreators;
      const result = obj.maybeFetchProductsBySkuIds(obj2);
      const tmp4 = flag && "" !== str2;
      if (tmp4) {
        const obj3 = { collectionIds: items1, includeUnpublishedCollections: flag4, includeUnpublishedProducts: flag4, ignoreCache: true };
        items1 = [str2];
        const tmpResult = StorefrontCollectionActionCreators;
        const result1 = tmpResult.maybeFetchCollectionsWithProducts(obj3);
      }
    }, items10)
  };
  return obj4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let first;
  let first1;
  const obj = first1(576);
  const cResult = obj.c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      set = new Set();
      return set;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  [first1] = react.useState(first);
  if (cResult[1] === arg0) {
    let tmp7;
    let tmp8;
    if (cResult[2] === first1) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp8) {
      if (cResult[6] === first1) {
        let tmp10;
        if (cResult[7] === tmp7) {
          tmp10 = cResult[8];
        }
        dependencyMap = tmp10;
        if (tmp8) {
          tmp6(tmp10);
        }
        if (cResult[9] === tmp10) {
          let obj3;
          let tmp20;
          if (cResult[10] === arg0) {
            obj3 = cResult[11];
          }
          const str2 = obj3.join(",");
          if (cResult[12] !== str2) {
            let items;
            const _Set2 = Set;
            if ("" === str2) {
              items = [];
            } else {
              items = str2.split(",");
            }
            const self3 = this;
            const self4 = this;
            const _Set21 = new _Set2(items);
            cResult[12] = str2;
            cResult[13] = _Set21;
            tmp20 = _Set21;
          } else {
            tmp20 = cResult[13];
          }
          return tmp20;
        }
        const _Object = Object;
        const entries = Object.entries(arg0);
        const found = entries.filter((item) => {
          const first = _slicedToArray(item, 2)[0];
          let hasItem = "" !== first;
          _slicedToArray(item, 2);
          if (hasItem) {
            hasItem = null == tmp3;
          }
          if (hasItem) {
            hasItem = set.has(first);
          }
          return hasItem;
        });
        const mapped = found.map((item) => _slicedToArray(item, 1)[0]);
        cResult[9] = tmp10;
        cResult[10] = arg0;
        cResult[11] = mapped;
        obj3 = mapped;
      }
    }
    set = first1;
    if (tmp8) {
      const _Set = Set;
      const items1 = [];
      HermesBuiltin.arraySpread(items1, tmp7, HermesBuiltin.arraySpread(items1, first1, 0));
      const self = this;
      const self2 = this;
      set = new Set(items1);
    }
    cResult[5] = tmp8;
    cResult[6] = first1;
    cResult[7] = tmp7;
    cResult[8] = set;
    tmp10 = set;
  }
  const entries1 = Object.entries(arg0);
  const found1 = entries1.filter((item) => {
    let tmp3 = "" !== _slicedToArray(item, 2)[0];
    _slicedToArray(item, 2);
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
  tmp8 = someResult;
  tmp7 = mapped1;
}) : (function(arg0) {
  let first;
  let tmp4;
  [first, tmp4] = react.useState(() => {
    set = new Set();
    return set;
  });
  const entries = Object.entries(arg0);
  const found = entries.filter((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "" !== tmp && null != tmp2;
  });
  const mapped = found.map((item) => {
    let tmp;
    [tmp] = item;
    return tmp;
  });
  const someResult = mapped.some((item) => !first.has(item));
  set = first;
  if (someResult) {
    let _Set = Set;
    let items = [];
    HermesBuiltin.arraySpread(items, mapped, HermesBuiltin.arraySpread(items, first, 0));
    const self = this;
    const self2 = this;
    set = new Set(items);
  }
  if (someResult) {
    tmp4(set);
  }
  const entries1 = Object.entries(arg0);
  const found1 = entries1.filter((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const hasItem = "" !== tmp && null == tmp2 && set.has(tmp);
    return hasItem;
  });
  const mapped1 = found1.map((item) => {
    let tmp;
    [tmp] = item;
    return tmp;
  });
  const joined = mapped1.join(",");
  const items1 = [joined];
  return react.useMemo(() => {
    let items;
    const _Set = Set;
    if ("" === joined) {
      items = [];
    } else {
      items = joined.split(",");
    }
    const _Set1 = new _Set(items);
    return _Set1;
  }, items1);
});
let result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesShopProducts.tsx");

export const useFetchResolvedAbsent = tmp2;
export const useCollectiblesShopProduct = tmp3;
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
  set = undefined;
  let items = [skuIds];
  memo = memo.useMemo(() => skuIds.filter((item) => "" !== item), items);
  const items1 = [memo.join(",")];
  const effect = memo.useEffect(() => {
    if (memo.length > 0) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const products = CollectiblesShopManager.requestProducts(tmp);
    }
  }, items1);
  let obj3 = require("get initialized");
  const items2 = [stateFromStoresObject1];
  const items3 = [memo];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
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
  let obj4 = require("get initialized");
  const items4 = [stateFromStoresObject1];
  const items5 = [memo];
  stateFromStoresObject1 = obj4.useStateFromStoresObject(items4, () => {
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
    const f138922 = (item) => "" !== item;
    const values = Object.values(memo1);
    const items = [...new Set(values.filter(f138922))];
    new Set(values.filter(f138922));
    return items;
  }, items7);
  const items8 = [flag, memo2.join(",")];
  const effect1 = memo.useEffect(() => {
    const tmp = flag && memo2.length > 0;
    if (tmp) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const collections = CollectiblesShopManager.requestCollections(memo2);
    }
  }, items8);
  const items9 = [stateFromStoresObject];
  const items10 = [memo2];
  const obj6 = require("get initialized");
  const stateFromStoresObject2 = obj6.useStateFromStoresObject(items9, () => {
    const obj = {};
    for (const item10006 of memo2) {
      obj[item10006] = StorefrontCollectionStore.getCollection(item10006);
      continue;
    }
    return obj;
  }, items10);
  const items11 = [stateFromStoresObject];
  const items12 = [memo2];
  const obj7 = require("get initialized");
  const stateFromStoresObject3 = obj7.useStateFromStoresObject(items11, () => {
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
  set2 = tmp9;
  const items13 = [memo, stateFromStoresObject, stateFromStoresObject1, memo1, stateFromStoresObject2, stateFromStoresObject3, tmp8, tmp9, flag, flag2];
  return memo.useMemo(() => {
    let hasItem;
    let obj4;
    let tmp29;
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
        let fromStorefrontProductRecord = CollectiblesProductRecord.fromStorefrontProductRecord;
        if (flag2) {
          tmp21 = nextResult;
        }
        let obj2 = { flattenVariantSkuId: tmp21 };
        let result = fromStorefrontProductRecord(tmp5, obj2);
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
      let obj3 = { product: tmp23, category: result1, state: computeEntryState(obj4) };
      obj4 = { productFetchState: tmp7, productAbsent: set.has(tmp3), collectionFetchState: tmp15, collectionAbsent: hasItem, needsCategory: flag, collectionId: tmp9, product: tmp23, category: tmp29 };
      tmp29 = result1;
      hasItem = "" !== tmp9;
      if (hasItem) {
        hasItem = set2.has(tmp9);
      }
      obj[tmp3] = obj3;
      continue;
    }
    return obj;
  }, items13);
};