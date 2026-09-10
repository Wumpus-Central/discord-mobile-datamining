// discord_app/modules/themes/RootThemeContextProvider.native.tsx
import useColorThemeBackgroundDefault from "../client_themes/native/useColorThemeBackground.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../a11y/AccessibilityStore.tsx";
import ThemeStore from "../user_settings/ThemeStore.tsx";

const require = fn;
const ThemeTypes = fn(1085).ThemeTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/RootThemeContextProvider.native.tsx");

export const RootThemeContextProvider = function RootThemeContextProvider(children) {
  let manaTypeConsolidationExperiment;
  let obj = manaTypeConsolidationExperiment(504);
  let items = [AccessibilityStore, ThemeStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    saturation: AccessibilityStore.saturation,
    contrast: AccessibilityStore.contrast,
    theme: theme.theme,
  }));
  ({ saturation, contrast } = stateFromStoresObject);
  const tmp4 = useColorThemeBackgroundDefault();
  manaTypeConsolidationExperiment =
    manaTypeConsolidationExperiment(7032).useManaTypeConsolidationExperiment("RootThemeContextProvider");
  const obj2 = manaTypeConsolidationExperiment(7032);
  [][0] = manaTypeConsolidationExperiment;
  const plainTextExperiment = manaTypeConsolidationExperiment(14647).usePlainTextExperiment("RootThemeContextProvider");
  if (null == tmp4) {
    let num2 = 0;
    if (1 !== saturation) {
      let tmpResult = tmp(4315);
      num2 = tmpResult.setThemeFlag(0, tmp(4315).ThemeContextFlags.REDUCE_SATURATION_ENABLED);
    }
    if (1 === contrast) {
      obj = {
        theme: stateFromStoresObject.theme,
        flags: num2,
        saturation,
        contrast,
        enabledExperiments: tmp7,
        children: null,
      };
      obj = { enabled: plainTextExperiment, children: children.children };
      obj.children = jsx(tmp(4610).PlainTextExperimentProvider, {
        enabled: plainTextExperiment,
        children: children.children,
      });
      return jsx(tmp(10145).RootThemeContextProvider, { enabled: plainTextExperiment, children: children.children });
    } else {
      tmpResult = tmp(4315);
      if (contrast > 1) {
        let REDUCED_CONTRAST_ENABLED = tmp(4315).ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
      } else {
        REDUCED_CONTRAST_ENABLED = tmp(4315).ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
      }
      tmpResult.setThemeFlag(num2, REDUCED_CONTRAST_ENABLED);
    }
  } else if (tmp4.theme === ThemeTypes.LIGHT) {
    let setThemeFlagResult1 = tmp(4315).setThemeFlag(
      0,
      tmp(4315).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED,
    );
    const tmpResult1 = tmp(4315);
  } else {
    setThemeFlagResult1 = tmp(4315).setThemeFlag(0, tmp(4315).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    const tmpResult2 = tmp(4315);
  }
  const obj3 = manaTypeConsolidationExperiment(14647);
};
