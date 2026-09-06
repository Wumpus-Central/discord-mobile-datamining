// === Module 5125: ThemedGradient ===

// Module 5125 (ThemedGradient)
import nativeDefault from "native" /* 576 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4378 */;
import utils_ColorDefault from "utils/Color" /* 4410 */;
import shared from "shared" /* 4411 */;
import GuildThemePresets from "GuildThemePresets" /* 4414 */;
import useRoutedActiveGuildThemeDefault from "useRoutedActiveGuildTheme" /* 4416 */;
import useThemeDefault from "useTheme" /* 4495 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import noop from "module_19" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4379 */;

const ColorUtils = tmp5(4409);
require = fn;
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
    const isThemeDarkResult = shared.isThemeDark(theme2);
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
    mixColorOverride = new utils_ColorDefault(num2, num2, num2, tmp4);
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
  let tmp12Result = tmp12(4409);
  obj6 = shared;
  ({ r, g, b } = tmp12Result.hexToRgb(mixColorOverride.color));
  tmp12Result = tmp12(4409);
  const hexToRgbResult = tmp12Result.hexToRgb(mixColorOverride.color);
  const tmp15 = new utils_ColorDefault(r, g, b, num3);
  return tmp12Result.mixColors(mixColorOverride, new utils_ColorDefault(r, g, b, num3)).toHexString();
}
function GradientBase(angleCenter) {
  angleCenter = angleCenter.angleCenter;
  ({ colors, locations, angle } = angleCenter);
  if (angleCenter === undefined) {
    angleCenter = closure_9;
  }
  ({ absolute, wide, tall } = angleCenter);
  const tmp = closure_8();
  ({ width, height } = useWindowDimensionsDefault());
  let obj = { colors, locations, angle, angleCenter, useAngle: true, style: null };
  const tmp2 = useWindowDimensionsDefault();
  const tmp3 = timestampProducer;
  if (wide) {
    obj = { width };
    wide = obj;
  }
  const items = [wide, , , , ];
  if (tall) {
    obj = { height };
    tall = obj;
  }
  items[1] = tall;
  items[2] = tmp.linearGradient;
  if (absolute) {
    absolute = tmp.absolute;
  }
  items[3] = absolute;
  items[4] = angleCenter.componentStyles;
  obj.style = items;
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
    closure_3 = closure_1(mixColorOverride[10])();
    colors = gradient.colors;
    obj = {
      colors: colors.map((item) => {
            if (require) {
              const obj = { color: nativeDefault.unsafe_rawColors[item.token], mixAmount, mixColorOverride, theme };
              let tmp3 = getMixedGradientColor(obj);
            } else {
              tmp3 = nativeDefault.unsafe_rawColors[item.token];
            }
            return tmp3;
          }),
      locations: null,
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
    obj.locations = colors1.map((stop) => stop.stop / 100);
    if (angleOverride == null) {
      angleOverride = gradient.angle;
    }
    obj.angle = angleOverride;
    angleCenter = gradient.angleCenter;
    if (angleCenter == null) {
      angleCenter = closure_9;
    }
    obj.angleCenter = angleCenter;
    obj.absolute = absolute;
    obj.wide = wide;
    obj.tall = tall;
    obj.componentStyles = componentStyles;
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
  const tmp = mixAmount(mixColorOverride[10])();
  const theme = tmp;
  let obj = require("GuildThemePresets");
  const guildThemePresetAppearance = obj.getGuildThemePresetAppearance(preset, tmp);
  const colors = guildThemePresetAppearance.colors;
  obj = {
    colors: colors.map((hex) => {
      if (require) {
        const obj = { color: hex.hex, mixAmount, mixColorOverride, theme };
        hex = getMixedGradientColor(obj);
      } else {
        hex = hex.hex;
      }
      return hex;
    }),
    locations: null,
    angle: null,
    angleCenter: null,
    absolute: null,
    wide: null,
    tall: null,
    componentStyles: null
  };
  const colors1 = guildThemePresetAppearance.colors;
  obj.locations = colors1.map((stop) => stop.stop / 100);
  if (angleOverride == null) {
    angleOverride = guildThemePresetAppearance.angle;
  }
  obj.angle = angleOverride;
  obj.angleCenter = angleCenter;
  obj.absolute = absolute;
  obj.wide = wide;
  obj.tall = tall;
  obj.componentStyles = componentStyles;
  return closure_6(GradientBase, obj);
}
function CustomThemesGradient(arg0) {
  ({ colors, gradientColorStops, absolute, wide, tall, mixAmount } = arg0);
  ({ baseMix, gradientAngle, mix } = arg0);
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  let reduced;
  ({ mixColorOverride, componentStyles, theme } = arg0);
  const tmp = closure_8();
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  closure_129_0 = baseMix;
  ({ width, height } = reduced(1477)());
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  closure_129_1 = mixAmount;
  closure_129_2 = mixColorOverride;
  closure_129_3 = theme;
  let mapped = colors;
  if (mix) {
    mapped = colors.map((item) => {
      let tmp2 = dependencyMap;
      let num = c10;
      let obj = reduced;
      const result = reduced / 100;
      if (reduced === undefined) {
        obj = {};
      }
      if (null == tmp2) {
        const diff = 1 - result;
        let sum = num + 0.2 * diff;
        const isThemeDarkResult = shared.isThemeDark(tmp3);
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
        tmp2 = new utils_ColorDefault(num3, num3, num3, tmp6);
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
      if (obj3.isThemeDark(noop)) {
        if (null != obj.dark) {
          num4 = 1 - obj.dark;
        }
        num = num4;
      } else if (null != obj.light) {
        num = 1 - obj.light;
      }
      let tmp14Result = tmp14(4409);
      obj3 = shared;
      ({ r, g, b } = tmp14Result.hexToRgb(item));
      tmp14Result = tmp14(4409);
      const hexToRgbResult = tmp14Result.hexToRgb(item);
      const tmp17 = new utils_ColorDefault(r, g, b, num);
      const mixColorsResult = tmp14Result.mixColors(tmp2, new utils_ColorDefault(r, g, b, num));
      return client_themes_ClientThemesUtils.colorToHex(mixColorsResult);
    });
  }
  let arr2 = mapped;
  if (1 === mapped.length) {
    const items = [mapped[0], mapped[0]];
    arr2 = items;
  }
  let result = (gradientAngle - 90) * Math.PI / 180;
  const cosResult = Math.cos(result);
  const sinResult = Math.sin(result);
  const point = { x: 0.6 - 0.7142857142857143 * cosResult, y: 0.5 - 0.7142857142857143 * sinResult };
  const point1 = { x: 0.6 + 0.7142857142857143 * cosResult, y: 0.5 + 0.7142857142857143 * sinResult };
  reduced = arr2.reduce((arr, item) => {
    if (typeof item === "string") {
      if (regex.test(item)) {
        arr.push(item);
        return arr;
      }
    }
    try {
      arr.push(reduced(dependencyMap[14])(item).hex("rgb"));
      return arr;
    } catch (err) {
    }
  }, []);
  if (gradientColorStops === undefined) {
    gradientColorStops = [];
  }
  if (gradientColorStops.length === reduced.length) {
    let mapped1 = gradientColorStops.map((item) => item / 100);
  } else if (1 === reduced.length) {
    mapped1 = [0, 1];
  } else {
    mapped1 = reduced.map((item, index) => index / (reduced.length - 1));
  }
  const items1 = [reduced, arr2];
  const effect = noop.useEffect(() => {
    if (reduced.length < 2) {
      const _Error = Error;
      const error = new Error("Invalid custom theme gradient colors");
      let obj = { extra: null };
      obj = { gradientColors: null };
      const _JSON = JSON;
      obj.gradientColors = JSON.stringify(reduced);
      obj.extra = obj;
      obj.captureException(error, obj);
    }
  }, items1);
  let tmp10Result = null;
  if (reduced.length >= 2) {
    let obj = { colors: reduced, locations: mapped1, start: point, end: point1, style: null };
    if (wide) {
      obj = { width };
      wide = obj;
    }
    const items2 = [wide, , , , ];
    if (tall) {
      const obj1 = { height };
      tall = obj1;
    }
    items2[1] = tall;
    items2[2] = tmp.linearGradient;
    if (absolute) {
      absolute = tmp.absolute;
    }
    items2[3] = absolute;
    items2[4] = componentStyles;
    obj.style = items2;
    tmp10Result = closure_6(reduced(4987), obj);
    const tmp2Result = reduced(4987);
  }
  return tmp10Result;
}
function ActiveGuildThemeGradient(arg0) {
  ({ activeGuildTheme, theme } = arg0);
  const merged = Object.assign(arg0, Object.assign({ activeGuildTheme: 0, theme: 0 }));
  if ("custom" === activeGuildTheme.type) {
    const customUserThemeSettings = activeGuildTheme.customUserThemeSettings;
    let obj = {};
    const merged1 = Object.assign(merged);
    const items = [];
    HermesBuiltin.arraySpread(GuildThemePresets.getSingleColorGuildThemeGradientColors(customUserThemeSettings.colors[0], theme), 0);
    obj.colors = items;
    obj.gradientColorStops = [];
    let num2 = customUserThemeSettings.gradientAngle;
    if (num2 == null) {
      num2 = 0;
    }
    obj.gradientAngle = num2;
    let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
    if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
      GUILD_THEME_DEFAULT_BASE_MIX = GuildThemePresets.GUILD_THEME_DEFAULT_BASE_MIX;
    }
    obj.baseMix = GUILD_THEME_DEFAULT_BASE_MIX;
    obj.theme = theme;
    return timestampProducer(CustomThemesGradient, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    obj.preset = activeGuildTheme.preset;
    return timestampProducer(GuildThemePresetGradient, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ softenGradient: { flex: 1 }, linearGradient: { flex: 1 }, absolute: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 } });
let angleCenter = { x: 0.5, y: 0.5 };
let c10 = 0.5;
const re15 = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
const size = fn(2);
let result = size.fileFinishedImporting("modules/client_themes/native/ThemedGradient.tsx");

export default function ThemedGradient(overlayOpacity) {
  let num = overlayOpacity.overlayOpacity;
  if (num === undefined) {
    num = 0.7;
  }
  const gradientOverride = overlayOpacity.gradientOverride;
  const merged = Object.assign(overlayOpacity, Object.assign({ overlayOpacity: 0, gradientOverride: 0 }));
  const tmp2 = closure_8();
  let obj = shared;
  const tmp5 = useThemeDefault();
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp8 = obj.isThemeDark(useThemeDefault()) ? unsafe_rawColors.BLACK : unsafe_rawColors.WHITE;
  const withOverlay = merged.withOverlay;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  let tmp6Result = tmp6(563);
  const items = [ClientThemesBackgroundStore];
  const preset = tmp6Result.useStateFromStoresObject(items, () => ({ preset: gradientPreset.gradientPreset })).preset;
  const tmp10 = useRoutedActiveGuildThemeDefault();
  tmp6Result = tmp6(4494);
  const customThemeDisplaySettings = tmp6Result.useCustomThemeDisplaySettings();
  if (null != gradientOverride) {
    if (tmp12) {
      if (gradientOverride.type === tmp6(1231).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        obj = {};
        const merged1 = Object.assign(merged);
        const merged2 = Object.assign(gradientOverride.customThemeSettings);
        obj.theme = gradientOverride.theme;
        const tmp59 = timestampProducer(CustomThemesGradient, obj);
        let tmp60 = tmp59;
        if (withOverlay) {
          obj = { style: tmp2.absolute, children: null };
          const items1 = [tmp59, ];
          const obj1 = { style: null };
          const items2 = [tmp2.softenGradient, ];
          const obj2 = { backgroundColor: tmp6(4409).hexWithOpacity(tmp8, num) };
          items2[1] = obj2;
          obj1.style = items2;
          items1[1] = timestampProducer(View, obj1);
          obj.children = items1;
          tmp60 = React5(View, obj);
          const tmp6Result1 = tmp6(4409);
        }
        return tmp60;
      }
    }
    if (gradientOverride.type === tmp6(1231).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      const obj3 = {};
      const merged3 = Object.assign(merged);
      obj3.gradient = gradientOverride;
      const tmp48 = timestampProducer(Gradient, obj3);
      let tmp49 = tmp48;
      if (withOverlay) {
        const obj4 = { style: tmp2.absolute, children: null };
        const items3 = [tmp48, ];
        const obj5 = { style: null };
        const items4 = [tmp2.softenGradient, ];
        const obj6 = { backgroundColor: tmp6(4409).hexWithOpacity(tmp8, num) };
        items4[1] = obj6;
        obj5.style = items4;
        items3[1] = timestampProducer(View, obj5);
        obj4.children = items3;
        tmp49 = React5(View, obj4);
        const tmp6Result2 = tmp6(4409);
      }
      return tmp49;
    }
  }
  if (null != tmp10) {
    const obj7 = {};
    const merged4 = Object.assign(merged);
    obj7.activeGuildTheme = tmp10;
    obj7.theme = tmp9;
    const tmp39 = timestampProducer(ActiveGuildThemeGradient, obj7);
    let tmp40 = tmp39;
    if (withOverlay) {
      const obj8 = { style: tmp2.absolute, children: null };
      const items5 = [tmp39, ];
      const obj9 = { style: null };
      const items6 = [tmp2.softenGradient, ];
      const obj10 = { backgroundColor: tmp6(4409).hexWithOpacity(tmp8, num) };
      items6[1] = obj10;
      obj9.style = items6;
      items5[1] = tmp34(View, obj9);
      obj8.children = items5;
      tmp40 = React5(View, obj8);
      const tmp6Result3 = tmp6(4409);
    }
    let tmp13 = tmp40;
    tmp34 = timestampProducer;
  } else {
    if (tmp12) {
      if (tmp12) {
        const obj11 = {};
        const merged5 = Object.assign(merged);
        const merged6 = Object.assign(customThemeDisplaySettings.customTheme);
        obj11.theme = customThemeDisplaySettings.baseTheme;
        const tmp30 = timestampProducer(CustomThemesGradient, obj11);
        let tmp31 = tmp30;
        if (withOverlay) {
          const obj12 = { style: tmp2.absolute, children: null };
          const items7 = [tmp30, ];
          const obj13 = { style: null };
          const items8 = [tmp2.softenGradient, ];
          const obj14 = { backgroundColor: tmp6(4409).hexWithOpacity(tmp8, num) };
          items8[1] = obj14;
          obj13.style = items8;
          items7[1] = tmp23(View, obj13);
          obj12.children = items7;
          tmp31 = React5(View, obj12);
          const tmp6Result4 = tmp6(4409);
        }
        tmp13 = tmp31;
        tmp23 = timestampProducer;
      }
    }
    tmp13 = null;
    if (null != preset) {
      const obj15 = {};
      const merged7 = Object.assign(merged);
      obj15.gradient = preset;
      const tmp19 = timestampProducer(Gradient, obj15);
      let tmp20 = tmp19;
      if (withOverlay) {
        const obj16 = { style: tmp2.absolute, children: null };
        const items9 = [tmp19, ];
        const obj17 = { style: null };
        const items10 = [tmp2.softenGradient, ];
        const obj18 = { backgroundColor: tmp6(4409).hexWithOpacity(tmp8, num) };
        items10[1] = obj18;
        obj17.style = items10;
        items9[1] = tmp14(View, obj17);
        obj16.children = items9;
        tmp20 = React5(View, obj16);
        const tmp6Result5 = tmp6(4409);
      }
      tmp13 = tmp20;
      tmp14 = timestampProducer;
    }
  }
  return tmp13;
};
export { Gradient };
export const validateColors = function validateColors(arr) {
  return arr.reduce((arr, item) => {
    if (typeof item === "string") {
      if (regex.test(item)) {
        arr.push(item);
        return arr;
      }
    }
    try {
      arr.push(reduced(dependencyMap[14])(item).hex("rgb"));
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
  const merged = Object.assign(overlayOpacity, Object.assign({ overlayOpacity: 0, customTheme: 0 }));
  const tmp2 = closure_8();
  const tmp4 = useThemeDefault();
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  let obj = {};
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(customTheme.customThemeSettings);
  obj.theme = customTheme.theme;
  const tmp11 = timestampProducer(CustomThemesGradient, obj);
  let tmp12 = tmp11;
  if (merged.withOverlay) {
    obj = { style: tmp2.absolute, children: null };
    const items = [tmp11, ];
    const obj1 = { style: null };
    const items1 = [tmp2.softenGradient, ];
    const obj2 = { backgroundColor: ColorUtils.hexWithOpacity(tmp7, num) };
    items1[1] = obj2;
    obj1.style = items1;
    items[1] = timestampProducer(View, obj1);
    obj.children = items;
    tmp12 = React5(View, obj);
    const tmp5Result = ColorUtils;
  }
  return tmp12;
};