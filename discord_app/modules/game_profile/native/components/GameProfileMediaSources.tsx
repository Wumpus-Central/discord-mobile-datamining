// discord_app/modules/game_profile/native/components/GameProfileMediaSources.tsx
import ImageLoaderUtils from "../../../image_upload/ImageLoaderUtils.tsx";
import ImageProxyUtils from "../../../image_proxy/ImageProxyUtils.tsx";
import StoreUtils from "../../../../utils/StoreUtils.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let originalUrl;

let c2 = 366;
let closure_3 = { width: 1920, height: 1080 };
let size = size_mod;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileMediaSources.tsx");

export const MEDIA_ITEM_MAX_WIDTH = 366;
export const MEDIA_ITEM_MAX_HEIGHT = 200;
export const MEDIA_ITEM_ASPECT_RATIO = 1.83;
export const getCarouselPreviewPixelSize = function getCarouselPreviewPixelSize() {
  let devicePixelRatio = arg0;
  if (arg0 === undefined) {
    const obj = ImageLoaderUtils;
    devicePixelRatio = obj.getDevicePixelRatio();
  }
  const obj2 = ImageLoaderUtils;
  const bestMediaProxySize = obj2.getBestMediaProxySize(c2 * devicePixelRatio);
  size = { width: bestMediaProxySize, height: Math.round(bestMediaProxySize / 1.83) };
  return size;
};
export const buildMediaEntries = function buildMediaEntries(game) {
  let items;
  let styles;
  if (null == game) {
    items = [];
  } else {
    let trailers = game.trailers;
    if (trailers == null) {
      trailers = [];
    }
    items = [];
    let screenshotUrls = game.screenshotUrls;
    const arraySpreadResult = HermesBuiltin.arraySpread(
      items,
      trailers.map((application_id) => {
        let obj2;
        let obj3;
        const obj = {
          type: "trailer",
          originalUrl: obj2.getAssetURL(application_id.application_id, application_id.id, styles.width, "mp4"),
          previewUrl: obj3.getAssetURL(application_id.application_id, application_id.id, size, "webp"),
        };
        obj2 = StoreUtils;
        obj3 = StoreUtils;
        return obj;
      }),
      0,
    );
    if (screenshotUrls == null) {
      screenshotUrls = [];
    }
    HermesBuiltin.arraySpread(
      items,
      screenshotUrls.map((originalUrl) => {
        let obj2;
        const obj = { type: "image", originalUrl, previewUrl: obj2.getSizedImageAssetURL(originalUrl, obj3) };
        obj2 = ImageProxyUtils;
        return obj;
      }),
      arraySpreadResult,
    );
  }
  return items;
};
export const buildMediaViewerSources = function buildMediaViewerSources(arr2, cResult) {
  let closure_0 = cResult;
  return arr2.map((originalUrl, mediaIndex) => {
    let obj2;
    const obj = {
      uri: originalUrl.originalUrl,
      videoURI: originalUrl,
      mediaIndex,
      thumbnail: obj2,
      accessoryType: "embed",
      disableDownload: true,
    };
    originalUrl = undefined;
    if ("trailer" === originalUrl.type) {
      originalUrl = originalUrl.originalUrl;
    }
    const merged = Object.assign(closure_3);
    obj2 = { uri: originalUrl.previewUrl };
    const merged1 = Object.assign(require);
    return obj;
  });
};
