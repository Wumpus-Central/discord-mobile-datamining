// === Module 1476: utils/ImageUtils ===

// Module 1476 (utils/ImageUtils)
import AvatarUtils from "AvatarUtils" /* 1396 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1399 */;
import AttachmentImageLadderExperiment from "AttachmentImageLadderExperiment" /* 1431 */;
import AttachmentImageLadder from "AttachmentImageLadder" /* 1432 */;
import _modDef1471 from "module_1471" /* 1471 */;
import useWindowDimensions from "useWindowDimensions" /* 1477 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function getSrcWithWidthAndHeight(animated) {
  ({ src, sourceWidth, sourceHeight, targetWidth, targetHeight, format } = animated);
  if (format === undefined) {
    format = null;
  }
  let flag = animated.animated;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = _slicedToArray(src.split("?"), 2);
  const items = [tmp[0], ];
  let obj = _modDef1471;
  items[1] = obj.parse(tmp[1]);
  [tmp5, tmp6] = _slicedToArray(items, 2);
  if (re8.test(tmp5)) {
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
    const tmp9 = (function getAttachmentLadderConfig(arg0) {
      try {
        const obj = { location: "native/ImageUtils.getSrcWithWidthAndHeight" };
        const attachmentImageLadderConfig = AttachmentImageLadderExperiment.getAttachmentImageLadderConfig(obj);
        let tmp5 = null;
        if (true === attachmentImageLadderConfig.enabled) {
          tmp5 = attachmentImageLadderConfig;
        }
        return tmp5;
      } catch (err) {
        return null;
      }
    })("native/ImageUtils.getSrcWithWidthAndHeight");
    let size = { width: targetWidth, height: targetHeight };
    if (null != tmp9) {
      obj = { targetWidth, targetHeight, sourceWidth, sourceHeight, maxUpscale: null };
      const obj2 = AttachmentImageLadder;
      obj.maxUpscale = AttachmentImageLadder.getSnapDownMaxUpscale(tmp9, tmp2(1878)());
      size = obj2.snapAttachmentDimensions(obj);
    }
    if (!tmp12) {
      tmp6.width = size.width | 0;
      tmp6.height = size.height | 0;
    }
    tmp12 = size.width === sourceWidth && size.height === sourceHeight;
  }
  if (flag) {
    tmp6.animated = true;
  }
  let tmp2Result = tmp2(12);
  let text = tmp5;
  if (!tmp2Result.isEmpty(tmp6)) {
    tmp2Result = tmp2(1471);
    text = `${tmp5}?${obj6.stringify(tmp6)}`;
  }
  return text;
}
function getMobileOptimizedSrc(proxy_url, width, height, png) {
  let tmp = png;
  if (png === undefined) {
    tmp = null;
  }
  let num = 1;
  if (re7.test(proxy_url)) {
    num = 0.3;
  }
  let obj = useWindowDimensions;
  const size = obj.getWindowDimensions();
  const result = hasOwnProperty.getPixelSizeForLayoutSize(size.width) * num;
  const bound = Math.min(width > height ? result / width : hasOwnProperty.getPixelSizeForLayoutSize(size.height / 2) * num / height, 1);
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
function getPaletteForAvatarMobile(automodAvatarURL) {
  const obj = utils_AvatarUtils;
  ImageManager = ImageManager.ImageManager;
  return ImageManager.getDominantColors(obj.ensureAvatarSource(AvatarUtils.makeSource(automodAvatarURL)));
}
get_ActivityIndicator = fn(17);
({ NativeModules: closure_4, PixelRatio: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(1074).MEDIA_PROXY_MAX_TARGET_RESOLUTION;
const tmp3 = /\.(gif)$/i;
const re7 = tmp3;
const tmp4 = /\.(avif)$/i;
const re8 = tmp4;
let size = fn(2);
let result = size.fileFinishedImporting("utils/native/ImageUtils.tsx");

export default { getMobileOptimizedSrc, getPaletteForAvatarMobile };
export const GIF_RE = tmp3;
export const AVIF_RE = tmp4;
export { getSrcWithWidthAndHeight };
export { getMobileOptimizedSrc };
export { getPaletteForAvatarMobile };