// === Module 14645: getMaxColors ===

// Module 14645 (getMaxColors)
import ThemesDefault from "Themes" /* 712 */;
import getSystemThemeDefault from "getSystemTheme" /* 1339 */;
import ClientThemeType from "ClientThemeType" /* 1349 */;
import getCustomThemesName from "getCustomThemesName" /* 4307 */;
import noop from "noop" /* 19 */;
import { ThemeTypes } from "sum" /* 505 */;

require = fn;
function getMaxColors() {
  const allMobileThemes = getCustomThemesName.getAllMobileThemes();
  let num = 0;
  const iter = allMobileThemes[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let type = nextResult.type;
    if (ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME === type) {
      let _Math3 = Math;
      num = Math.max(1, num);
    } else if (ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET === type) {
      let _Math2 = Math;
      num = Math.max(tmp3.colors.length, num);
    } else if (ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT === type) {
      let _Math = Math;
      num = Math.max(tmp3.customThemeSettings.colors.length, num);
    }
    continue;
  }
  return num;
}
function convertBackgroundGradientToAnimatedTheme(theme, prop, prop1) {
  closure_0 = theme;
  closure_1 = prop;
  closure_2 = prop1;
  let obj = { theme: theme.theme, name: theme.getName(), midpointPercentage: null, angle: null, colors: null };
  let num = theme.midpointPercentage;
  if (num == null) {
    num = 50;
  }
  obj[2] = num;
  let num2 = theme.angle;
  if (num2 == null) {
    num2 = 0;
  }
  obj[3] = num2;
  const colors = theme.colors;
  const mapped = colors.map((item, index) => {
    let tmp6 = prop(prop1[4]);
    if ("light" !== theme.theme) {
      tmp6 = new tmp6(0, 0, 0, prop);
    } else {
      tmp6 = new tmp6(255, 255, 255, prop1);
    }
    let obj = theme(prop1[5]);
    ({ r, g, b } = obj.hexToRgb(prop(prop1[6]).unsafe_rawColors[item.token]));
    let num8 = 0.2;
    if ("light" !== theme.theme) {
      num8 = 0.3;
    }
    obj = { hex: null, stop: null };
    const hexToRgbResult = obj.hexToRgb(prop(prop1[6]).unsafe_rawColors[item.token]);
    const tmp13Result = theme(prop1[5]);
    const tmp15 = new prop(prop1[4])(r, g, b, num8);
    obj[0] = tmp13Result.mixColors(tmp6, new prop(prop1[4])(r, g, b, num8)).toHexString();
    obj[1] = item.stop;
    return obj;
  });
  let num3 = getMaxColors();
  if (num3 === undefined) {
    num3 = 5;
  }
  const items = [];
  for (let num4 = 0; num4 < num3; num4 = num4 + 1) {
    if (num4 < mapped.length) {
      let arr = items.push(mapped[num4]);
    } else {
      obj = { hex: null, stop: 100 };
      obj[0] = mapped[mapped.length - 1].hex;
      arr = items.push(obj);
    }
  }
  obj[4] = items;
  return obj;
}
function convertStandardThemeToAnimatedTheme(theme, items, BACKGROUND_SURFACE_HIGH) {
  theme = theme.theme;
  let str = "light";
  if (ThemeTypes.LIGHT !== theme) {
    str = "dark";
    if (ThemeTypes.DARK !== theme) {
      str = "darker";
      if (ThemeTypes.DARKER !== theme) {
        str = "midnight";
        if (ThemeTypes.MIDNIGHT !== theme) {
          str = "light";
        }
      }
    }
  }
  const internal = ThemesDefault.internal;
  let obj = { enabledExperiments: items };
  const semanticColor = internal.resolveSemanticColor(str, BACKGROUND_SURFACE_HIGH, obj);
  obj = { theme: theme.theme, name: theme.getName(), midpointPercentage: 50, angle: 0, colors: null };
  items = [{ hex: semanticColor, stop: 20 }, { hex: semanticColor, stop: 40 }, { hex: semanticColor, stop: 60 }, { hex: semanticColor, stop: 80 }, { hex: semanticColor, stop: 100 }];
  let num = getMaxColors();
  if (num === undefined) {
    num = 5;
  }
  const items1 = [];
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    if (num2 < items.length) {
      let arr = items1.push(items[num2]);
    } else {
      obj = { hex: null, stop: 100 };
      obj[0] = items[items.length - 1].hex;
      arr = items1.push(obj);
    }
  }
  obj[4] = items1;
  return obj;
}
function convertCustomBackgroundGradientToAnimatedTheme(theme, prop, prop1) {
  closure_0 = theme;
  closure_1 = prop;
  closure_2 = prop1;
  let obj = { theme: theme.theme, name: theme.getName(), midpointPercentage: 50, angle: null, colors: null };
  let num = theme.customThemeSettings.gradientAngle;
  if (num == null) {
    num = 0;
  }
  obj[3] = num;
  const colors = theme.customThemeSettings.colors;
  const mapped = colors.map((item, index) => {
    let tmp7 = prop(prop1[4]);
    if ("light" !== theme.theme) {
      tmp7 = new tmp7(0, 0, 0, prop);
      let tmp12 = prop;
      let tmp13 = prop1;
    } else {
      tmp7 = new tmp7(255, 255, 255, prop1);
      tmp12 = prop;
      tmp13 = prop1;
    }
    let obj = theme(tmp13[5]);
    ({ r, g, b } = obj.hexToRgb(item));
    let num8 = 0.2;
    if ("light" !== theme.theme) {
      num8 = 0.3;
    }
    obj = { hex: null, stop: null };
    const hexToRgbResult = obj.hexToRgb(item);
    const tmp16Result = theme(tmp13[5]);
    const tmp18 = new tmp12(tmp13[4])(r, g, b, num8);
    obj[0] = tmp16Result.mixColors(tmp7, new tmp12(tmp13[4])(r, g, b, num8)).toHexString();
    let num9 = 0;
    if (theme.customThemeSettings.colors.length > 1) {
      num9 = index * (100 / (theme.customThemeSettings.colors.length - 1));
    }
    obj[1] = num9;
    return obj;
  });
  let num2 = getMaxColors();
  if (num2 === undefined) {
    num2 = 5;
  }
  const items = [];
  for (let num3 = 0; num3 < num2; num3 = num3 + 1) {
    if (num3 < mapped.length) {
      let arr = items.push(mapped[num3]);
    } else {
      obj = { hex: null, stop: 100 };
      obj[0] = mapped[mapped.length - 1].hex;
      arr = items.push(obj);
    }
  }
  obj[4] = items;
  return obj;
}
const result = require("obj132").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearancePickerUtils.tsx");

