// discord_app/modules/activities/utils/getPreviewVideoAssetUrl.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";

const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("modules/activities/utils/getPreviewVideoAssetUrl.tsx");

export default function getPreviewVideoAssetUrl(closure_7, banner_asset_id) {
  if (null != CDN_HOST) {
    const _HermesInternal2 = HermesInternal;
    let combined = "https://" + CDN_HOST + "/app-assets/" + closure_7 + "/store/" + banner_asset_id + ".mp4";
  } else {
    const _location = location;
    const _HermesInternal = HermesInternal;
    combined = "" + location.protocol + tmp + Endpoints.STORE_ASSET(closure_7, banner_asset_id, "mp4");
  }
  return combined;
};