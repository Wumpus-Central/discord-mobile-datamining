// discord_app/modules/collectibles/utils/CollectiblesAssetUtils.tsx
import mappers from "mappers.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let str = "https://cdn.discordapp.com";
if ("production" !== window.GLOBAL_ENV.PROJECT_ENV) {
  const _window = window;
  let str2 = "http://localhost:3000/_storage";
  if ("staging" === window.GLOBAL_ENV.PROJECT_ENV) {
    str2 = "https://staging-cdn.discord.co";
  }
  str = str2;
}
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesAssetUtils.tsx");

export const parseSkuIdFromServerData = mappers.parseSkuIdFromServerData;
export const CollectiblesItemAssetFormat = { ANIMATED: "animated", STATIC: "static", VIDEO: "video" };
export const BASE_URL_BY_RELEASE_CHANNEL = str;
export const getCollectiblesItemAssetUrl = function getCollectiblesItemAssetUrl(arg0) {
  ({ skuId, assetFormat, assetId } = arg0);
  let combined = null;
  if (null != skuId) {
    const _Boolean = Boolean;
    let str2 = "";
    if (Boolean(assetId)) {
      const _HermesInternal = HermesInternal;
      str2 = "" + assetId + "/";
    }
    const _HermesInternal2 = HermesInternal;
    combined = "" + tmp2 + "/media/v1/collectibles-shop/" + skuId + "/" + str2 + assetFormat;
  }
  return combined;
};
