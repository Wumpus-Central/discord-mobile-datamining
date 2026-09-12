// === Module 8998: useGameProfileShopCollection ===

// Module 8998 (useGameProfileShopCollection)
import GameProfileHttpUtils from "GameProfileHttpUtils" /* 8886 */;
import noop from "module_19" /* 19 */;
import GameProfileStore from "GameProfileStore" /* 8805 */;
import size from "module_2" /* 2 */;

({ useEffect: c2, useMemo: c3 } = noop);
let closure_5 = [];
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileShopCollection.tsx");

export const useGameProfileShopCollectionState = function useGameProfileShopCollectionState(arg0) {
  _require = arg0;
  const items = [GameProfileStore];
  const isFetching = require("initialize").useStateFromStoresObject(items, () => {
    let result = null != skuIds;
    if (result) {
      result = GameProfileStore.hasShopCollectionBeenFetched(skuIds);
    }
    const obj = { hasFetched: result, isFetching: null, skuIds: null };
    let result1 = null != skuIds;
    if (result1) {
      result1 = GameProfileStore.isShopCollectionFetching(skuIds);
    }
    obj.isFetching = result1;
    let shopCollectionSkuIds;
    if (null != skuIds) {
      shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(skuIds);
    }
    obj.skuIds = shopCollectionSkuIds;
    return obj;
  });
  hasFetched = isFetching.hasFetched;
  let skuIds = isFetching.skuIds;
  const items1 = [arg0, hasFetched];
  closure_2(() => {
    let result = null == skuIds || collectiblesShopProducts;
    if (!result) {
      result = GameProfileStore.isShopCollectionFetching(skuIds);
    }
    if (!result) {
      const shopCollection = GameProfileHttpUtils.getShopCollection(skuIds);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = closure_5;
  }
  return { skuIds, hasFetched, isFetching: isFetching.isFetching };
};
export const useGameProfileShopCollection = function useGameProfileShopCollection(arg0) {
  _require = arg0;
  const items = [GameProfileStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    let result = null != skuIds;
    if (result) {
      result = GameProfileStore.hasShopCollectionBeenFetched(skuIds);
    }
    const obj = { hasFetched: result, isFetching: null, skuIds: null };
    let result1 = null != skuIds;
    if (result1) {
      result1 = GameProfileStore.isShopCollectionFetching(skuIds);
    }
    obj.isFetching = result1;
    let shopCollectionSkuIds;
    if (null != skuIds) {
      shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(skuIds);
    }
    obj.skuIds = shopCollectionSkuIds;
    return obj;
  });
  hasFetched = stateFromStoresObject.hasFetched;
  ({ isFetching, skuIds } = stateFromStoresObject);
  const items1 = [arg0, hasFetched];
  closure_2(() => {
    let result = null == skuIds || collectiblesShopProducts;
    if (!result) {
      result = GameProfileStore.isShopCollectionFetching(skuIds);
    }
    if (!result) {
      const shopCollection = GameProfileHttpUtils.getShopCollection(skuIds);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = closure_5;
  }
  return skuIds;
};
export const useGameProfileShopCollectionProducts = function useGameProfileShopCollectionProducts(collectionId) {
  let skuIds = collectionId;
  let obj = skuIds(collectiblesShopProducts[2]);
  const items = [GameProfileStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let result = null != skuIds;
    if (result) {
      result = GameProfileStore.hasShopCollectionBeenFetched(skuIds);
    }
    const obj = { hasFetched: result, isFetching: null, skuIds: null };
    let result1 = null != skuIds;
    if (result1) {
      result1 = GameProfileStore.isShopCollectionFetching(skuIds);
    }
    obj.isFetching = result1;
    let shopCollectionSkuIds;
    if (null != skuIds) {
      shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(skuIds);
    }
    obj.skuIds = shopCollectionSkuIds;
    return obj;
  });
  const hasFetched = stateFromStoresObject.hasFetched;
  collectiblesShopProducts = hasFetched;
  skuIds = stateFromStoresObject.skuIds;
  const items1 = [collectionId, hasFetched];
  closure_2(() => {
    let result = null == skuIds || collectiblesShopProducts;
    if (!result) {
      result = GameProfileStore.isShopCollectionFetching(skuIds);
    }
    if (!result) {
      const shopCollection = GameProfileHttpUtils.getShopCollection(skuIds);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = closure_5;
  }
  collectiblesShopProducts = skuIds(collectiblesShopProducts[4]).useCollectiblesShopProducts(skuIds, { flattenVariants: true });
  const items2 = [skuIds, collectiblesShopProducts];
  const tmpResult = skuIds(collectiblesShopProducts[4]);
  obj = {
    products: closure_3(() => {
      const mapped = skuIds.map((item) => {
        let product;
        if (collectiblesShopProducts[item] != null) {
          product = tmp.product;
        }
        return product;
      });
      return mapped.filter((item) => null != item);
    }, items2),
    isLoading: null
  };
  let tmp8 = null != collectionId;
  if (tmp8) {
    let isFetching = !hasFetched;
    if (hasFetched) {
      isFetching = stateFromStoresObject.isFetching;
    }
    if (!isFetching) {
      isFetching = skuIds.length > 0 && tmp7;
      const tmp9 = skuIds.length > 0 && tmp7;
    }
    tmp8 = isFetching;
  }
  obj.isLoading = tmp8;
  return obj;
};