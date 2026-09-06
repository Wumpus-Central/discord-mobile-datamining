// === Module 8872: useGameProfileShopCollection ===

// Module 8872 (useGameProfileShopCollection)
import _mod19 from "module_19" /* 19 */;
import GameProfileHttpUtils from "GameProfileHttpUtils" /* 8760 */;
import GameProfileStore from "GameProfileStore" /* 8682 */;
import size from "module_2" /* 2 */;

const useEffect = _mod19.useEffect;
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileShopCollection.tsx");

export const useGameProfileShopCollection = function useGameProfileShopCollection(collectionId) {
  _require = collectionId;
  const items = [GameProfileStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    let result = null != closure_0;
    if (result) {
      result = GameProfileStore.hasShopCollectionBeenFetched(closure_0);
    }
    const obj = { hasFetched: result, skuIds: null };
    let shopCollectionSkuIds;
    if (null != closure_0) {
      shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(closure_0);
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
      result = GameProfileStore.isShopCollectionFetching(closure_0);
    }
    if (!result) {
      const shopCollection = GameProfileHttpUtils.getShopCollection(closure_0);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = [];
  }
  return skuIds;
};