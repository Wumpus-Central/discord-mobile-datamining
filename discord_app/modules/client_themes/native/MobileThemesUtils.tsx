// === Module 4377: getCustomThemesName ===

// Module 4377 (getCustomThemesName)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ClientThemeType from "ClientThemeType" /* 1349 */;
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import messagesProxyDefault from "messagesProxy" /* 2567 */;
import useCustomThemeDisplaySettings from "useCustomThemeDisplaySettings" /* 4379 */;
import closure_3 from "handleThemeChange" /* 1302 */;
import closure_4 from "validateSavedTheme" /* 4378 */;
import closure_5 from "reset" /* 1346 */;
import ThemeTypes from "ThemeTypes" /* 1348 */;

require = arg1;
function getCustomThemesName() {
  const intl = getSystemLocale.intl;
  return intl.string(messagesProxyDefault.yl1iMm);
}
({ BACKGROUND_GRADIENT_PRESETS_MOBILE: closure_6, LEGACY_STANDARD_BACKGROUND_THEMES: error, REFRESH_STANDARD_BACKGROUND_THEMES: closure_8 } = ThemeTypes);
const result = require("set").fileFinishedImporting("modules/client_themes/native/MobileThemesUtils.tsx");

export const getCustomBackgroundGradient = function getCustomBackgroundGradient() {
  const customThemeDisplaySettings = store.getCustomThemeDisplaySettings();
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: null, getName: null, theme: null, customThemeSettings: null };
    obj[0] = ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
    obj[1] = getCustomThemesName;
    ({ baseTheme: obj[2], customTheme: obj[3] } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  return tmp2;
};
export const useCustomBackgroundGradient = function useCustomBackgroundGradient(base_theme) {
  let obj = useCustomThemeDisplaySettings;
  const customThemeDisplaySettings = obj.useCustomThemeDisplaySettings(base_theme);
  let tmp4 = null;
  if (undefined !== customThemeDisplaySettings) {
    obj = { type: null, getName: null, theme: null, customThemeSettings: null };
    obj[0] = ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
    obj[1] = getCustomThemesName;
    ({ baseTheme: obj2[2], customTheme: obj2[3] } = customThemeDisplaySettings);
    tmp4 = obj;
  }
  return tmp4;
};
export const usePerModeCustomBackgroundGradient = function usePerModeCustomBackgroundGradient(arg0) {
  const _require = arg0;
  const items = [closure_3];
  return _require(589).useStateFromStores(items, () => {
    if (null == mode) {
      return null;
    } else {
      const syncedClientTheme = closure_1_3.getSyncedClientTheme(tmp);
      let prop;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.customUserThemeSettings;
      }
      let tmp3 = null;
      if (null != prop) {
        tmp3 = null;
        if (0 !== prop.colors.length) {
          const obj = { type: null, getName: null, theme: null, customThemeSettings: null };
          obj[0] = mode(closure_1_2[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
          obj[1] = closure_1_9;
          obj[2] = closure_1_3.themePreferenceForSystemTheme(tmp);
          obj[3] = prop;
          tmp3 = obj;
        }
      }
      return tmp3;
    }
  });
};
export const getAllMobileThemes = function getAllMobileThemes() {
  const customThemeDisplaySettings = store.getCustomThemeDisplaySettings();
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: null, getName: null, theme: null, customThemeSettings: null };
    obj[0] = ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
    obj[1] = getCustomThemesName;
    ({ baseTheme: obj[2], customTheme: obj[3] } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  const tmp6 = useIsMobileVisualRefreshExperimentEnabled.isMobileVisualRefreshEnabled("MobileThemesUtils") ? closure_8 : closure_7;
  if (null != tmp2) {
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(tmp6, 0);
    items[arraySpreadResult] = tmp2;
    arraySpreadResult = HermesBuiltin.arraySpread(closure_6, arraySpreadResult + 1);
    let items1 = items;
  } else {
    items1 = [];
    HermesBuiltin.arraySpread(closure_6, HermesBuiltin.arraySpread(tmp6, 0));
  }
  return items1;
};
export const useAllMobileThemes = function useAllMobileThemes(mode) {
  let obj = _require(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => savedCustomTheme.getSavedCustomTheme());
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = stateFromStores;
  }
  let tmpResult = tmp(4379);
  const customThemeDisplaySettings = tmpResult.useCustomThemeDisplaySettings(tmp4);
  let stateFromStores1 = null;
  if (undefined !== customThemeDisplaySettings) {
    obj = { type: null, getName: null, theme: null, customThemeSettings: null };
    obj[0] = tmp(1349).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
    obj[1] = getCustomThemesName;
    ({ baseTheme: obj3[2], customTheme: obj3[3] } = customThemeDisplaySettings);
    stateFromStores1 = obj;
  }
  _require = mode;
  tmpResult = tmp(589);
  const items1 = [closure_3];
  if (null != mode) {
    stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
      if (null == mode) {
        return null;
      } else {
        const syncedClientTheme = closure_1_3.getSyncedClientTheme(tmp);
        let prop;
        if (syncedClientTheme != null) {
          prop = syncedClientTheme.customUserThemeSettings;
        }
        let tmp3 = null;
        if (null != prop) {
          tmp3 = null;
          if (0 !== prop.colors.length) {
            const obj = { type: null, getName: null, theme: null, customThemeSettings: null };
            obj[0] = mode(closure_1_2[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
            obj[1] = closure_1_9;
            obj[2] = closure_1_3.themePreferenceForSystemTheme(tmp);
            obj[3] = prop;
            tmp3 = obj;
          }
        }
        return tmp3;
      }
    });
  }
  const tmp8 = useIsMobileVisualRefreshExperimentEnabledDefault("MobileThemesUtils") ? closure_8 : closure_7;
  if (null != stateFromStores1) {
    const items2 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(tmp8, 0);
    items2[arraySpreadResult] = stateFromStores1;
    arraySpreadResult = HermesBuiltin.arraySpread(closure_6, arraySpreadResult + 1);
    let items3 = items2;
  } else {
    items3 = [];
    HermesBuiltin.arraySpread(closure_6, HermesBuiltin.arraySpread(tmp8, 0));
  }
  return items3;
};
export const useSavedCustomTheme = function useSavedCustomTheme() {
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => savedCustomTheme.getSavedCustomTheme());
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = stateFromStores;
  }
  return tmp2;
};