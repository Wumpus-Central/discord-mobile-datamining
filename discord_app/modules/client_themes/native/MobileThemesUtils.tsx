// === Module 4788: MobileThemesUtils ===

// Module 4788 (MobileThemesUtils)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1241 */;
import _modDef2723 from "module_2723" /* 2723 */;
import useCustomThemeDisplaySettings from "useCustomThemeDisplaySettings" /* 4790 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import SavedCustomThemeStore from "SavedCustomThemeStore" /* 4789 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1240 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
function getCustomThemesName() {
  const intl = intl2.intl;
  return intl.string(_modDef2723.yl1iMm);
}
({ BACKGROUND_GRADIENT_PRESETS_MOBILE: metroRequire, REFRESH_STANDARD_BACKGROUND_THEMES: metroImportDefault } = ClientThemesConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = useCustomThemeDisplaySettings;
  const customThemeDisplaySettings = obj2.useCustomThemeDisplaySettings(arg0);
  let tmp5 = null;
  if (undefined !== customThemeDisplaySettings) {
    if (cResult[0] === customThemeDisplaySettings.baseTheme) {
      let tmp6;
      if (cResult[1] === customThemeDisplaySettings.customTheme) {
        tmp6 = cResult[2];
      }
      tmp5 = tmp6;
    }
    const obj4 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj3.theme, customTheme: obj3.customThemeSettings } = customThemeDisplaySettings);
    cResult[0] = customThemeDisplaySettings.baseTheme;
    cResult[1] = customThemeDisplaySettings.customTheme;
    cResult[2] = obj4;
    tmp6 = obj4;
  }
  return tmp5;
}) : ((arg0) => {
  const obj = useCustomThemeDisplaySettings;
  const customThemeDisplaySettings = obj.useCustomThemeDisplaySettings(arg0);
  let tmp4 = null;
  if (undefined !== customThemeDisplaySettings) {
    ({ baseTheme: obj2.theme, customTheme: obj2.customThemeSettings } = customThemeDisplaySettings);
    tmp4 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    const obj3 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
  }
  return tmp4;
});
let closure_9 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      if (null == closure_0) {
        return null;
      } else {
        const syncedClientTheme = ThemeStore.getSyncedClientTheme(closure_0);
        let prop;
        if (syncedClientTheme != null) {
          prop = syncedClientTheme.customUserThemeSettings;
        }
        let tmp3 = null;
        if (null != prop) {
          tmp3 = null;
          if (0 !== prop.colors.length) {
            tmp3 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: ThemeStore.themePreferenceForSystemTheme(closure_0), customThemeSettings: prop };
            const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: ThemeStore.themePreferenceForSystemTheme(closure_0), customThemeSettings: prop };
          }
        }
        return tmp3;
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ThemeStore];
  return obj.useStateFromStores(items, () => {
    if (null == closure_0) {
      return null;
    } else {
      const syncedClientTheme = ThemeStore.getSyncedClientTheme(closure_0);
      let prop;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.customUserThemeSettings;
      }
      let tmp3 = null;
      if (null != prop) {
        tmp3 = null;
        if (0 !== prop.colors.length) {
          tmp3 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: ThemeStore.themePreferenceForSystemTheme(closure_0), customThemeSettings: prop };
          const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: ThemeStore.themePreferenceForSystemTheme(closure_0), customThemeSettings: prop };
        }
      }
      return tmp3;
    }
  });
});
let closure_10 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  let tmp3 = closure_9(closure_11());
  if (null != arg0) {
    tmp3 = closure_10(arg0);
  }
  if (cResult[0] !== tmp3) {
    let items1;
    if (null != tmp3) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, metroImportDefault, 0);
      items[arraySpreadResult] = tmp3;
      HermesBuiltin.arraySpread(items, metroRequire, arraySpreadResult + 1);
      items1 = items;
    } else {
      items1 = [];
      HermesBuiltin.arraySpread(items1, metroRequire, HermesBuiltin.arraySpread(items1, metroImportDefault, 0));
    }
    cResult[0] = tmp3;
    cResult[1] = items1;
    tmp4 = items1;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((arg0) => {
  let items1;
  let tmp2 = closure_9(closure_11());
  if (null != arg0) {
    tmp2 = closure_10(arg0);
  }
  if (null != tmp2) {
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, metroImportDefault, 0);
    items[arraySpreadResult] = tmp2;
    HermesBuiltin.arraySpread(items, metroRequire, arraySpreadResult + 1);
    items1 = items;
  } else {
    items1 = [];
    HermesBuiltin.arraySpread(items1, metroRequire, HermesBuiltin.arraySpread(items1, metroImportDefault, 0));
  }
  return items1;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let savedCustomTheme;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SavedCustomThemeStore];
    const fn = function s() {
      return savedCustomTheme.getSavedCustomTheme();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let tmp8 = null;
  if (null != stateFromStores) {
    tmp8 = stateFromStores;
  }
  return tmp8;
}) : (() => {
  let savedCustomTheme;
  const items = [SavedCustomThemeStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => savedCustomTheme.getSavedCustomTheme());
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = stateFromStores;
  }
  return tmp2;
});
let closure_11 = tmp6;
function getCustomBackgroundGradient() {
  const customThemeDisplaySettings = CustomThemeMobileStore.getCustomThemeDisplaySettings();
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  return tmp2;
}
const result = size.fileFinishedImporting("modules/client_themes/native/MobileThemesUtils.tsx");

export { getCustomBackgroundGradient };
export const useCustomBackgroundGradient = tmp3;
export const usePerModeCustomBackgroundGradient = tmp4;
export const getAllMobileThemes = function getAllMobileThemes() {
  let items1;
  const customThemeDisplaySettings = CustomThemeMobileStore.getCustomThemeDisplaySettings();
  let tmp3 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp3 = obj;
  }
  if (null != tmp3) {
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, metroImportDefault, 0);
    items[arraySpreadResult] = tmp3;
    HermesBuiltin.arraySpread(items, metroRequire, arraySpreadResult + 1);
    items1 = items;
  } else {
    items1 = [];
    HermesBuiltin.arraySpread(items1, metroRequire, HermesBuiltin.arraySpread(items1, metroImportDefault, 0));
  }
  return items1;
};
export const useAllMobileThemes = tmp5;
export const useSavedCustomTheme = tmp6;