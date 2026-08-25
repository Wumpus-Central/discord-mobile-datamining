// discord_app/modules/client_themes/native/ClientThemesUtils.tsx
import nDefault from "../../../../_runtime/00689_n.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ClientThemeType from "../ClientThemesTypes.tsx";
import AccessibilityAnnouncer from "../../../design/shared.tsx";
import hexToRgba from "../../../utils/ColorUtils.tsx";
import hslToRgbDefault from "../../../utils/Color.tsx";
import getGuildThemeNameDefault from "useColorThemeBackground.tsx";
import getCustomThemesName from "MobileThemesUtils.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../user_settings/ThemeStore.tsx";
import closure_6 from "../ClientThemesBackgroundStore.tsx";
import closure_7 from "CustomThemeMobileStore.tsx";

require = arg1;
function getGradientColorByPercentage(type, END) {
  if (type.type === colors(1349).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    ({ colors, colors: colors2 } = type);
    const mapped = colors.map((arg0) => callback(712).unsafe_rawColors[arg0.token]);
    const mapped1 = colors2.map((stop) => stop.stop);
    const obj6 = nDefault;
    const scaleResult = nDefault.scale(mapped);
    const obj8 = nDefault.scale(mapped).domain(mapped1)(END);
    obj = { r: null, g: null, b: null };
    [obj9[0], obj9[1], obj9[2]] = callback(nDefault.scale(mapped).domain(mapped1)(END).rgb(), 3);
    return obj;
  } else {
    colors = type.customThemeSettings.colors;
    if (1 === colors.length) {
      return tmp(4228).hexToRgb(colors[0]);
    } else {
      const mapped2 = colors.map((arg0, arg1) => arg1 / (colors.length - 1) * 100);
      obj = nDefault;
      const scaleResult1 = obj.scale(colors);
      const obj3 = obj.scale(colors).domain(mapped2)(END);
      obj = { r: null, g: null, b: null };
      [obj4[0], obj4[1], obj4[2]] = callback(obj.scale(colors).domain(mapped2)(END).rgb(), 3);
      return obj;
    }
  }
  tmp = colors;
}
function getBottomColorWithOpacity(type, hexToRgbResult, arg2) {
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
  const tmp = getGradientColorByPercentage;
  const tmp2 = require;
  const tmp2Result = hexToRgba;
  const tmp7 = new hslToRgbDefault(tmpResult.r, tmpResult.g, tmpResult.b, arg2);
  const mixColorsResult = tmp2Result.mixColors(tmp7, new hslToRgbDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - arg2));
  const tmp8 = new hslToRgbDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - arg2);
  const obj2 = nDefault;
  return nDefault.rgb(mixColorsResult.red, mixColorsResult.green, mixColorsResult.blue).hex("rgb");
}
function getTopColorWithOpacity(type, hexToRgbResult, arg2) {
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
  const tmp = getGradientColorByPercentage;
  const tmp2 = require;
  const tmp2Result = hexToRgba;
  const tmp7 = new hslToRgbDefault(tmpResult.r, tmpResult.g, tmpResult.b, arg2);
  const mixColorsResult = tmp2Result.mixColors(tmp7, new hslToRgbDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - arg2));
  const tmp8 = new hslToRgbDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - arg2);
  const obj2 = nDefault;
  return nDefault.rgb(mixColorsResult.red, mixColorsResult.green, mixColorsResult.blue).hex("rgb");
}
function calculateGradientValueWithOpacity(customBackgroundGradient, END, theme) {
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
    if (arg3 != null) {
      let tmp11 = arg3;
    } else {
      let tmpResult = tmp(1363);
      const result = 0.2 * tmp14;
      if (tmpResult.isThemeDark(theme)) {
        let sum = 0.12 + result;
      } else {
        sum = 0.3 + result;
      }
    }
  } else {
    tmp11 = arg3;
    if (arg3 == null) {
      tmpResult = tmp(1363);
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
    const mixColorsResult = tmp(4228).mixColors(tmp35, tmp38);
    const tmpResult1 = tmp(4228);
    const obj5 = nDefault;
    return nDefault.rgb(mixColorsResult.red, mixColorsResult.green, mixColorsResult.blue).hex("rgb");
  }
}
let c8 = 128;
let obj = { LEVEL_9: 0.9, [0.9]: "LEVEL_9", LEVEL_85: 0.85, [0.85]: "LEVEL_85", LEVEL_8: 0.8, [0.8]: "LEVEL_8", LEVEL_75: 0.75, [0.75]: "LEVEL_75", LEVEL_7: 0.7, [0.7]: "LEVEL_7", LEVEL_6: 0.6, [0.6]: "LEVEL_6", LEVEL_5: 0.5, [0.5]: "LEVEL_5", LEVEL_4: 0.4, [0.4]: "LEVEL_4", LEVEL_35: 0.35, [0.35]: "LEVEL_35", LEVEL_3: 0.3, [0.3]: "LEVEL_3", LEVEL_25: 0.25, [0.25]: "LEVEL_25", LEVEL_2: 0.2, [0.2]: "LEVEL_2", LEVEL_15: 0.15, [0.15]: "LEVEL_15", LEVEL_1: 0.1, [0.1]: "LEVEL_1" };
obj = { DARK: ThemesDefault.unsafe_rawColors.BLACK, LIGHT: ThemesDefault.unsafe_rawColors.WHITE };
obj = { START: 0, [0]: "START", MID: 50, [50]: "MID", END: 100, [100]: "END" };
let result = require("set").fileFinishedImporting("modules/client_themes/native/ClientThemesUtils.tsx");

