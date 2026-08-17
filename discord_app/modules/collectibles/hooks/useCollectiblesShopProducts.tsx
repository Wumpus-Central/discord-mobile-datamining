// discord_app/modules/collectibles/hooks/useCollectiblesShopProducts.tsx
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "getFetchState" /* 11999 */;
import closure_5 from "getFetchState" /* 8963 */;
import closure_6 from "fromServer" /* 5302 */;
import closure_7 from "fromServer" /* 5303 */;

const require = arg1;
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
function useAbsentIds(arg0) {
  const tmp = callback(React.useState(() => new Set()), 2);
  const first = tmp[0];
  const entries = Object.entries(arg0);
  const found = entries.filter((arg0) => {
    [tmp, tmp2] = arg0;
    let tmp3 = "" !== tmp;
    if (tmp3) {
      tmp3 = null != tmp2;
    }
    return tmp3;
  });
  const mapped = found.map((arg0) => {
    [tmp] = arg0;
    return tmp;
  });
  const someResult = mapped.some((arg0) => !first.has(arg0));
  let set = first;
  if (someResult) {
    const _Set = Set;
    const items = [];
    HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(first, 0));
    set = new Set(items);
  }
  if (someResult) {
    tmp[1](set);
  }
  const set1 = new Set();
  const entries1 = Object.entries(arg0);
  while (tmp14 !== undefined) {
    let tmp16 = callback;
    let tmp17 = callback(tmp15, 2);
    let first1 = tmp17[0];
    let tmp19 = first1;
    let tmp20 = tmp17[1];
    let hasItem = "" !== first1;
    if (hasItem) {
      let tmp22 = tmp20;
      hasItem = null == tmp20;
    }
    if (hasItem) {
      let tmp23 = first1;
      hasItem = set.has(tmp19);
    }
    if (hasItem) {
      let tmp24 = first1;
      let addResult = set1.add(tmp19);
    }
    continue;
  }
  return set1;
}
let result = require("set").fileFinishedImporting("modules/collectibles/hooks/useCollectiblesShopProducts.tsx");

