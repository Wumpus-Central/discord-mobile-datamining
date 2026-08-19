// === Module 4194: getGradientColorByPercentage ===

// Module 4194 (getGradientColorByPercentage)
import nDefault from "n" /* 689 */;
import ThemesDefault from "Themes" /* 712 */;
import ClientThemeType from "ClientThemeType" /* 1349 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import hexToRgba from "hexToRgba" /* 4223 */;
import hslToRgbDefault from "hslToRgb" /* 4224 */;
import getGuildThemeNameDefault from "getGuildThemeName" /* 4225 */;
import getCustomThemesName from "getCustomThemesName" /* 4307 */;
import useThemeDefault from "useTheme" /* 4310 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled" /* 4195 */;
import reset from "reset" /* 1346 */;

require = fn;
function getGradientColorByPercentage(type, MID) {
  if (type.type === colors(1349).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    ({ colors, colors: colors2 } = type);
    const mapped = colors.map((item, index) => callback(712).unsafe_rawColors[item.token]);
    const mapped1 = colors2.map((item, index) => item.stop);
    const scaleResult = nDefault.scale(mapped);
    const obj8 = nDefault.scale(mapped).domain(mapped1)(MID);
    obj = { r: null, g: null, b: null };
    [obj9[0], obj9[1], obj9[2]] = callback(nDefault.scale(mapped).domain(mapped1)(MID).rgb(), 3);
    return obj;
  } else {
    colors = type.customThemeSettings.colors;
    if (1 === colors.length) {
      return tmp(4223).hexToRgb(colors[0]);
    } else {
      const mapped2 = colors.map((item, index) => index / (colors.length - 1) * 100);
      obj = nDefault;
      const scaleResult1 = obj.scale(colors);
      const obj3 = obj.scale(colors).domain(mapped2)(MID);
      obj = { r: null, g: null, b: null };
      [obj4[0], obj4[1], obj4[2]] = callback(obj.scale(colors).domain(mapped2)(MID).rgb(), 3);
      return obj;
    }
  }
  tmp = colors;
}
function getBottomColorWithOpacity(type, hexToRgbResult, light) {
  if (type.type === ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let gradientAngle = type.angle;
  } else {
    gradientAngle = type.customThemeSettings.gradientAngle;
  }
  if (gradientAngle > c8) {
    let START = obj.END;
  } else {
    START = obj.START;
  }
  const tmpResult = getGradientColorByPercentage(type, START);
  const tmp2Result = hexToRgba;
  const tmp7 = new hslToRgbDefault(tmpResult.r, tmpResult.g, tmpResult.b, light);
  const color = tmp2Result.mixColors(tmp7, new hslToRgbDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - light));
  const tmp8 = new hslToRgbDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - light);
  return nDefault.rgb(color.red, color.green, color.blue).hex("rgb");
}
function getTopColorWithOpacity(type, hexToRgbResult, light) {
  if (type.type === ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let gradientAngle = type.angle;
  } else {
    gradientAngle = type.customThemeSettings.gradientAngle;
  }
  if (gradientAngle > c8) {
    let END = obj.START;
  } else {
    END = obj.END;
  }
  const tmpResult = getGradientColorByPercentage(type, END);
  const tmp2Result = hexToRgba;
  const tmp7 = new hslToRgbDefault(tmpResult.r, tmpResult.g, tmpResult.b, light);
  const color = tmp2Result.mixColors(tmp7, new hslToRgbDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - light));
  const tmp8 = new hslToRgbDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - light);
  return nDefault.rgb(color.red, color.green, color.blue).hex("rgb");
}
function calculateGradientValueWithOpacity(customBackgroundGradient, END, theme, light) {
  obj = AccessibilityAnnouncer;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const hexToRgb = hexToRgba.hexToRgb;
  if (isThemeDarkResult) {
    let hexToRgbResult = hexToRgb(tmp5.DARK);
  } else {
    hexToRgbResult = hexToRgb(tmp5.LIGHT);
  }
  if (customBackgroundGradient.type === ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let MID2 = customBackgroundGradient.midpointPercentage;
    if (MID2 == null) {
      MID2 = obj.MID;
    }
    let MID = MID2;
  } else {
    MID = obj.MID;
  }
  let tmp10 = END;
  if (END == null) {
    tmp10 = MID;
  }
  if (customBackgroundGradient.type === ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    if (light != null) {
      let tmp11 = light;
    } else {
      let tmpResult = AccessibilityAnnouncer;
      const result = 0.2 * tmp14;
      if (tmpResult.isThemeDark(theme)) {
        let sum = 0.12 + result;
      } else {
        sum = 0.3 + result;
      }
    }
  } else {
    tmp11 = light;
    if (light == null) {
      tmpResult = AccessibilityAnnouncer;
      tmpResult.isThemeDark(theme) ? obj.LEVEL_2 : obj.LEVEL_4;
    }
  }
  if (customBackgroundGradient.type === ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let gradientAngle = customBackgroundGradient.angle;
  } else {
    gradientAngle = customBackgroundGradient.customThemeSettings.gradientAngle;
  }
  if (tmp10 === obj.START) {
    if (gradientAngle < c8) {
      let tmp26 = getBottomColorWithOpacity(customBackgroundGradient, hexToRgbResult, tmp11);
    } else {
      tmp26 = getTopColorWithOpacity(customBackgroundGradient, hexToRgbResult, tmp11);
    }
  } else if (tmp10 === tmp18.END) {
    if (gradientAngle > c8) {
      let tmp21 = getBottomColorWithOpacity(customBackgroundGradient, hexToRgbResult, tmp11);
    } else {
      tmp21 = getTopColorWithOpacity(customBackgroundGradient, hexToRgbResult, tmp11);
    }
  } else {
    const tmp30 = getGradientColorByPercentage(customBackgroundGradient, tmp10);
    const tmp35 = new hslToRgbDefault(tmp30.r, tmp30.g, tmp30.b, tmp11);
    const tmp38 = new hslToRgbDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - tmp11);
    const color = hexToRgba.mixColors(tmp35, tmp38);
    const tmpResult1 = hexToRgba;
    return nDefault.rgb(color.red, color.green, color.blue).hex("rgb");
  }
}
let c8 = 128;
let obj = { START: 0, [0]: "START", MID: 50, [50]: "MID", END: 100, [100]: "END" };
let result = require("obj132").fileFinishedImporting("modules/client_themes/native/ClientThemesUtils.tsx");

