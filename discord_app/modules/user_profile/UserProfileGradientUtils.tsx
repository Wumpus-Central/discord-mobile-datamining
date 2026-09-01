// discord_app/modules/user_profile/UserProfileGradientUtils.tsx
import apply2 from "../../../_runtime/00012_apply.js";
import int2hslRaw from "../../../discord_common/js/shared/utils/ColorUtils.tsx";
import nDefault from "../../../_runtime/00689_n.js";
import AccessibilityAnnouncer from "../../design/shared.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import { ThemeTypes } from "../../Constants.tsx";
import apply from "../../../_runtime/00012_apply.js";

require = arg1;
const memoizeResult = apply.memoize(
  (arg0) => {
    let obj = AccessibilityAnnouncer;
    obj = { base: "#ffffff", contrastRatio: AccessibilityAnnouncer.WCAGContrastRatios.HighContrastText };
    const contrastingColor = obj.getContrastingColor(arg0, obj);
    return int2hslRaw.hex2int(contrastingColor);
  },
  (arg0) => arg0,
);
const memoizeResult1 = apply.memoize(
  (hex2intResult) => {
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
        obj = int2hslRaw;
      }
    }
    const obj2 = nDefault;
    const tmp8 = importDefault;
    const mixResult = obj2.mix(nDefault(hex2intResult), nDefault(arg1), 0.5, "lab");
    const result = Math.round(100 * mixResult.get("hsl.l")) / 100;
    if (tmp !== ThemeTypes.LIGHT) {
      let clampResult = apply2.clamp(result, 0, 0.1);
      const obj5 = apply2;
    } else {
      clampResult = apply2.clamp(result, 0.8, 1);
      const obj4 = apply2;
    }
    const tmp10 = nDefault(hex2intResult);
    const result1 = nDefault(mixResult).set("hsl.l", clampResult);
    return result1.num();
  },
  (arg0, arg1, arg2) => "" + arg0 + "-" + arg1 + "-" + arg2,
);
let result = require("set").fileFinishedImporting("modules/user_profile/UserProfileGradientUtils.tsx");

export const getProfileTheme = function getProfileTheme(first) {
  if (null == first) {
    return null;
  } else {
    if (obj.getDarkness(first) > 0.5) {
      let LIGHT = ThemeTypes.DARK;
    } else {
      LIGHT = ThemeTypes.LIGHT;
    }
    obj = int2hslRaw;
  }
};
export const getValueInColorGradientByPercentage = function getValueInColorGradientByPercentage(items, items1, arg2) {
  const result = arg2 / 100;
  const diff = 1 - result;
  items = [
    Math.round(items[0] * diff + items1[0] * result),
    Math.round(items[1] * diff + items1[1] * result),
    Math.round(items[2] * diff + items1[2] * result),
  ];
  return items;
};
export const calculateOverlayedColor = function calculateOverlayedColor(secondaryColor, overlay) {
  const obj = items1(688);
  const tmp = items1;
  if (null == overlay) {
    return 0;
  } else {
    const parseStringResult = alpha(4327).parseString(overlay);
    if (null == parseStringResult) {
      return 0;
    } else {
      const items = [, ,];
      ({ red: arr[0], green: arr[1], blue: arr[2] } = parseStringResult);
      items1 = [, ,];
      [arr2[0], arr2[1], arr2[2]] = int2rgbArrayResult;
      alpha = parseStringResult.alpha;
      [tmp8, tmp9, tmp10] = callback(
        items.map((arg0, arg1) => Math.floor(alpha * arg0 + (1 - alpha) * items1[arg1])),
        3,
      );
      const tmp7 = callback(
        items.map((arg0, arg1) => Math.floor(alpha * arg0 + (1 - alpha) * items1[arg1])),
        3,
      );
      const _HermesInternal = HermesInternal;
      return tmp(688).rgb2int("rgba(" + tmp8 + ", " + tmp9 + ", " + tmp10 + ")");
    }
    const obj2 = alpha(4327);
  }
  int2rgbArrayResult = items1(688).int2rgbArray(secondaryColor);
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
  modalV2BackgroundColor,
) {
  if (0 === arg2) {
    return [];
  } else {
    const int2rgbArrayResult = int2hslRaw.int2rgbArray(modalV2BackgroundColor);
    const obj = int2hslRaw;
    const int2rgbArrayResult1 = int2hslRaw.int2rgbArray(modalV2BackgroundColor);
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
  closure_2,
) {
  let int2rgbaResult1 = closure_2;
  if (typeof closure_2 === "string") {
    let int2rgbaResult = int2rgbaResult1;
    if (null != result) {
      int2rgbaResult = int2hslRaw.int2rgba(result, 1);
      const obj3 = int2hslRaw;
    }
    const items = [int2rgbaResult];
    if (null != result1) {
      int2rgbaResult1 = int2hslRaw.int2rgba(result1, 1);
      const obj4 = int2hslRaw;
    }
    items[1] = int2rgbaResult1;
    let items1 = items;
  } else {
    if (null != result) {
      let int2rgbaResult2 = int2hslRaw.int2rgba(result, 1);
      const obj = int2hslRaw;
    } else {
      int2rgbaResult2 = int2rgbaResult1[0];
    }
    items1 = [int2rgbaResult2];
    if (null != result1) {
      let int2rgbaResult3 = int2hslRaw.int2rgba(result1, 1);
      const obj2 = int2hslRaw;
    } else {
      int2rgbaResult3 = int2rgbaResult1[1];
    }
    items1[1] = int2rgbaResult3;
  }
  return items1;
};
