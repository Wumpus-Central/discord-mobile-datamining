// === Module 8819: NameplateUtils ===

// Module 8819 (NameplateUtils)
import CollectiblesAssetUtils from "CollectiblesAssetUtils" /* 1883 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export const getNameplateAssets = function getNameplateAssets(nameplate) {
  const skuId = nameplate.skuId;
  let obj = { staticImageUrl: null, animatedImageUrl: null };
  obj = { skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC };
  obj.staticImageUrl = CollectiblesAssetUtils.getCollectiblesItemAssetUrl(obj);
  obj = { skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.ANIMATED };
  obj.animatedImageUrl = CollectiblesAssetUtils.getCollectiblesItemAssetUrl(obj);
  return obj;
};