export const GRADIENT_ANGLE_BREAKPOINT = 128;
export const OverlayOpacity = obj;
export const OverlayColors = obj;
export const GradientPercentage = obj;
export const colorToHex = function colorToHex(red) {
  obj = nDefault;
  return nDefault.rgb(red.red, red.green, red.blue).hex("rgb");
};
export const getClientThemesGradientColorByPercentage = function getClientThemesGradientColorByPercentage(arg0, arg1) {
  ({ colors, colors: colors2 } = arg0);
  const mapped = colors.map((arg0) => callback(712).unsafe_rawColors[arg0.token]);
  const mapped1 = colors2.map((stop) => stop.stop);
  obj = nDefault;
  const scaleResult = obj.scale(mapped);
  const tmp3 = callback(obj.scale(mapped).domain(mapped1)(arg1).rgb(), 3);
  obj = { r: tmp3[0], g: tmp3[1], b: tmp3[2] };
  return obj;
};
export const getClientThemesGradientHexColors = function getClientThemesGradientHexColors(colors) {
  colors = colors.colors;
  return colors.map((arg0) => callback(712).unsafe_rawColors[arg0.token]);
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
        let mapped = colors.map((arg0) => callback(712).unsafe_rawColors[arg0.token]);
      } else {
        mapped = gradient.customThemeSettings.colors;
      }
      let first = mapped[0];
      let tmp5 = mapped[mapped.length - 1];
      if (gradient.type === ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const colors1 = gradient.customThemeSettings.colors;
        const mapped1 = colors1.map((arg0) => callback(689)(arg0).luminance());
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(mapped1, 0);
        const _Math2 = Math;
        const tmp17 = nDefault;
        const result = nDefault(colors1[mapped1.indexOf(mapped1, HermesBuiltin.apply(min, items, Math))]).set("hsl.s", 0.2);
        const result1 = result.set("hsl.l", 0.7);
        let hexResult = result1.hex();
        const _Math3 = Math;
        const items1 = [];
        const tmp17Result = nDefault(colors1[mapped1.indexOf(mapped1, HermesBuiltin.apply(min, items, Math))]);
        HermesBuiltin.arraySpread(mapped1, 0);
        const _Math4 = Math;
        const tmp24 = nDefault;
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
        dark = tmp20.dark;
      }
      if (null == dark) {
        let light;
        if (tmp20 != null) {
          light = tmp20.light;
        }
        if (null == light) {
          return closure_1_15(tmp, END, closure_3);
        }
      }
      obj = END(table[10]);
      const tmp7 = END;
      const tmp8 = table;
      const tmp11 = END(table[10]).isThemeDark(closure_3) ? closure_1_9.LEVEL_2 : closure_1_9.LEVEL_4;
      if (tmp7Result.isThemeDark(closure_3)) {
        let dark1;
        if (!tmp12) {
          dark1 = tmp20.dark;
        }
        light = dark1;
      } else if (!tmp12) {
        light = tmp20.light;
      }
      if (light == null) {
        light = tmp11;
      }
      return closure_1_15(tmp, END, closure_3, light);
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
  const tmp = require;
  const tmp4 = obj.isThemeDark(theme.theme) ? obj.DARK : obj.LIGHT;
  return hexToRgba.hexWithOpacity(tmp4, obj.LEVEL_1);
};