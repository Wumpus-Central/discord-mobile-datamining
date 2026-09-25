// === Module 14106: RootThemeContextProvider ===

// Module 14106 (RootThemeContextProvider)
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4684 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;
import ThemeStore from "ThemeStore" /* 1182 */;

const require = fn;
const ThemeTypes = fn(1085).ThemeTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/RootThemeContextProvider.native.tsx");

export const RootThemeContextProvider = function RootThemeContextProvider(children) {
  let manaTypeConsolidationExperiment;
  let items = [AccessibilityStore, ThemeStore];
  const stateFromStoresObject = manaTypeConsolidationExperiment(504).useStateFromStoresObject(items, () => ({ saturation: AccessibilityStore.saturation, contrast: AccessibilityStore.contrast, theme: theme.theme }));
  ({ saturation, contrast } = stateFromStoresObject);
  const tmp4 = useColorThemeBackgroundDefault();
  const obj = manaTypeConsolidationExperiment(504);
  manaTypeConsolidationExperiment = manaTypeConsolidationExperiment(6396).useManaTypeConsolidationExperiment("RootThemeContextProvider");
  const obj2 = manaTypeConsolidationExperiment(6396);
  [][0] = manaTypeConsolidationExperiment;
  const plainTextExperiment = manaTypeConsolidationExperiment(14107).usePlainTextExperiment("RootThemeContextProvider");
  if (null == tmp4) {
    let num2 = 0;
    if (1 !== saturation) {
      num2 = tmp(4537).setThemeFlag(0, tmp(4537).ThemeContextFlags.REDUCE_SATURATION_ENABLED);
      const tmpResult = tmp(4537);
    }
    if (1 === contrast) {
      const obj4 = { theme: stateFromStoresObject.theme, flags: num2, saturation, contrast, enabledExperiments: tmp7, children: null };
      const obj5 = { enabled: plainTextExperiment, children: children.children };
      obj4.children = jsx(tmp(4834).PlainTextExperimentProvider, { enabled: plainTextExperiment, children: children.children });
      return jsx(tmp(9524).RootThemeContextProvider, { theme: stateFromStoresObject.theme, flags: num2, saturation, contrast, enabledExperiments: tmp7, children: null });
    } else {
      if (contrast > 1) {
        let REDUCED_CONTRAST_ENABLED = tmp(4537).ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
      } else {
        REDUCED_CONTRAST_ENABLED = tmp(4537).ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
      }
      tmp(4537).setThemeFlag(num2, REDUCED_CONTRAST_ENABLED);
      const tmpResult4 = tmp(4537);
    }
  } else if (tmp4.theme === ThemeTypes.LIGHT) {
    let setThemeFlagResult1 = tmp(4537).setThemeFlag(0, tmp(4537).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
    const tmpResult5 = tmp(4537);
  } else {
    setThemeFlagResult1 = tmp(4537).setThemeFlag(0, tmp(4537).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    const tmpResult6 = tmp(4537);
  }
  const obj3 = manaTypeConsolidationExperiment(14107);
};