// discord_app/modules/collectibles/hooks/useCollectiblesShopProducts.tsx
import closure_2 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../storefront/StorefrontCollectionStore.tsx";
import closure_5 from "../../storefront/StorefrontProductStore.tsx";
import closure_6 from "../records/CollectiblesCategoryRecord.tsx";
import closure_7 from "../records/CollectiblesProductRecord.tsx";

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
  const tmp = joined(
    React.useState(() => new Set()),
    2,
  );
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
    let items = [];
    HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(first, 0));
    set = new Set(items);
  }
  if (someResult) {
    tmp[1](set);
  }
  const entries1 = Object.entries(arg0);
  const found1 = entries1.filter((arg0) => {
    [tmp, tmp2] = arg0;
    let hasItem = "" !== tmp;
    if (hasItem) {
      hasItem = null == tmp2;
    }
    if (hasItem) {
      hasItem = set.has(tmp);
    }
    return hasItem;
  });
  const mapped1 = found1.map((arg0) => {
    [tmp] = arg0;
    return tmp;
  });
  joined = mapped1.join(",");
  const items1 = [joined];
  return React.useMemo(() => {
    if ("" === joined) {
      let items = [];
    } else {
      items = joined.split(",");
    }
    return new Set(items);
  }, items1);
}
let result = require("set").fileFinishedImporting("modules/collectibles/hooks/useCollectiblesShopProducts.tsx");

