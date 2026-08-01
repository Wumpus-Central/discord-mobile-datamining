// === Module 1473: getSrcWithWidthAndHeight ===

// Module 1473 (getSrcWithWidthAndHeight)
import _slicedToArray from "_slicedToArray";
import get_ActivityIndicator from "get ActivityIndicator";
import { MEDIA_PROXY_MAX_TARGET_RESOLUTION as closure_6 } from "ME";

let c4;
let c5;
const require = arg1;
function getSrcWithWidthAndHeight(animated) {
  let format;
  let sourceHeight;
  let sourceWidth;
  let src;
  let targetHeight;
  let targetWidth;
  let tmp5;
  let tmp6;
  ({ src, sourceWidth, sourceHeight, targetWidth, targetHeight, format } = animated);
  if (format === undefined) {
    format = null;
  }
  let flag = animated.animated;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback(src.split("?"), 2);
  const items = [tmp[0], ];
  let obj = importDefault(1464);
  items[1] = obj.parse(tmp[1]);
  const tmp4 = callback(items, 2);
  [tmp5, tmp6] = tmp4;
  if (tmp4.test(tmp5)) {
    tmp6.format = "webp";
  } else if (null != format) {
    tmp6.format = format;
  }
  if (targetWidth > closure_6) {
    targetWidth = tmp8;
  }
  if (targetHeight > closure_6) {
    targetHeight = tmp8;
  }
  if (targetWidth !== sourceWidth) {
    if ((function isAttachmentLadderEnabled(arg0) {
      try {
        const obj = { location: null };
        obj[0] = "native/ImageUtils.getSrcWithWidthAndHeight";
        return true === callback(table[3]).getAttachmentImageLadderConfig(obj).enabled;
      } catch (err) {
        return false;
      }
    })("native/ImageUtils.getSrcWithWidthAndHeight")) {
      obj = { targetWidth: null, targetHeight: null, sourceWidth: null, sourceHeight: null, maxUpscale: null };
      obj[0] = targetWidth;
      obj[1] = targetHeight;
      obj[2] = sourceWidth;
      obj[3] = sourceHeight;
      obj[4] = require(1848) /* items */.ATTACHMENT_LADDER_MAX_UPSCALE;
      let size = require(1848) /* items */.snapAttachmentDimensions(obj);
      const obj2 = require(1848) /* items */;
    } else {
      size = { width: null, height: null };
      size[0] = targetWidth;
      size[1] = targetHeight;
    }
    if (!tmp10) {
      tmp6.width = size.width | 0;
      tmp6.height = size.height | 0;
    }
    tmp10 = size.width === sourceWidth && size.height === sourceHeight;
  }
  if (flag) {
    tmp6.animated = true;
  }
  let tmp2Result = tmp2(12);
  let text = tmp5;
  if (!tmp2Result.isEmpty(tmp6)) {
    tmp2Result = tmp2(1464);
    text = `${tmp5}?${obj5.stringify(tmp6)}`;
  }
  return text;
}
function getMobileOptimizedSrc(proxy_url, width, height, png) {
  let tmp = png;
  if (png === undefined) {
    tmp = null;
  }
  let num = 1;
  if (tmp3.test(proxy_url)) {
    num = 0.3;
  }
  let obj = require(1474) /* useWindowDimensions */;
  const size = obj.getWindowDimensions();
  const result = store.getPixelSizeForLayoutSize(size.width) * num;
  const bound = Math.min(width > height ? result / width : store.getPixelSizeForLayoutSize(size.height / 2) * num / height, 1);
  let rounded1 = height;
  let rounded = width;
  if (bound < 1) {
    const _Math = Math;
    rounded = Math.ceil(width * bound);
    const _Math2 = Math;
    rounded1 = Math.ceil(height * bound);
  }
  obj = { src: proxy_url, sourceWidth: width, sourceHeight: height, targetWidth: rounded, targetHeight: rounded1, format: tmp };
  return getSrcWithWidthAndHeight(obj);
}
function getPaletteForAvatarMobile(closure_0) {
  const obj = require(1419) /* ensureAvatarSource */;
  ImageManager = ImageManager.ImageManager;
  return ImageManager.getDominantColors(obj.ensureAvatarSource(require(1416) /* getAvatarURL */.makeSource(closure_0)));
}
({ NativeModules: c4, PixelRatio: c5 } = get_ActivityIndicator);
const tmp3 = /\.(gif)$/i;
const error = tmp3;
let tmp4 = /\.(avif)$/i;
const metroImportAll = tmp4;
let result = require("ME").fileFinishedImporting("utils/native/ImageUtils.tsx");

export default { getMobileOptimizedSrc, getPaletteForAvatarMobile };
export const GIF_RE = tmp3;
export const AVIF_RE = tmp4;
export { getSrcWithWidthAndHeight };
export { getMobileOptimizedSrc };
export { getPaletteForAvatarMobile };