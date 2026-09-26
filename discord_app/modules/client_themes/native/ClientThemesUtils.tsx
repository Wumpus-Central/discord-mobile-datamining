// === Module 4652: client_themes/ClientThemesUtils ===

// Module 4652 (client_themes/ClientThemesUtils)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1230 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import utils_ColorDefault from "utils/Color" /* 4684 */;
import shared from "shared" /* 4685 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4688 */;
import MobileThemesUtils from "MobileThemesUtils" /* 4764 */;
import useThemeDefault from "useTheme" /* 4767 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4653 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1227 */;

require = fn;
function getGradientColorByPercentage(type, MID) {
  if (type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    ({ colors, colors: colors2 } = type);
    const mapped = colors.map((item) => nativeDefault.unsafe_rawColors[item.token]);
    const mapped1 = colors2.map((stop) => stop.stop);
    const scaleResult = _modDef672.scale(mapped);
    const obj8 = _modDef672.scale(mapped).domain(mapped1)(MID);
    [obj9.r, obj9.g, obj9.b] = _modDef672.scale(mapped).domain(mapped1)(MID).rgb();
    return { r: null, g: null, b: null };
  } else {
    const colors1 = type.customThemeSettings.colors;
    if (1 === colors1.length) {
      return ColorUtils.hexToRgb(colors1[0]);
    } else {
      const mapped2 = colors1.map((item, index) => index / (colors1.length - 1) * 100);
      const scaleResult1 = _modDef672.scale(colors1);
      obj3 = _modDef672.scale(colors1).domain(mapped2)(MID);
      [obj4.r, obj4.g, obj4.b] = _modDef672.scale(colors1).domain(mapped2)(MID).rgb();
      return { r: null, g: null, b: null };
    }
  }
}
function getBottomColorWithOpacity(type, hexToRgbResult, light) {
  if (type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let gradientAngle = type.angle;
  } else {
    gradientAngle = type.customThemeSettings.gradientAngle;
  }
  if (gradientAngle > c8) {
    let START = obj3.END;
  } else {
    START = obj3.START;
  }
  const tmpResult = getGradientColorByPercentage(type, START);
  const tmp2Result = ColorUtils;
  const tmp7 = new utils_ColorDefault(tmpResult.r, tmpResult.g, tmpResult.b, light);
  const color = tmp2Result.mixColors(tmp7, new utils_ColorDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - light));
  const tmp8 = new utils_ColorDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - light);
  return _modDef672.rgb(color.red, color.green, color.blue).hex("rgb");
}
function getTopColorWithOpacity(type, hexToRgbResult, light) {
  if (type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let gradientAngle = type.angle;
  } else {
    gradientAngle = type.customThemeSettings.gradientAngle;
  }
  if (gradientAngle > c8) {
    let END = obj3.START;
  } else {
    END = obj3.END;
  }
  const tmpResult = getGradientColorByPercentage(type, END);
  const tmp2Result = ColorUtils;
  const tmp7 = new utils_ColorDefault(tmpResult.r, tmpResult.g, tmpResult.b, light);
  const color = tmp2Result.mixColors(tmp7, new utils_ColorDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - light));
  const tmp8 = new utils_ColorDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - light);
  return _modDef672.rgb(color.red, color.green, color.blue).hex("rgb");
}
function calculateGradientValueWithOpacity(customBackgroundGradient, END, theme, light) {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const hexToRgb = ColorUtils.hexToRgb;
  if (isThemeDarkResult) {
    let hexToRgbResult = hexToRgb(obj2.DARK);
  } else {
    hexToRgbResult = hexToRgb(obj2.LIGHT);
  }
  if (customBackgroundGradient.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let MID2 = customBackgroundGradient.midpointPercentage;
    if (MID2 == null) {
      MID2 = obj3.MID;
    }
    let MID = MID2;
  } else {
    MID = obj3.MID;
  }
  let tmp10 = END;
  if (END == null) {
    tmp10 = MID;
  }
  if (customBackgroundGradient.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    if (light != null) {
      let tmp11 = light;
    } else {
      const result = 0.2 * tmp14;
      if (tmpResult.isThemeDark(theme)) {
        let sum = 0.12 + result;
      } else {
        sum = 0.3 + result;
      }
      tmpResult = shared;
    }
  } else {
    tmp11 = light;
    if (light == null) {
      shared.isThemeDark(theme) ? obj.LEVEL_2 : obj.LEVEL_4;
      const tmpResult3 = shared;
    }
  }
  if (customBackgroundGradient.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let gradientAngle = customBackgroundGradient.angle;
  } else {
    gradientAngle = customBackgroundGradient.customThemeSettings.gradientAngle;
  }
  if (tmp10 === obj3.START) {
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
    const tmp35 = new utils_ColorDefault(tmp30.r, tmp30.g, tmp30.b, tmp11);
    const tmp38 = new utils_ColorDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - tmp11);
    const color = ColorUtils.mixColors(tmp35, tmp38);
    const tmpResult4 = ColorUtils;
    return _modDef672.rgb(color.red, color.green, color.blue).hex("rgb");
  }
}
let c8 = 128;
const OverlayOpacity = { LEVEL_9: 0.9, [0.9]: "LEVEL_9", LEVEL_85: 0.85, [0.85]: "LEVEL_85", LEVEL_8: 0.8, [0.8]: "LEVEL_8", LEVEL_75: 0.75, [0.75]: "LEVEL_75", LEVEL_7: 0.7, [0.7]: "LEVEL_7", LEVEL_6: 0.6, [0.6]: "LEVEL_6", LEVEL_5: 0.5, [0.5]: "LEVEL_5", LEVEL_4: 0.4, [0.4]: "LEVEL_4", LEVEL_35: 0.35, [0.35]: "LEVEL_35", LEVEL_3: 0.3, [0.3]: "LEVEL_3", LEVEL_25: 0.25, [0.25]: "LEVEL_25", LEVEL_2: 0.2, [0.2]: "LEVEL_2", LEVEL_15: 0.15, [0.15]: "LEVEL_15", LEVEL_1: 0.1, [0.1]: "LEVEL_1" };
let obj2 = { DARK: nativeDefault.unsafe_rawColors.BLACK, LIGHT: nativeDefault.unsafe_rawColors.WHITE };
let obj3 = { START: 0, [0]: "START", MID: 50, [50]: "MID", END: 100, [100]: "END" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/client_themes/native/ClientThemesUtils.tsx");

export const GRADIENT_ANGLE_BREAKPOINT = 128;
export { OverlayOpacity };
export const OverlayColors = obj2;
export const GradientPercentage = obj3;
export const colorToHex = function colorToHex(red) {
  return _modDef672.rgb(red.red, red.green, red.blue).hex("rgb");
};
export const getClientThemesGradientColorByPercentage = function getClientThemesGradientColorByPercentage(arg0, arg1) {
  ({ colors, colors: colors2 } = arg0);
  const mapped = colors.map((item) => nativeDefault.unsafe_rawColors[item.token]);
  const mapped1 = colors2.map((stop) => stop.stop);
  const scaleResult = _modDef672.scale(mapped);
  const tmp3 = _slicedToArray(_modDef672.scale(mapped).domain(mapped1)(arg1).rgb(), 3);
  return { r: tmp3[0], g: tmp3[1], b: tmp3[2] };
};
export const getClientThemesGradientHexColors = function getClientThemesGradientHexColors(colors) {
  colors = colors.colors;
  return colors.map((item) => nativeDefault.unsafe_rawColors[item.token]);
};
export const getGradientThemeMetadata = function getGradientThemeMetadata(gradientThemeFromFlags, gradient) {
  if (null != gradientThemeFromFlags) {
    if (null != gradient) {
      const tmp11 = calculateGradientValueWithOpacity(gradient, obj3.START, gradient.theme);
      const tmp13 = calculateGradientValueWithOpacity(gradient, obj3.END, gradient.theme);
      if (gradient.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
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
      if (gradient.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const colors = gradient.colors;
        let mapped = colors.map((item) => nativeDefault.unsafe_rawColors[item.token]);
      } else {
        mapped = gradient.customThemeSettings.colors;
      }
      let first = mapped[0];
      let tmp5 = mapped[mapped.length - 1];
      if (gradient.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const colors1 = gradient.customThemeSettings.colors;
        const mapped1 = colors1.map((item) => _modDef672(item).luminance());
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(mapped1, 0);
        const _Math2 = Math;
        const result = _modDef672(colors1[mapped1.indexOf(mapped1, HermesBuiltin.apply(min, items, Math))]).set("hsl.s", 0.2);
        const result1 = result.set("hsl.l", 0.7);
        let hexResult = result1.hex();
        const _Math3 = Math;
        const items1 = [];
        const tmp17Result = _modDef672(colors1[mapped1.indexOf(mapped1, HermesBuiltin.apply(min, items, Math))]);
        HermesBuiltin.arraySpread(mapped1, 0);
        const _Math4 = Math;
        const result2 = _modDef672(colors1[mapped1.indexOf(mapped1, HermesBuiltin.apply(max, items1, Math))]).set("hsl.s", 0.2);
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
        const tmp24Result = _modDef672(colors1[mapped1.indexOf(mapped1, HermesBuiltin.apply(max, items1, Math))]);
      }
      const obj = { theme: gradientThemeFromFlags, colors: null };
      obj2 = { "gradient.start": tmp11, "gradient.mid": calculateGradientValueWithOpacity(gradient, obj3.MID, gradient.theme), "gradient.end": tmp13, "gradient.top": tmp2, "gradient.bottom": tmp3, "gradient.primary": first, "gradient.secondary": tmp5 };
      obj.colors = obj2;
      return obj;
    }
  }
  return null;
};
export const getGradientValue = function getGradientValue(theme, END) {
  return calculateGradientValueWithOpacity(theme, END, theme.theme);
};
export const useGradientValue = function useGradientValue(END, arg1) {
  closure_0 = END;
  importDefault = arg1;
  const tmp = useColorThemeBackgroundDefault();
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
  return noop.useMemo(() => {
    if (null == closure_2) {
      return null;
    } else {
      let dark;
      if (closure_1 != null) {
        dark = closure_1.dark;
      }
      if (null == dark) {
        let light1;
        if (closure_1 != null) {
          light1 = closure_1.light;
        }
        if (null == light1) {
          return calculateGradientValueWithOpacity(closure_2, closure_0, closure_3);
        }
      }
      const obj = shared;
      const tmp11 = obj.isThemeDark(closure_3) ? obj.LEVEL_2 : obj.LEVEL_4;
      if (tmp7Result.isThemeDark(closure_3)) {
        let dark1;
        if (!tmp12) {
          dark1 = closure_1.dark;
        }
        let light = dark1;
      } else if (!tmp12) {
        light = closure_1.light;
      }
      if (light == null) {
        light = tmp11;
      }
      return calculateGradientValueWithOpacity(closure_2, closure_0, closure_3, light);
    }
  }, items);
};
export const getEmbedScrollGradientBackground = function getEmbedScrollGradientBackground() {
  let customBackgroundGradient = MobileThemesUtils.getCustomBackgroundGradient();
  if (customBackgroundGradient == null) {
    customBackgroundGradient = ClientThemesBackgroundStore.gradientPreset;
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
  if (null == ClientThemesBackgroundStore.gradientPreset) {
    if (!CustomThemeMobileStore.hasCustomTheme()) {
      return null;
    }
  }
  const obj = shared;
  const tmp4 = obj.isThemeDark(ThemeStore.theme) ? obj2.DARK : obj2.LIGHT;
  return ColorUtils.hexWithOpacity(tmp4, obj.LEVEL_1);
};