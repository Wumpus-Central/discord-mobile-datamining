// discord_app/modules/collectibles/nameplates/native/NameplateUtils.tsx
import CollectiblesAssetUtils from "../../utils/CollectiblesAssetUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export const getNameplateAssets = function getNameplateAssets(nameplate) {
  const skuId = nameplate.skuId;
  const obj = { staticImageUrl: null, animatedImageUrl: null };
  const obj2 = CollectiblesAssetUtils;
  obj.staticImageUrl = obj2.getCollectiblesItemAssetUrl({
    skuId,
    assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC,
  });
  const obj3 = { skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC };
  const obj4 = CollectiblesAssetUtils;
  obj.animatedImageUrl = obj4.getCollectiblesItemAssetUrl({
    skuId,
    assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.ANIMATED,
  });
  return obj;
};
