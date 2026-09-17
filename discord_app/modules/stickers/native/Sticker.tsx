// discord_app/modules/stickers/native/Sticker.tsx
import util from "../../../intl/index.native.tsx";
import StickersUtils from "../StickersUtils.tsx";
import StickersTypes from "../StickersTypes.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef7245 from "../../../../_runtime/metro/07245__.js";
import _modDef7246 from "../../../../_runtime/metro/07246__.js";
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
    const size1 = {
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
    size1.asset = str4;
    size1.width = size;
    size1.height = size;
    size1.opacity = num;
    const NativeLottieRenderMode = NativeLottieView.NativeLottieRenderMode;
    size1.renderMode = animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    size1.accessibilityLabel = formatToPlainStringResult;
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
    const obj6 = {
      resizeMode: "contain",
      style: null,
      placeholder: null,
      source: null,
      accessible: true,
      accessibilityLabel: null,
    };
    const size3 = { height: size, width: size, opacity: num };
    obj6.style = size3;
    if (tmpResult10.isThemeDark(ThemeStore.theme)) {
      let tmp13Result = _modDef7245;
    } else {
      tmp13Result = _modDef7246;
    }
    obj6.placeholder = tmp13Result;
    const obj7 = { uri: str };
    obj6.source = obj7;
    obj6.accessibilityLabel = formatToPlainStringResult;
    return (
      <tmp14 resizeMode="contain" style={null} placeholder={null} source={null} accessible accessibilityLabel={null} />
    );
  }
  const obj3 = { stickerName: sticker.name };
}
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
