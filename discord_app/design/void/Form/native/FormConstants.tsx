import handleThemeChange from "handleThemeChange";
import set from "set";
import { internal } from "Themes";
import { internal as internal2 } from "Themes";
import DCDDeviceManager from "DCDDeviceManager";
import set from "Themes";

const require = arg1;
let num = 24;
if (set.isAndroid()) {
  num = 32;
}
const semanticColor = internal.resolveSemanticColor(require("Themes").themes.DARK, require("Themes").colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
const semanticColor1 = internal2.resolveSemanticColor(require("Themes").themes.LIGHT, require("Themes").colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
DCDDeviceManager = DCDDeviceManager.getSystemVersionMajor();
let frozen = Object.freeze({ foreground: true });
let closure_6 = Object.freeze({});
const map = new Map();
let result = set.fileFinishedImporting("design/void/Form/native/FormConstants.tsx");

export const FORM_ROW_VERTICAL_PADDING = num;
export const RIPPLE_DARK_COLOR = semanticColor;
export const RIPPLE_LIGHT_COLOR = semanticColor1;
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
  let obj = require(500) /* set */;
  if (obj.isAndroid()) {
    if (null != color) {
      const sum = "" + color.toString() + cornerRadius + radius + tmp5;
      const value = map.get(sum);
      if (null != value) {
        return value;
      } else {
        const _Object = Object;
        obj = { color: null, radius: null, borderless: null, cornerRadius: null, foreground: null };
        obj[0] = color;
        obj[1] = radius;
        obj[2] = borderless;
        obj[3] = cornerRadius;
        obj[4] = tmp5;
        const frozen = Object.freeze(obj);
        const result = obj3.set(sum, frozen);
        return frozen;
      }
      obj3 = map;
    } else {
      require(4131) /* AccessibilityAnnouncer */.isThemeLight(theme.theme) ? semanticColor1 : semanticColor;
      const tmpResult = require(4131) /* AccessibilityAnnouncer */;
    }
  } else {
    return closure_6;
  }
};