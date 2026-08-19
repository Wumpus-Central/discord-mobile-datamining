// === Module 12290: getApplicationAssetUrl ===

// Module 12290 (getApplicationAssetUrl)
import obj132 from "obj132" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import handleImageLoad from "handleImageLoad" /* 1469 */;

let result = obj132.fileFinishedImporting("modules/application_assets_v2/ApplicationAssetV2Utils.tsx");

export const getApplicationAssetUrl = function getApplicationAssetUrl(closure_1, asset_id, width) {
  if (null != window.GLOBAL_ENV.CDN_HOST) {
    const _URL2 = URL;
    const _location = location;
    const _window = window;
    const _HermesInternal2 = HermesInternal;
    let str5 = new URL("" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/app-assets/" + closure_1 + "/" + asset_id.asset_id + ".webp");
  } else {
    const _URL = URL;
    const _HermesInternal = HermesInternal;
    str5 = new URL("" + sendRequest.getAPIBaseURL() + "/applications/" + closure_1 + "/app-assets/" + asset_id.asset_id + ".webp");
  }
  if (null != width) {
    const searchParams = str5.searchParams;
    const result = searchParams.set("size", handleImageLoad.getBestMediaProxySize(width).toString());
    const str11 = handleImageLoad.getBestMediaProxySize(width);
  }
  if (asset_id.metadata.is_animated) {
    const searchParams2 = str5.searchParams;
    const result1 = searchParams2.set("animated", "true");
  }
  return str5.toString();
};