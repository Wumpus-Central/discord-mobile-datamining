// discord_app/modules/application_assets_v2/ApplicationAssetV2Utils.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ImageLoaderUtils from "../image_upload/ImageLoaderUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;

let result = size.fileFinishedImporting("modules/application_assets_v2/ApplicationAssetV2Utils.tsx");

export const getApplicationAssetUrl = function getApplicationAssetUrl(arg0, asset_id, size) {
  let str5;
  if (null != window.GLOBAL_ENV.CDN_HOST) {
    const _URL2 = URL;
    const _location = location;
    const _window = window;
    const _HermesInternal2 = HermesInternal;
    const self3 = this;
    const self4 = this;
    str5 = new URL(
      "" +
        location.protocol +
        "//" +
        window.GLOBAL_ENV.CDN_HOST +
        "/app-assets/" +
        arg0 +
        "/" +
        asset_id.asset_id +
        ".webp",
    );
  } else {
    const _URL = URL;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const obj = HTTPUtils;
    str5 = new URL("" + obj.getAPIBaseURL() + "/applications/" + arg0 + "/app-assets/" + asset_id.asset_id + ".webp");
  }
  if (null != size) {
    const searchParams = str5.searchParams;
    set = searchParams.set;
    const obj2 = ImageLoaderUtils;
    const str11 = obj2.getBestMediaProxySize(size);
    const result = set("size", str11.toString());
  }
  if (asset_id.metadata.is_animated) {
    const searchParams2 = str5.searchParams;
    const result1 = searchParams2.set("animated", "true");
  }
  return str5.toString();
};
