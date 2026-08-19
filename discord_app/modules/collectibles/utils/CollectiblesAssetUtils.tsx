// discord_app/modules/collectibles/utils/CollectiblesAssetUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import isDiscordFrontendDevelopment from "../../../utils/GlobalUtils.tsx";
import parseSkuIdFromServerData from "mappers.tsx";

let c2 = "media/v1/collectibles-shop";
let result = obj132.fileFinishedImporting("modules/collectibles/utils/CollectiblesAssetUtils.tsx");

export const parseSkuIdFromServerData = parseSkuIdFromServerData.parseSkuIdFromServerData;
export const CollectiblesItemAssetFormat = { ANIMATED: "animated", STATIC: "static", VIDEO: "video" };
export const getCollectiblesItemAssetUrl = function getCollectiblesItemAssetUrl(arg0) {
  ({ skuId, assetFormat, assetId } = arg0);
  if (null == skuId) {
    return null;
  } else {
    let _HermesInternal = globalThis;
    const _Boolean = Boolean;
    const result = isDiscordFrontendDevelopment.isDiscordBackendDevelopment();
    let str = Boolean(assetId);
    if (result) {
      let str9 = "";
      if (str) {
        str9 = "" + assetId + "/";
      }
      _HermesInternal = _HermesInternal.HermesInternal;
      str = "/";
      let combined = c2 + "/" + skuId + "/" + str9 + assetFormat;
    } else {
      let str3 = "";
      if (`/`) {
        const _HermesInternal2 = HermesInternal;
        str3 = "" + assetId + "/";
      }
      const _HermesInternal3 = HermesInternal;
      combined = "https://cdn.discordapp.com/" + c2 + "/" + skuId + "/" + str3 + assetFormat;
    }
  }
};