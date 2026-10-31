// === Module 9515: NameplateUtils ===

// Module 9515 (NameplateUtils)
import CollectiblesAssetUtils from "CollectiblesAssetUtils" /* 1981 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export function getNameplateAssets(nameplate) {
  const skuId = nameplate.skuId;
  const obj = { staticImageUrl: null, animatedImageUrl: null };
  const obj2 = CollectiblesAssetUtils;
  obj.staticImageUrl = obj2.getCollectiblesItemAssetUrl({ skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC });
  const obj3 = { skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC };
  const obj4 = CollectiblesAssetUtils;
  obj.animatedImageUrl = obj4.getCollectiblesItemAssetUrl({ skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.ANIMATED });
  return obj;
}