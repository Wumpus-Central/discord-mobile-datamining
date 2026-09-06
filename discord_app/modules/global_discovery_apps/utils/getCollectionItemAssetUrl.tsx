// === Module 12124: getCollectionItemAssetUrl ===

// Module 12124 (getCollectionItemAssetUrl)
import Constants from "Constants" /* 1074 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1430 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
({ API_ENDPOINT: c3, CDN_HOST: closure_4 } = window.GLOBAL_ENV);
const result = size.fileFinishedImporting("modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx");

export const getCollectionItemAssetUrl = function getCollectionItemAssetUrl(arg0) {
  ({ itemId, hash, containerWidth } = arg0);
  if (containerWidth === undefined) {
    containerWidth = 1024;
  }
  let obj = ImageLoaderUtils;
  let str = obj.getBestMediaProxySize(containerWidth * ImageLoaderUtils.getDevicePixelRatio());
  obj = { size: str.toString() };
  str = new URLSearchParams(obj).toString();
  let str3 = "png";
  if (AvatarUtils.SUPPORTS_WEBP) {
    str3 = "webp";
  }
  if (null != React4) {
    const _HermesInternal2 = HermesInternal;
    let combined = "https://" + tmp2 + "/app-assets/application-directory/collection-items/" + itemId + "/" + hash + "." + str3 + "?" + str;
  } else {
    const _location = location;
    const _HermesInternal = HermesInternal;
    combined = "" + protocol + React3 + Endpoints.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(itemId, hash, str3) + "?" + str;
  }
  return combined;
};