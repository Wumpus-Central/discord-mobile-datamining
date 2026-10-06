// === Module 1192: FormConstants ===

// Module 1192 (FormConstants)
import nativeDefault from "native" /* 587 */;
import shared from "shared" /* 4735 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import DeviceUtils from "DeviceUtils" /* 4872 */;
import size from "module_2" /* 2 */;

let num = 24;
if (PlatformUtils.isAndroid()) {
  num = 32;
}
const internal = nativeDefault.internal;
const resolveSemanticColor = internal.resolveSemanticColor;
const semanticColor = resolveSemanticColor(nativeDefault.themes.DARK, nativeDefault.colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
const internal2 = nativeDefault.internal;
const resolveSemanticColor2 = internal2.resolveSemanticColor;
const semanticColor2 = resolveSemanticColor2(nativeDefault.themes.LIGHT, nativeDefault.colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
const systemVersionMajor = DeviceUtils.getSystemVersionMajor();
let frozen = Object.freeze({ foreground: true });
let closure_6 = Object.freeze({});
const map = new Map();
let result = size.fileFinishedImporting("design/void/Form/native/FormConstants.tsx");

export const FORM_ROW_VERTICAL_PADDING = num;
export const RIPPLE_DARK_COLOR = semanticColor;
export const RIPPLE_LIGHT_COLOR = semanticColor2;
export const ANDROID_FOREGROUND_RIPPLE = frozen;
export const TitleStyleType = { DEFAULT: "default", ANDROID_NO_BORDER: "no_border", NO_BORDER_OR_MARGIN: "no_border_or_margin" };
export const getThemedRippleConfig = function getThemedRippleConfig(arg0) {
  let borderless;
  let color;
  let cornerRadius;
  let foreground;
  let radius;
  ({ radius, cornerRadius, color } = arg0);
  ({ foreground, borderless } = arg0);
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    if (null == color) {
      const tmpResult = shared;
      color = tmpResult.isThemeLight(ThemeStore.theme) ? semanticColor2 : semanticColor;
    }
    const sum = "" + color.toString() + cornerRadius + radius + tmp5;
    const value = map.get(sum);
    if (null != value) {
      return value;
    } else {
      const _Object = Object;
      const obj2 = { color, radius, borderless, cornerRadius, foreground: closure_5 >= 23 && foreground };
      const frozen = Object.freeze(obj2);
      const result = map.set(sum, frozen);
      return frozen;
    }
  } else {
    return closure_6;
  }
};