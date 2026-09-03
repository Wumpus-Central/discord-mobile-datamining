// === Module 5079: getMixedGradientColor ===

// Module 5079 (getMixedGradientColor)
import ThemesDefault from "Themes" /* 709 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import hexToRgba from "hexToRgba" /* 4326 */;
import hslToRgbDefault from "hslToRgb" /* 4327 */;
import set from "set" /* 4329 */;
import getGuildIdFromNavigationStateDefault from "getGuildIdFromNavigationState" /* 4331 */;
import useThemeDefault from "useTheme" /* 4413 */;
import LinearGradientDefault from "LinearGradient" /* 4941 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "reset" /* 4297 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function getMixedGradientColor(mixColorOverride) {
  ({ mixAmount, theme } = mixColorOverride);
  let obj = { mixAmount, mixColorOverride: mixColorOverride.mixColorOverride, theme };
  mixAmount = obj.mixAmount;
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  ({ mixColorOverride, darkFallbackOpacity, theme: theme2 } = obj);
  if (darkFallbackOpacity === undefined) {
    darkFallbackOpacity = 0.7;
  }
  let num = obj.lightFallbackOpacity;
  if (num === undefined) {
    num = 0.8;
  }
  if (null == mixColorOverride) {
    const isThemeDarkResult = AccessibilityAnnouncer.isThemeDark(theme2);
    if (isThemeDarkResult) {
      num = darkFallbackOpacity;
    }
    let tmp4 = isThemeDarkResult ? mixAmount.dark : mixAmount.light;
    if (tmp4 == null) {
      tmp4 = num;
    }
    let num2 = 255;
    if (isThemeDarkResult) {
      num2 = 0;
    }
    mixColorOverride = new hslToRgbDefault(num2, num2, num2, tmp4);
    const obj3 = AccessibilityAnnouncer;
  }
  obj = { mixAmount, theme };
  let mixAmount1 = obj.mixAmount;
  if (mixAmount1 === undefined) {
    mixAmount1 = {};
  }
  ({ darkFallbackAmount, theme: theme3 } = obj);
  if (darkFallbackAmount === undefined) {
    darkFallbackAmount = 0.3;
  }
  let num3 = obj.lightFallbackAmount;
  if (num3 === undefined) {
    num3 = 0.2;
  }
  if (obj6.isThemeDark(theme3)) {
    if (null != mixAmount1.dark) {
      darkFallbackAmount = 1 - mixAmount1.dark;
    }
    num3 = darkFallbackAmount;
  } else if (null != mixAmount1.light) {
    num3 = 1 - mixAmount1.light;
  }
  let tmp12Result = tmp12(4326);
  obj6 = AccessibilityAnnouncer;
  ({ r, g, b } = tmp12Result.hexToRgb(mixColorOverride.color));
  tmp12Result = tmp12(4326);
  const hexToRgbResult = tmp12Result.hexToRgb(mixColorOverride.color);
  const tmp15 = new hslToRgbDefault(r, g, b, num3);
  return tmp12Result.mixColors(mixColorOverride, new hslToRgbDefault(r, g, b, num3)).toHexString();
}
function GradientBase(angleCenter) {
  angleCenter = angleCenter.angleCenter;
  ({ colors, locations, angle } = angleCenter);
  if (angleCenter === undefined) {
    angleCenter = closure_9;
  }
  ({ absolute, wide, tall } = angleCenter);
  const tmp = callback3();
  ({ width, height } = useWindowDimensionsDefault());
  let obj = { colors, locations, angle, angleCenter, useAngle: true, style: null };
  const tmp2 = useWindowDimensionsDefault();
  const tmp3 = closure_6;
  if (wide) {
    obj = { width: null };
    obj[0] = width;
    wide = obj;
  }
  const items = [wide, , , , ];
  if (tall) {
    obj = { height: null };
    obj[0] = height;
    tall = obj;
  }
  items[1] = tall;
  items[2] = tmp.linearGradient;
  if (absolute) {
    absolute = tmp.absolute;
  }
  items[3] = absolute;
  items[4] = angleCenter.componentStyles;
  obj[5] = items;
  return tmp3(LinearGradientDefault, obj);
}
class Gradient {
  constructor(arg0) {
    ({ gradient, angleOverride, mix, mixAmount } = global);
    ({ absolute, wide, tall, componentStyles } = global);
    if (mixAmount === undefined) {
      mixAmount = {};
    }
    closure_1 = mixAmount;
    mixColorOverride = global.mixColorOverride;
    closure_3 = undefined;
    closure_3 = require("useTheme")();
    colors = gradient.colors;
    obj = {
      colors: colors.map((arg0) => {
            if (closure_0) {
              const obj = { color: null, mixAmount: null, mixColorOverride: null, theme: null };
              obj[0] = mixAmount(mixColorOverride[11]).unsafe_rawColors[arg0.token];
              obj[1] = mixAmount;
              obj[2] = mixColorOverride;
              obj[3] = closure_3;
              let tmp3 = closure_1_11(obj);
            } else {
              tmp3 = mixAmount(mixColorOverride[11]).unsafe_rawColors[arg0.token];
            }
            return tmp3;
          }),
      locations: colors1.map((stop) => stop.stop / 100),
      angle: null,
      angleCenter: null,
      absolute: null,
      wide: null,
      tall: null,
      componentStyles: null
    };
    colors1 = gradient.colors;
    tmp = jsx;
    tmp2 = GradientBase;
    if (angleOverride == null) {
      angleOverride = gradient.angle;
    }
    obj[2] = angleOverride;
    angleCenter = gradient.angleCenter;
    if (angleCenter == null) {
      angleCenter = closure_9;
    }
    obj[3] = angleCenter;
    obj[4] = absolute;
    obj[5] = wide;
    obj[6] = tall;
    obj[7] = componentStyles;
    return tmp(tmp2, obj);
  }
}
function GuildThemePresetGradient(mixColorOverride) {
  ({ angleOverride, mix: require, mixAmount } = mixColorOverride);
  ({ preset, absolute, wide, tall, componentStyles } = mixColorOverride);
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  mixColorOverride = mixColorOverride.mixColorOverride;
  closure_3 = undefined;
  const tmp = mixAmount(mixColorOverride[10])();
  closure_3 = tmp;
  let obj = require(mixColorOverride[12]);
  const guildThemePresetAppearance = obj.getGuildThemePresetAppearance(preset, tmp);
  const colors = guildThemePresetAppearance.colors;
  obj = {
    colors: colors.map((hex) => {
      if (closure_0) {
        const obj = { color: null, mixAmount: null, mixColorOverride: null, theme: null };
        obj[0] = hex.hex;
        obj[1] = mixAmount;
        obj[2] = mixColorOverride;
        obj[3] = closure_3;
        hex = closure_1_11(obj);
      } else {
        hex = hex.hex;
      }
      return hex;
    }),
    locations: colors1.map((stop) => stop.stop / 100),
    angle: null,
    angleCenter: null,
    absolute: null,
    wide: null,
    tall: null,
    componentStyles: null
  };
  colors1 = guildThemePresetAppearance.colors;
  if (angleOverride == null) {
    angleOverride = guildThemePresetAppearance.angle;
  }
  obj[2] = angleOverride;
  obj[3] = closure_9;
  obj[4] = absolute;
  obj[5] = wide;
  obj[6] = tall;
  obj[7] = componentStyles;
  return closure_6(GradientBase, obj);
}
function CustomThemesGradient(arg0) {
  ({ colors, gradientColorStops, absolute, wide, tall, mixAmount } = arg0);
  ({ baseMix, gradientAngle, mix } = arg0);
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  let reduced;
  reduced = undefined;
  ({ mixColorOverride, componentStyles, theme } = arg0);
  const tmp = callback3();
  reduced = undefined;
  mixColorOverride = undefined;
  theme = undefined;
  reduced = baseMix;
  ({ width, height } = reduced(mixColorOverride[8])());
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  reduced = mixAmount;
  let mapped = colors;
  if (mix) {
    mapped = colors.map((PRIMARY_800) => {
      let obj = reduced;
      let tmp2 = mixColorOverride;
      let num = closure_1_10;
      obj = reduced;
      const result = reduced / 100;
      if (reduced === undefined) {
        obj = {};
      }
      if (null == tmp2) {
        const diff = 1 - result;
        let sum = num + 0.2 * diff;
        const isThemeDarkResult = reduced(mixColorOverride[5]).isThemeDark(tmp3);
        if (isThemeDarkResult) {
          sum = num + 0.25 * diff;
        }
        let tmp6 = isThemeDarkResult ? obj.dark : obj.light;
        if (tmp6 == null) {
          tmp6 = sum;
        }
        let num3 = 255;
        if (isThemeDarkResult) {
          num3 = 0;
        }
        tmp2 = new reduced(mixColorOverride[6])(num3, num3, num3, tmp6);
        const obj7 = reduced(mixColorOverride[5]);
        const tmp21 = mixColorOverride;
      }
      if (reduced === undefined) {
        obj = {};
      }
      let num4 = num;
      if (num === undefined) {
        num4 = 0.3;
      }
      if (num === undefined) {
        num = 0.2;
      }
      if (obj3.isThemeDark(theme)) {
        if (null != obj.dark) {
          num4 = 1 - obj.dark;
        }
        num = num4;
      } else if (null != obj.light) {
        num = 1 - obj.light;
      }
      let tmp14Result = tmp14(tmp15[7]);
      obj3 = reduced(mixColorOverride[5]);
      ({ r, g, b } = tmp14Result.hexToRgb(PRIMARY_800));
      tmp14Result = tmp14(tmp15[7]);
      const hexToRgbResult = tmp14Result.hexToRgb(PRIMARY_800);
      const tmp17 = new reduced(mixColorOverride[6])(r, g, b, num);
      const mixColorsResult = tmp14Result.mixColors(tmp2, new reduced(mixColorOverride[6])(r, g, b, num));
      return reduced(mixColorOverride[13]).colorToHex(mixColorsResult);
    });
  }
  let arr2 = mapped;
  if (1 === mapped.length) {
    const items = [mapped[0], mapped[0]];
    arr2 = items;
  }
  reduced = arr2;
  let result = (gradientAngle - 90) * Math.PI / 180;
  const cosResult = Math.cos(result);
  const sinResult = Math.sin(result);
  let obj = { x: 0.6 - 0.7142857142857143 * cosResult, y: 0.5 - 0.7142857142857143 * sinResult };
  obj = { x: 0.6 + 0.7142857142857143 * cosResult, y: 0.5 + 0.7142857142857143 * sinResult };
  reduced = arr2.reduce((arr, str) => {
    if (typeof str === "string") {
      if (regex.test(str)) {
        arr.push(str);
        return arr;
      }
    }
    try {
      arr.push(reduced(mixColorOverride[14])(str).hex("rgb"));
      return arr;
    } catch (err) {
    }
  }, []);
  if (gradientColorStops === undefined) {
    gradientColorStops = [];
  }
  if (gradientColorStops.length === reduced.length) {
    let mapped1 = gradientColorStops.map((arg0) => arg0 / 100);
  } else if (1 === reduced.length) {
    mapped1 = [0, 1];
  } else {
    mapped1 = reduced.map((arg0, arg1) => arg1 / (reduced.length - 1));
  }
  const items1 = [reduced, arr2];
  const effect = theme.useEffect(() => {
    if (reduced.length < 2) {
      let obj = reduced(mixColorOverride[15]);
      const _Error = Error;
      error = new Error("Invalid custom theme gradient colors");
      obj = { extra: null };
      obj = { gradientColors: null };
      const _JSON = JSON;
      obj[0] = JSON.stringify(reduced);
      obj[0] = obj;
      obj.captureException(error, obj);
    }
  }, items1);
  let tmp10Result = null;
  if (reduced.length >= 2) {
    obj = { colors: null, locations: null, start: null, end: null, style: null };
    obj[0] = reduced;
    obj[1] = mapped1;
    obj[2] = obj;
    obj[3] = obj;
    if (wide) {
      obj1 = { width: null };
      obj1[0] = width;
      wide = obj1;
    }
    const items2 = [wide, , , , ];
    if (tall) {
      const obj2 = { height: null };
      obj2[0] = height;
      tall = obj2;
    }
    items2[1] = tall;
    items2[2] = tmp.linearGradient;
    if (absolute) {
      absolute = tmp.absolute;
    }
    items2[3] = absolute;
    items2[4] = componentStyles;
    obj[4] = items2;
    tmp10Result = closure_6(reduced(mixColorOverride[9]), obj);
    const tmp10 = closure_6;
    const tmp2Result = reduced(mixColorOverride[9]);
  }
  return tmp10Result;
}
function ActiveGuildThemeGradient(arg0) {
  ({ activeGuildTheme, theme } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  if ("custom" === activeGuildTheme.type) {
    const customUserThemeSettings = activeGuildTheme.customUserThemeSettings;
    let obj = {};
    const merged1 = Object.assign(merged);
    const items = [];
    HermesBuiltin.arraySpread(set.getSingleColorGuildThemeGradientColors(customUserThemeSettings.colors[0], theme), 0);
    obj.colors = items;
    obj.gradientColorStops = [];
    let num2 = customUserThemeSettings.gradientAngle;
    if (num2 == null) {
      num2 = 0;
    }
    obj.gradientAngle = num2;
    let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
    if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
      GUILD_THEME_DEFAULT_BASE_MIX = set.GUILD_THEME_DEFAULT_BASE_MIX;
    }
    obj.baseMix = GUILD_THEME_DEFAULT_BASE_MIX;
    obj.theme = theme;
    return callback(CustomThemesGradient, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    obj.preset = activeGuildTheme.preset;
    return callback(GuildThemePresetGradient, obj);
  }
}
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ softenGradient: { flex: 1 }, linearGradient: { flex: 1 }, absolute: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 } });
let closure_9 = { x: 0.5, y: 0.5 };
let c10 = 0.5;
const re15 = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
let result = require("set").fileFinishedImporting("modules/client_themes/native/ThemedGradient.tsx");

export default function ThemedGradient(overlayOpacity) {
  let num = overlayOpacity.overlayOpacity;
  if (num === undefined) {
    num = 0.7;
  }
  const gradientOverride = overlayOpacity.gradientOverride;
  const merged = Object.assign(overlayOpacity, Object.create(null));
  const tmp2 = callback3();
  let obj = AccessibilityAnnouncer;
  const tmp5 = useThemeDefault();
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  const tmp8 = obj.isThemeDark(useThemeDefault()) ? unsafe_rawColors.BLACK : unsafe_rawColors.WHITE;
  const withOverlay = merged.withOverlay;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  let tmp6Result = tmp6(644);
  const items = [closure_5];
  const preset = tmp6Result.useStateFromStoresObject(items, () => ({ preset: gradientPreset.gradientPreset })).preset;
  const tmp10 = getGuildIdFromNavigationStateDefault();
  tmp6Result = tmp6(4412);
  const customThemeDisplaySettings = tmp6Result.useCustomThemeDisplaySettings();
  if (null != gradientOverride) {
    if (tmp12) {
      if (gradientOverride.type === tmp6(1348).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        obj = {};
        const merged1 = Object.assign(merged);
        const merged2 = Object.assign(gradientOverride.customThemeSettings);
        obj.theme = gradientOverride.theme;
        const tmp59 = callback(CustomThemesGradient, obj);
        let tmp60 = tmp59;
        if (withOverlay) {
          obj = { style: null, children: null };
          obj[0] = tmp2.absolute;
          const items1 = [tmp59, ];
          obj1 = { style: null };
          const items2 = [tmp2.softenGradient, ];
          const obj2 = { backgroundColor: null };
          obj2[0] = tmp6(4326).hexWithOpacity(tmp8, num);
          items2[1] = obj2;
          obj1[0] = items2;
          items1[1] = callback(View, obj1);
          obj[1] = items1;
          tmp60 = callback2(View, obj);
          const tmp6Result1 = tmp6(4326);
        }
        return tmp60;
      }
    }
    if (gradientOverride.type === tmp6(1348).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      const obj3 = {};
      const merged3 = Object.assign(merged);
      obj3.gradient = gradientOverride;
      const tmp48 = callback(Gradient, obj3);
      let tmp49 = tmp48;
      if (withOverlay) {
        const obj4 = { style: null, children: null };
        obj4[0] = tmp2.absolute;
        const items3 = [tmp48, ];
        const obj5 = { style: null };
        const items4 = [tmp2.softenGradient, ];
        const obj6 = { backgroundColor: null };
        obj6[0] = tmp6(4326).hexWithOpacity(tmp8, num);
        items4[1] = obj6;
        obj5[0] = items4;
        items3[1] = callback(View, obj5);
        obj4[1] = items3;
        tmp49 = callback2(View, obj4);
        const tmp6Result2 = tmp6(4326);
      }
      return tmp49;
    }
  }
  if (null != tmp10) {
    const obj7 = {};
    const merged4 = Object.assign(merged);
    obj7.activeGuildTheme = tmp10;
    obj7.theme = tmp9;
    const tmp39 = callback(ActiveGuildThemeGradient, obj7);
    let tmp40 = tmp39;
    if (withOverlay) {
      const obj8 = { style: null, children: null };
      obj8[0] = tmp2.absolute;
      const items5 = [tmp39, ];
      const obj9 = { style: null };
      const items6 = [tmp2.softenGradient, ];
      const obj10 = { backgroundColor: null };
      obj10[0] = tmp6(4326).hexWithOpacity(tmp8, num);
      items6[1] = obj10;
      obj9[0] = items6;
      items5[1] = tmp34(View, obj9);
      obj8[1] = items5;
      tmp40 = callback2(View, obj8);
      const tmp6Result3 = tmp6(4326);
    }
    let tmp13 = tmp40;
    tmp34 = callback;
  } else {
    if (tmp12) {
      if (tmp12) {
        const obj11 = {};
        const merged5 = Object.assign(merged);
        const merged6 = Object.assign(customThemeDisplaySettings.customTheme);
        obj11.theme = customThemeDisplaySettings.baseTheme;
        const tmp30 = callback(CustomThemesGradient, obj11);
        let tmp31 = tmp30;
        if (withOverlay) {
          const obj12 = { style: null, children: null };
          obj12[0] = tmp2.absolute;
          const items7 = [tmp30, ];
          const obj13 = { style: null };
          const items8 = [tmp2.softenGradient, ];
          const obj14 = { backgroundColor: null };
          obj14[0] = tmp6(4326).hexWithOpacity(tmp8, num);
          items8[1] = obj14;
          obj13[0] = items8;
          items7[1] = tmp23(View, obj13);
          obj12[1] = items7;
          tmp31 = callback2(View, obj12);
          const tmp6Result4 = tmp6(4326);
        }
        tmp13 = tmp31;
        tmp23 = callback;
      }
    }
    tmp13 = null;
    if (null != preset) {
      const obj15 = {};
      const merged7 = Object.assign(merged);
      obj15.gradient = preset;
      const tmp19 = callback(Gradient, obj15);
      let tmp20 = tmp19;
      if (withOverlay) {
        const obj16 = { style: null, children: null };
        obj16[0] = tmp2.absolute;
        const items9 = [tmp19, ];
        const obj17 = { style: null };
        const items10 = [tmp2.softenGradient, ];
        const obj18 = { backgroundColor: null };
        obj18[0] = tmp6(4326).hexWithOpacity(tmp8, num);
        items10[1] = obj18;
        obj17[0] = items10;
        items9[1] = tmp14(View, obj17);
        obj16[1] = items9;
        tmp20 = callback2(View, obj16);
        const tmp6Result5 = tmp6(4326);
      }
      tmp13 = tmp20;
      tmp14 = callback;
    }
  }
  return tmp13;
};
export { Gradient };
export const validateColors = function validateColors(arr) {
  return arr.reduce((arr, str) => {
    if (typeof str === "string") {
      if (regex.test(str)) {
        arr.push(str);
        return arr;
      }
    }
    try {
      arr.push(reduced(mixColorOverride[14])(str).hex("rgb"));
      return arr;
    } catch (err) {
    }
  }, []);
};
export const CustomThemedGradient = function CustomThemedGradient(overlayOpacity) {
  let num = overlayOpacity.overlayOpacity;
  if (num === undefined) {
    num = 0.7;
  }
  const customTheme = overlayOpacity.customTheme;
  const merged = Object.assign(overlayOpacity, Object.create(null));
  const tmp2 = callback3();
  let obj = AccessibilityAnnouncer;
  const tmp4 = useThemeDefault();
  const tmp5 = require;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  obj = {};
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(customTheme.customThemeSettings);
  obj.theme = customTheme.theme;
  const tmp11 = callback(CustomThemesGradient, obj);
  let tmp12 = tmp11;
  if (merged.withOverlay) {
    obj = { style: null, children: null };
    obj[0] = tmp2.absolute;
    const items = [tmp11, ];
    obj1 = { style: null };
    const items1 = [tmp2.softenGradient, ];
    const obj2 = { backgroundColor: null };
    obj2[0] = hexToRgba.hexWithOpacity(tmp7, num);
    items1[1] = obj2;
    obj1[0] = items1;
    items[1] = callback(View, obj1);
    obj[1] = items;
    tmp12 = callback2(View, obj);
    const tmp5Result = hexToRgba;
  }
  return tmp12;
};