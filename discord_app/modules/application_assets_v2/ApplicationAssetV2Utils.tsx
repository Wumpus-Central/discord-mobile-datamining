// === Module 9029: ApplicationAssetV2Utils ===

// Module 9029 (ApplicationAssetV2Utils)
import HTTPUtils from "HTTPUtils" /* 1272 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1430 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/application_assets_v2/ApplicationAssetV2Utils.tsx");

export const getApplicationAssetUrl = function getApplicationAssetUrl(arg0, asset_id, width) {
  if (null != window.GLOBAL_ENV.CDN_HOST) {
    const _URL2 = URL;
    const _location = location;
    const _window = window;
    const _HermesInternal2 = HermesInternal;
    let str5 = new URL("" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/app-assets/" + arg0 + "/" + asset_id.asset_id + ".webp");
  } else {
    const _URL = URL;
    const _HermesInternal = HermesInternal;
    str5 = new URL("" + HTTPUtils.getAPIBaseURL() + "/applications/" + arg0 + "/app-assets/" + asset_id.asset_id + ".webp");
  }
  if (null != width) {
    const searchParams = str5.searchParams;
    const result = searchParams.set("size", ImageLoaderUtils.getBestMediaProxySize(width).toString());
    const str11 = ImageLoaderUtils.getBestMediaProxySize(width);
  }
  if (asset_id.metadata.is_animated) {
    const searchParams2 = str5.searchParams;
    const result1 = searchParams2.set("animated", "true");
  }
  return str5.toString();
};