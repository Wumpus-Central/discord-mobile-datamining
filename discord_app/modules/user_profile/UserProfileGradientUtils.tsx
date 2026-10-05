// discord_app/modules/user_profile/UserProfileGradientUtils.tsx
import _modDef683 from "../../../_runtime/metro/00683__.js";
import Constants from "../../Constants.tsx";
import utils_ColorUtils from "../../../discord_common/js/shared/utils/ColorUtils.tsx";
import utils_ColorDefault from "../../utils/Color.tsx";
import shared from "../../design/shared.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import module_12_mod from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

const ThemeTypes = Constants.ThemeTypes;
let module_12 = module_12_mod;
const memoizeResult = module_12.memoize(
  (primaryColor) => {
    const obj = shared;
    const obj2 = { base: "#ffffff", contrastRatio: shared.WCAGContrastRatios.HighContrastText };
    const contrastingColor = obj.getContrastingColor(primaryColor, obj2);
    const obj3 = utils_ColorUtils;
    return obj3.hex2int(contrastingColor);
  },
  (arg0) => arg0,
);
module_12 = module_12_mod;
const memoizeResult1 = module_12.memoize(
  (hex2intResult, arg1, arg2) => {
    let clampResult;
    let tmp = arg2;
    if (arg2 == null) {
      let tmp2 = null;
      if (null != hex2intResult) {
        let LIGHT;
        const obj = utils_ColorUtils;
        if (obj.getDarkness(hex2intResult) > 0.5) {
          LIGHT = ThemeTypes.DARK;
        } else {
          LIGHT = ThemeTypes.LIGHT;
        }
        tmp2 = LIGHT;
      }
      tmp = tmp2;
    }
    const LIGHT2 = ThemeTypes.LIGHT;
    const mix = _modDef683.mix;
    _modDef683;
    const tmp10 = _modDef683(hex2intResult);
    const mixResult = mix(tmp10, _modDef683(arg1), 0.5, "lab");
    const result = Math.round(100 * mixResult.get("hsl.l")) / 100;
    if (tmp !== LIGHT2) {
      const obj4 = module_12;
      clampResult = obj4.clamp(result, 0, 0.1);
    } else {
      const obj3 = module_12;
      clampResult = obj3.clamp(result, 0.8, 1);
    }
    const obj5 = _modDef683(mixResult);
    const result1 = obj5.set("hsl.l", clampResult);
    return result1.num();
  },
  (arg0, arg1, arg2) => "" + arg0 + "-" + arg1 + "-" + arg2,
);
let result = size.fileFinishedImporting("modules/user_profile/UserProfileGradientUtils.tsx");

