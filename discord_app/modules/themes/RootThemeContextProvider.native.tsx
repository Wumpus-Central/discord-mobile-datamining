// === Module 14622: RootThemeContextProvider ===

// Module 14622 (RootThemeContextProvider)
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4460 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;
import ThemeStore from "ThemeStore" /* 1183 */;

const require = fn;
const ThemeTypes = fn(1085).ThemeTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/RootThemeContextProvider.native.tsx");

export const RootThemeContextProvider = function RootThemeContextProvider(children) {
  let manaTypeConsolidationExperiment;
  let obj = manaTypeConsolidationExperiment(504);
  let items = [AccessibilityStore, ThemeStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ saturation: AccessibilityStore.saturation, contrast: AccessibilityStore.contrast, theme: theme.theme }));
  ({ saturation, contrast } = stateFromStoresObject);
  const tmp4 = useColorThemeBackgroundDefault();
  manaTypeConsolidationExperiment = manaTypeConsolidationExperiment(7053).useManaTypeConsolidationExperiment("RootThemeContextProvider");
  const obj2 = manaTypeConsolidationExperiment(7053);
  [][0] = manaTypeConsolidationExperiment;
  const plainTextExperiment = manaTypeConsolidationExperiment(14623).usePlainTextExperiment("RootThemeContextProvider");
  if (null == tmp4) {
    let num2 = 0;
    if (1 !== saturation) {
      let tmpResult = tmp(4317);
      num2 = tmpResult.setThemeFlag(0, tmp(4317).ThemeContextFlags.REDUCE_SATURATION_ENABLED);
    }
    if (1 === contrast) {
      obj = { theme: stateFromStoresObject.theme, flags: num2, saturation, contrast, enabledExperiments: tmp7, children: null };
      obj = { enabled: plainTextExperiment, children: children.children };
      obj.children = jsx(tmp(4611).PlainTextExperimentProvider, { enabled: plainTextExperiment, children: children.children });
      return jsx(tmp(10165).RootThemeContextProvider, { enabled: plainTextExperiment, children: children.children });
    } else {
      tmpResult = tmp(4317);
      if (contrast > 1) {
        let REDUCED_CONTRAST_ENABLED = tmp(4317).ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
      } else {
        REDUCED_CONTRAST_ENABLED = tmp(4317).ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
      }
      tmpResult.setThemeFlag(num2, REDUCED_CONTRAST_ENABLED);
    }
  } else if (tmp4.theme === ThemeTypes.LIGHT) {
    let setThemeFlagResult1 = tmp(4317).setThemeFlag(0, tmp(4317).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
    const tmpResult1 = tmp(4317);
  } else {
    setThemeFlagResult1 = tmp(4317).setThemeFlag(0, tmp(4317).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    const tmpResult2 = tmp(4317);
  }
  const obj3 = manaTypeConsolidationExperiment(14623);
};