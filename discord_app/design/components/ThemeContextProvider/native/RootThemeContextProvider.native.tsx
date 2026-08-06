// discord_app/design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx
import noop from "noop";
import { ThemeTypes } from "sum";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx");

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
  const value = secondaryColor.useMemo(() => {
    let obj = DARK(primaryColor[3]);
    obj = { theme: DARK, primaryColor, secondaryColor, gradient, flags: num, contrast: num2, saturation: num3, enabledExperiments, density: str, disableAdaptiveTheme: flag, reduceAdaptiveTheme: flag2 };
    return obj.createThemedContext(obj);
  }, items);
  return num(DARK(primaryColor[3]).ThemeContext.Provider, { value, children: children.children });
};
export const DisableCustomTheme = function DisableCustomTheme(children) {
  let obj = themeContext(3996);
  themeContext = obj.useThemeContext();
  const items = [themeContext];
  const memo = React.useMemo(() => {
    let obj = themeContext(outer1_1[3]);
    obj = {};
    const merged = Object.assign(themeContext);
    obj.primaryColor = null;
    obj.secondaryColor = null;
    obj.gradient = null;
    return obj.createThemedContext(obj);
  }, items);
  obj = { value: memo, children: children.children };
  return jsx(themeContext(3996).ThemeContext.Provider, { value: memo, children: children.children });
};