export const getProfileTheme = function getProfileTheme(first1) {
  let tmp = null;
  if (null != first1) {
    let LIGHT;
    const obj = utils_ColorUtils;
    if (obj.getDarkness(first1) > 0.5) {
      LIGHT = ThemeTypes.DARK;
    } else {
      LIGHT = ThemeTypes.LIGHT;
    }
    tmp = LIGHT;
  }
  return tmp;
};
export const getValueInColorGradientByPercentage = function getValueInColorGradientByPercentage(items, items1, arg2) {
  const result = arg2 / 100;
  const diff = 1 - result;
  items = [, ,];
  items[0] = Math.round(items[0] * diff + items1[0] * result);
  items[1] = Math.round(items[1] * diff + items1[1] * result);
  items[2] = Math.round(items[2] * diff + items1[2] * result);
  return items;
};
export const calculateOverlayedColor = function calculateOverlayedColor(secondaryColor, overlay) {
  let tmp10;
  let tmp8;
  let tmp9;
  const f95896 = (item, index) => Math.floor(alpha * item + (1 - alpha) * items1[index]);
  const obj = utils_ColorUtils;
  const int2rgbArrayResult = obj.int2rgbArray(secondaryColor);
  if (null == overlay) {
    return 0;
  } else {
    const obj2 = utils_ColorDefault;
    const parseStringResult = obj2.parseString(overlay);
    if (null == parseStringResult) {
      return 0;
    } else {
      const items = [, ,];
      ({ red: arr[0], green: arr[1], blue: arr[2] } = parseStringResult);
      const items1 = [, ,];
      [arr2[0], arr2[1], arr2[2]] = int2rgbArrayResult;
      const alpha = parseStringResult.alpha;
      [tmp8, tmp9, tmp10] = items.map(f95896);
      _slicedToArray(items.map(f95896), 3);
      const _HermesInternal = HermesInternal;
      const tmpResult = utils_ColorUtils;
      return tmpResult.rgb2int("rgba(" + tmp8 + ", " + tmp9 + ", " + tmp10 + ")");
    }
  }
};
export const calculateButtonColor = memoizeResult;
export const calculateModalV2BackgroundColor = memoizeResult1;
export const getGradientPercentageColorInRgb = function getGradientPercentageColorInRgb(arg0, arg1, arg2) {
  const result = arg2 / 100;
  const diff = 1 - result;
  const items = [
    Math.round(arg0[0] * diff + arg1[0] * result),
    Math.round(arg0[1] * diff + arg1[1] * result),
    Math.round(arg0[2] * diff + arg1[2] * result),
  ];
  return "rgba(" + items[0] + ", " + items[1] + ", " + items[2] + ", 1)";
};
export const calculateGradientSplitColors = function calculateGradientSplitColors(
  modalV2BackgroundColor,
  modalV2BackgroundColor2,
  arg2,
  arg3,
  arg4,
) {
  if (0 === arg2) {
    return [];
  } else {
    const obj = utils_ColorUtils;
    const int2rgbArrayResult = obj.int2rgbArray(modalV2BackgroundColor);
    const obj2 = utils_ColorUtils;
    const int2rgbArrayResult1 = obj2.int2rgbArray(modalV2BackgroundColor);
    const result = (100 * arg3) / arg2 / 100;
    const diff = 1 - result;
    const _Math = Math;
    const items = [Math.round(int2rgbArrayResult[0] * diff + int2rgbArrayResult1[0] * result), ,];
    const _Math2 = Math;
    items[1] = Math.round(int2rgbArrayResult[1] * diff + int2rgbArrayResult1[1] * result);
    const _Math3 = Math;
    items[2] = Math.round(int2rgbArrayResult[2] * diff + int2rgbArrayResult1[2] * result);
    const _HermesInternal = HermesInternal;
    const items1 = ["rgba(" + items[0] + ", " + items[1] + ", " + items[2] + ", 1)"];
    const result1 = (100 * arg4) / arg2 / 100;
    const diff1 = 1 - result1;
    const _Math4 = Math;
    const items2 = [Math.round(int2rgbArrayResult[0] * diff1 + int2rgbArrayResult1[0] * result1), ,];
    const _Math5 = Math;
    items2[1] = Math.round(int2rgbArrayResult[1] * diff1 + int2rgbArrayResult1[1] * result1);
    const _Math6 = Math;
    items2[2] = Math.round(int2rgbArrayResult[2] * diff1 + int2rgbArrayResult1[2] * result1);
    const _HermesInternal2 = HermesInternal;
    items1[1] = "rgba(" + items2[0] + ", " + items2[1] + ", " + items2[2] + ", 1)";
    return items1;
  }
};
export const getUserProfileGradientContainerColors = function getUserProfileGradientContainerColors(
  result,
  result1,
  str,
) {
  let items1;
  let int2rgbaResult1 = str;
  if (typeof str === "string") {
    let int2rgbaResult = int2rgbaResult1;
    if (null != result) {
      const obj3 = utils_ColorUtils;
      int2rgbaResult = obj3.int2rgba(result, 1);
    }
    const items = [int2rgbaResult];
    if (null != result1) {
      const obj4 = utils_ColorUtils;
      int2rgbaResult1 = obj4.int2rgba(result1, 1);
    }
    items[1] = int2rgbaResult1;
    items1 = items;
  } else {
    let int2rgbaResult2;
    let int2rgbaResult3;
    if (null != result) {
      const obj = utils_ColorUtils;
      int2rgbaResult2 = obj.int2rgba(result, 1);
    } else {
      int2rgbaResult2 = int2rgbaResult1[0];
    }
    items1 = [int2rgbaResult2];
    if (null != result1) {
      const obj2 = utils_ColorUtils;
      int2rgbaResult3 = obj2.int2rgba(result1, 1);
    } else {
      int2rgbaResult3 = int2rgbaResult1[1];
    }
    items1[1] = int2rgbaResult3;
  }
  return items1;
};
