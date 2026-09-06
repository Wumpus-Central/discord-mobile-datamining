// === Module 4285: ThemeContextProvider ===

// Module 4285 (ThemeContextProvider)
import ThemeContext from "ThemeContext" /* 4284 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContextProvider.tsx");

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
  value = secondaryColor.useMemo(() => {
    let obj = ThemeContext;
    if (theme == null) {
      theme = context.theme;
    }
    obj = { theme, primaryColor: null, secondaryColor: null, gradient: null, flags: null, contrast: null, saturation: null, enabledExperiments: null, density: null, disableAdaptiveTheme: null, reduceAdaptiveTheme: null };
    if (primaryColor == null) {
      primaryColor = context.primaryColor;
    }
    obj.primaryColor = primaryColor;
    if (secondaryColor == null) {
      secondaryColor = context.secondaryColor;
    }
    obj.secondaryColor = secondaryColor;
    if (gradient == null) {
      gradient = context.gradient;
    }
    obj.gradient = gradient;
    if (flags == null) {
      flags = context.flags;
    }
    obj.flags = flags;
    if (contrast == null) {
      contrast = context.contrast;
    }
    obj.contrast = contrast;
    if (saturation == null) {
      saturation = context.saturation;
    }
    obj.saturation = saturation;
    if (enabledExperiments == null) {
      enabledExperiments = context.enabledExperiments;
    }
    obj.enabledExperiments = enabledExperiments;
    if (density == null) {
      density = context.density;
    }
    obj.density = density;
    if (disableAdaptiveTheme == null) {
      disableAdaptiveTheme = context.disableAdaptiveTheme;
    }
    obj.disableAdaptiveTheme = disableAdaptiveTheme;
    if (reduceAdaptiveTheme == null) {
      reduceAdaptiveTheme = context.reduceAdaptiveTheme;
    }
    obj.reduceAdaptiveTheme = reduceAdaptiveTheme;
    return obj.createThemedContext(obj);
  }, items);
  return gradient(theme(primaryColor[2]).ThemeContext.Provider, { value, children: children.children });
};