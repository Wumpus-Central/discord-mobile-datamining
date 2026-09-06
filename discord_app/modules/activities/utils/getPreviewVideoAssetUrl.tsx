// discord_app/modules/activities/utils/getPreviewVideoAssetUrl.tsx
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
