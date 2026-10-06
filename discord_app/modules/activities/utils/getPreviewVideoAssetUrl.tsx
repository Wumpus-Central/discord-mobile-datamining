// === Module 11686: getPreviewVideoAssetUrl ===

// Module 11686 (getPreviewVideoAssetUrl)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/activities/utils/getPreviewVideoAssetUrl.tsx");

export default function getPreviewVideoAssetUrl(hasOwnProperty, banner_asset_id) {
  let combined;
  if (null != CDN_HOST) {
    const _HermesInternal2 = HermesInternal;
    combined = "https://" + CDN_HOST + "/app-assets/" + hasOwnProperty + "/store/" + banner_asset_id + ".mp4";
  } else {
    const _location = location;
    const _HermesInternal = HermesInternal;
    combined = "" + location.protocol + tmp + Endpoints.STORE_ASSET(hasOwnProperty, banner_asset_id, "mp4");
  }
  return combined;
};