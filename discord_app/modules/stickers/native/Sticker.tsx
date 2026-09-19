// === Module 10432: Sticker ===

// Module 10432 (Sticker)
import util from "util" /* 1115 */;
import StickersUtils from "StickersUtils" /* 5103 */;
import StickersTypes from "StickersTypes" /* 5480 */;
import FastImageDefault from "FastImage" /* 5799 */;
import _modDef7371 from "module_7371" /* 7371 */;
import _modDef7372 from "module_7372" /* 7372 */;
import NativeLottieView from "NativeLottieView" /* 8256 */;
import NativeAPNGViewDefault from "NativeAPNGView" /* 10433 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;

const NativeLottieViewDefault = NativeLottieView;

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
    let str = StickersUtils.getStickerAssetUrl(sticker);
    const tmpResult = StickersUtils;
  } else if (sticker.format_type === StickersTypes.StickerFormat.APNG) {
    const obj = { isPreview: !animated, size };
    str = StickersUtils.getStickerAssetUrl(sticker, obj);
    const tmpResult6 = StickersUtils;
  } else {
    const obj2 = { isPreview: !animated, size: PixelRatio.getPixelSizeForLayoutSize(size) };
    str = StickersUtils.getStickerAssetUrl(sticker, obj2);
    const tmpResult7 = StickersUtils;
  }
  if (str == null) {
    str = "";
  }
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.rk6pOw, { stickerName: sticker.name });
  if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
    const size1 = { url: str, asset: null, width: null, height: null, opacity: null, renderMode: null, accessibilityLabel: null };
    let str4 = sticker.id;
    if (str4 == null) {
      str4 = "";
    }
    size1.asset = str4;
    size1.width = size;
    size1.height = size;
    size1.opacity = num;
    const NativeLottieRenderMode = NativeLottieView.NativeLottieRenderMode;
    size1.renderMode = animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    size1.accessibilityLabel = formatToPlainStringResult;
    return jsx(NativeLottieViewDefault, { url: str, asset: null, width: null, height: null, opacity: null, renderMode: null, accessibilityLabel: null });
  } else {
    if (sticker.format_type === StickersTypes.StickerFormat.APNG) {
      if ("type" in sticker) {
        StickersUtils;
      }
      const obj4 = { style: null, url: null, name: null, accessibilityLabel: null };
      const size2 = { height: size, width: size, opacity: num };
      obj4.style = size2;
      obj4.url = str;
      const _HermesInternal = HermesInternal;
      obj4.name = "" + sticker.id + "." + StickersUtils.getStickerExtensionFromFormatType(sticker.format_type);
      obj4.accessibilityLabel = formatToPlainStringResult;
      const obj5 = {};
      const tmpResult9 = StickersUtils;
      const merged = Object.assign(obj4);
      return jsx(NativeAPNGViewDefault, {});
    }
    const obj6 = { resizeMode: "contain", style: null, placeholder: null, source: null, accessible: true, accessibilityLabel: null };
    const size3 = { height: size, width: size, opacity: num };
    obj6.style = size3;
    if (tmpResult10.isThemeDark(ThemeStore.theme)) {
      let tmp13Result = _modDef7371;
    } else {
      tmp13Result = _modDef7372;
    }
    obj6.placeholder = tmp13Result;
    const obj7 = { uri: str };
    obj6.source = obj7;
    obj6.accessibilityLabel = formatToPlainStringResult;
    return <tmp14 resizeMode="contain" style={null} placeholder={null} source={null} accessible accessibilityLabel={null} />;
  }
  const obj3 = { stickerName: sticker.name };
};
export const getStickerAssetUrl = function getStickerAssetUrl(format_type, size, arg2) {
  if (format_type.format_type === StickersTypes.StickerFormat.LOTTIE) {
    let str = StickersUtils.getStickerAssetUrl(format_type);
    const tmpResult = StickersUtils;
  } else if (format_type.format_type === StickersTypes.StickerFormat.APNG) {
    const obj = { isPreview: !arg2, size };
    str = StickersUtils.getStickerAssetUrl(format_type, obj);
    const tmpResult3 = StickersUtils;
  } else {
    const obj2 = { isPreview: !arg2, size: PixelRatio.getPixelSizeForLayoutSize(size) };
    str = StickersUtils.getStickerAssetUrl(format_type, obj2);
    const tmpResult4 = StickersUtils;
  }
  if (str == null) {
    str = "";
  }
  return str;
};