// discord_app/modules/themes/RootThemeContextProvider.native.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import native from "../../../discord_common/js/packages/design/native.tsx";
import useColorThemeBackgroundDefault from "../client_themes/native/useColorThemeBackground.tsx";
import PlainTextExperimentContext from "../../design/components/Text/native/PlainTextExperimentContext.tsx";
import ManaTypeConsolidationExperiment from "../design/ManaTypeConsolidationExperiment.tsx";
import ThemeContextProvider_RootThemeContextProvider from "../../design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx";
import PlainTextExperiment from "../design/PlainTextExperiment.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../a11y/AccessibilityStore.tsx";
import ThemeStore from "../user_settings/ThemeStore.tsx";

require = fn;
const ThemeTypes = fn(1096).ThemeTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/RootThemeContextProvider.native.tsx");

export const RootThemeContextProvider = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(18);
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
      const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, E);
      ({ saturation, contrast, theme } = stateFromStoresObject);
      const tmp9 = useColorThemeBackgroundDefault();
      const tmpResult = initialize;
      const manaTypeConsolidationExperiment =
        ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("RootThemeContextProvider");
      const tmpResult7 = ManaTypeConsolidationExperiment;
      const plainTextExperiment = PlainTextExperiment.usePlainTextExperiment("RootThemeContextProvider");
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
        let tmp12 = items1;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === contrast) {
        if (cResult[5] === tmp9) {
          if (cResult[6] === saturation) {
            let tmp14 = cResult[7];
          }
          if (cResult[8] === children) {
            if (cResult[9] === plainTextExperiment) {
              let tmp20 = cResult[10];
            }
            if (cResult[11] === contrast) {
              if (cResult[12] === tmp12) {
                if (cResult[13] === tmp14) {
                  if (cResult[14] === saturation) {
                    if (cResult[15] === tmp20) {
                      if (cResult[16] === theme) {
                        let tmp23 = cResult[17];
                      }
                      return tmp23;
                    }
                  }
                }
              }
            }
            const obj2 = {
              theme,
              flags: null,
              saturation: null,
              contrast: null,
              enabledExperiments: null,
              children: null,
            };
            class E {
              constructor() {
                obj = { saturation: closure_1_4.saturation, contrast: closure_1_4.contrast, theme: closure_1_5.theme };
                return obj;
              }
            }
            obj2.saturation = saturation;
            obj2.contrast = contrast;
            obj2.enabledExperiments = tmp12;
            obj2.children = tmp20;
            const tmp25 = jsx(ThemeContextProvider_RootThemeContextProvider.RootThemeContextProvider, {
              theme,
              flags: null,
              saturation: null,
              contrast: null,
              enabledExperiments: null,
              children: null,
            });
            cResult[11] = contrast;
            cResult[12] = tmp12;
            cResult[13] = tmp14;
            cResult[14] = saturation;
            cResult[15] = tmp20;
            cResult[16] = theme;
            cResult[17] = tmp25;
            tmp23 = tmp25;
          }
          const obj3 = { enabled: plainTextExperiment, children: null };
          class E {
            constructor() {
              obj = { saturation: closure_1_4.saturation, contrast: closure_1_4.contrast, theme: closure_1_5.theme };
              return obj;
            }
          }
          const tmp22 = jsx(PlainTextExperimentContext.PlainTextExperimentProvider, {
            enabled: plainTextExperiment,
            children: null,
          });
          cResult[8] = children;
          cResult[9] = plainTextExperiment;
          cResult[10] = tmp22;
          tmp20 = tmp22;
        }
      }
      if (null == tmp9) {
        let num6 = 0;
        if (1 !== saturation) {
          num6 = native.setThemeFlag(0, native.ThemeContextFlags.REDUCE_SATURATION_ENABLED);
          const tmpResult9 = native;
        }
        if (1 === contrast) {
          cResult[4] = contrast;
          cResult[5] = tmp9;
          class E {
            constructor() {
              obj = { saturation: closure_1_4.saturation, contrast: closure_1_4.contrast, theme: closure_1_5.theme };
              return obj;
            }
          }
          cResult[7] = num6;
          tmp14 = num6;
        } else {
          if (contrast > 1) {
            let REDUCED_CONTRAST_ENABLED = native.ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
          } else {
            REDUCED_CONTRAST_ENABLED = native.ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
          }
          native.setThemeFlag(num6, REDUCED_CONTRAST_ENABLED);
          const tmpResult10 = native;
        }
      } else if (tmp9.theme === ThemeTypes.LIGHT) {
        let setThemeFlagResult1 = native.setThemeFlag(0, native.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
        const tmpResult11 = native;
      } else {
        setThemeFlagResult1 = native.setThemeFlag(0, native.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
        const tmpResult12 = native;
      }
      const tmpResult8 = PlainTextExperiment;
    }
  : (children) => {
      let manaTypeConsolidationExperiment;
      let items = [AccessibilityStore, ThemeStore];
      const stateFromStoresObject = manaTypeConsolidationExperiment(504).useStateFromStoresObject(items, () => ({
        saturation: AccessibilityStore.saturation,
        contrast: AccessibilityStore.contrast,
        theme: theme.theme,
      }));
      ({ saturation, contrast } = stateFromStoresObject);
      const tmp4 = useColorThemeBackgroundDefault();
      const obj = manaTypeConsolidationExperiment(504);
      manaTypeConsolidationExperiment =
        manaTypeConsolidationExperiment(6477).useManaTypeConsolidationExperiment("RootThemeContextProvider");
      const obj2 = manaTypeConsolidationExperiment(6477);
      [][0] = manaTypeConsolidationExperiment;
      const plainTextExperiment =
        manaTypeConsolidationExperiment(15898).usePlainTextExperiment("RootThemeContextProvider");
      if (null == tmp4) {
        let num2 = 0;
        if (1 !== saturation) {
          num2 = tmp(4595).setThemeFlag(0, tmp(4595).ThemeContextFlags.REDUCE_SATURATION_ENABLED);
          const tmpResult = tmp(4595);
        }
        if (1 === contrast) {
          const obj4 = {
            theme: stateFromStoresObject.theme,
            flags: num2,
            saturation,
            contrast,
            enabledExperiments: tmp7,
            children: null,
          };
          const obj5 = { enabled: plainTextExperiment, children: children.children };
          obj4.children = jsx(tmp(4901).PlainTextExperimentProvider, {
            enabled: plainTextExperiment,
            children: children.children,
          });
          return jsx(tmp(9771).RootThemeContextProvider, {
            theme: stateFromStoresObject.theme,
            flags: num2,
            saturation,
            contrast,
            enabledExperiments: tmp7,
            children: null,
          });
        } else {
          if (contrast > 1) {
            let REDUCED_CONTRAST_ENABLED = tmp(4595).ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
          } else {
            REDUCED_CONTRAST_ENABLED = tmp(4595).ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
          }
          tmp(4595).setThemeFlag(num2, REDUCED_CONTRAST_ENABLED);
          const tmpResult4 = tmp(4595);
        }
      } else if (tmp4.theme === ThemeTypes.LIGHT) {
        let setThemeFlagResult1 = tmp(4595).setThemeFlag(
          0,
          tmp(4595).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED,
        );
        const tmpResult5 = tmp(4595);
      } else {
        setThemeFlagResult1 = tmp(4595).setThemeFlag(0, tmp(4595).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
        const tmpResult6 = tmp(4595);
      }
      const obj3 = manaTypeConsolidationExperiment(15898);
    };
