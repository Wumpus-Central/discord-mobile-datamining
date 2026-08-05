// discord_app/modules/collectibles/utils/CollectiblesAssetUtils.tsx
let c2 = "media/v1/collectibles-shop";
let result = require("parseSkuIdFromServerData").fileFinishedImporting("modules/collectibles/utils/CollectiblesAssetUtils.tsx");

export const parseSkuIdFromServerData = require("parseSkuIdFromServerData").parseSkuIdFromServerData;
export const CollectiblesItemAssetFormat = { ANIMATED: "animated", STATIC: "static", VIDEO: "video" };
export const getCollectiblesItemAssetUrl = function getCollectiblesItemAssetUrl(arg0) {
  let assetFormat;
  let assetId;
  let skuId;
  ({ skuId, assetFormat, assetId } = arg0);
  if (null == skuId) {
    return null;
  } else {
    let _HermesInternal = globalThis;
    const _Boolean = Boolean;
    const result = require("../../../utils/GlobalUtils.tsx") /* isDiscordFrontendDevelopment */.isDiscordBackendDevelopment();
    let str = Boolean(assetId);
    if (result) {
      let str9 = "";
      if (str) {
        str9 = "" + assetId + "/";
      }
      _HermesInternal = _HermesInternal.HermesInternal;
      str = "/";
      let combined = tmp4 + "/" + skuId + "/" + str9 + assetFormat;
    } else {
      let str3 = "";
      if (`/`) {
        const _HermesInternal2 = HermesInternal;
        str3 = "" + assetId + "/";
      }
      const _HermesInternal3 = HermesInternal;
      combined = "https://cdn.discordapp.com/" + tmp4 + "/" + skuId + "/" + str3 + assetFormat;
    }
    const obj = require("../../../utils/GlobalUtils.tsx") /* isDiscordFrontendDevelopment */;
  }
};