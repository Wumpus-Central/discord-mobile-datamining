// === Module 15858: RootThemeContextProvider ===

// Module 15858 (RootThemeContextProvider)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1096 */;
import native from "native" /* 4589 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4732 */;
import PlainTextExperimentContext from "PlainTextExperimentContext" /* 4895 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6470 */;
import ThemeContextProvider_RootThemeContextProvider from "ThemeContextProvider/RootThemeContextProvider" /* 9758 */;
import PlainTextExperiment from "PlainTextExperiment" /* 15859 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let contrast;
  let saturation;
  let theme;
  let tmp12;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(18);
  children = children.children;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore, ThemeStore];
    class E {
      constructor() {
        obj = { saturation: closure_1_4.saturation, contrast: closure_1_4.contrast, theme: closure_1_5.theme };
        return obj;
      }
    }
    cResult[0] = items;
    cResult[1] = E;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, E);
  ({ saturation, contrast, theme } = stateFromStoresObject);
  const tmp9 = useColorThemeBackgroundDefault();
  const tmpResult7 = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = tmpResult7.useManaTypeConsolidationExperiment("RootThemeContextProvider");
  const tmpResult8 = PlainTextExperiment;
  const plainTextExperiment = tmpResult8.usePlainTextExperiment("RootThemeContextProvider");
  if (cResult[2] !== manaTypeConsolidationExperiment) {
    const items1 = ["mobile-visual-refresh-floating", "mobile-visual-refresh"];
    if (manaTypeConsolidationExperiment) {
      items1.push("mana-type-consolidation");
    }
    cResult[2] = manaTypeConsolidationExperiment;
    class E {
      constructor() {
        obj = { saturation: closure_1_4.saturation, contrast: closure_1_4.contrast, theme: closure_1_5.theme };
        return obj;
      }
    }
    tmp12 = items1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === contrast) {
    if (cResult[5] === tmp9) {
      let tmp14;
      if (cResult[6] === saturation) {
        tmp14 = cResult[7];
      }
      if (cResult[8] === children) {
        let tmp20;
        if (cResult[9] === plainTextExperiment) {
          tmp20 = cResult[10];
        }
        if (cResult[11] === contrast) {
          if (cResult[12] === tmp12) {
            if (cResult[13] === tmp14) {
              if (cResult[14] === saturation) {
                if (cResult[15] === tmp20) {
                  let tmp23;
                  if (cResult[16] === theme) {
                    tmp23 = cResult[17];
                  }
                  return tmp23;
                }
              }
            }
          }
        }
        class E {
          constructor() {
            obj = { saturation: closure_1_4.saturation, contrast: closure_1_4.contrast, theme: closure_1_5.theme };
            return obj;
          }
        }
        const tmp25 = jsx(ThemeContextProvider_RootThemeContextProvider.RootThemeContextProvider, { theme, flags: null, saturation, contrast, enabledExperiments: tmp12, children: tmp20 });
        cResult[11] = contrast;
        cResult[12] = tmp12;
        cResult[13] = tmp14;
        cResult[14] = saturation;
        cResult[15] = tmp20;
        cResult[16] = theme;
        cResult[17] = tmp25;
        tmp23 = tmp25;
      }
      class E {
        constructor() {
          obj = { saturation: closure_1_4.saturation, contrast: closure_1_4.contrast, theme: closure_1_5.theme };
          return obj;
        }
      }
      const tmp22 = jsx(PlainTextExperimentContext.PlainTextExperimentProvider, { enabled: plainTextExperiment, children: null });
      cResult[8] = children;
      cResult[9] = plainTextExperiment;
      cResult[10] = tmp22;
      tmp20 = tmp22;
    }
  }
  let num5 = 0;
  if (null != tmp9) {
    let setThemeFlagResult;
    if (tmp9.theme === ThemeTypes.LIGHT) {
      const tmpResult9 = native;
      setThemeFlagResult = tmpResult9.setThemeFlag(0, native.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
    } else {
      const tmpResult10 = native;
      setThemeFlagResult = tmpResult10.setThemeFlag(0, native.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    }
    num5 = setThemeFlagResult;
  }
  let setThemeFlagResult1 = num5;
  if (1 !== saturation) {
    const tmpResult11 = native;
    setThemeFlagResult1 = tmpResult11.setThemeFlag(num5, native.ThemeContextFlags.REDUCE_SATURATION_ENABLED);
  }
  let setThemeFlagResult2 = setThemeFlagResult1;
  if (1 !== contrast) {
    let REDUCED_CONTRAST_ENABLED;
    const setThemeFlag = native.setThemeFlag;
    native;
    if (contrast > 1) {
      REDUCED_CONTRAST_ENABLED = native.ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
    } else {
      REDUCED_CONTRAST_ENABLED = native.ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
    }
    setThemeFlagResult2 = setThemeFlag(setThemeFlagResult1, REDUCED_CONTRAST_ENABLED);
  }
  cResult[4] = contrast;
  cResult[5] = tmp9;
  cResult[6] = saturation;
  cResult[7] = setThemeFlagResult2;
  tmp14 = setThemeFlagResult2;
}) : ((children) => {
  let contrast;
  let saturation;
  let manaTypeConsolidationExperiment;
  children = children.children;
  let items = [AccessibilityStore, ThemeStore];
  const obj = manaTypeConsolidationExperiment(504);
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ saturation: AccessibilityStore.saturation, contrast: AccessibilityStore.contrast, theme: theme.theme }));
  ({ saturation, contrast } = stateFromStoresObject);
  const theme = stateFromStoresObject.theme;
  const tmp4 = useColorThemeBackgroundDefault();
  const obj2 = manaTypeConsolidationExperiment(6470);
  manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("RootThemeContextProvider");
  const items1 = [manaTypeConsolidationExperiment];
  const obj3 = manaTypeConsolidationExperiment(15859);
  const plainTextExperiment = obj3.usePlainTextExperiment("RootThemeContextProvider");
  let num = 0;
  const memo = react.useMemo(() => {
    const items = ["mobile-visual-refresh-floating", "mobile-visual-refresh"];
    if (manaTypeConsolidationExperiment) {
      items.push("mana-type-consolidation");
    }
    return items;
  }, items1);
  if (null != tmp4) {
    let setThemeFlagResult;
    if (tmp4.theme === ThemeTypes.LIGHT) {
      const tmpResult = manaTypeConsolidationExperiment(4589);
      setThemeFlagResult = tmpResult.setThemeFlag(0, tmp(4589).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
    } else {
      const tmpResult4 = manaTypeConsolidationExperiment(4589);
      setThemeFlagResult = tmpResult4.setThemeFlag(0, tmp(4589).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    }
    num = setThemeFlagResult;
  }
  let setThemeFlagResult1 = num;
  if (1 !== saturation) {
    const tmpResult5 = manaTypeConsolidationExperiment(4589);
    setThemeFlagResult1 = tmpResult5.setThemeFlag(num, tmp(4589).ThemeContextFlags.REDUCE_SATURATION_ENABLED);
  }
  let setThemeFlagResult2 = setThemeFlagResult1;
  if (1 !== contrast) {
    let REDUCED_CONTRAST_ENABLED;
    const setThemeFlag = manaTypeConsolidationExperiment(4589).setThemeFlag;
    manaTypeConsolidationExperiment(4589);
    if (contrast > 1) {
      REDUCED_CONTRAST_ENABLED = tmp(4589).ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
    } else {
      REDUCED_CONTRAST_ENABLED = tmp(4589).ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
    }
    setThemeFlagResult2 = setThemeFlag(setThemeFlagResult1, REDUCED_CONTRAST_ENABLED);
  }
  const RootThemeContextProvider = tmp(9758).RootThemeContextProvider;
  return <RootThemeContextProvider theme={theme} flags={setThemeFlagResult2} saturation={saturation} contrast={contrast} enabledExperiments={memo}>{null}</RootThemeContextProvider>;
});
const result = size.fileFinishedImporting("modules/themes/RootThemeContextProvider.native.tsx");
const RootThemeContextProvider_export = tmp2;

export { RootThemeContextProvider_export as RootThemeContextProvider };