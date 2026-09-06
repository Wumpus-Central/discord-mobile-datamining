// discord_app/modules/game_profile/hooks/useGameProfileShopCollection.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import GameProfileHttpUtils from "../GameProfileHttpUtils.tsx";
import GameProfileStore from "../GameProfileStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useEffect = _mod19.useEffect;
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileShopCollection.tsx");

export const useGameProfileShopCollection = function useGameProfileShopCollection(collectionId) {
  _require = collectionId;
  const items = [GameProfileStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    let result = null != closure_0;
    if (result) {
      result = GameProfileStore.hasShopCollectionBeenFetched(tmp);
    }
    const obj = { hasFetched: result, skuIds: null };
    let shopCollectionSkuIds;
    if (null != closure_0) {
      shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(tmp);
    }
    obj.skuIds = shopCollectionSkuIds;
    return obj;
  });
  hasFetched = stateFromStoresObject.hasFetched;
  let skuIds = stateFromStoresObject.skuIds;
  const items1 = [collectionId, hasFetched];
  useEffect(() => {
    let result = null == closure_0 || hasFetched;
    if (!result) {
      result = GameProfileStore.isShopCollectionFetching(tmp);
    }
    if (!result) {
      const shopCollection = GameProfileHttpUtils.getShopCollection(tmp);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = [];
  }
  return skuIds;
};
