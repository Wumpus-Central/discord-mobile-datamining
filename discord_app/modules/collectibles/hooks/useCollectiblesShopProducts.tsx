// discord_app/modules/collectibles/hooks/useCollectiblesShopProducts.tsx
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import StorefrontProductActionCreators from "../../storefront/StorefrontProductActionCreators.tsx";
import CollectiblesShopManager2 from "../CollectiblesShopManager.tsx";
import StorefrontCollectionActionCreators from "../../storefront/StorefrontCollectionActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import StorefrontCollectionStore from "../../storefront/StorefrontCollectionStore.tsx";
import StorefrontProductStore from "../../storefront/StorefrontProductStore.tsx";
import CollectiblesCategoryRecord from "../records/CollectiblesCategoryRecord.tsx";
import CollectiblesProductRecord from "../records/CollectiblesProductRecord.tsx";

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
function useAbsentIds(arg0) {
  const tmp = _slicedToArray(
    noop.useState(() => new Set()),
    2,
  );
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
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesShopProducts.tsx");

export const useFetchResolvedAbsent = function useFetchResolvedAbsent(id, arg1) {
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
};
export const useCollectiblesShopProduct = function useCollectiblesShopProduct(skuId, arg1) {
  _require = skuId;
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
  let str;
  let collection;
  let fetchState2;
  let memo;
  let memo1;
  closure_13 = undefined;
  closure_14 = undefined;
  let items = [skuId, flag3];
  const effect = flag3.useEffect(() => {
    if (flag3) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const items = [closure_0];
      const products = CollectiblesShopManager.requestProducts(items);
    }
  }, items);
  let items1 = [flag5];
  const items2 = [skuId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items1,
    () => ({
      products: StorefrontProductStore.getProductsForSku(closure_0),
      fetchState: StorefrontProductStore.getFetchStateForSku(closure_0),
    }),
    items2,
  );
  ({ products, fetchState } = stateFromStoresObject);
  let first;
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
  const effect1 = obj2.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = "" !== str;
    }
    if (tmp) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const items = [str];
      const obj = { includeUnpublished: flag4 };
      const collections = CollectiblesShopManager.requestCollections(items, obj);
    }
  }, items3);
  let obj3 = require("initialize");
  const items4 = [flag4];
  const items5 = [str];
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(
    items4,
    () => ({
      collection: StorefrontCollectionStore.getCollection(str),
      fetchState: StorefrontCollectionStore.getFetchState(str),
    }),
    items5,
  );
  collection = stateFromStoresObject1.collection;
  fetchState2 = stateFromStoresObject1.fetchState;
  const items6 = [first, flag5, skuId];
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
  const obj4 = { id: skuId, sawFetch: false };
  const tmp10 = flag2;
  const tmp2Result = require("initialize");
  [tmp12, tmp13] = flag2(flag3.useState({ id: skuId, sawFetch: false }), 2);
  let flag6 = tmp12.sawFetch;
  if (tmp12.id !== skuId) {
    const obj5 = { id: skuId, sawFetch: null != fetchState };
    tmp13(obj5);
    flag6 = tmp16;
  } else {
    if (!tmp14) {
      const obj6 = { id: skuId, sawFetch: true };
      tmp13(obj6);
      flag6 = true;
    }
    tmp14 = null == fetchState || tmp12.sawFetch;
  }
  closure_13 = tmp18;
  let str3 = "";
  if (flag) {
    str3 = str;
  }
  const tmp11 = flag2(flag3.useState({ id: skuId, sawFetch: false }), 2);
  [tmp20, tmp21] = tmp10(flag3.useState({ id: str3, sawFetch: false }), 2);
  let flag7 = tmp20.sawFetch;
  if (tmp20.id !== str3) {
    const obj7 = { id: str3, sawFetch: null != fetchState2 };
    tmp21(obj7);
    flag7 = tmp24;
  } else {
    if (!tmp22) {
      const obj8 = { id: str3, sawFetch: true };
      tmp21(obj8);
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
  const memo2 = obj2.useMemo(() => {
    str = "error";
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
  const items10 = [skuId, flag, str, flag4];
  const tmp10Result = tmp10(flag3.useState({ id: str3, sawFetch: false }), 2);
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
        tmp4 = "" !== str;
      }
      if (tmp4) {
        const obj3 = {
          collectionIds: null,
          includeUnpublishedCollections: null,
          includeUnpublishedProducts: null,
          ignoreCache: true,
        };
        const items1 = [str];
        obj3.collectionIds = items1;
        obj3.includeUnpublishedCollections = flag4;
        obj3.includeUnpublishedProducts = flag4;
        const result1 = StorefrontCollectionActionCreators.maybeFetchCollectionsWithProducts(obj3);
        const tmpResult = StorefrontCollectionActionCreators;
      }
    }, items10),
  };
};
export const useCollectiblesShopProducts = function useCollectiblesShopProducts(skuIds, arg1) {
  _require = skuIds;
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
  let stateFromStoresObject1;
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
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items2,
    () => {
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
    },
    items3,
  );
  let obj3 = require("initialize");
  const items4 = [stateFromStoresObject1];
  const items5 = [memo];
  stateFromStoresObject1 = require("initialize").useStateFromStoresObject(
    items4,
    () => {
      const obj = {};
      for (const item10006 of memo) {
        obj[item10006] = StorefrontProductStore.getFetchStateForSku(item10006);
        continue;
      }
      return obj;
    },
    items5,
  );
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
  const stateFromStoresObject2 = require("initialize").useStateFromStoresObject(
    items9,
    () => {
      const obj = {};
      for (const item10006 of memo2) {
        obj[item10006] = StorefrontCollectionStore.getCollection(item10006);
        continue;
      }
      return obj;
    },
    items10,
  );
  const obj6 = require("initialize");
  const items11 = [stateFromStoresObject];
  const items12 = [memo2];
  const stateFromStoresObject3 = require("initialize").useStateFromStoresObject(
    items11,
    () => {
      const obj = {};
      for (const item10006 of memo2) {
        obj[item10006] = StorefrontCollectionStore.getFetchState(item10006);
        continue;
      }
      return obj;
    },
    items12,
  );
  const tmp8 = stateFromStoresObject3(stateFromStoresObject1);
  let tmp9 = stateFromStoresObject3(stateFromStoresObject3);
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
      let obj4 = {
        productFetchState: null,
        productAbsent: null,
        collectionFetchState: null,
        collectionAbsent: null,
        needsCategory: null,
        collectionId: null,
        product: null,
        category: null,
      };
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
