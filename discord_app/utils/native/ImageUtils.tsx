// discord_app/utils/native/ImageUtils.tsx
import getAvatarURL from "../AvatarUtils.tsx";
import ensureAvatarSource from "AvatarUtils.tsx";
import items2 from "../../modules/image_upload/AttachmentImageLadder.tsx";
import parseDefault from "../../../_runtime/01482_parse.js";
import useWindowDimensions from "../../modules/screen/useWindowDimensions.native.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import { MEDIA_PROXY_MAX_TARGET_RESOLUTION as closure_6 } from "../../Constants.tsx";

require = arg1;
function getSrcWithWidthAndHeight(animated) {
  ({ src, sourceWidth, sourceHeight, targetWidth, targetHeight, format } = animated);
  if (format === undefined) {
    format = null;
  }
  let flag = animated.animated;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback(src.split("?"), 2);
  const items = [tmp[0]];
  let obj = parseDefault;
  items[1] = obj.parse(tmp[1]);
  [tmp5, tmp6] = callback(items, 2);
  if (regex2.test(tmp5)) {
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
        const obj = { location: null };
        obj[0] = "native/ImageUtils.getSrcWithWidthAndHeight";
        const attachmentImageLadderConfig = callback(table[3]).getAttachmentImageLadderConfig(obj);
        let tmp5 = null;
        if (true === attachmentImageLadderConfig.enabled) {
          tmp5 = attachmentImageLadderConfig;
        }
        return tmp5;
      } catch (err) {
        return null;
      }
    })("native/ImageUtils.getSrcWithWidthAndHeight");
    let size = { width: null, height: null };
    size[0] = targetWidth;
    size[1] = targetHeight;
    if (null != tmp9) {
      obj = { targetWidth: null, targetHeight: null, sourceWidth: null, sourceHeight: null, maxUpscale: null };
      obj[0] = targetWidth;
      obj[1] = targetHeight;
      obj[2] = sourceWidth;
      obj[3] = sourceHeight;
      const obj2 = items2;
      obj[4] = items2.getSnapDownMaxUpscale(tmp9, tmp2(1894)());
      size = obj2.snapAttachmentDimensions(obj);
      const obj4 = items2;
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
    tmp2Result = tmp2(1482);
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
  if (regex.test(proxy_url)) {
    num = 0.3;
  }
  let obj = useWindowDimensions;
  const size = obj.getWindowDimensions();
  const result = store.getPixelSizeForLayoutSize(size.width) * num;
  const bound = Math.min(
    width > height ? result / width : (store.getPixelSizeForLayoutSize(size.height / 2) * num) / height,
    1,
  );
  let rounded1 = height;
  let rounded = width;
  if (bound < 1) {
    const _Math = Math;
    rounded = Math.ceil(width * bound);
    const _Math2 = Math;
    rounded1 = Math.ceil(height * bound);
  }
  obj = {
    src: proxy_url,
    sourceWidth: width,
    sourceHeight: height,
    targetWidth: rounded,
    targetHeight: rounded1,
    format: tmp,
  };
  return getSrcWithWidthAndHeight(obj);
}
function getPaletteForAvatarMobile(closure_0) {
  const obj = ensureAvatarSource;
  ImageManager = ImageManager.ImageManager;
  return ImageManager.getDominantColors(obj.ensureAvatarSource(getAvatarURL.makeSource(closure_0)));
}
({ NativeModules: c4, PixelRatio: c5 } = get_ActivityIndicator);
const tmp3 = /\.(gif)$/i;
const re7 = tmp3;
const tmp4 = /\.(avif)$/i;
const re8 = tmp4;
let result = require("set").fileFinishedImporting("utils/native/ImageUtils.tsx");

export default { getMobileOptimizedSrc, getPaletteForAvatarMobile };
export const GIF_RE = tmp3;
export const AVIF_RE = tmp4;
export { getSrcWithWidthAndHeight };
export { getMobileOptimizedSrc };
export { getPaletteForAvatarMobile };