export const useFetchResolvedAbsent = function useFetchResolvedAbsent(id) {
  let obj = { id, sawFetch: false };
  [tmp2, tmp3] = callback(React.useState(obj), 2);
  let flag = tmp2.sawFetch;
  if (tmp2.id !== id) {
    obj = { id: null, sawFetch: null };
    obj[0] = id;
    obj[1] = null != arg1;
    tmp3(obj);
    flag = tmp8;
  } else {
    if (!tmp5) {
      obj = { id: null, sawFetch: true };
      obj[0] = id;
      tmp3(obj);
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
};
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
  let flag4 = obj.includeUnpublished;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = obj.flattenVariants;
  if (flag5 === undefined) {
    flag5 = false;
  }
  fetchState = undefined;
  let first;
  let str;
  let collection;
  let fetchState2;
  let memo;
  let memo1;
  closure_13 = undefined;
  closure_14 = undefined;
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
  let items1 = [flag5];
  const items2 = [skuId];
  const stateFromStoresObject = obj2.useStateFromStoresObject(
    items1,
    () => ({ products: flag5.getProductsForSku(closure_0), fetchState: flag5.getFetchStateForSku(closure_0) }),
    items2,
  );
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
  const items3 = [flag, str, flag4];
  const effect1 = obj1.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = "" !== str;
    }
    if (tmp) {
      const CollectiblesShopManager = skuId(flag[6]).CollectiblesShopManager;
      const items = [str];
      const obj = { includeUnpublished: null };
      obj[0] = flag4;
      const collections = CollectiblesShopManager.requestCollections(items, obj);
    }
  }, items3);
  const items4 = [flag4];
  const items5 = [str];
  const stateFromStoresObject1 = _require(flag[7]).useStateFromStoresObject(
    items4,
    () => ({ collection: flag4.getCollection(str), fetchState: flag4.getFetchState(str) }),
    items5,
  );
  collection = stateFromStoresObject1.collection;
  fetchState2 = stateFromStoresObject1.fetchState;
  const items6 = [first, flag5, skuId];
  memo = obj1.useMemo(() => {
    let tmp2 = null;
    if (null != first) {
      let tmp5;
      if (flag5) {
        tmp5 = closure_0;
      }
      const obj = { flattenVariantSkuId: null };
      obj[0] = tmp5;
      let result = first.fromStorefrontProductRecord(tmp, obj);
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
        result = fetchState.fromStorefrontCollectionRecord(tmp2);
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
  let flag6 = tmp12.sawFetch;
  if (tmp12.id !== skuId) {
    obj = { id: null, sawFetch: null };
    obj[0] = skuId;
    obj[1] = null != fetchState;
    tmp13(obj);
    flag6 = tmp16;
  } else {
    if (!tmp14) {
      obj1 = { id: null, sawFetch: true };
      obj1[0] = skuId;
      tmp13(obj1);
      flag6 = true;
    }
    tmp14 = null == fetchState || tmp12.sawFetch;
  }
  closure_13 = tmp18;
  let str3 = "";
  if (flag) {
    str3 = str;
  }
  const tmp11 = flag2(obj1.useState(obj), 2);
  [tmp20, tmp21] = tmp10(obj1.useState({ id: str3, sawFetch: false }), 2);
  let flag7 = tmp20.sawFetch;
  if (tmp20.id !== str3) {
    obj2 = { id: null, sawFetch: null };
    obj2[0] = str3;
    obj2[1] = null != fetchState2;
    tmp21(obj2);
    flag7 = tmp24;
  } else {
    if (!tmp22) {
      const obj3 = { id: null, sawFetch: true };
      obj3[0] = str3;
      tmp21(obj3);
      flag7 = true;
    }
    tmp22 = null == fetchState2 || tmp20.sawFetch;
  }
  closure_14 = tmp26;
  const items8 = [
    fetchState,
    "" !== skuId && null == fetchState && flag6,
    fetchState2,
    "" !== str3 && null == fetchState2 && flag7,
    flag,
    str,
    memo,
    memo1,
  ];
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
  const items10 = [skuId, flag, str, flag4];
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
        obj = {
          collectionIds: null,
          includeUnpublishedCollections: null,
          includeUnpublishedProducts: null,
          ignoreCache: true,
        };
        const items1 = [str];
        obj[0] = items1;
        obj[1] = flag4;
        obj[2] = flag4;
        const result1 = skuId(flag[10]).maybeFetchCollectionsWithProducts(obj);
        const tmpResult = skuId(flag[10]);
      }
    }, items10),
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
  let flag2 = obj.flattenVariants;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let memo;
  let stateFromStoresObject;
  let stateFromStoresObject1;
  let memo1;
  let memo2;
  let stateFromStoresObject2;
  let stateFromStoresObject3;
  closure_10 = undefined;
  closure_11 = undefined;
  let items = [arg0];
  memo = memo.useMemo(() => lib.filter((arg0) => "" !== arg0), items);
  const items1 = [memo.join(",")];
  const effect = memo.useEffect(() => {
    if (memo.length > 0) {
      const CollectiblesShopManager = lib(flag[6]).CollectiblesShopManager;
      const products = CollectiblesShopManager.requestProducts(tmp);
    }
  }, items1);
  const items2 = [stateFromStoresObject1];
  const items3 = [memo];
  stateFromStoresObject = _require(flag[7]).useStateFromStoresObject(
    items2,
    () => {
      const obj = {};
      const iter = memo[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = stateFromStoresObject1;
        let productsForSku = stateFromStoresObject1.getProductsForSku(nextResult);
        let first;
        if (productsForSku != null) {
          first = productsForSku[0];
        }
        obj[nextResult] = first;
        continue;
      }
      return obj;
    },
    items3,
  );
  const obj3 = _require(flag[7]);
  const items4 = [stateFromStoresObject1];
  const items5 = [memo];
  stateFromStoresObject1 = _require(flag[7]).useStateFromStoresObject(
    items4,
    () => {
      const obj = {};
      for (const item10006 of memo) {
        let tmp = stateFromStoresObject1;
        obj[item10006] = stateFromStoresObject1.getFetchStateForSku(item10006);
        continue;
      }
      return obj;
    },
    items5,
  );
  const items6 = [memo, stateFromStoresObject, flag];
  memo1 = memo.useMemo(() => {
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
  memo2 = memo.useMemo(() => {
    const values = Object.values(memo1);
    const items = [...new Set(values.filter((arg0) => "" !== arg0))];
    return items;
  }, items7);
  const items8 = [flag, memo2.join(",")];
  const effect1 = memo.useEffect(() => {
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
  const items9 = [stateFromStoresObject];
  const items10 = [memo2];
  stateFromStoresObject2 = _require(flag[7]).useStateFromStoresObject(
    items9,
    () => {
      const obj = {};
      for (const item10006 of memo2) {
        let tmp = stateFromStoresObject;
        obj[item10006] = stateFromStoresObject.getCollection(item10006);
        continue;
      }
      return obj;
    },
    items10,
  );
  const obj6 = _require(flag[7]);
  const items11 = [stateFromStoresObject];
  const items12 = [memo2];
  stateFromStoresObject3 = _require(flag[7]).useStateFromStoresObject(
    items11,
    () => {
      const obj = {};
      for (const item10006 of memo2) {
        let tmp = stateFromStoresObject;
        obj[item10006] = stateFromStoresObject.getFetchState(item10006);
        continue;
      }
      return obj;
    },
    items12,
  );
  let tmp8 = stateFromStoresObject3(stateFromStoresObject1);
  closure_10 = tmp8;
  let tmp9 = stateFromStoresObject3(stateFromStoresObject3);
  closure_11 = tmp9;
  const items13 = [
    memo,
    stateFromStoresObject,
    stateFromStoresObject1,
    memo1,
    stateFromStoresObject2,
    stateFromStoresObject3,
    tmp8,
    tmp9,
    flag,
    flag2,
  ];
  return memo.useMemo(() => {
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
        let tmp19 = tmp5;
        let tmp20 = flag2;
        let tmp21;
        let tmp18 = memo2;
        if (flag2) {
          tmp21 = nextResult;
        }
        obj = { flattenVariantSkuId: null };
        obj[0] = tmp21;
        let result = memo2.fromStorefrontProductRecord(tmp5, obj);
        if (result == null) {
          result = null;
        }
        tmp17 = result;
      }
      let tmp23 = tmp17;
      let result1 = null;
      let tmp24 = flag;
      if (flag) {
        let tmp26 = tmp11;
        result1 = null;
        if (null != tmp12) {
          let tmp27 = memo1;
          let tmp28 = tmp11;
          result1 = memo1.fromStorefrontCollectionRecord(tmp12);
        }
      }
      let tmp30 = nextResult;
      obj = { product: null, category: null, state: null };
      let tmp31 = tmp17;
      obj[0] = tmp23;
      obj[1] = result1;
      obj1 = {
        productFetchState: null,
        productAbsent: null,
        collectionFetchState: null,
        collectionAbsent: null,
        needsCategory: null,
        collectionId: null,
        product: null,
        category: null,
      };
      let tmp33 = tmp7;
      obj1[0] = tmp7;
      let tmp34 = set;
      let tmp29 = result1;
      let tmp32 = stateFromStoresObject2;
      obj1[1] = set.has(tmp3);
      let tmp35 = tmp15;
      obj1[2] = tmp15;
      let tmp36 = str;
      let hasItem = "" !== tmp9;
      if (hasItem) {
        let tmp38 = set2;
        let tmp39 = str;
        hasItem = set2.has(tmp9);
      }
      obj1[3] = hasItem;
      obj1[4] = tmp24;
      let tmp40 = str;
      obj1[5] = tmp9;
      let tmp41 = tmp17;
      obj1[6] = tmp23;
      let tmp42 = result1;
      obj1[7] = tmp29;
      obj[2] = tmp32(obj1);
      obj[tmp3] = obj;
      continue;
    }
    return obj;
  }, items13);
};
