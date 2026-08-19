// === Module 10119: Sticker ===

// Module 10119 (Sticker)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getStickerExtensionFromFormatType from "getStickerExtensionFromFormatType" /* 4823 */;
import StickerFormat from "StickerFormat" /* 4964 */;
import preloadDefault from "preload" /* 5449 */;
import registerAssetDefault from "registerAsset" /* 6931 */;
import registerAssetDefault2 from "registerAsset" /* 6932 */;
import NativeLottieView from "NativeLottieView" /* 8218 */;
import NativeLottieViewDefault from "NativeLottieView" /* 8218 */;
import _modDef10120 from "module_10120" /* 10120 */;
import { PixelRatio } from "get ActivityIndicator" /* 17 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/stickers/native/Sticker.tsx");

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
    let tmpResult = getStickerExtensionFromFormatType;
    let str = tmpResult.getStickerAssetUrl(sticker);
  } else if (sticker.format_type === StickerFormat.StickerFormat.APNG) {
    tmpResult = getStickerExtensionFromFormatType;
    let obj = { isPreview: null, size: null };
    obj[0] = !animated;
    obj[1] = size;
    str = tmpResult.getStickerAssetUrl(sticker, obj);
  } else {
    obj = { isPreview: null, size: null };
    obj[0] = !animated;
    obj[1] = PixelRatio.getPixelSizeForLayoutSize(size);
    str = getStickerExtensionFromFormatType.getStickerAssetUrl(sticker, obj);
    const tmpResult1 = getStickerExtensionFromFormatType;
  }
  if (str == null) {
    str = "";
  }
  const intl = getSystemLocale.intl;
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
    const NativeLottieRenderMode = NativeLottieView.NativeLottieRenderMode;
    obj2[5] = animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    obj2[6] = formatToPlainStringResult;
    return jsx(NativeLottieViewDefault, { url: null, asset: null, width: null, height: null, opacity: null, renderMode: null, accessibilityLabel: null });
  } else {
    if (sticker.format_type === StickerFormat.StickerFormat.APNG) {
      if ("type" in sticker) {
        getStickerExtensionFromFormatType;
      }
      const obj3 = { style: null, url: null, name: null, accessibilityLabel: null };
      const obj4 = { height: null, width: null, opacity: null };
      obj4[0] = size;
      obj4[1] = size;
      obj4[2] = num;
      obj3[0] = obj4;
      obj3[1] = str;
      const _HermesInternal = HermesInternal;
      obj3[2] = "" + sticker.id + "." + getStickerExtensionFromFormatType.getStickerExtensionFromFormatType(sticker.format_type);
      obj3[3] = formatToPlainStringResult;
      const tmpResult3 = getStickerExtensionFromFormatType;
      const merged = Object.assign(obj3);
      return jsx(_modDef10120, {});
    }
    const obj6 = { resizeMode: "contain", style: null, placeholder: null, source: null, accessible: true, accessibilityLabel: null };
    const obj7 = { height: null, width: null, opacity: null };
    obj7[0] = size;
    obj7[1] = size;
    obj7[2] = num;
    obj6[1] = obj7;
    if (tmpResult4.isThemeDark(theme.theme)) {
      let tmp13Result = registerAssetDefault;
    } else {
      tmp13Result = registerAssetDefault2;
    }
    obj6[2] = tmp13Result;
    const obj8 = { uri: null };
    obj8[0] = str;
    obj6[3] = obj8;
    obj6[5] = formatToPlainStringResult;
    return <tmp14 resizeMode="contain" style={null} placeholder={null} source={null} accessible accessibilityLabel={null} />;
  }
};
export const getStickerAssetUrl = function getStickerAssetUrl(format_type, width) {
  if (format_type.format_type === StickerFormat.StickerFormat.LOTTIE) {
    let tmpResult = getStickerExtensionFromFormatType;
    let str = tmpResult.getStickerAssetUrl(format_type);
  } else if (format_type.format_type === StickerFormat.StickerFormat.APNG) {
    tmpResult = getStickerExtensionFromFormatType;
    let obj = { isPreview: null, size: null };
    obj[0] = !arg2;
    obj[1] = width;
    str = tmpResult.getStickerAssetUrl(format_type, obj);
  } else {
    obj = { isPreview: null, size: null };
    obj[0] = !arg2;
    obj[1] = PixelRatio.getPixelSizeForLayoutSize(width);
    str = getStickerExtensionFromFormatType.getStickerAssetUrl(format_type, obj);
    const tmpResult1 = getStickerExtensionFromFormatType;
  }
  if (str == null) {
    str = "";
  }
  return str;
};