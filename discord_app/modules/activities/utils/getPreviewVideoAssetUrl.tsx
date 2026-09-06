// === Module 12058: getPreviewVideoAssetUrl ===

// Module 12058 (getPreviewVideoAssetUrl)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/activities/utils/getPreviewVideoAssetUrl.tsx");

export default function getPreviewVideoAssetUrl(arg0, banner_asset_id) {
  if (null != CDN_HOST) {
    const _HermesInternal2 = HermesInternal;
    let combined = "https://" + CDN_HOST + "/app-assets/" + arg0 + "/store/" + banner_asset_id + ".mp4";
  } else {
    const _location = location;
    const _HermesInternal = HermesInternal;
    combined = "" + location.protocol + tmp + Endpoints.STORE_ASSET(arg0, banner_asset_id, "mp4");
  }
  return combined;
};