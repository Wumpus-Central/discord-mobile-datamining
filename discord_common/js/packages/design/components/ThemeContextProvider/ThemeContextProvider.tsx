// discord_common/js/packages/design/components/ThemeContextProvider/ThemeContextProvider.tsx
import noop from "../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContextProvider.tsx");

export const ThemeContextProvider = function ThemeContextProvider(children) {
  let theme = children.theme;
  let primaryColor = children.primaryColor;
  let secondaryColor = children.secondaryColor;
  let gradient = children.gradient;
  let flags = children.flags;
  let contrast = children.contrast;
  let saturation = children.saturation;
  let enabledExperiments = children.enabledExperiments;
  let density = children.density;
  let disableAdaptiveTheme = children.disableAdaptiveTheme;
  let reduceAdaptiveTheme = children.reduceAdaptiveTheme;
  const context = secondaryColor.useContext(theme(primaryColor[2]).ThemeContext);
  const FALLBACK_THEME_CONTEXT_VALUE = theme(primaryColor[2]).FALLBACK_THEME_CONTEXT_VALUE;
  const items = [theme, , , , , , , , , , , , , , , , , , , , , ];
  ({ theme: arr[1], primaryColor: arr[2], secondaryColor: arr[3], gradient: arr[4], flags: arr[5], contrast: arr[6], saturation: arr[7], enabledExperiments: arr[8], density: arr[9], disableAdaptiveTheme: arr[10], reduceAdaptiveTheme: arr[11] } = context);
  items[12] = primaryColor;
  items[13] = secondaryColor;
  items[14] = gradient;
  items[15] = flags;
  items[16] = contrast;
  items[17] = saturation;
  items[18] = enabledExperiments;
  items[19] = density;
  items[20] = disableAdaptiveTheme;
  items[21] = reduceAdaptiveTheme;
  const value = secondaryColor.useMemo(() => {
    let obj = theme(primaryColor[2]);
    if (theme == null) {
      theme = context.theme;
    }
    obj = { theme, primaryColor: null, secondaryColor: null, gradient: null, flags: null, contrast: null, saturation: null, enabledExperiments: null, density: null, disableAdaptiveTheme: null, reduceAdaptiveTheme: null };
    if (primaryColor == null) {
      primaryColor = context.primaryColor;
    }
    obj[1] = primaryColor;
    if (secondaryColor == null) {
      secondaryColor = context.secondaryColor;
    }
    obj[2] = secondaryColor;
    if (gradient == null) {
      gradient = context.gradient;
    }
    obj[3] = gradient;
    if (flags == null) {
      flags = context.flags;
    }
    obj[4] = flags;
    if (contrast == null) {
      contrast = context.contrast;
    }
    obj[5] = contrast;
    if (saturation == null) {
      saturation = context.saturation;
    }
    obj[6] = saturation;
    if (enabledExperiments == null) {
      enabledExperiments = context.enabledExperiments;
    }
    obj[7] = enabledExperiments;
    if (density == null) {
      density = context.density;
    }
    obj[8] = density;
    if (disableAdaptiveTheme == null) {
      disableAdaptiveTheme = context.disableAdaptiveTheme;
    }
    obj[9] = disableAdaptiveTheme;
    if (reduceAdaptiveTheme == null) {
      reduceAdaptiveTheme = context.reduceAdaptiveTheme;
    }
    obj[10] = reduceAdaptiveTheme;
    return obj.createThemedContext(obj);
  }, items);
  return gradient(theme(primaryColor[2]).ThemeContext.Provider, { value, children: children.children });
};