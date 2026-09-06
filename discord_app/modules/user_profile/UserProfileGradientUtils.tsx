// discord_app/modules/user_profile/UserProfileGradientUtils.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import _modDef672 from "../../../_runtime/metro/00672__.js";
import utils_ColorUtils from "../../../discord_common/js/shared/utils/ColorUtils.tsx";
import utils_ColorDefault from "../../utils/Color.tsx";
import shared from "../../design/shared.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";

require = fn;
const ThemeTypes = fn(1074).ThemeTypes;
fn(12);
const apply = fn(12);
const memoizeResult = apply.memoize(
  (memo) => {
    const obj = { base: "#ffffff", contrastRatio: shared.WCAGContrastRatios.HighContrastText };
    const contrastingColor = obj.getContrastingColor(memo, obj);
    return utils_ColorUtils.hex2int(contrastingColor);
  },
  (arg0) => arg0,
);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/UserProfileGradientUtils.tsx");

export const getProfileTheme = function getProfileTheme(tmp4Result1) {
  if (null == tmp4Result1) {
    return null;
  } else {
    if (obj.getDarkness(tmp4Result1) > 0.5) {
      let LIGHT = ThemeTypes.DARK;
    } else {
      LIGHT = ThemeTypes.LIGHT;
    }
    obj = utils_ColorUtils;
  }
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
  if (null == overlay) {
    return 0;
  } else {
    const parseStringResult = utils_ColorDefault.parseString(overlay);
    if (null == parseStringResult) {
      return 0;
    } else {
      const items = [, ,];
      ({ red: arr[0], green: arr[1], blue: arr[2] } = parseStringResult);
      const items1 = [, ,];
      [arr2[0], arr2[1], arr2[2]] = int2rgbArrayResult;
      const alpha = parseStringResult.alpha;
      [tmp8, tmp9, tmp10] = _slicedToArray(
        items.map((item, index) => Math.floor(alpha * item + (1 - alpha) * items1[index])),
        3,
      );
      const tmp7 = _slicedToArray(
        items.map((item, index) => Math.floor(alpha * item + (1 - alpha) * items1[index])),
        3,
      );
      const _HermesInternal = HermesInternal;
      return utils_ColorUtils.rgb2int("rgba(" + tmp8 + ", " + tmp9 + ", " + tmp10 + ")");
    }
  }
  int2rgbArrayResult = utils_ColorUtils.int2rgbArray(secondaryColor);
};
export const calculateButtonColor = memoizeResult;
export const calculateModalV2BackgroundColor = apply.memoize(
  (hex2intResult, arg1, arg2) => {
    let tmp = arg2;
    if (arg2 == null) {
      if (null == hex2intResult) {
        tmp = null;
      } else {
        if (obj.getDarkness(hex2intResult) > 0.5) {
          let LIGHT = ThemeTypes.DARK;
        } else {
          LIGHT = ThemeTypes.LIGHT;
        }
        obj = utils_ColorUtils;
      }
    }
    const obj2 = _modDef672;
    const mixResult = obj2.mix(_modDef672(hex2intResult), _modDef672(arg1), 0.5, "lab");
    const result = Math.round(100 * mixResult.get("hsl.l")) / 100;
    if (tmp !== ThemeTypes.LIGHT) {
      let clampResult = _mod12.clamp(result, 0, 0.1);
    } else {
      clampResult = _mod12.clamp(result, 0.8, 1);
    }
    const tmp10 = _modDef672(hex2intResult);
    const result1 = _modDef672(mixResult).set("hsl.l", clampResult);
    return result1.num();
  },
  (arg0, arg1, arg2) => "" + arg0 + "-" + arg1 + "-" + arg2,
);
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
  modalV2BackgroundColor,
  arg2,
  arg3,
  arg4,
) {
  if (0 === arg2) {
    return [];
  } else {
    const int2rgbArrayResult = utils_ColorUtils.int2rgbArray(modalV2BackgroundColor);
    const int2rgbArrayResult1 = utils_ColorUtils.int2rgbArray(modalV2BackgroundColor);
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
  let int2rgbaResult1 = str;
  if (typeof str === "string") {
    let int2rgbaResult = int2rgbaResult1;
    if (null != result) {
      int2rgbaResult = utils_ColorUtils.int2rgba(result, 1);
    }
    const items = [int2rgbaResult];
    if (null != result1) {
      int2rgbaResult1 = utils_ColorUtils.int2rgba(result1, 1);
    }
    items[1] = int2rgbaResult1;
    let items1 = items;
  } else {
    if (null != result) {
      let int2rgbaResult2 = utils_ColorUtils.int2rgba(result, 1);
    } else {
      int2rgbaResult2 = int2rgbaResult1[0];
    }
    items1 = [int2rgbaResult2];
    if (null != result1) {
      let int2rgbaResult3 = utils_ColorUtils.int2rgba(result1, 1);
    } else {
      int2rgbaResult3 = int2rgbaResult1[1];
    }
    items1[1] = int2rgbaResult3;
  }
  return items1;
};
