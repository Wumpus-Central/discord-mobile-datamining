// === Module 4492: MobileThemesUtils ===

// Module 4492 (MobileThemesUtils)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1231 */;
import _modDef2626 from "module_2626" /* 2626 */;
import useCustomThemeDisplaySettings from "useCustomThemeDisplaySettings" /* 4494 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import SavedCustomThemeStore from "SavedCustomThemeStore" /* 4493 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1228 */;

require = fn;
function getCustomThemesName() {
  const intl = util.intl;
  return intl.string(_modDef2626.yl1iMm);
}
const ClientThemesConstants = fn(1230);
({ BACKGROUND_GRADIENT_PRESETS_MOBILE: metroRequire, REFRESH_STANDARD_BACKGROUND_THEMES: closure_7 } = ClientThemesConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/MobileThemesUtils.tsx");

export const getCustomBackgroundGradient = function getCustomBackgroundGradient() {
  const customThemeDisplaySettings = CustomThemeMobileStore.getCustomThemeDisplaySettings();
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  return tmp2;
};
export const useCustomBackgroundGradient = function useCustomBackgroundGradient(stateFromStores) {
  let obj = useCustomThemeDisplaySettings;
  const customThemeDisplaySettings = obj.useCustomThemeDisplaySettings(stateFromStores);
  let tmp4 = null;
  if (undefined !== customThemeDisplaySettings) {
    obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj2.theme, customTheme: obj2.customThemeSettings } = customThemeDisplaySettings);
    tmp4 = obj;
  }
  return tmp4;
};
export const usePerModeCustomBackgroundGradient = function usePerModeCustomBackgroundGradient(arg0) {
  _require = arg0;
  const items = [ThemeStore];
  return require("initialize").useStateFromStores(items, () => {
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
          const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: ThemeStore.themePreferenceForSystemTheme(closure_0), customThemeSettings: prop };
          tmp3 = obj;
        }
      }
      return tmp3;
    }
  });
};
export const getAllMobileThemes = function getAllMobileThemes() {
  const customThemeDisplaySettings = CustomThemeMobileStore.getCustomThemeDisplaySettings();
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  if (null != tmp2) {
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(React5, 0);
    items[arraySpreadResult] = tmp2;
    arraySpreadResult = HermesBuiltin.arraySpread(timestampProducer, arraySpreadResult + 1);
    let items1 = items;
  } else {
    items1 = [];
    HermesBuiltin.arraySpread(timestampProducer, HermesBuiltin.arraySpread(React5, 0));
  }
  return items1;
};
export const useAllMobileThemes = function useAllMobileThemes(mode) {
  let obj = require("initialize");
  const items = [SavedCustomThemeStore];
  const stateFromStores = obj.useStateFromStores(items, () => savedCustomTheme.getSavedCustomTheme());
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = stateFromStores;
  }
  let tmpResult = tmp(4494);
  const customThemeDisplaySettings = tmpResult.useCustomThemeDisplaySettings(tmp4);
  let stateFromStores1 = null;
  if (undefined !== customThemeDisplaySettings) {
    obj = { type: tmp(1231).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj3.theme, customTheme: obj3.customThemeSettings } = customThemeDisplaySettings);
    stateFromStores1 = obj;
  }
  _require = mode;
  tmpResult = tmp(504);
  const items1 = [ThemeStore];
  if (null != mode) {
    stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
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
            const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: ThemeStore.themePreferenceForSystemTheme(closure_0), customThemeSettings: prop };
            tmp3 = obj;
          }
        }
        return tmp3;
      }
    });
  }
  if (null != stateFromStores1) {
    const items2 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(closure_7, 0);
    items2[arraySpreadResult] = stateFromStores1;
    arraySpreadResult = HermesBuiltin.arraySpread(closure_6, arraySpreadResult + 1);
    let items3 = items2;
  } else {
    items3 = [];
    HermesBuiltin.arraySpread(closure_6, HermesBuiltin.arraySpread(closure_7, 0));
  }
  return items3;
};
export const useSavedCustomTheme = function useSavedCustomTheme() {
  const items = [SavedCustomThemeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => savedCustomTheme.getSavedCustomTheme());
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = stateFromStores;
  }
  return tmp2;
};