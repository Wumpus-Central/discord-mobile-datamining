// discord_app/design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ThemeTypes = fn(1085).ThemeTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx",
);

export const RootThemeContextProvider = function RootThemeContextProvider(children) {
  let DARK = children.theme;
  if (DARK === undefined) {
    DARK = gradient.DARK;
  }
  let primaryColor = children.primaryColor;
  if (primaryColor === undefined) {
    primaryColor = null;
  }
  let secondaryColor = children.secondaryColor;
  if (secondaryColor === undefined) {
    secondaryColor = null;
  }
  gradient = children.gradient;
  if (gradient === undefined) {
    gradient = null;
  }
  let num = children.flags;
  if (num === undefined) {
    num = 0;
  }
  let num2 = children.contrast;
  if (num2 === undefined) {
    num2 = 1;
  }
  let num3 = children.saturation;
  if (num3 === undefined) {
    num3 = 1;
  }
  const enabledExperiments = children.enabledExperiments;
  let str = children.density;
  if (str === undefined) {
    str = "compact";
  }
  let flag = children.disableAdaptiveTheme;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = children.reduceAdaptiveTheme;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const items = [DARK, primaryColor, secondaryColor, gradient, num, num2, num3, enabledExperiments, str, flag, flag2];
  value = secondaryColor.useMemo(() => {
    const obj = {
      theme: DARK,
      primaryColor,
      secondaryColor,
      gradient,
      flags: num,
      contrast: num2,
      saturation: num3,
      enabledExperiments,
      density: str,
      disableAdaptiveTheme: flag,
      reduceAdaptiveTheme: flag2,
    };
    return obj.createThemedContext(obj);
  }, items);
  return num(DARK(primaryColor[3]).ThemeContext.Provider, { value, children: children.children });
};
export const DisableCustomTheme = function DisableCustomTheme(children) {
  let obj = themeContext(4271);
  themeContext = obj.useThemeContext();
  const items = [themeContext];
  const memo = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(themeContext);
    obj.primaryColor = null;
    obj.secondaryColor = null;
    obj.gradient = null;
    return obj.createThemedContext(obj);
  }, items);
  obj = { value: memo, children: children.children };
  return jsx(themeContext(4271).ThemeContext.Provider, { value: memo, children: children.children });
};
