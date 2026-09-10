// discord_app/modules/game_profile/hooks/useGameProfileShopCollection.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import GameProfileHttpUtils from "../GameProfileHttpUtils.tsx";
import GameProfileStore from "../GameProfileStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useEffect = _mod19.useEffect;
let closure_4 = [];
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileShopCollection.tsx");

export const useGameProfileShopCollectionState = function useGameProfileShopCollectionState(arg0) {
  _require = arg0;
  const items = [GameProfileStore];
  const isFetching = require("initialize").useStateFromStoresObject(items, () => {
    let result = null != closure_0;
    if (result) {
      result = GameProfileStore.hasShopCollectionBeenFetched(closure_0);
    }
    const obj = { hasFetched: result, isFetching: null, skuIds: null };
    let result1 = null != closure_0;
    if (result1) {
      result1 = GameProfileStore.isShopCollectionFetching(closure_0);
    }
    obj.isFetching = result1;
    let shopCollectionSkuIds;
    if (null != closure_0) {
      shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(closure_0);
    }
    obj.skuIds = shopCollectionSkuIds;
    return obj;
  });
  hasFetched = isFetching.hasFetched;
  let skuIds = isFetching.skuIds;
  const items1 = [arg0, hasFetched];
  useEffect(() => {
    let result = null == closure_0 || hasFetched;
    if (!result) {
      result = GameProfileStore.isShopCollectionFetching(closure_0);
    }
    if (!result) {
      const shopCollection = GameProfileHttpUtils.getShopCollection(closure_0);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = closure_4;
  }
  return { skuIds, hasFetched, isFetching: isFetching.isFetching };
};
export const useGameProfileShopCollection = function useGameProfileShopCollection(collectionId) {
  _require = collectionId;
  const items = [GameProfileStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    let result = null != closure_0;
    if (result) {
      result = GameProfileStore.hasShopCollectionBeenFetched(closure_0);
    }
    const obj = { hasFetched: result, isFetching: null, skuIds: null };
    let result1 = null != closure_0;
    if (result1) {
      result1 = GameProfileStore.isShopCollectionFetching(closure_0);
    }
    obj.isFetching = result1;
    let shopCollectionSkuIds;
    if (null != closure_0) {
      shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(closure_0);
    }
    obj.skuIds = shopCollectionSkuIds;
    return obj;
  });
  hasFetched = stateFromStoresObject.hasFetched;
  ({ isFetching, skuIds } = stateFromStoresObject);
  const items1 = [collectionId, hasFetched];
  useEffect(() => {
    let result = null == closure_0 || hasFetched;
    if (!result) {
      result = GameProfileStore.isShopCollectionFetching(closure_0);
    }
    if (!result) {
      const shopCollection = GameProfileHttpUtils.getShopCollection(closure_0);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = closure_4;
  }
  return skuIds;
};
