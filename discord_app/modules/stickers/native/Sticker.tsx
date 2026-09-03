// discord_app/modules/stickers/native/Sticker.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import StickerFormat from "../StickersTypes.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import NativeLottieViewDefault from "NativeLottieView.tsx";
import _modDef10288 from "../../../components_native/common/NativeAPNGView.tsx";
import { PixelRatio } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../user_settings/ThemeStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

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
    let tmpResult = tmp(4853);
    let str = tmpResult.getStickerAssetUrl(sticker);
  } else if (sticker.format_type === tmp(5221).StickerFormat.APNG) {
    tmpResult = tmp(4853);
    let obj = { isPreview: null, size: null };
    obj[0] = !animated;
    obj[1] = size;
    str = tmpResult.getStickerAssetUrl(sticker, obj);
  } else {
    obj = { isPreview: null, size: null };
    obj[0] = !animated;
    obj[1] = PixelRatio.getPixelSizeForLayoutSize(size);
    str = tmp(4853).getStickerAssetUrl(sticker, obj);
    const tmpResult1 = tmp(4853);
  }
  if (str == null) {
    str = "";
  }
  const intl = tmp(1233).intl;
  const formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.rk6pOw, { stickerName: sticker.name });
  if (sticker.format_type === StickerFormat.StickerFormat.LOTTIE) {
    const obj2 = {
      url: null,
      asset: null,
      width: null,
      height: null,
      opacity: null,
      renderMode: null,
      accessibilityLabel: null,
    };
    obj2[0] = str;
    let str4 = sticker.id;
    if (str4 == null) {
      str4 = "";
    }
    obj2[1] = str4;
    obj2[2] = size;
    obj2[3] = size;
    obj2[4] = num;
    const NativeLottieRenderMode = tmp(7920).NativeLottieRenderMode;
    obj2[5] = animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    obj2[6] = formatToPlainStringResult;
    return jsx(NativeLottieViewDefault, {
      url: null,
      asset: null,
      width: null,
      height: null,
      opacity: null,
      renderMode: null,
      accessibilityLabel: null,
    });
  } else {
    if (sticker.format_type === tmp(5221).StickerFormat.APNG) {
      if ("type" in sticker) {
        const tmpResult2 = tmp(4853);
      }
      const obj3 = { style: null, url: null, name: null, accessibilityLabel: null };
      const obj4 = { height: null, width: null, opacity: null };
      obj4[0] = size;
      obj4[1] = size;
      obj4[2] = num;
      obj3[0] = obj4;
      obj3[1] = str;
      const _HermesInternal = HermesInternal;
      obj3[2] = "" + sticker.id + "." + tmp(4853).getStickerExtensionFromFormatType(sticker.format_type);
      obj3[3] = formatToPlainStringResult;
      const obj5 = {};
      const tmpResult3 = tmp(4853);
      const merged = Object.assign(obj3);
      return jsx(_modDef10288, {});
    }
    const obj6 = {
      resizeMode: "contain",
      style: null,
      placeholder: null,
      source: null,
      accessible: true,
      accessibilityLabel: null,
    };
    const obj7 = { height: null, width: null, opacity: null };
    obj7[0] = size;
    obj7[1] = size;
    obj7[2] = num;
    obj6[1] = obj7;
    const tmp12 = jsx;
    const tmp14 = preloadDefault;
    if (tmpResult4.isThemeDark(theme.theme)) {
      let tmp13Result = tmp13(5595);
    } else {
      tmp13Result = tmp13(5596);
    }
    obj6[2] = tmp13Result;
    const obj8 = { uri: null };
    obj8[0] = str;
    obj6[3] = obj8;
    obj6[5] = formatToPlainStringResult;
    return tmp12(tmp14, obj6);
  }
  obj1 = { stickerName: sticker.name };
}
export const getStickerAssetUrl = function getStickerAssetUrl(sticker, closure_7, first) {
  if (sticker.format_type === StickerFormat.StickerFormat.LOTTIE) {
    let tmpResult = tmp(4853);
    let str = tmpResult.getStickerAssetUrl(sticker);
  } else if (sticker.format_type === tmp(5221).StickerFormat.APNG) {
    tmpResult = tmp(4853);
    let obj = { isPreview: null, size: null };
    obj[0] = !first;
    obj[1] = closure_7;
    str = tmpResult.getStickerAssetUrl(sticker, obj);
  } else {
    obj = { isPreview: null, size: null };
    obj[0] = !first;
    obj[1] = PixelRatio.getPixelSizeForLayoutSize(closure_7);
    str = tmp(4853).getStickerAssetUrl(sticker, obj);
    const tmpResult1 = tmp(4853);
  }
  if (str == null) {
    str = "";
  }
  return str;
};
