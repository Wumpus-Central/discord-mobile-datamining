// === Module 12597: useGameProfileShopCollection ===

// Module 12597 (useGameProfileShopCollection)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import closure_3 from "getSimilarGames" /* 8771 */;

const useEffect = noop.useEffect;
let result = set.fileFinishedImporting("modules/game_profile/hooks/useGameProfileShopCollection.tsx");

export const useGameProfileShopCollection = function useGameProfileShopCollection(collectionId) {
  const _require = collectionId;
  const items = [closure_3];
  const stateFromStoresObject = _require(hasFetched[2]).useStateFromStoresObject(items, () => {
    let result = null != closure_0;
    if (result) {
      result = closure_1_3.hasShopCollectionBeenFetched(tmp);
    }
    const obj = { hasFetched: result, skuIds: null };
    let shopCollectionSkuIds;
    if (null != closure_0) {
      shopCollectionSkuIds = closure_1_3.getShopCollectionSkuIds(tmp);
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
      result = closure_1_3.isShopCollectionFetching(tmp);
    }
    if (!result) {
      const shopCollection = collectionId(hasFetched[3]).getShopCollection(tmp);
      const obj = collectionId(hasFetched[3]);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = [];
  }
  return skuIds;
};