export const convertThemesToAnimatedThemes = function convertThemesToAnimatedThemes(sharedValue, prop, prop1, memo, BACKGROUND_SURFACE_HIGH) {
  let num = prop;
  if (prop === undefined) {
    num = 0.7;
  }
  let num2 = prop1;
  if (prop1 === undefined) {
    num2 = 0.8;
  }
  let items = memo;
  if (memo === undefined) {
    items = [];
  }
  if (BACKGROUND_SURFACE_HIGH === undefined) {
    BACKGROUND_SURFACE_HIGH = ThemesDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  const items1 = [];
  const iter = sharedValue[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    let type = nextResult.type;
    if (ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME === type) {
      let arr = items1.push(convertStandardThemeToAnimatedTheme(tmp5, items, BACKGROUND_SURFACE_HIGH));
    } else if (ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET === type) {
      arr = items1.push(convertBackgroundGradientToAnimatedTheme(tmp5, num, num2));
    } else if (ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT === type) {
      let arr1 = items1.push(convertCustomBackgroundGradientToAnimatedTheme(tmp5, num, num2));
    }
    continue;
  }
  return items1;
};
export const useLaunchWelcomeSystemTheme = function useLaunchWelcomeSystemTheme() {
  const tmp4 = getSystemThemeDefault() === ThemeTypes.LIGHT ? ThemeTypes.LIGHT : ThemeTypes.DARKER;
  token = token(4097).useToken(ThemesDefault.colors.BACKGROUND_BASE_LOW, tmp4);
  let items = [token];
  return React.useMemo(() => {
    let obj = { theme: "system", name: null, midpointPercentage: 50, angle: 0, colors: null };
    const intl = token(dependencyMap[9]).intl;
    obj[1] = intl.string(token(dependencyMap[9]).t.zlvNOj);
    obj = { hex: token, stop: 20 };
    const items = [obj, { hex: token, stop: 40 }, { hex: token, stop: 60 }, { hex: token, stop: 80 }, { hex: token, stop: 100 }];
    let num = getMaxColors();
    if (num === undefined) {
      num = 5;
    }
    const items1 = [];
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      if (num2 < items.length) {
        let arr = items1.push(items[num2]);
      } else {
        obj = { hex: null, stop: 100 };
        obj[0] = items[items.length - 1].hex;
        arr = items1.push(obj);
      }
    }
    obj[4] = items1;
    return obj;
  }, items);
};