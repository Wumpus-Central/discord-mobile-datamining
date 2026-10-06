// discord_app/modules/client_themes/native/ClientThemesUtils.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import ClientThemesTypes from "../ClientThemesTypes.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import utils_ColorDefault from "../../../utils/Color.tsx";
import shared from "../../../design/shared.tsx";
import useColorThemeBackgroundDefault from "useColorThemeBackground.tsx";
import MobileThemesUtils from "MobileThemesUtils.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import ClientThemesBackgroundStore from "../ClientThemesBackgroundStore.tsx";
import CustomThemeMobileStore from "CustomThemeMobileStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault;

const f89260 = (stop) => stop.stop;
const f89261 = (item) => nativeDefault.unsafe_rawColors[item.token];
function getGradientColorByPercentage(type, MID) {
  let colors;
  let colors2;
  if (type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    ({ colors, colors: colors2 } = type);
    const mapped = colors.map(f89261);
    const mapped1 = colors2.map(f89260);
    const obj6 = _modDef683;
    const scaleResult = obj6.scale(mapped);
    const obj8 = scaleResult.domain(mapped1)(MID);
    obj2 = { r: null, g: null, b: null };
    [obj9.r, obj9.g, obj9.b] = obj8.rgb();
    _slicedToArray(obj8.rgb(), 3);
    return obj2;
  } else {
    const colors1 = type.customThemeSettings.colors;
    if (1 === colors1.length) {
      const tmpResult = ColorUtils;
      return tmpResult.hexToRgb(colors1[0]);
    } else {
      const mapped2 = colors1.map((item, index) => (index / (colors1.length - 1)) * 100);
      const obj = _modDef683;
      const scaleResult1 = obj.scale(colors1);
      obj3 = scaleResult1.domain(mapped2)(MID);
      const obj5 = { r: null, g: null, b: null };
      [obj4.r, obj4.g, obj4.b] = obj3.rgb();
      _slicedToArray(obj3.rgb(), 3);
      return obj5;
    }
  }
}
function getBottomColorWithOpacity(type, hexToRgbResult, arg2) {
  let START;
  let gradientAngle;
  if (type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    gradientAngle = type.angle;
  } else {
    gradientAngle = type.customThemeSettings.gradientAngle;
  }
  if (gradientAngle > c8) {
    START = obj3.END;
  } else {
    START = obj3.START;
  }
  const tmpResult = getGradientColorByPercentage(type, START);
  const mixColors = ColorUtils.mixColors;
  ColorUtils;
  const tmp8 = new utils_ColorDefault(tmpResult.r, tmpResult.g, tmpResult.b, arg2);
  const tmp9 = new utils_ColorDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - arg2);
  const color = mixColors(tmp8, tmp9);
  const obj = _modDef683;
  const rgbResult = obj.rgb(color.red, color.green, color.blue);
  return rgbResult.hex("rgb");
}
function getTopColorWithOpacity(type, hexToRgbResult, arg2) {
  let END;
  let gradientAngle;
  if (type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    gradientAngle = type.angle;
  } else {
    gradientAngle = type.customThemeSettings.gradientAngle;
  }
  if (gradientAngle > c8) {
    END = obj3.START;
  } else {
    END = obj3.END;
  }
  const tmpResult = getGradientColorByPercentage(type, END);
  const mixColors = ColorUtils.mixColors;
  ColorUtils;
  const tmp8 = new utils_ColorDefault(tmpResult.r, tmpResult.g, tmpResult.b, arg2);
  const tmp9 = new utils_ColorDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - arg2);
  const color = mixColors(tmp8, tmp9);
  const obj = _modDef683;
  const rgbResult = obj.rgb(color.red, color.green, color.blue);
  return rgbResult.hex("rgb");
}
function calculateGradientValueWithOpacity(customBackgroundGradient, END, theme, light) {
  let MID;
  let gradientAngle;
  let hexResult;
  let hexToRgbResult;
  let tmp12;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const hexToRgb = ColorUtils.hexToRgb;
  ColorUtils;
  if (isThemeDarkResult) {
    hexToRgbResult = hexToRgb(obj2.DARK);
  } else {
    hexToRgbResult = hexToRgb(obj2.LIGHT);
  }
  if (customBackgroundGradient.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let MID2 = customBackgroundGradient.midpointPercentage;
    if (MID2 == null) {
      MID2 = obj3.MID;
    }
    MID = MID2;
  } else {
    MID = obj3.MID;
  }
  let tmp10 = END;
  if (END == null) {
    tmp10 = MID;
  }
  let tmp11 = light;
  if (customBackgroundGradient.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    if (tmp11 == null) {
      let sum;
      const result = 0.2 * tmp14;
      const tmpResult = shared;
      if (tmpResult.isThemeDark(theme)) {
        sum = 0.12 + result;
      } else {
        sum = 0.3 + result;
      }
      tmp11 = sum;
    }
    tmp12 = tmp11;
  } else {
    tmp12 = tmp11;
    if (tmp11 == null) {
      const tmpResult3 = shared;
      tmp12 = tmpResult3.isThemeDark(theme) ? tmp13.LEVEL_2 : tmp13.LEVEL_4;
    }
  }
  if (customBackgroundGradient.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    gradientAngle = customBackgroundGradient.angle;
  } else {
    gradientAngle = customBackgroundGradient.customThemeSettings.gradientAngle;
  }
  if (tmp10 === obj3.START) {
    let tmp25;
    if (gradientAngle < c8) {
      tmp25 = getBottomColorWithOpacity(customBackgroundGradient, hexToRgbResult, tmp12);
    } else {
      tmp25 = getTopColorWithOpacity(customBackgroundGradient, hexToRgbResult, tmp12);
    }
    hexResult = tmp25;
  } else if (tmp10 === tmp17.END) {
    let tmp20;
    if (gradientAngle > c8) {
      tmp20 = getBottomColorWithOpacity(customBackgroundGradient, hexToRgbResult, tmp12);
    } else {
      tmp20 = getTopColorWithOpacity(customBackgroundGradient, hexToRgbResult, tmp12);
    }
    hexResult = tmp20;
  } else {
    const tmp28 = getGradientColorByPercentage(customBackgroundGradient, tmp10);
    const mixColors = ColorUtils.mixColors;
    const self = this;
    const self2 = this;
    ColorUtils;
    const self3 = this;
    const self4 = this;
    const tmp32 = new utils_ColorDefault(tmp28.r, tmp28.g, tmp28.b, tmp12);
    const tmp33 = new utils_ColorDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - tmp12);
    const color = mixColors(tmp32, tmp33);
    const obj4 = _modDef683;
    const rgbResult = obj4.rgb(color.red, color.green, color.blue);
    hexResult = rgbResult.hex("rgb");
  }
  return hexResult;
}
let c8 = 128;
const OverlayOpacity = {
  LEVEL_9: 0.9,
  [0.9]: "LEVEL_9",
  LEVEL_85: 0.85,
  [0.85]: "LEVEL_85",
  LEVEL_8: 0.8,
  [0.8]: "LEVEL_8",
  LEVEL_75: 0.75,
  [0.75]: "LEVEL_75",
  LEVEL_7: 0.7,
  [0.7]: "LEVEL_7",
  LEVEL_6: 0.6,
  [0.6]: "LEVEL_6",
  LEVEL_5: 0.5,
  [0.5]: "LEVEL_5",
  LEVEL_4: 0.4,
  [0.4]: "LEVEL_4",
  LEVEL_35: 0.35,
  [0.35]: "LEVEL_35",
  LEVEL_3: 0.3,
  [0.3]: "LEVEL_3",
  LEVEL_25: 0.25,
  [0.25]: "LEVEL_25",
  LEVEL_2: 0.2,
  [0.2]: "LEVEL_2",
  LEVEL_15: 0.15,
  [0.15]: "LEVEL_15",
  LEVEL_1: 0.1,
  [0.1]: "LEVEL_1",
};
let obj2 = { DARK: nativeDefault.unsafe_rawColors.BLACK, LIGHT: nativeDefault.unsafe_rawColors.WHITE };
let obj3 = { START: 0, [0]: "START", MID: 50, [50]: "MID", END: 100, [100]: "END" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (END, dark) => {
      const obj = react2;
      const cResult = obj.c(9);
      const tmp4 = useColorThemeBackgroundDefault();
      const tmp5 = useThemeDefault();
      let tmp6 = null;
      if (null != tmp4) {
        let light;
        dark = undefined;
        if (dark != null) {
          dark = dark.dark;
        }
        if (null == dark) {
          let light1;
          if (dark != null) {
            light1 = dark.light;
          }
          if (null == light1) {
            if (cResult[5] === tmp4) {
              if (cResult[6] === END) {
                let tmp22;
                if (cResult[7] === tmp5) {
                  tmp22 = cResult[8];
                }
                tmp6 = tmp22;
              }
            }
            const tmp24 = calculateGradientValueWithOpacity(tmp4, END, tmp5);
            cResult[5] = tmp4;
            cResult[6] = END;
            cResult[7] = tmp5;
            cResult[8] = tmp24;
            tmp22 = tmp24;
          }
        }
        const tmpResult = shared;
        const tmp12 = tmpResult.isThemeDark(tmp5) ? obj.LEVEL_2 : obj.LEVEL_4;
        const tmpResult2 = shared;
        if (tmpResult2.isThemeDark(tmp5)) {
          let dark1;
          if (dark != null) {
            dark1 = dark.dark;
          }
          light = dark1;
        } else if (dark != null) {
          light = dark.light;
        }
        if (light == null) {
          light = tmp12;
        }
        if (cResult[0] === tmp4) {
          if (cResult[1] === light) {
            if (cResult[2] === END) {
              let tmp15;
              if (cResult[3] === tmp5) {
                tmp15 = cResult[4];
              }
              tmp6 = tmp15;
            }
          }
        }
        const tmp21 = calculateGradientValueWithOpacity(tmp4, END, tmp5, light);
        cResult[0] = tmp4;
        cResult[1] = light;
        cResult[2] = END;
        cResult[3] = tmp5;
        cResult[4] = tmp21;
        tmp15 = tmp21;
      }
      return tmp6;
    }
  : (arg0, dark) => {
      let closure_2;
      let closure_0 = arg0;
      importDefault = dark;
      const tmp = useColorThemeBackgroundDefault();
      dependencyMap = tmp;
      const tmp2 = useThemeDefault();
      let closure_3 = tmp2;
      const items = [tmp, , , ,];
      dark = undefined;
      const useMemo = react.useMemo;
      if (dark != null) {
        dark = dark.dark;
      }
      items[1] = dark;
      let light;
      if (dark != null) {
        light = dark.light;
      }
      items[2] = light;
      items[3] = arg0;
      items[4] = tmp2;
      return useMemo(() => {
        if (null == closure_2) {
          return null;
        } else {
          let light;
          dark = undefined;
          if (dark != null) {
            dark = dark.dark;
          }
          if (null == dark) {
            let light1;
            if (dark != null) {
              light1 = dark.light;
            }
            if (null == light1) {
              return calculateGradientValueWithOpacity(closure_2, closure_0, closure_3);
            }
          }
          const obj = shared;
          const tmp11 = obj.isThemeDark(closure_3) ? obj.LEVEL_2 : obj.LEVEL_4;
          const tmp7Result = shared;
          if (tmp7Result.isThemeDark(closure_3)) {
            let dark1;
            if (dark != null) {
              dark1 = dark.dark;
            }
            light = dark1;
          } else if (dark != null) {
            light = dark.light;
          }
          if (light == null) {
            light = tmp11;
          }
          return calculateGradientValueWithOpacity(closure_2, closure_0, closure_3, light);
        }
      }, items);
    };
function colorToHex(red) {
  const obj = _modDef683;
  const rgbResult = obj.rgb(red.red, red.green, red.blue);
  return rgbResult.hex("rgb");
}
function getClientThemesGradientColorByPercentage(arg0, arg1) {
  let colors;
  let colors2;
  ({ colors, colors: colors2 } = arg0);
  const mapped = colors.map(f89261);
  const mapped1 = colors2.map(f89260);
  const obj = _modDef683;
  const scaleResult = obj.scale(mapped);
  obj3 = scaleResult.domain(mapped1)(arg1);
  const tmp3 = _slicedToArray(obj3.rgb(), 3);
  return { r: tmp3[0], g: tmp3[1], b: tmp3[2] };
}
function getClientThemesGradientHexColors(colors) {
  colors = colors.colors;
  return colors.map(f89261);
}
function getGradientValue(theme, END) {
  return calculateGradientValueWithOpacity(theme, END, theme.theme);
}
let result = size.fileFinishedImporting("modules/client_themes/native/ClientThemesUtils.tsx");

export const GRADIENT_ANGLE_BREAKPOINT = 128;
export { OverlayOpacity };
export const OverlayColors = obj2;
export const GradientPercentage = obj3;
export { colorToHex };
export { getClientThemesGradientColorByPercentage };
export { getClientThemesGradientHexColors };
export const getGradientThemeMetadata = function getGradientThemeMetadata(gradientThemeFromFlags, gradient) {
  if (null != gradientThemeFromFlags) {
    if (null != gradient) {
      let gradientAngle;
      let mapped;
      const tmp12 = calculateGradientValueWithOpacity(gradient, obj3.START, gradient.theme);
      const tmp13 = calculateGradientValueWithOpacity(gradient, obj3.MID, gradient.theme);
      const tmp14 = calculateGradientValueWithOpacity(gradient, obj3.END, gradient.theme);
      if (gradient.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        gradientAngle = gradient.angle;
      } else {
        gradientAngle = gradient.customThemeSettings.gradientAngle;
      }
      if (gradient.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const colors = gradient.colors;
        mapped = colors.map(f89261);
      } else {
        mapped = gradient.customThemeSettings.colors;
      }
      let first = mapped[0];
      if (gradient.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const colors1 = gradient.customThemeSettings.colors;
        const mapped1 = colors1.map((item) => {
          const obj = _modDef683(item);
          return obj.luminance();
        });
        const _Math = Math;
        const items = [];
        const indexOf = mapped1.indexOf;
        const tmp18 = _modDef683;
        HermesBuiltin.arraySpread(items, mapped1, 0);
        const _Math2 = Math;
        const tmp18Result = tmp18(colors1[indexOf(mapped1, HermesBuiltin.apply(tmp, min, items, Math))]);
        const result = tmp18Result.set("hsl.s", 0.2);
        const result1 = result.set("hsl.l", 0.7);
        let hexResult = result1.hex();
        const _Math3 = Math;
        const items1 = [];
        const indexOf2 = mapped1.indexOf;
        const tmp25 = _modDef683;
        HermesBuiltin.arraySpread(items1, mapped1, 0);
        const _Math4 = Math;
        const tmp25Result = tmp25(colors1[indexOf2(mapped1, HermesBuiltin.apply(tmp, max, items1, Math))]);
        const result2 = tmp25Result.set("hsl.s", 0.2);
        const result3 = result2.set("hsl.l", 0.9);
        const hexResult1 = result3.hex();
        let tmp7 = hexResult1;
        if ("dark" === gradientThemeFromFlags) {
          tmp7 = hexResult;
        }
        if ("dark" === gradientThemeFromFlags) {
          hexResult = hexResult1;
        }
        first = tmp7;
      }
      let obj = { theme: gradientThemeFromFlags, colors: obj2 };
      return obj;
    }
  }
  return null;
};
export { getGradientValue };
export const useGradientValue = tmp2;
export const isCustomThemeActive = function isCustomThemeActive() {
  const obj = MobileThemesUtils;
  const tmp = null != obj.getCustomBackgroundGradient() || null != ClientThemesBackgroundStore.gradientPreset;
  return tmp;
};
export const getEmbedScrollGradientBackground = function getEmbedScrollGradientBackground() {
  const obj = MobileThemesUtils;
  let customBackgroundGradient = obj.getCustomBackgroundGradient();
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
  const tmpResult = ColorUtils;
  return tmpResult.hexWithOpacity(tmp4, obj.LEVEL_1);
};
