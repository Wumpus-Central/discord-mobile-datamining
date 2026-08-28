// discord_app/modules/game_profile/native/components/GameProfileMediaSources.tsx
import set from "../../../../../_runtime/00002_set.js";
import handleImageLoad from "../../../image_upload/ImageLoaderUtils.tsx";

let c2 = 366;
let closure_3 = { width: 1920, height: 1080 };
const result = set.fileFinishedImporting("modules/game_profile/native/components/GameProfileMediaSources.tsx");

export const MEDIA_ITEM_MAX_WIDTH = 366;
export const MEDIA_ITEM_MAX_HEIGHT = 200;
export const MEDIA_ITEM_ASPECT_RATIO = 1.83;
export const getCarouselPreviewPixelSize = function getCarouselPreviewPixelSize() {
  let devicePixelRatio = arg0;
  if (arg0 === undefined) {
    let obj = handleImageLoad;
    devicePixelRatio = obj.getDevicePixelRatio();
  }
  const bestMediaProxySize = handleImageLoad.getBestMediaProxySize(c2 * devicePixelRatio);
  obj = { width: bestMediaProxySize, height: Math.round(bestMediaProxySize / 1.83) };
  return obj;
};
export const buildMediaEntries = function buildMediaEntries(game) {
  if (null == game) {
    let items = [];
  } else {
    let trailers = game.trailers;
    if (trailers == null) {
      trailers = [];
    }
    items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(trailers.map((application_id) => {
      const obj = { type: "trailer", originalUrl: callback(4721).getAssetURL(application_id.application_id, application_id.id, styles.width, "mp4"), previewUrl: null };
      const obj2 = callback(4721);
      obj[2] = callback(4721).getAssetURL(application_id.application_id, application_id.id, closure_2, "webp");
      return obj;
    }), 0);
    let screenshotUrls = game.screenshotUrls;
    if (screenshotUrls == null) {
      screenshotUrls = [];
    }
    arraySpreadResult = HermesBuiltin.arraySpread(screenshotUrls.map((originalUrl) => {
      let obj = { type: "image", originalUrl, previewUrl: null };
      obj = { size: closure_2, keepAspectRatio: true };
      obj[2] = callback(4480).getSizedImageAssetURL(originalUrl, obj);
      return obj;
    }), arraySpreadResult);
  }
  return items;
};
export const buildMediaViewerSources = function buildMediaViewerSources(memo1, memo) {
  closure_0 = memo;
  return memo1.map((originalUrl) => {
    let obj = { uri: originalUrl.originalUrl, videoURI: null, mediaIndex: null };
    originalUrl = undefined;
    if ("trailer" === originalUrl.type) {
      originalUrl = originalUrl.originalUrl;
    }
    obj[1] = originalUrl;
    obj[2] = arg1;
    const merged = Object.assign(closure_1_3);
    obj = {};
    const merged1 = Object.assign(closure_0);
    obj.uri = originalUrl.previewUrl;
    obj.thumbnail = obj;
    obj.accessoryType = "embed";
    obj.disableDownload = true;
    return obj;
  });
};