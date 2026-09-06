// discord_app/modules/collectibles/nameplates/native/NameplateUtils.tsx
import CollectiblesAssetUtils from "../../utils/CollectiblesAssetUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
