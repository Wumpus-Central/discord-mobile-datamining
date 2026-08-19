// discord_app/modules/game_profile/hooks/useGameProfileShopCollection.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import noop from "../../../../_runtime/00019_noop.js";
import getSimilarGames from "../GameProfileStore.tsx";

const useEffect = noop.useEffect;
let result = obj132.fileFinishedImporting("modules/game_profile/hooks/useGameProfileShopCollection.tsx");

export const useGameProfileShopCollection = function useGameProfileShopCollection(collectionId) {
  const _require = collectionId;
  const items = [closure_3];
  const stateFromStoresObject = _require(hasFetched[2]).useStateFromStoresObject(items, () => {
    let result = null != closure_0;
    if (result) {
      result = closure_1_3.hasShopCollectionBeenFetched(closure_0);
    }
    const obj = { hasFetched: result, skuIds: null };
    let shopCollectionSkuIds;
    if (null != closure_0) {
      shopCollectionSkuIds = closure_1_3.getShopCollectionSkuIds(closure_0);
    }
    obj[1] = shopCollectionSkuIds;
    return obj;
  });
  hasFetched = stateFromStoresObject.hasFetched;
  let skuIds = stateFromStoresObject.skuIds;
  const items1 = [collectionId, hasFetched];
  useEffect(() => {
    let result = null == collectionId || hasFetched;
    if (!result) {
      result = closure_1_3.isShopCollectionFetching(collectionId);
    }
    if (!result) {
      const shopCollection = collectionId(hasFetched[3]).getShopCollection(collectionId);
      const obj = collectionId(hasFetched[3]);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = [];
  }
  return skuIds;
};