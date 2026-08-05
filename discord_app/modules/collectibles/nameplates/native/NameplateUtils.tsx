// discord_app/modules/collectibles/nameplates/native/NameplateUtils.tsx
import { parseSkuIdFromServerData } from "../../utils/CollectiblesAssetUtils.tsx";
const result = require("set").fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export const getNameplateAssets = function getNameplateAssets(nameplate) {
  const skuId = nameplate.skuId;
  let obj = { staticImageUrl: null, animatedImageUrl: null };
  obj = { skuId, assetFormat: parseSkuIdFromServerData /* parseSkuIdFromServerData */.CollectiblesItemAssetFormat.STATIC };
  obj[0] = parseSkuIdFromServerData /* parseSkuIdFromServerData */.getCollectiblesItemAssetUrl(obj);
  const obj2 = parseSkuIdFromServerData /* parseSkuIdFromServerData */;
  obj = { skuId, assetFormat: parseSkuIdFromServerData /* parseSkuIdFromServerData */.CollectiblesItemAssetFormat.ANIMATED };
  obj[1] = parseSkuIdFromServerData /* parseSkuIdFromServerData */.getCollectiblesItemAssetUrl(obj);
  return obj;
};