export const GRADIENT_ANGLE_BREAKPOINT = 128;
export const OverlayOpacity = obj;
export const OverlayColors = obj;
export const GradientPercentage = obj;
export const colorToHex = function colorToHex(red) {
  return nDefault.rgb(red.red, red.green, red.blue).hex("rgb");
};
export const getClientThemesGradientColorByPercentage = function getClientThemesGradientColorByPercentage(arg0, arg1) {
  ({ colors, colors: colors2 } = arg0);
  const mapped = colors.map((item, index) => callback(712).unsafe_rawColors[item.token]);
  const mapped1 = colors2.map((item, index) => item.stop);
  obj = nDefault;
  const scaleResult = obj.scale(mapped);
  const tmp3 = callback(obj.scale(mapped).domain(mapped1)(arg1).rgb(), 3);
  obj = { r: tmp3[0], g: tmp3[1], b: tmp3[2] };
  return obj;
};
export const getClientThemesGradientHexColors = function getClientThemesGradientHexColors(colors) {
  colors = colors.colors;
  return colors.map((item, index) => callback(712).unsafe_rawColors[item.token]);
};
export const getGradientThemeMetadata = function getGradientThemeMetadata(gradientThemeFromFlags, gradient) {
  if (null != gradientThemeFromFlags) {
    if (null != gradient) {
      const tmp11 = calculateGradientValueWithOpacity(gradient, obj.START, gradient.theme);
      const tmp13 = calculateGradientValueWithOpacity(gradient, obj.END, gradient.theme);
      if (gradient.type === ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        let gradientAngle = gradient.angle;
      } else {
        gradientAngle = gradient.customThemeSettings.gradientAngle;
      }
      let tmp2 = tmp13;
      if (gradientAngle > c8) {
        tmp2 = tmp11;
      }
      let tmp3 = tmp11;
      if (gradientAngle > c8) {
        tmp3 = tmp13;
      }
      if (gradient.type === ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const colors = gradient.colors;
        let mapped = colors.map((item, index) => callback(712).unsafe_rawColors[item.token]);
      } else {
        mapped = gradient.customThemeSettings.colors;
      }
      let first = mapped[0];
      let tmp5 = mapped[mapped.length - 1];
      if (gradient.type === ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const colors1 = gradient.customThemeSettings.colors;
        const mapped1 = colors1.map((item, index) => callback(689)(item).luminance());
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(mapped1, 0);
        const _Math2 = Math;
        const result = nDefault(colors1[mapped1.indexOf(mapped1, HermesBuiltin.apply(min, items, Math))]).set("hsl.s", 0.2);
        const result1 = result.set("hsl.l", 0.7);
        let hexResult = result1.hex();
        const _Math3 = Math;
        const items1 = [];
        const tmp17Result = nDefault(colors1[mapped1.indexOf(mapped1, HermesBuiltin.apply(min, items, Math))]);
        HermesBuiltin.arraySpread(mapped1, 0);
        const _Math4 = Math;
        const result2 = nDefault(colors1[mapped1.indexOf(mapped1, HermesBuiltin.apply(max, items1, Math))]).set("hsl.s", 0.2);
        const result3 = result2.set("hsl.l", 0.9);
        const hexResult1 = result3.hex();
        let tmp6 = hexResult1;
        if ("dark" === gradientThemeFromFlags) {
          tmp6 = hexResult;
        }
        if ("dark" === gradientThemeFromFlags) {
          hexResult = hexResult1;
        }
        tmp5 = hexResult;
        first = tmp6;
        const tmp24Result = nDefault(colors1[mapped1.indexOf(mapped1, HermesBuiltin.apply(max, items1, Math))]);
      }
      obj = { theme: null, colors: null };
      obj[0] = gradientThemeFromFlags;
      obj = { "gradient.start": null, "gradient.mid": null, "gradient.end": null, "gradient.top": null, "gradient.bottom": null, "gradient.primary": null, "gradient.secondary": null };
      obj[0] = tmp11;
      obj[1] = calculateGradientValueWithOpacity(gradient, obj.MID, gradient.theme);
      obj[2] = tmp13;
      obj[3] = tmp2;
      obj[4] = tmp3;
      obj[5] = first;
      obj[6] = tmp5;
      obj[1] = obj;
      return obj;
    }
  }
  return null;
};
export const getGradientValue = function getGradientValue(theme, END) {
  return calculateGradientValueWithOpacity(theme, END, theme.theme);
};
export const useGradientValue = function useGradientValue(END) {
  closure_0 = END;
  importDefault = arg1;
  const tmp = getGuildThemeNameDefault();
  dependencyMap = tmp;
  const tmp2 = useThemeDefault();
  closure_3 = tmp2;
  const items = [tmp, , , , ];
  let dark;
  if (arg1 != null) {
    dark = arg1.dark;
  }
  items[1] = dark;
  let light;
  if (arg1 != null) {
    light = arg1.light;
  }
  items[2] = light;
  items[3] = END;
  items[4] = tmp2;
  return React.useMemo(() => {
    if (null == table) {
      return null;
    } else {
      let dark;
      if (closure_1 != null) {
        dark = closure_1.dark;
      }
      if (null == dark) {
        let light;
        if (closure_1 != null) {
          light = closure_1.light;
        }
        if (null == light) {
          return calculateGradientValueWithOpacity(table, END, closure_3);
        }
      }
      obj = END(table[10]);
      const tmp11 = END(table[10]).isThemeDark(closure_3) ? closure_1_9.LEVEL_2 : closure_1_9.LEVEL_4;
      if (tmp7Result.isThemeDark(closure_3)) {
        let dark1;
        if (!tmp12) {
          dark1 = closure_1.dark;
        }
        light = dark1;
      } else if (!tmp12) {
        light = closure_1.light;
      }
      if (light == null) {
        light = tmp11;
      }
      return calculateGradientValueWithOpacity(table, END, closure_3, light);
    }
  }, items);
};
export const getEmbedScrollGradientBackground = function getEmbedScrollGradientBackground() {
  let customBackgroundGradient = getCustomThemesName.getCustomBackgroundGradient();
  if (customBackgroundGradient == null) {
    customBackgroundGradient = closure_6.gradientPreset;
  }
  if (customBackgroundGradient == null) {
    customBackgroundGradient = null;
  }
  let tmp3 = null;
  if (null != customBackgroundGradient) {
    tmp3 = calculateGradientValueWithOpacity(customBackgroundGradient, undefined, customBackgroundGradient.theme);
  }
  return tmp3;
};
export const getEmbedBackground = function getEmbedBackground() {
  if (null == closure_6.gradientPreset) {
    if (!closure_7.hasCustomTheme()) {
      return null;
    }
  }
  obj = AccessibilityAnnouncer;
  const tmp4 = obj.isThemeDark(theme.theme) ? obj.DARK : obj.LIGHT;
  return hexToRgba.hexWithOpacity(tmp4, obj.LEVEL_1);
};