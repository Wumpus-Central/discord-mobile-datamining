// === Module 16663: RootThemeContextProvider ===

// Module 16663 (RootThemeContextProvider)
import initialize from "initialize" /* 504 */;
import native from "native" /* 5207 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5318 */;
import PlainTextExperimentContext from "PlainTextExperimentContext" /* 5765 */;
import ThemeContextProvider_RootThemeContextProvider from "ThemeContextProvider/RootThemeContextProvider" /* 12253 */;
import PlainTextExperiment from "PlainTextExperiment" /* 16664 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import ThemeStore from "ThemeStore" /* 1192 */;

require = fn;
const ThemeTypes = fn(1083).ThemeTypes;
const jsx = fn(21).jsx;
const enabledExperiments = ["mobile-visual-refresh-floating", "mobile-visual-refresh"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/RootThemeContextProvider.native.tsx");

export function RootThemeContextProvider(children) {
  items = [AccessibilityStore, ThemeStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ saturation: AccessibilityStore.saturation, contrast: AccessibilityStore.contrast, theme: theme.theme }));
  ({ saturation, contrast } = stateFromStoresObject);
  const tmp4 = useColorThemeBackgroundDefault();
  PlainTextExperiment;
  if (null == tmp4) {
    let num2 = 0;
    if (1 !== saturation) {
      num2 = native.setThemeFlag(0, native.ThemeContextFlags.REDUCE_SATURATION_ENABLED);
      const tmpResult = native;
    }
    if (1 === contrast) {
      const obj2 = { theme: stateFromStoresObject.theme, flags: num2, saturation, contrast, enabledExperiments, children: null };
      const obj3 = { enabled: tmp6, children: children.children };
      obj2.children = jsx(PlainTextExperimentContext.PlainTextExperimentProvider, { enabled: tmp6, children: children.children });
      return jsx(ThemeContextProvider_RootThemeContextProvider.RootThemeContextProvider, { theme: stateFromStoresObject.theme, flags: num2, saturation, contrast, enabledExperiments, children: null });
    } else {
      if (contrast > 1) {
        let REDUCED_CONTRAST_ENABLED = native.ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
      } else {
        REDUCED_CONTRAST_ENABLED = native.ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
      }
      native.setThemeFlag(num2, REDUCED_CONTRAST_ENABLED);
      const tmpResult4 = native;
    }
  } else if (tmp4.theme === ThemeTypes.LIGHT) {
    let setThemeFlagResult1 = native.setThemeFlag(0, native.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
    const tmpResult5 = native;
  } else {
    setThemeFlagResult1 = native.setThemeFlag(0, native.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    const tmpResult6 = native;
  }
}