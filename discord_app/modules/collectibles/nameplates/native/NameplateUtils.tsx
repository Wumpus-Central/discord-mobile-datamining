// discord_app/modules/collectibles/nameplates/native/NameplateUtils.tsx
const result = require("set").fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export const getNameplateAssets = function getNameplateAssets(nameplate) {
  const skuId = nameplate.skuId;
  let obj = { staticImageUrl: null, animatedImageUrl: null };
  obj = { skuId, assetFormat: require("../../utils/CollectiblesAssetUtils.tsx") /* parseSkuIdFromServerData */.CollectiblesItemAssetFormat.STATIC };
  obj[0] = require("../../utils/CollectiblesAssetUtils.tsx") /* parseSkuIdFromServerData */.getCollectiblesItemAssetUrl(obj);
  const obj2 = require("../../utils/CollectiblesAssetUtils.tsx") /* parseSkuIdFromServerData */;
  obj = { skuId, assetFormat: require("../../utils/CollectiblesAssetUtils.tsx") /* parseSkuIdFromServerData */.CollectiblesItemAssetFormat.ANIMATED };
  obj[1] = require("../../utils/CollectiblesAssetUtils.tsx") /* parseSkuIdFromServerData */.getCollectiblesItemAssetUrl(obj);
  return obj;
};