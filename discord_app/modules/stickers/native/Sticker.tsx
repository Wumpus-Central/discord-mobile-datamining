// === Module 10176: Sticker ===

// Module 10176 (Sticker)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import StickerFormat from "StickerFormat" /* 5268 */;
import preloadDefault from "preload" /* 5587 */;
import NativeLottieViewDefault from "NativeLottieView" /* 7999 */;
import _modDef10177 from "module_10177" /* 10177 */;
import { PixelRatio } from "get ActivityIndicator" /* 17 */;
import closure_4 from "handleThemeChange" /* 1183 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/stickers/native/Sticker.tsx");

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
  if (sticker.format_type === StickerFormat.StickerFormat.LOTTIE) {
    let tmpResult = tmp(4899);
    let str = tmpResult.getStickerAssetUrl(sticker);
  } else if (sticker.format_type === tmp(5268).StickerFormat.APNG) {
    tmpResult = tmp(4899);
    let obj = { isPreview: null, size: null };
    obj[0] = !animated;
    obj[1] = size;
    str = tmpResult.getStickerAssetUrl(sticker, obj);
  } else {
    obj = { isPreview: null, size: null };
    obj[0] = !animated;
    obj[1] = PixelRatio.getPixelSizeForLayoutSize(size);
    str = tmp(4899).getStickerAssetUrl(sticker, obj);
    const tmpResult1 = tmp(4899);
  }
  if (str == null) {
    str = "";
  }
  const intl = tmp(1114).intl;
  const formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.rk6pOw, { stickerName: sticker.name });
  if (sticker.format_type === StickerFormat.StickerFormat.LOTTIE) {
    const obj2 = { url: null, asset: null, width: null, height: null, opacity: null, renderMode: null, accessibilityLabel: null };
    obj2[0] = str;
    let str4 = sticker.id;
    if (str4 == null) {
      str4 = "";
    }
    obj2[1] = str4;
    obj2[2] = size;
    obj2[3] = size;
    obj2[4] = num;
    const NativeLottieRenderMode = tmp(7999).NativeLottieRenderMode;
    obj2[5] = animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    obj2[6] = formatToPlainStringResult;
    return jsx(NativeLottieViewDefault, { url: null, asset: null, width: null, height: null, opacity: null, renderMode: null, accessibilityLabel: null });
  } else {
    if (sticker.format_type === tmp(5268).StickerFormat.APNG) {
      if ("type" in sticker) {
        const tmpResult2 = tmp(4899);
      }
      const obj3 = { style: null, url: null, name: null, accessibilityLabel: null };
      const obj4 = { height: null, width: null, opacity: null };
      obj4[0] = size;
      obj4[1] = size;
      obj4[2] = num;
      obj3[0] = obj4;
      obj3[1] = str;
      const _HermesInternal = HermesInternal;
      obj3[2] = "" + sticker.id + "." + tmp(4899).getStickerExtensionFromFormatType(sticker.format_type);
      obj3[3] = formatToPlainStringResult;
      const obj5 = {};
      const tmpResult3 = tmp(4899);
      const merged = Object.assign(obj3);
      return jsx(_modDef10177, {});
    }
    const obj6 = { resizeMode: "contain", style: null, placeholder: null, source: null, accessible: true, accessibilityLabel: null };
    const obj7 = { height: null, width: null, opacity: null };
    obj7[0] = size;
    obj7[1] = size;
    obj7[2] = num;
    obj6[1] = obj7;
    const tmp12 = jsx;
    const tmp14 = preloadDefault;
    if (tmpResult4.isThemeDark(theme.theme)) {
      let tmp13Result = tmp13(7131);
    } else {
      tmp13Result = tmp13(7132);
    }
    obj6[2] = tmp13Result;
    const obj8 = { uri: null };
    obj8[0] = str;
    obj6[3] = obj8;
    obj6[5] = formatToPlainStringResult;
    return tmp12(tmp14, obj6);
  }
  obj1 = { stickerName: sticker.name };
};
export const getStickerAssetUrl = function getStickerAssetUrl(sticker, closure_7, first) {
  if (sticker.format_type === StickerFormat.StickerFormat.LOTTIE) {
    let tmpResult = tmp(4899);
    let str = tmpResult.getStickerAssetUrl(sticker);
  } else if (sticker.format_type === tmp(5268).StickerFormat.APNG) {
    tmpResult = tmp(4899);
    let obj = { isPreview: null, size: null };
    obj[0] = !first;
    obj[1] = closure_7;
    str = tmpResult.getStickerAssetUrl(sticker, obj);
  } else {
    obj = { isPreview: null, size: null };
    obj[0] = !first;
    obj[1] = PixelRatio.getPixelSizeForLayoutSize(closure_7);
    str = tmp(4899).getStickerAssetUrl(sticker, obj);
    const tmpResult1 = tmp(4899);
  }
  if (str == null) {
    str = "";
  }
  return str;
};