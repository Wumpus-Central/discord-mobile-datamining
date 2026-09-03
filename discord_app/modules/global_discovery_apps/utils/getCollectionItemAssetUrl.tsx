// === Module 11925: getCollectionItemAssetUrl ===

// Module 11925 (getCollectionItemAssetUrl)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getAvatarURL from "getAvatarURL" /* 1430 */;
import handleImageLoad from "handleImageLoad" /* 1464 */;

const Endpoints = ME.Endpoints;
({ API_ENDPOINT: c3, CDN_HOST: c4 } = window.GLOBAL_ENV);
const result = set.fileFinishedImporting("modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx");

export const getCollectionItemAssetUrl = function getCollectionItemAssetUrl(arg0) {
  ({ itemId, hash, containerWidth } = arg0);
  if (containerWidth === undefined) {
    containerWidth = 1024;
  }
  let obj = handleImageLoad;
  let str = obj.getBestMediaProxySize(containerWidth * handleImageLoad.getDevicePixelRatio());
  obj = { size: str.toString() };
  const obj2 = handleImageLoad;
  str = new URLSearchParams(obj).toString();
  let str3 = "png";
  if (getAvatarURL.SUPPORTS_WEBP) {
    str3 = "webp";
  }
  if (null != closure_4) {
    const _HermesInternal2 = HermesInternal;
    let combined = "https://" + tmp2 + "/app-assets/application-directory/collection-items/" + itemId + "/" + hash + "." + str3 + "?" + str;
  } else {
    const _location = location;
    const _HermesInternal = HermesInternal;
    combined = "" + protocol + closure_3 + Endpoints.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(itemId, hash, str3) + "?" + str;
  }
  return combined;
};