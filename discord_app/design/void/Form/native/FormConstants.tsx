// === Module 1182: FormConstants ===

// Module 1182 (FormConstants)
import nativeDefault from "native" /* 576 */;
import PlatformUtils2 from "PlatformUtils" /* 1115 */;
import shared from "shared" /* 4411 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
const PlatformUtils = fn(1115);
let num = 24;
if (PlatformUtils.isAndroid()) {
  num = 32;
}
const internal = nativeDefault.internal;
const semanticColor = internal.resolveSemanticColor(nativeDefault.themes.DARK, nativeDefault.colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
const internal2 = nativeDefault.internal;
const semanticColor1 = internal2.resolveSemanticColor(nativeDefault.themes.LIGHT, nativeDefault.colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
const DeviceUtils = fn(4539);
const systemVersionMajor = DeviceUtils.getSystemVersionMajor();
let frozen = Object.freeze({ foreground: true });
let closure_6 = Object.freeze({});
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("design/void/Form/native/FormConstants.tsx");

export const FORM_ROW_VERTICAL_PADDING = num;
export const RIPPLE_DARK_COLOR = semanticColor;
export const RIPPLE_LIGHT_COLOR = semanticColor1;
export const ANDROID_FOREGROUND_RIPPLE = frozen;
export const TitleStyleType = { DEFAULT: "default", ANDROID_NO_BORDER: "no_border", NO_BORDER_OR_MARGIN: "no_border_or_margin" };
export const getThemedRippleConfig = function getThemedRippleConfig(arg0) {
  ({ radius, cornerRadius, color } = arg0);
  ({ foreground, borderless } = arg0);
  let obj = PlatformUtils2;
  if (obj.isAndroid()) {
    if (null != color) {
      const sum = "" + color.toString() + cornerRadius + radius + tmp5;
      value = map.get(sum);
      if (null != value) {
        return value;
      } else {
        const _Object = Object;
        obj = { color, radius, borderless, cornerRadius, foreground: tmp5 };
        const frozen = Object.freeze(obj);
        const result = map.set(sum, frozen);
        return frozen;
      }
    } else {
      shared.isThemeLight(ThemeStore.theme) ? semanticColor1 : semanticColor;
      const tmpResult = shared;
    }
  } else {
    return closure_6;
  }
};