// === Module 14190: RootThemeContextProvider ===

// Module 14190 (RootThemeContextProvider)
import getGuildThemeNameDefault from "getGuildThemeName" /* 4298 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4440 */;
import closure_5 from "handleThemeChange" /* 1302 */;
import { ThemeTypes } from "sum" /* 505 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/themes/RootThemeContextProvider.native.tsx");

export const RootThemeContextProvider = function RootThemeContextProvider(children) {
  let manaTypeConsolidationExperiment;
  let obj = manaTypeConsolidationExperiment(589);
  let items = [closure_4, closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ saturation: closure_4.saturation, contrast: closure_4.contrast, theme: theme.theme }));
  ({ saturation, contrast } = stateFromStoresObject);
  const tmp4 = getGuildThemeNameDefault();
  manaTypeConsolidationExperiment = manaTypeConsolidationExperiment(7972).useManaTypeConsolidationExperiment("RootThemeContextProvider");
  const obj2 = manaTypeConsolidationExperiment(7972);
  [][0] = manaTypeConsolidationExperiment;
  const plainTextExperiment = manaTypeConsolidationExperiment(14191).usePlainTextExperiment("RootThemeContextProvider");
  if (null == tmp4) {
    let num2 = 0;
    if (1 !== saturation) {
      let tmpResult = tmp(4174);
      num2 = tmpResult.setThemeFlag(0, tmp(4174).ThemeContextFlags.REDUCE_SATURATION_ENABLED);
    }
    if (1 === contrast) {
      obj = { theme: null, flags: null, saturation: null, contrast: null, enabledExperiments: null, children: null };
      obj[0] = stateFromStoresObject.theme;
      obj[1] = num2;
      obj[2] = saturation;
      obj[3] = contrast;
      obj[4] = tmp7;
      obj = { enabled: null, children: null };
      obj[0] = plainTextExperiment;
      obj[1] = children.children;
      obj[5] = jsx(tmp(4453).PlainTextExperimentProvider, { enabled: null, children: null });
      return jsx(tmp(10119).RootThemeContextProvider, { enabled: null, children: null });
    } else {
      tmpResult = tmp(4174);
      if (contrast > 1) {
        let REDUCED_CONTRAST_ENABLED = tmp(4174).ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
      } else {
        REDUCED_CONTRAST_ENABLED = tmp(4174).ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
      }
      tmpResult.setThemeFlag(num2, REDUCED_CONTRAST_ENABLED);
    }
  } else if (tmp4.theme === ThemeTypes.LIGHT) {
    let setThemeFlagResult1 = tmp(4174).setThemeFlag(0, tmp(4174).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
    const tmpResult1 = tmp(4174);
  } else {
    setThemeFlagResult1 = tmp(4174).setThemeFlag(0, tmp(4174).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    const tmpResult2 = tmp(4174);
  }
};