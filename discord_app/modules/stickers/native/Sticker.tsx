// discord_app/modules/stickers/native/Sticker.tsx
import util from "../../../intl/index.native.tsx";
import StickersUtils from "../StickersUtils.tsx";
import StickersTypes from "../StickersTypes.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef7131 from "../../../../_runtime/metro/07131__.js";
import _modDef7132 from "../../../../_runtime/metro/07132__.js";
import NativeLottieView from "NativeLottieView.tsx";
import NativeAPNGViewDefault from "../../../components_native/common/NativeAPNGView.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

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
    let tmpResult = StickersUtils;
    let str = tmpResult.getStickerAssetUrl(sticker);
  } else if (sticker.format_type === StickersTypes.StickerFormat.APNG) {
    tmpResult = StickersUtils;
    let obj = { isPreview: !animated, size };
    str = tmpResult.getStickerAssetUrl(sticker, obj);
  } else {
    obj = { isPreview: !animated, size: PixelRatio.getPixelSizeForLayoutSize(size) };
    str = StickersUtils.getStickerAssetUrl(sticker, obj);
    const tmpResult1 = StickersUtils;
  }
  if (str == null) {
    str = "";
  }
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.rk6pOw, { stickerName: sticker.name });
  if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
    size = {
      url: str,
      asset: null,
      width: null,
      height: null,
      opacity: null,
      renderMode: null,
      accessibilityLabel: null,
    };
    let str4 = sticker.id;
    if (str4 == null) {
      str4 = "";
    }
    size.asset = str4;
    size.width = size;
    size.height = size;
    size.opacity = num;
    const NativeLottieRenderMode = NativeLottieView.NativeLottieRenderMode;
    size.renderMode = animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    size.accessibilityLabel = formatToPlainStringResult;
    return jsx(NativeLottieViewDefault, {
      url: str,
      asset: null,
      width: null,
      height: null,
      opacity: null,
      renderMode: null,
      accessibilityLabel: null,
    });
  } else {
    if (sticker.format_type === StickersTypes.StickerFormat.APNG) {
      if ("type" in sticker) {
        StickersUtils;
      }
      const obj2 = { style: null, url: null, name: null, accessibilityLabel: null };
      const size1 = { height: size, width: size, opacity: num };
      obj2.style = size1;
      obj2.url = str;
      const _HermesInternal = HermesInternal;
      obj2.name = "" + sticker.id + "." + StickersUtils.getStickerExtensionFromFormatType(sticker.format_type);
      obj2.accessibilityLabel = formatToPlainStringResult;
      const obj3 = {};
      const tmpResult3 = StickersUtils;
      const merged = Object.assign(obj2);
      return jsx(NativeAPNGViewDefault, {});
    }
    const obj4 = {
      resizeMode: "contain",
      style: null,
      placeholder: null,
      source: null,
      accessible: true,
      accessibilityLabel: null,
    };
    const size2 = { height: size, width: size, opacity: num };
    obj4.style = size2;
    if (tmpResult4.isThemeDark(ThemeStore.theme)) {
      let tmp13Result = _modDef7131;
    } else {
      tmp13Result = _modDef7132;
    }
    obj4.placeholder = tmp13Result;
    const obj5 = { uri: str };
    obj4.source = obj5;
    obj4.accessibilityLabel = formatToPlainStringResult;
    return (
      <tmp14 resizeMode="contain" style={null} placeholder={null} source={null} accessible accessibilityLabel={null} />
    );
  }
  const obj1 = { stickerName: sticker.name };
}
export const getStickerAssetUrl = function getStickerAssetUrl(format_type, size, arg2) {
  if (format_type.format_type === StickersTypes.StickerFormat.LOTTIE) {
    let tmpResult = StickersUtils;
    let str = tmpResult.getStickerAssetUrl(format_type);
  } else if (format_type.format_type === StickersTypes.StickerFormat.APNG) {
    tmpResult = StickersUtils;
    let obj = { isPreview: !arg2, size };
    str = tmpResult.getStickerAssetUrl(format_type, obj);
  } else {
    obj = { isPreview: !arg2, size: PixelRatio.getPixelSizeForLayoutSize(size) };
    str = StickersUtils.getStickerAssetUrl(format_type, obj);
    const tmpResult1 = StickersUtils;
  }
  if (str == null) {
    str = "";
  }
  return str;
};
