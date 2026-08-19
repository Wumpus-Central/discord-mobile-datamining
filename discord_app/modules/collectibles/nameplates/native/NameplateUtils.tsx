// discord_app/modules/collectibles/nameplates/native/NameplateUtils.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import parseSkuIdFromServerData from "../../utils/CollectiblesAssetUtils.tsx";

const result = obj132.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export const getNameplateAssets = function getNameplateAssets(nameplate) {
  const skuId = nameplate.skuId;
  let obj = { skuId, assetFormat: parseSkuIdFromServerData.CollectiblesItemAssetFormat.STATIC };
  obj[0] = parseSkuIdFromServerData.getCollectiblesItemAssetUrl(obj);
  obj = { skuId, assetFormat: parseSkuIdFromServerData.CollectiblesItemAssetFormat.ANIMATED };
  obj[1] = parseSkuIdFromServerData.getCollectiblesItemAssetUrl(obj);
  return obj;
};