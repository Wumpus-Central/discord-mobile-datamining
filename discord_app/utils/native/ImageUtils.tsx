// discord_app/utils/native/ImageUtils.tsx
import AvatarUtils from "../AvatarUtils.tsx";
import utils_AvatarUtils from "AvatarUtils.tsx";
import AttachmentImageLadderExperiment from "../../modules/image_upload/AttachmentImageLadderExperiment.tsx";
import AttachmentImageLadder from "../../modules/image_upload/AttachmentImageLadder.tsx";
import _modDef1490 from "../../../_runtime/metro/01490__.js";
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
  [tmp4, tmp5] = src.split("?");
  const tmp3 = _slicedToArray(src.split("?"), 2);
  const parsed = _modDef1490.parse(tmp5);
  delete tmp2[tmp];
  items = [tmp4, parsed];
  [tmp10, tmp11] = items;
  if (re7.test(tmp10)) {
    tmp11.format = "webp";
  } else if (null != format) {
    tmp11.format = format;
  }
  if (targetWidth > closure_5) {
    targetWidth = closure_5;
  }
  if (targetHeight > closure_5) {
    targetHeight = closure_5;
  }
  if (targetWidth !== sourceWidth) {
    const tmp14 = (function getAttachmentLadderConfig(arg0) {
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
    if (null != tmp14) {
      const obj3 = { targetWidth, targetHeight, sourceWidth, sourceHeight, maxUpscale: null, ladder: null };
      const obj2 = AttachmentImageLadder;
      obj3.maxUpscale = AttachmentImageLadder.getSnapDownMaxUpscale(tmp14, getDevicePixelRatioDefault());
      obj3.ladder = tmp14.ladder;
      size = obj2.snapAttachmentDimensions(obj3);
    }
    if (!tmp17) {
      tmp11.width = size.width | 0;
      tmp11.height = size.height | 0;
    }
    tmp17 = size.width === sourceWidth && size.height === sourceHeight;
  }
  if (flag) {
    tmp11.animated = true;
  }
  const tmp9 = _slicedToArray(items, 2);
  let text = tmp10;
  if (!tmp6Result.isEmpty(tmp11)) {
    _modDef1490;
    text = `${tmp10}?${obj6.stringify(tmp11)}`;
  }
  return text;
}
function getMobileOptimizedSrc(proxy_url, width, height) {
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
    width > height ? result / width : (PixelRatio.getPixelSizeForLayoutSize(size.height / 2) * num) / height,
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
  return getSrcWithWidthAndHeight({
    src: proxy_url,
    sourceWidth: width,
    sourceHeight: height,
    targetWidth: rounded,
    targetHeight: rounded1,
    format: tmp,
  });
}
function getPaletteForAvatarMobile(automodAvatarURL) {
  const obj = utils_AvatarUtils;
  const ensureAvatarSourceResult = obj.ensureAvatarSource(AvatarUtils.makeSource(automodAvatarURL));
  return NativeImageManagerModuleDefault.getDominantColors(ensureAvatarSourceResult);
}
const PixelRatio = fn(17).PixelRatio;
let closure_5 = fn(1072).MEDIA_PROXY_MAX_TARGET_RESOLUTION;
const tmp2 = /\.(gif)$/i;
const re6 = tmp2;
let tmp3 = /\.(avif)$/i;
const re7 = tmp3;
let size = fn(2);
let result = size.fileFinishedImporting("utils/native/ImageUtils.tsx");

export default { getMobileOptimizedSrc, getPaletteForAvatarMobile };
export const GIF_RE = tmp2;
export const AVIF_RE = tmp3;
export { getSrcWithWidthAndHeight };
export { getMobileOptimizedSrc };
export { getPaletteForAvatarMobile };
