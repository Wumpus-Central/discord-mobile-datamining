// === Module 10176: Sticker ===

// Module 10176 (Sticker)
import util from "util" /* 1114 */;
import StickersTypes from "StickersTypes" /* 5268 */;
import FastImageDefault from "FastImage" /* 5587 */;
import NativeLottieViewDefault from "NativeLottieView" /* 7999 */;
import NativeAPNGViewDefault from "NativeAPNGView" /* 10177 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
const PixelRatio = fn(17).PixelRatio;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/Sticker.tsx");

export default function Sticker(opaque) {
  ({ sticker, size, animated } = opaque);
  if (animated === undefined) {
    animated = true;
  }
  let flag = opaque.opaque;
  if (flag === undefined) {
    flag = true;
  }
  let num = 0.3;
  if (flag) {
    num = 1;
  }
  if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
    let tmpResult = tmp(4899);
    let str = tmpResult.getStickerAssetUrl(sticker);
  } else if (sticker.format_type === tmp(5268).StickerFormat.APNG) {
    tmpResult = tmp(4899);
    let obj = { isPreview: !animated, size };
    str = tmpResult.getStickerAssetUrl(sticker, obj);
  } else {
    obj = { isPreview: !animated, size: PixelRatio.getPixelSizeForLayoutSize(size) };
    str = tmp(4899).getStickerAssetUrl(sticker, obj);
    const tmpResult1 = tmp(4899);
  }
  if (str == null) {
    str = "";
  }
  const intl = tmp(1114).intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.rk6pOw, { stickerName: sticker.name });
  if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
    size = { url: str, asset: null, width: null, height: null, opacity: null, renderMode: null, accessibilityLabel: null };
    let str4 = sticker.id;
    if (str4 == null) {
      str4 = "";
    }
    size.asset = str4;
    size.width = size;
    size.height = size;
    size.opacity = num;
    const NativeLottieRenderMode = tmp(7999).NativeLottieRenderMode;
    size.renderMode = animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    size.accessibilityLabel = formatToPlainStringResult;
    return jsx(NativeLottieViewDefault, { url: str, asset: null, width: null, height: null, opacity: null, renderMode: null, accessibilityLabel: null });
  } else {
    if (sticker.format_type === tmp(5268).StickerFormat.APNG) {
      if ("type" in sticker) {
        const tmpResult2 = tmp(4899);
      }
      const obj2 = { style: null, url: null, name: null, accessibilityLabel: null };
      const size1 = { height: size, width: size, opacity: num };
      obj2.style = size1;
      obj2.url = str;
      const _HermesInternal = HermesInternal;
      obj2.name = "" + sticker.id + "." + tmp(4899).getStickerExtensionFromFormatType(sticker.format_type);
      obj2.accessibilityLabel = formatToPlainStringResult;
      const obj3 = {};
      const tmpResult3 = tmp(4899);
      const merged = Object.assign(obj2);
      return jsx(NativeAPNGViewDefault, {});
    }
    const obj4 = { resizeMode: "contain", style: null, placeholder: null, source: null, accessible: true, accessibilityLabel: null };
    const size2 = { height: size, width: size, opacity: num };
    obj4.style = size2;
    const tmp12 = jsx;
    const tmp14 = FastImageDefault;
    if (tmpResult4.isThemeDark(ThemeStore.theme)) {
      let tmp13Result = tmp13(7131);
    } else {
      tmp13Result = tmp13(7132);
    }
    obj4.placeholder = tmp13Result;
    const obj5 = { uri: str };
    obj4.source = obj5;
    obj4.accessibilityLabel = formatToPlainStringResult;
    return tmp12(tmp14, obj4);
  }
  const obj1 = { stickerName: sticker.name };
};
export const getStickerAssetUrl = function getStickerAssetUrl(sticker, AnimateStickers, arg2) {
  if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
    let tmpResult = tmp(4899);
    let str = tmpResult.getStickerAssetUrl(sticker);
  } else if (sticker.format_type === tmp(5268).StickerFormat.APNG) {
    tmpResult = tmp(4899);
    let obj = { isPreview: !arg2, size: AnimateStickers };
    str = tmpResult.getStickerAssetUrl(sticker, obj);
  } else {
    obj = { isPreview: !arg2, size: PixelRatio.getPixelSizeForLayoutSize(AnimateStickers) };
    str = tmp(4899).getStickerAssetUrl(sticker, obj);
    const tmpResult1 = tmp(4899);
  }
  if (str == null) {
    str = "";
  }
  return str;
};