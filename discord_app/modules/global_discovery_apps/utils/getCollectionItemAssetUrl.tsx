// discord_app/modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx
import { Endpoints } from "ME";
import { getAvatarURL } from "../../../utils/AvatarUtils.tsx";
import { handleImageLoad } from "../../image_upload/ImageLoaderUtils.tsx";

let c3;
let c4;
({ API_ENDPOINT: c3, CDN_HOST: c4 } = window.GLOBAL_ENV);
const result = require("getAvatarURL").fileFinishedImporting("modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx");

export const getCollectionItemAssetUrl = function getCollectionItemAssetUrl(arg0) {
  let containerWidth;
  let hash;
  let itemId;
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