export const useCollectiblesShopProduct = function useCollectiblesShopProduct(skuId, arg1) {
  const _require = skuId;
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
  fetchState = undefined;
  let first;
  let str;
  let collection;
  let fetchState2;
  let memo;
  let memo1;
  closure_11 = undefined;
  closure_12 = undefined;
  obj1 = flag3;
  let items = [skuId, flag3];
  const effect = flag3.useEffect(() => {
    if (flag3) {
      const CollectiblesShopManager = skuId(flag[6]).CollectiblesShopManager;
      const items = [skuId];
      const products = CollectiblesShopManager.requestProducts(items);
    }
  }, items);
  let obj2 = _require(flag[7]);
  let items1 = [first];
  const items2 = [skuId];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({ products: first.getProductsForSku(closure_0), fetchState: first.getFetchStateForSku(closure_0) }), items2);
  ({ products, fetchState } = stateFromStoresObject);
  first = undefined;
  if (products != null) {
    first = products[0];
  }
  str = "";
  if (flag) {
    let str2;
    if (first != null) {
      str2 = first.primaryCollectionId;
    }
    if (str2 == null) {
      str2 = "";
    }
    str = str2;
  }
  const items3 = [flag, str];
  const effect1 = obj1.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = "" !== str;
    }
    if (tmp) {
      const CollectiblesShopManager = skuId(flag[6]).CollectiblesShopManager;
      const items = [str];
      const collections = CollectiblesShopManager.requestCollections(items);
    }
  }, items3);
  const items4 = [fetchState];
  const items5 = [str];
  const stateFromStoresObject1 = _require(flag[7]).useStateFromStoresObject(items4, () => ({ collection: fetchState.getCollection(str), fetchState: fetchState.getFetchState(str) }), items5);
  collection = stateFromStoresObject1.collection;
  fetchState2 = stateFromStoresObject1.fetchState;
  const items6 = [first];
  memo = obj1.useMemo(() => {
    let tmp2 = null;
    if (null != first) {
      let result = collection.fromStorefrontProductRecord(tmp);
      if (result == null) {
        result = null;
      }
      tmp2 = result;
    }
    return tmp2;
  }, items6);
  const items7 = [flag, collection];
  memo1 = obj1.useMemo(() => {
    let result = null;
    if (flag) {
      result = null;
      if (null != collection) {
        result = str.fromStorefrontCollectionRecord(tmp2);
      }
    }
    return result;
  }, items7);
  obj = { id: skuId, sawFetch: false };
  const tmp10 = flag2;
  let tmp2 = _require;
  const tmp2Result = _require(flag[7]);
  const tmp3 = flag;
  [tmp12, tmp13] = flag2(obj1.useState(obj), 2);
  let flag4 = tmp12.sawFetch;
  if (tmp12.id !== skuId) {
    obj = { id: null, sawFetch: null };
    obj[0] = skuId;
    obj[1] = null != fetchState;
    tmp13(obj);
    flag4 = tmp16;
  } else {
    if (!tmp14) {
      obj1 = { id: null, sawFetch: true };
      obj1[0] = skuId;
      tmp13(obj1);
      flag4 = true;
    }
    tmp14 = null == fetchState || tmp12.sawFetch;
  }
  closure_11 = tmp18;
  let str3 = "";
  if (flag) {
    str3 = str;
  }
  const tmp11 = flag2(obj1.useState(obj), 2);
  [tmp20, tmp21] = tmp10(obj1.useState({ id: str3, sawFetch: false }), 2);
  let flag5 = tmp20.sawFetch;
  if (tmp20.id !== str3) {
    obj2 = { id: null, sawFetch: null };
    obj2[0] = str3;
    obj2[1] = null != fetchState2;
    tmp21(obj2);
    flag5 = tmp24;
  } else {
    if (!tmp22) {
      const obj3 = { id: null, sawFetch: true };
      obj3[0] = str3;
      tmp21(obj3);
      flag5 = true;
    }
    tmp22 = null == fetchState2 || tmp20.sawFetch;
  }
  closure_12 = tmp26;
  const items8 = [fetchState, "" !== skuId && null == fetchState && flag4, fetchState2, "" !== str3 && null == fetchState2 && flag5, flag, str, memo, memo1];
  const items9 = [flag2, memo];
  const memo2 = obj1.useMemo(() => {
    str = "error";
    if ("error" !== fetchState) {
      str = "error";
      if (!tmp2) {
        if (!tmp5) {
          if ("success" !== tmp) {
            if (null == tmp7) {
              let str5 = "loading";
            } else {
              str5 = "ready";
              if (tmp5) {
                str5 = "ready";
              }
            }
            str = str5;
          } else {
            str = "error";
            if (null != tmp7) {
              if (tmp5) {
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
  const effect2 = obj1.useEffect(() => {
    let tmp = flag2;
    if (flag2) {
      tmp = null != memo;
    }
    if (tmp) {
      const result = skuId(flag[8]).seedCollectiblesProductFromStandaloneLoad(memo);
      const obj = skuId(flag[8]);
    }
  }, items9);
  const items10 = [skuId, flag, str];
  const tmp10Result = tmp10(obj1.useState({ id: str3, sawFetch: false }), 2);
  return {
    product: memo,
    category: memo1,
    state: memo2,
    retry: obj1.useCallback(() => {
      let obj = skuId(flag[9]);
      const items = [skuId];
      const result = obj.maybeFetchProductsBySkuIds({ skuIds: items, ignoreCache: true });
      let tmp4 = flag;
      if (flag) {
        tmp4 = "" !== str;
      }
      if (tmp4) {
        obj = { collectionIds: null, ignoreCache: true };
        const items1 = [str];
        obj[0] = items1;
        const result1 = skuId(flag[10]).maybeFetchCollectionsWithProducts(obj);
        const tmpResult = skuId(flag[10]);
      }
    }, items10)
  };
};
export const useCollectiblesShopProducts = function useCollectiblesShopProducts(arg0) {
  const _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.needsCategory;
  if (flag === undefined) {
    flag = false;
  }
  let memo;
  let stateFromStoresObject;
  let stateFromStoresObject1;
  let memo1;
  let memo2;
  let stateFromStoresObject2;
  let stateFromStoresObject3;
  useAbsentIds = undefined;
  closure_10 = undefined;
  let items = [arg0];
  memo = stateFromStoresObject.useMemo(() => lib.filter((arg0) => "" !== arg0), items);
  const items1 = [memo.join(",")];
  const effect = stateFromStoresObject.useEffect(() => {
    if (memo.length > 0) {
      const CollectiblesShopManager = lib(flag[6]).CollectiblesShopManager;
      const products = CollectiblesShopManager.requestProducts(tmp);
    }
  }, items1);
  const items2 = [memo1];
  const items3 = [memo];
  stateFromStoresObject = _require(flag[7]).useStateFromStoresObject(items2, () => {
    const obj = {};
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = memo1;
      let productsForSku = memo1.getProductsForSku(nextResult);
      let first;
      if (productsForSku != null) {
        first = productsForSku[0];
      }
      obj[nextResult] = first;
      continue;
    }
    return obj;
  }, items3);
  const obj3 = _require(flag[7]);
  const items4 = [memo1];
  const items5 = [memo];
  stateFromStoresObject1 = _require(flag[7]).useStateFromStoresObject(items4, () => {
    const obj = {};
    for (const item10006 of memo) {
      let tmp = memo1;
      obj[item10006] = memo1.getFetchStateForSku(item10006);
      continue;
    }
    return obj;
  }, items5);
  const items6 = [memo, stateFromStoresObject, flag];
  memo1 = stateFromStoresObject.useMemo(() => {
    const obj = {};
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = flag;
      let str = "";
      if (flag) {
        let tmp5 = stateFromStoresObject;
        let tmp6 = nextResult;
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
  memo2 = stateFromStoresObject.useMemo(() => {
    const values = Object.values(memo1);
    const items = [...new Set(values.filter((arg0) => "" !== arg0))];
    return items;
  }, items7);
  const items8 = [flag, memo2.join(",")];
  const effect1 = stateFromStoresObject.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = memo2.length > 0;
    }
    if (tmp) {
      const CollectiblesShopManager = lib(flag[6]).CollectiblesShopManager;
      const collections = CollectiblesShopManager.requestCollections(memo2);
    }
  }, items8);
  const obj4 = _require(flag[7]);
  const items9 = [stateFromStoresObject1];
  const items10 = [memo2];
  stateFromStoresObject2 = _require(flag[7]).useStateFromStoresObject(items9, () => {
    const obj = {};
    for (const item10006 of memo2) {
      let tmp = stateFromStoresObject1;
      obj[item10006] = stateFromStoresObject1.getCollection(item10006);
      continue;
    }
    return obj;
  }, items10);
  const obj6 = _require(flag[7]);
  const items11 = [stateFromStoresObject1];
  const items12 = [memo2];
  stateFromStoresObject3 = _require(flag[7]).useStateFromStoresObject(items11, () => {
    const obj = {};
    for (const item10006 of memo2) {
      let tmp = stateFromStoresObject1;
      obj[item10006] = stateFromStoresObject1.getFetchState(item10006);
      continue;
    }
    return obj;
  }, items12);
  let tmp8 = useAbsentIds(stateFromStoresObject1);
  useAbsentIds = tmp8;
  let tmp9 = useAbsentIds(stateFromStoresObject3);
  closure_10 = tmp9;
  const items13 = [memo, stateFromStoresObject, stateFromStoresObject1, memo1, stateFromStoresObject2, stateFromStoresObject3, tmp8, tmp9, flag];
  return stateFromStoresObject.useMemo(() => {
    let obj = {};
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp4 = stateFromStoresObject;
      let tmp5 = stateFromStoresObject[nextResult];
      let tmp6 = stateFromStoresObject1;
      let tmp7 = stateFromStoresObject1[nextResult];
      let tmp8 = memo1;
      let str = memo1[nextResult];
      if (str == null) {
        str = "";
      }
      let tmp9 = str;
      let tmp10 = stateFromStoresObject2;
      let tmp11 = stateFromStoresObject2[str];
      if (tmp11 == null) {
        tmp11 = null;
      }
      let tmp12 = tmp11;
      let tmp13 = stateFromStoresObject3;
      let tmp14 = str;
      let tmp15 = stateFromStoresObject3[tmp9];
      let tmp16 = tmp5;
      let tmp17 = null;
      if (null != tmp5) {
        let tmp18 = stateFromStoresObject2;
        let tmp19 = tmp5;
        let result = stateFromStoresObject2.fromStorefrontProductRecord(tmp5);
        if (result == null) {
          result = null;
        }
        tmp17 = result;
      }
      let tmp21 = tmp17;
      let result1 = null;
      let tmp22 = flag;
      if (flag) {
        let tmp24 = tmp11;
        result1 = null;
        if (null != tmp12) {
          let tmp25 = memo2;
          let tmp26 = tmp11;
          result1 = memo2.fromStorefrontCollectionRecord(tmp12);
        }
      }
      let tmp28 = nextResult;
      obj = { product: null, category: null, state: null };
      let tmp29 = tmp17;
      obj[0] = tmp21;
      obj[1] = result1;
      obj = { productFetchState: null, productAbsent: null, collectionFetchState: null, collectionAbsent: null, needsCategory: null, collectionId: null, product: null, category: null };
      let tmp31 = tmp7;
      obj[0] = tmp7;
      let tmp32 = set;
      let tmp27 = result1;
      let tmp30 = stateFromStoresObject3;
      obj[1] = set.has(tmp3);
      let tmp33 = tmp15;
      obj[2] = tmp15;
      let tmp34 = str;
      let hasItem = "" !== tmp9;
      if (hasItem) {
        let tmp36 = set2;
        let tmp37 = str;
        hasItem = set2.has(tmp9);
      }
      obj[3] = hasItem;
      obj[4] = tmp22;
      let tmp38 = str;
      obj[5] = tmp9;
      let tmp39 = tmp17;
      obj[6] = tmp21;
      let tmp40 = result1;
      obj[7] = tmp27;
      obj[2] = tmp30(obj);
      obj[tmp3] = obj;
      continue;
    }
    return obj;
  }, items13);
};