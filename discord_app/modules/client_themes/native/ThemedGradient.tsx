// discord_app/modules/client_themes/native/ThemedGradient.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ClientThemesTypes from "../ClientThemesTypes.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import client_themes_ClientThemesUtils from "ClientThemesUtils.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import utils_ColorDefault from "../../../utils/Color.tsx";
import shared from "../../../design/shared.tsx";
import GuildThemePresets from "../../guild_themes/GuildThemePresets.tsx";
import useRoutedActiveGuildThemeDefault from "../../guild_themes/native/useRoutedActiveGuildTheme.tsx";
import useCustomThemeDisplaySettings from "useCustomThemeDisplaySettings.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import LinearGradientDefault from "../../../../_runtime/05199_LinearGradient.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ClientThemesBackgroundStore from "../ClientThemesBackgroundStore.tsx";

require = fn;
function getMixedGradientColor(mixColorOverride) {
  ({ mixAmount, theme } = mixColorOverride);
  const obj = { mixAmount, mixColorOverride: mixColorOverride.mixColorOverride, theme };
  let mixAmount1 = obj.mixAmount;
  if (mixAmount1 === undefined) {
    mixAmount1 = {};
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
    let tmp4 = isThemeDarkResult ? mixAmount1.dark : mixAmount1.light;
    if (tmp4 == null) {
      tmp4 = num;
    }
    let num2 = 255;
    if (isThemeDarkResult) {
      num2 = 0;
    }
    mixColorOverride = new utils_ColorDefault(num2, num2, num2, tmp4);
  }
  const obj2 = { mixAmount, theme };
  let mixAmount2 = obj2.mixAmount;
  if (mixAmount2 === undefined) {
    mixAmount2 = {};
  }
  ({ darkFallbackAmount, theme: theme3 } = obj2);
  if (darkFallbackAmount === undefined) {
    darkFallbackAmount = 0.3;
  }
  let num3 = obj2.lightFallbackAmount;
  if (num3 === undefined) {
    num3 = 0.2;
  }
  if (obj6.isThemeDark(theme3)) {
    if (null != mixAmount2.dark) {
      darkFallbackAmount = 1 - mixAmount2.dark;
    }
    num3 = darkFallbackAmount;
  } else if (null != mixAmount2.light) {
    num3 = 1 - mixAmount2.light;
  }
  obj6 = shared;
  const tmp12Result = ColorUtils;
  ({ r, g, b } = ColorUtils.hexToRgb(mixColorOverride.color));
  const hexToRgbResult = ColorUtils.hexToRgb(mixColorOverride.color);
  const tmp12Result2 = ColorUtils;
  const tmp15 = new utils_ColorDefault(r, g, b, num3);
  return tmp12Result2.mixColors(mixColorOverride, new utils_ColorDefault(r, g, b, num3)).toHexString();
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
  const obj = { colors, locations, angle, angleCenter, useAngle: true, style: null };
  const tmp2 = useWindowDimensionsDefault();
  if (wide) {
    const obj2 = { width };
    wide = obj2;
  }
  const items = [wide, , , ,];
  if (tall) {
    const obj3 = { height };
    tall = obj3;
  }
  items[1] = tall;
  items[2] = tmp.linearGradient;
  if (absolute) {
    absolute = tmp.absolute;
  }
  items[3] = absolute;
  items[4] = angleCenter.componentStyles;
  obj.style = items;
  return timestampProducer(LinearGradientDefault, obj);
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
      componentStyles: null,
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
  const guildThemePresetAppearance = require("GuildThemePresets").getGuildThemePresetAppearance(preset, tmp);
  const colors = guildThemePresetAppearance.colors;
  const obj2 = {
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
    componentStyles: null,
  };
  const colors1 = guildThemePresetAppearance.colors;
  obj2.locations = colors1.map((stop) => stop.stop / 100);
  if (angleOverride == null) {
    angleOverride = guildThemePresetAppearance.angle;
  }
  obj2.angle = angleOverride;
  obj2.angleCenter = angleCenter;
  obj2.absolute = absolute;
  obj2.wide = wide;
  obj2.tall = tall;
  obj2.componentStyles = componentStyles;
  return closure_6(GradientBase, obj2);
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
  ({ width, height } = reduced(1478)());
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  closure_129_1 = mixAmount;
  closure_129_2 = mixColorOverride;
  closure_129_3 = theme;
  let mapped = colors;
  if (mix) {
    mapped = colors.map((item) => {
      let obj = reduced;
      let tmp2 = dependencyMap;
      let num = c10;
      let obj2 = reduced;
      const result = reduced / 100;
      if (reduced === undefined) {
        obj2 = {};
      }
      if (null == tmp2) {
        const diff = 1 - result;
        let sum = num + 0.2 * diff;
        const isThemeDarkResult = shared.isThemeDark(noop);
        if (isThemeDarkResult) {
          sum = num + 0.25 * diff;
        }
        let tmp6 = isThemeDarkResult ? obj2.dark : obj2.light;
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
      obj3 = shared;
      const tmp14Result = ColorUtils;
      ({ r, g, b } = ColorUtils.hexToRgb(item));
      const hexToRgbResult = ColorUtils.hexToRgb(item);
      const tmp14Result3 = ColorUtils;
      const tmp17 = new utils_ColorDefault(r, g, b, num);
      const mixColorsResult = tmp14Result3.mixColors(tmp2, new utils_ColorDefault(r, g, b, num));
      return client_themes_ClientThemesUtils.colorToHex(mixColorsResult);
    });
  }
  let arr2 = mapped;
  if (1 === mapped.length) {
    const items = [mapped[0], mapped[0]];
    arr2 = items;
  }
  let result = ((gradientAngle - 90) * Math.PI) / 180;
  const cosResult = Math.cos(result);
  const sinResult = Math.sin(result);
  const point = { x: 0.6 - 0.7142857142857143 * cosResult, y: 0.5 - 0.7142857142857143 * sinResult };
  const point1 = { x: 0.6 + 0.7142857142857143 * cosResult, y: 0.5 + 0.7142857142857143 * sinResult };
  reduced = arr2.reduce((arr, item) => {
    if (typeof item === "string") {
      if (regex.test(item)) {
        arr = arr.push(item);
        return arr;
      }
    }
    try {
      arr.push(reduced(dependencyMap[14])(item).hex("rgb"));
      return arr;
    } catch (err) {}
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
      const obj2 = { extra: null };
      const obj3 = { gradientColors: null };
      const _JSON = JSON;
      obj3.gradientColors = JSON.stringify(reduced);
      obj2.extra = obj3;
      SentryUtilsDefault.captureException(error, obj2);
    }
  }, items1);
  let tmp10Result = null;
  if (reduced.length >= 2) {
    let obj = { colors: reduced, locations: mapped1, start: point, end: point1, style: null };
    if (wide) {
      let obj2 = { width };
      wide = obj2;
    }
    const items2 = [wide, , , ,];
    if (tall) {
      let obj3 = { height };
      tall = obj3;
    }
    items2[1] = tall;
    items2[2] = tmp.linearGradient;
    if (absolute) {
      absolute = tmp.absolute;
    }
    items2[3] = absolute;
    items2[4] = componentStyles;
    obj.style = items2;
    tmp10Result = closure_6(reduced(5199), obj);
    const tmp2Result = reduced(5199);
  }
  return tmp10Result;
}
function ActiveGuildThemeGradient(arg0) {
  ({ activeGuildTheme, theme } = arg0);
  const merged = Object.assign(arg0, Object.assign({ activeGuildTheme: 0, theme: 0 }));
  if ("custom" === activeGuildTheme.type) {
    const customUserThemeSettings = activeGuildTheme.customUserThemeSettings;
    const obj2 = {};
    const merged1 = Object.assign(merged);
    const items = [];
    HermesBuiltin.arraySpread(
      GuildThemePresets.getSingleColorGuildThemeGradientColors(customUserThemeSettings.colors[0], theme),
      0,
    );
    obj2.colors = items;
    obj2.gradientColorStops = [];
    let num2 = customUserThemeSettings.gradientAngle;
    if (num2 == null) {
      num2 = 0;
    }
    obj2.gradientAngle = num2;
    let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
    if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
      GUILD_THEME_DEFAULT_BASE_MIX = GuildThemePresets.GUILD_THEME_DEFAULT_BASE_MIX;
    }
    obj2.baseMix = GUILD_THEME_DEFAULT_BASE_MIX;
    obj2.theme = theme;
    return timestampProducer(CustomThemesGradient, obj2);
  } else {
    const obj = {};
    const merged2 = Object.assign(merged);
    obj.preset = activeGuildTheme.preset;
    return timestampProducer(GuildThemePresetGradient, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let closure_8 = createStyles.createStyles({
  softenGradient: { flex: 1 },
  linearGradient: { flex: 1 },
  absolute: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 },
});
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
  const tmp5 = useThemeDefault();
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp8 = shared.isThemeDark(tmp5) ? unsafe_rawColors.BLACK : unsafe_rawColors.WHITE;
  const withOverlay = merged.withOverlay;
  const isThemeDarkResult = shared.isThemeDark(tmp5);
  const tmp9 = useThemeDefault();
  const items = [ClientThemesBackgroundStore];
  const preset = useStateFromStores.useStateFromStoresObject(items, () => ({
    preset: gradientPreset.gradientPreset,
  })).preset;
  const tmp10 = useRoutedActiveGuildThemeDefault();
  const tmp6Result = useStateFromStores;
  const customThemeDisplaySettings = useCustomThemeDisplaySettings.useCustomThemeDisplaySettings();
  if (null != gradientOverride) {
    if (tmp12) {
      if (gradientOverride.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const obj2 = {};
        const merged1 = Object.assign(merged);
        const merged2 = Object.assign(gradientOverride.customThemeSettings);
        obj2.theme = gradientOverride.theme;
        const tmp59 = timestampProducer(CustomThemesGradient, obj2);
        let tmp60 = tmp59;
        if (withOverlay) {
          const obj3 = { style: tmp2.absolute, children: null };
          const items1 = [tmp59];
          const obj4 = { style: null };
          const items2 = [tmp2.softenGradient];
          const obj5 = { backgroundColor: ColorUtils.hexWithOpacity(tmp8, num) };
          items2[1] = obj5;
          obj4.style = items2;
          items1[1] = timestampProducer(View, obj4);
          obj3.children = items1;
          tmp60 = React5(View, obj3);
          const tmp6Result8 = ColorUtils;
        }
        return tmp60;
      }
    }
    if (gradientOverride.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      const obj6 = {};
      const merged3 = Object.assign(merged);
      obj6.gradient = gradientOverride;
      const tmp48 = timestampProducer(Gradient, obj6);
      let tmp49 = tmp48;
      if (withOverlay) {
        const obj7 = { style: tmp2.absolute, children: null };
        const items3 = [tmp48];
        const obj8 = { style: null };
        const items4 = [tmp2.softenGradient];
        const obj9 = { backgroundColor: ColorUtils.hexWithOpacity(tmp8, num) };
        items4[1] = obj9;
        obj8.style = items4;
        items3[1] = timestampProducer(View, obj8);
        obj7.children = items3;
        tmp49 = React5(View, obj7);
        const tmp6Result9 = ColorUtils;
      }
      return tmp49;
    }
  }
  if (null != tmp10) {
    const obj10 = {};
    const merged4 = Object.assign(merged);
    obj10.activeGuildTheme = tmp10;
    obj10.theme = tmp9;
    const tmp39 = timestampProducer(ActiveGuildThemeGradient, obj10);
    let tmp40 = tmp39;
    if (withOverlay) {
      const obj11 = { style: tmp2.absolute, children: null };
      const items5 = [tmp39];
      const obj12 = { style: null };
      const items6 = [tmp2.softenGradient];
      const obj13 = { backgroundColor: ColorUtils.hexWithOpacity(tmp8, num) };
      items6[1] = obj13;
      obj12.style = items6;
      items5[1] = timestampProducer(View, obj12);
      obj11.children = items5;
      tmp40 = React5(View, obj11);
      const tmp6Result10 = ColorUtils;
    }
    let tmp13 = tmp40;
  } else {
    if (tmp12) {
      if (tmp12) {
        const obj14 = {};
        const merged5 = Object.assign(merged);
        const merged6 = Object.assign(customThemeDisplaySettings.customTheme);
        obj14.theme = customThemeDisplaySettings.baseTheme;
        const tmp30 = timestampProducer(CustomThemesGradient, obj14);
        let tmp31 = tmp30;
        if (withOverlay) {
          const obj15 = { style: tmp2.absolute, children: null };
          const items7 = [tmp30];
          const obj16 = { style: null };
          const items8 = [tmp2.softenGradient];
          const obj17 = { backgroundColor: ColorUtils.hexWithOpacity(tmp8, num) };
          items8[1] = obj17;
          obj16.style = items8;
          items7[1] = timestampProducer(View, obj16);
          obj15.children = items7;
          tmp31 = React5(View, obj15);
          const tmp6Result11 = ColorUtils;
        }
        tmp13 = tmp31;
      }
    }
    tmp13 = null;
    if (null != preset) {
      const obj18 = {};
      const merged7 = Object.assign(merged);
      obj18.gradient = preset;
      const tmp19 = timestampProducer(Gradient, obj18);
      let tmp20 = tmp19;
      if (withOverlay) {
        const obj19 = { style: tmp2.absolute, children: null };
        const items9 = [tmp19];
        const obj20 = { style: null };
        const items10 = [tmp2.softenGradient];
        const obj21 = { backgroundColor: ColorUtils.hexWithOpacity(tmp8, num) };
        items10[1] = obj21;
        obj20.style = items10;
        items9[1] = timestampProducer(View, obj20);
        obj19.children = items9;
        tmp20 = React5(View, obj19);
        const tmp6Result12 = ColorUtils;
      }
      tmp13 = tmp20;
    }
  }
  return tmp13;
}
export { Gradient };
export const validateColors = function validateColors(arr) {
  return arr.reduce((arr, item) => {
    if (typeof item === "string") {
      if (regex.test(item)) {
        arr = arr.push(item);
        return arr;
      }
    }
    try {
      arr.push(reduced(dependencyMap[14])(item).hex("rgb"));
      return arr;
    } catch (err) {}
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
  const obj2 = {};
  const isThemeDarkResult = shared.isThemeDark(tmp4);
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(customTheme.customThemeSettings);
  obj2.theme = customTheme.theme;
  const tmp11 = timestampProducer(CustomThemesGradient, obj2);
  let tmp12 = tmp11;
  if (merged.withOverlay) {
    const obj3 = { style: tmp2.absolute, children: null };
    const items = [tmp11];
    const obj4 = { style: null };
    const items1 = [tmp2.softenGradient];
    const obj5 = { backgroundColor: ColorUtils.hexWithOpacity(tmp7, num) };
    items1[1] = obj5;
    obj4.style = items1;
    items[1] = timestampProducer(View, obj4);
    obj3.children = items;
    tmp12 = React5(View, obj3);
    const tmp5Result = ColorUtils;
  }
  return tmp12;
};
