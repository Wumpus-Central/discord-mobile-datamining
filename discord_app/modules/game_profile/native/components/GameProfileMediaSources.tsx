// discord_app/modules/game_profile/native/components/GameProfileMediaSources.tsx
import ImageLoaderUtils from "../../../image_upload/ImageLoaderUtils.tsx";
import ImageProxyUtils from "../../../image_proxy/ImageProxyUtils.tsx";
import StoreUtils from "../../../../utils/StoreUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c2 = 366;
let closure_3 = { width: 1920, height: 1080 };
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileMediaSources.tsx");

export const MEDIA_ITEM_MAX_WIDTH = 366;
export const MEDIA_ITEM_MAX_HEIGHT = 200;
export const MEDIA_ITEM_ASPECT_RATIO = 1.83;
export const getCarouselPreviewPixelSize = function getCarouselPreviewPixelSize() {
  let devicePixelRatio = arg0;
  if (arg0 === undefined) {
    devicePixelRatio = ImageLoaderUtils.getDevicePixelRatio();
  }
  const bestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize(c2 * devicePixelRatio);
  const size = { width: bestMediaProxySize, height: Math.round(bestMediaProxySize / 1.83) };
  return size;
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
    let arraySpreadResult = HermesBuiltin.arraySpread(
      trailers.map((application_id) => {
        const obj = {
          type: "trailer",
          originalUrl: StoreUtils.getAssetURL(application_id.application_id, application_id.id, styles.width, "mp4"),
          previewUrl: null,
        };
        obj.previewUrl = StoreUtils.getAssetURL(application_id.application_id, application_id.id, size, "webp");
        return obj;
      }),
      0,
    );
    let screenshotUrls = game.screenshotUrls;
    if (screenshotUrls == null) {
      screenshotUrls = [];
    }
    arraySpreadResult = HermesBuiltin.arraySpread(
      screenshotUrls.map((originalUrl) => {
        let obj = { type: "image", originalUrl, previewUrl: null };
        obj = { size, keepAspectRatio: true };
        obj.previewUrl = ImageProxyUtils.getSizedImageAssetURL(originalUrl, obj);
        return obj;
      }),
      arraySpreadResult,
    );
  }
  return items;
};
export const buildMediaViewerSources = function buildMediaViewerSources(memo1, memo) {
  closure_0 = memo;
  return memo1.map((originalUrl, mediaIndex) => {
    let obj = { uri: originalUrl.originalUrl, videoURI: null, mediaIndex: null };
    originalUrl = undefined;
    if ("trailer" === originalUrl.type) {
      originalUrl = originalUrl.originalUrl;
    }
    obj.videoURI = originalUrl;
    obj.mediaIndex = mediaIndex;
    const merged = Object.assign(closure_3);
    obj = {};
    const merged1 = Object.assign(closure_0);
    obj.uri = originalUrl.previewUrl;
    obj.thumbnail = obj;
    obj.accessoryType = "embed";
    obj.disableDownload = true;
    return obj;
  });
};
