// === Module 11093: Sticker ===

// Module 11093 (Sticker)
import util from "util" /* 1113 */;
import FastImageDefault from "FastImage" /* 6020 */;
import StickersUtils from "StickersUtils" /* 6792 */;
import StickersTypes from "StickersTypes" /* 6793 */;
import _modDef7895 from "module_7895" /* 7895 */;
import _modDef7896 from "module_7896" /* 7896 */;
import NativeLottieView from "NativeLottieView" /* 9228 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1192 */;

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
    const tmpResult4 = StickersUtils;
  } else {
    const obj2 = { isPreview: !animated, size: PixelRatio.getPixelSizeForLayoutSize(size) };
    str = StickersUtils.getStickerAssetUrl(sticker, obj2);
    const tmpResult5 = StickersUtils;
  }
  if (str == null) {
    str = "";
  }
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.rk6pOw, { stickerName: sticker.name });
  if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
    const size1 = { url: str, asset: null, width: null, height: null, opacity: null, renderMode: null, accessibilityLabel: null };
    let str2 = sticker.id;
    if (str2 == null) {
      str2 = "";
    }
    size1.asset = str2;
    size1.width = size;
    size1.height = size;
    size1.opacity = num;
    const NativeLottieRenderMode = NativeLottieView.NativeLottieRenderMode;
    size1.renderMode = animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    size1.accessibilityLabel = formatToPlainStringResult;
    jsx(NativeLottieViewDefault, { url: str, asset: null, width: null, height: null, opacity: null, renderMode: null, accessibilityLabel: null });
  } else {
    const obj4 = { enableAnimation: animated, resizeMode: "contain", style: null, placeholder: null, source: null, accessible: true, accessibilityLabel: null };
    const size2 = { height: size, width: size, opacity: num };
    obj4.style = size2;
    if (tmpResult6.isThemeDark(ThemeStore.theme)) {
      let tmp11Result = _modDef7895;
    } else {
      tmp11Result = _modDef7896;
    }
    obj4.placeholder = tmp11Result;
    const obj5 = { uri: str };
    obj4.source = obj5;
    obj4.accessibilityLabel = formatToPlainStringResult;
    return <tmp12 enableAnimation={animated} resizeMode="contain" style={null} placeholder={null} source={null} accessible accessibilityLabel={null} />;
  }
  const obj3 = { stickerName: sticker.name };
};
export function getStickerAssetUrl(format_type, size, arg2) {
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
}