// discord_app/modules/application_assets_v2/ApplicationAssetV2Utils.tsx
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { handleImageLoad } from "../image_upload/ImageLoaderUtils.tsx";
let result = require("set").fileFinishedImporting("modules/application_assets_v2/ApplicationAssetV2Utils.tsx");

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
    str5 = new URL("" + sendRequest /* sendRequest */.getAPIBaseURL() + "/applications/" + closure_1 + "/app-assets/" + asset_id.asset_id + ".webp");
    const obj = sendRequest /* sendRequest */;
  }
  if (null != width) {
    const searchParams = str5.searchParams;
    const obj2 = handleImageLoad /* handleImageLoad */;
    const result = searchParams.set("size", handleImageLoad /* handleImageLoad */.getBestMediaProxySize(width).toString());
    const str11 = handleImageLoad /* handleImageLoad */.getBestMediaProxySize(width);
  }
  if (asset_id.metadata.is_animated) {
    const searchParams2 = str5.searchParams;
    const result1 = searchParams2.set("animated", "true");
  }
  return str5.toString();
};