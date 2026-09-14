// discord_app/modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx
import Constants from "../../../Constants.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import ImageLoaderUtils from "../../image_upload/ImageLoaderUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
({ API_ENDPOINT: c3, CDN_HOST: closure_4 } = window.GLOBAL_ENV);
const result = size.fileFinishedImporting("modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx");

export const getCollectionItemAssetUrl = function getCollectionItemAssetUrl(arg0) {
  ({ itemId, hash, containerWidth } = arg0);
  if (containerWidth === undefined) {
    containerWidth = 1024;
  }
  const obj = ImageLoaderUtils;
  const str = obj.getBestMediaProxySize(containerWidth * ImageLoaderUtils.getDevicePixelRatio());
  const obj3 = { size: obj.getBestMediaProxySize(containerWidth * ImageLoaderUtils.getDevicePixelRatio()).toString() };
  const str1 = new URLSearchParams({
    size: obj.getBestMediaProxySize(containerWidth * ImageLoaderUtils.getDevicePixelRatio()).toString(),
  }).toString();
  let str3 = "png";
  if (AvatarUtils.SUPPORTS_WEBP) {
    str3 = "webp";
  }
  if (null != React4) {
    const _HermesInternal2 = HermesInternal;
    let combined =
      "https://" +
      React4 +
      "/app-assets/application-directory/collection-items/" +
      itemId +
      "/" +
      hash +
      "." +
      str3 +
      "?" +
      str1;
  } else {
    const _location = location;
    const _HermesInternal = HermesInternal;
    combined =
      "" + protocol + React3 + Endpoints.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(itemId, hash, str3) + "?" + str1;
  }
  return combined;
};
