// discord_app/modules/game_profile/native/components/GameProfileMediaSources.tsx
import ImageLoaderUtils from "../../../image_upload/ImageLoaderUtils.tsx";
import ImageProxyUtils from "../../../image_proxy/ImageProxyUtils.tsx";
import StoreUtils from "../../../../utils/StoreUtils.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let c2 = 366;
let size = { width: 1920, height: 1080 };
let size = size_mod;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileMediaSources.tsx");

export const MEDIA_ITEM_MAX_WIDTH = 366;
export const MEDIA_ITEM_MAX_HEIGHT = 200;
export const MEDIA_ITEM_ASPECT_RATIO = 1.83;
export const MEDIA_VIEWER_ITEM_SIZE = size;
export function getCarouselPreviewPixelSize() {
  let devicePixelRatio = arg0;
  if (arg0 === undefined) {
    devicePixelRatio = ImageLoaderUtils.getDevicePixelRatio();
  }
  const bestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize(c2 * devicePixelRatio);
  size = { width: bestMediaProxySize, height: Math.round(bestMediaProxySize / 1.83) };
  return size;
}
export function buildMediaEntries(game) {
  if (null == game) {
    let items = [];
  } else {
    let trailers = game.trailers;
    if (trailers == null) {
      trailers = [];
    }
    items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(
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
    HermesBuiltin.arraySpread(
      screenshotUrls.map((originalUrl) => {
        const obj = {
          type: "image",
          originalUrl,
          previewUrl: ImageProxyUtils.getSizedImageAssetURL(originalUrl, { size, keepAspectRatio: true }),
        };
        return obj;
      }),
      arraySpreadResult,
    );
  }
  return items;
}
export function buildMediaViewerSources(memo1, memo) {
  let map = dimensions;
  if (dimensions === undefined) {
    const _Map = Map;
    map = new Map();
  }
  return memo1.map((uri, mediaIndex) => {
    value = undefined;
    if ("image" === uri.type) {
      value = map.get(uri.originalUrl);
    }
    if (null == value) {
      let height = memo.height;
      let tmp4 = memo;
    } else {
      const _Math = Math;
      tmp4 = memo;
      height = Math.round((memo.width * value.height) / value.width);
    }
    const obj = { uri: uri.originalUrl, videoURI: null, mediaIndex: null };
    let originalUrl;
    if ("trailer" === uri.type) {
      originalUrl = uri.originalUrl;
    }
    obj.videoURI = originalUrl;
    obj.mediaIndex = mediaIndex;
    if (value == null) {
      value = size;
    }
    const merged = Object.assign(value);
    obj.thumbnail = { width: tmp4.width, height, uri: uri.previewUrl };
    obj.accessoryType = "embed";
    obj.disableDownload = true;
    return obj;
  });
}
