// discord_app/utils/native/ImageUtils.tsx
import AvatarUtils from "../AvatarUtils.tsx";
import utils_AvatarUtils from "AvatarUtils.tsx";
import AttachmentImageLadderExperiment from "../../modules/image_upload/AttachmentImageLadderExperiment.tsx";
import AttachmentImageLadder from "../../modules/image_upload/AttachmentImageLadder.tsx";
import _modDef1478 from "../../../_runtime/metro/01478__.js";
import useWindowDimensions from "../../modules/screen/useWindowDimensions.native.tsx";
import getDevicePixelRatioDefault from "../getDevicePixelRatio.native.tsx";
import NativeImageManagerModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeImageManagerModule.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";

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
  const items = [tmp[0], _modDef1478.parse(tmp[1])];
  [tmp5, tmp6] = items;
  if (re7.test(tmp5)) {
    tmp6.format = "webp";
  } else if (null != format) {
    tmp6.format = format;
  }
  if (targetWidth > closure_5) {
    targetWidth = closure_5;
  }
  if (targetHeight > closure_5) {
    targetHeight = closure_5;
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
      const obj3 = { targetWidth, targetHeight, sourceWidth, sourceHeight, maxUpscale: null };
      const obj2 = AttachmentImageLadder;
      obj3.maxUpscale = AttachmentImageLadder.getSnapDownMaxUpscale(tmp9, getDevicePixelRatioDefault());
      size = obj2.snapAttachmentDimensions(obj3);
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
  const tmp4 = _slicedToArray(items, 2);
  let text = tmp5;
  if (!tmp2Result.isEmpty(tmp6)) {
    _modDef1478;
    text = `${tmp5}?${obj6.stringify(tmp6)}`;
  }
  return text;
}
function getMobileOptimizedSrc(proxy_url, c7, c72) {
  let tmp = png;
  if (png === undefined) {
    tmp = null;
  }
  let num = 1;
  if (re6.test(proxy_url)) {
    num = 0.3;
  }
  const size = useWindowDimensions.getWindowDimensions();
  const result = PixelRatio.getPixelSizeForLayoutSize(size.width) * num;
  const bound = Math.min(
    sourceWidth > sourceHeight
      ? result / sourceWidth
      : (PixelRatio.getPixelSizeForLayoutSize(size.height / 2) * num) / sourceHeight,
    1,
  );
  let rounded1 = sourceHeight;
  let rounded = sourceWidth;
  if (bound < 1) {
    const _Math = Math;
    rounded = Math.ceil(sourceWidth * bound);
    const _Math2 = Math;
    rounded1 = Math.ceil(sourceHeight * bound);
  }
  return getSrcWithWidthAndHeight({
    src: proxy_url,
    sourceWidth,
    sourceHeight,
    targetWidth: rounded,
    targetHeight: rounded1,
    format: tmp,
  });
}
function getPaletteForAvatarMobile(src) {
  const obj = utils_AvatarUtils;
  const ensureAvatarSourceResult = obj.ensureAvatarSource(AvatarUtils.makeSource(src));
  return NativeImageManagerModuleDefault.getDominantColors(ensureAvatarSourceResult);
}
const PixelRatio = fn(17).PixelRatio;
let closure_5 = fn(1085).MEDIA_PROXY_MAX_TARGET_RESOLUTION;
const tmp2 = /\.(gif)$/i;
const re6 = tmp2;
const tmp3 = /\.(avif)$/i;
const re7 = tmp3;
let size = fn(2);
let result = size.fileFinishedImporting("utils/native/ImageUtils.tsx");

export default { getMobileOptimizedSrc, getPaletteForAvatarMobile };
export const GIF_RE = tmp2;
export const AVIF_RE = tmp3;
export { getSrcWithWidthAndHeight };
export { getMobileOptimizedSrc };
export { getPaletteForAvatarMobile };
