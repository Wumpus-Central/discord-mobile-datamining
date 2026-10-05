// discord_app/modules/client_themes/native/useActiveTheme.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import useRoutedActiveGuildThemeDefault from "../../guild_themes/native/useRoutedActiveGuildTheme.tsx";
import UnsyncedUserSettingsStore from "../../user_settings/UnsyncedUserSettingsStore.tsx";
import ClientThemesBackgroundStore from "../ClientThemesBackgroundStore.tsx";
import CustomThemeMobileStore from "CustomThemeMobileStore.tsx";
import ThemeConstants from "../../user_settings/ThemeConstants.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
({ SystemThemeState: metroRequire, ActiveThemeType: metroImportDefault } = ThemeConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const tmp = closure_8();
      return tmp === metroImportDefault.CLIENT || tmp === metroImportDefault.CUSTOM;
    }
  : () => {
      const tmp = closure_8();
      return tmp === metroImportDefault.CLIENT || tmp === metroImportDefault.CUSTOM;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let CUSTOM;
      let gradientPreset;
      let tmp13;
      let tmp14;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      let useSystemTheme;
      const obj = react;
      const cResult = obj.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CustomThemeMobileStore];
        class T {
          constructor() {
            return closure_1_5.hasCustomTheme();
          }
        }
        cResult[0] = items;
        cResult[1] = T;
        tmp4 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, T);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ClientThemesBackgroundStore];
        class C {
          constructor() {
            return null != closure_1_4.gradientPreset;
          }
        }
        cResult[2] = items1;
        cResult[3] = C;
        tmp9 = C;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult3 = get_initialized;
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
      const tmp12 = useRoutedActiveGuildThemeDefault();
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [UnsyncedUserSettingsStore];
        class C {
          constructor() {
            return null != closure_1_4.gradientPreset;
          }
        }
        cResult[4] = items2;
        cResult[5] = tmp16;
        tmp14 = tmp16;
        tmp13 = items2;
      } else {
        tmp13 = cResult[4];
        tmp14 = cResult[5];
      }
      let type1;
      const tmpResult4 = get_initialized;
      const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, tmp14);
      if (tmp12 != null) {
        type1 = tmp12.type;
      }
      if ("custom" === type1) {
        CUSTOM = metroImportDefault.CUSTOM;
      } else {
        if (tmp12 != null) {
          const type = tmp12.type;
        }
        class C {
          constructor() {
            return null != closure_1_4.gradientPreset;
          }
        }
      }
      return CUSTOM;
    }
  : () => {
      let DEFAULT;
      let gradientPreset;
      let useSystemTheme;
      const items = [CustomThemeMobileStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => CustomThemeMobileStore.hasCustomTheme());
      const items1 = [ClientThemesBackgroundStore];
      const obj2 = get_initialized;
      const stateFromStores1 = obj2.useStateFromStores(items1, () => null != gradientPreset.gradientPreset);
      const tmp3 = useRoutedActiveGuildThemeDefault();
      const items2 = [UnsyncedUserSettingsStore];
      let type;
      const obj3 = get_initialized;
      const stateFromStores2 = obj3.useStateFromStores(items2, () => useSystemTheme.useSystemTheme);
      const ON = metroRequire.ON;
      if (tmp3 != null) {
        type = tmp3.type;
      }
      if ("custom" === type) {
        DEFAULT = metroImportDefault.CUSTOM;
      } else {
        let type1;
        if (tmp3 != null) {
          type1 = tmp3.type;
        }
        if ("preset" === type1) {
          DEFAULT = metroImportDefault.CLIENT;
        } else if (stateFromStores) {
          DEFAULT = metroImportDefault.CUSTOM;
        } else if (stateFromStores1) {
          DEFAULT = metroImportDefault.CLIENT;
        } else if (stateFromStores2 === ON) {
          DEFAULT = metroImportDefault.SYSTEM;
        } else {
          DEFAULT = metroImportDefault.DEFAULT;
        }
      }
      return DEFAULT;
    };
let closure_8 = tmp5;
const fn = () => closure_8() === metroImportDefault.CUSTOM;
const result1 = size.fileFinishedImporting("modules/client_themes/native/useActiveTheme.tsx");

export const useIsCustomThemeActive = fn;
export const useIsClientThemeOrCustomThemeActive = tmp4;
export const useActiveThemeType = tmp5;
