// === Module 9222: getNameplateAssets ===

// Module 9222 (getNameplateAssets)
import obj132 from "obj132" /* 2 */;
import parseSkuIdFromServerData from "parseSkuIdFromServerData" /* 1901 */;

const result = obj132.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export const getNameplateAssets = function getNameplateAssets(nameplate) {
  const skuId = nameplate.skuId;
  let obj = { skuId, assetFormat: parseSkuIdFromServerData.CollectiblesItemAssetFormat.STATIC };
  obj[0] = parseSkuIdFromServerData.getCollectiblesItemAssetUrl(obj);
  obj = { skuId, assetFormat: parseSkuIdFromServerData.CollectiblesItemAssetFormat.ANIMATED };
  obj[1] = parseSkuIdFromServerData.getCollectiblesItemAssetUrl(obj);
  return obj;
};