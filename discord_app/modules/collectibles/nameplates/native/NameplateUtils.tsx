// discord_app/modules/collectibles/nameplates/native/NameplateUtils.tsx
import CollectiblesAssetUtils from "../../utils/CollectiblesAssetUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export const getNameplateAssets = function getNameplateAssets(nameplate) {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  const skuId = nameplate.skuId;
  const obj = {
    staticImageUrl: obj2.getCollectiblesItemAssetUrl(obj3),
    animatedImageUrl: obj4.getCollectiblesItemAssetUrl(obj5),
  };
  obj2 = CollectiblesAssetUtils;
  obj3 = { skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC };
  obj4 = CollectiblesAssetUtils;
  obj5 = { skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.ANIMATED };
  return obj;
};
