// === Module 14979: UserSettingsAppearanceThemeUtils ===

// Module 14979 (UserSettingsAppearanceThemeUtils)
import Constants from "Constants" /* 1085 */;
import ThemeConstants from "ThemeConstants" /* 1196 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1240 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1241 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4726 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 8863 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 11559 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 14980 */;
import SameAsDeviceThemeUtils from "SameAsDeviceThemeUtils" /* 14981 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import size from "module_2" /* 2 */;

const SystemThemeState = ThemeConstants.SystemThemeState;
const AnalyticEvents = Constants.AnalyticEvents;
let closure_7 = ClientThemesConstants.BACKGROUND_GRADIENT_PRESETS_MOBILE;
const constants = PremiumConstants.AnalyticsPremiumFeatureNames;
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx");

export const handleSaveTheme = function handleSaveTheme(found, analyticsLocations, isSynced) {
  let str = "custom theme";
  if (found.type !== ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    let combined;
    if (found.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      combined = preloaded_user_settings.BackgroundGradientPresetId[found.id];
    } else {
      const _HermesInternal = HermesInternal;
      combined = "default " + found.theme;
    }
    str = combined;
  }
  const obj = AnalyticsUtilsDefault;
  const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: str, is_persisted: true, is_synced: isSynced, location_stack: analyticsLocations };
  obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
  if ("system" === found.theme) {
    const tmpResult = ClientThemesBackgroundActionCreators;
    const result = tmpResult.resetBackgroundGradientPreset();
    const tmpResult13 = CustomThemeMobileActionCreators;
    tmpResult13.resetCustomTheme();
    const obj3 = { theme: found.theme };
    const tmpResult14 = UserSettingsActionCreators;
    return tmpResult14.saveClientTheme(obj3);
  } else if (found.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const tmpResult15 = ClientThemesUtils;
    const customThemeBaseTheme = tmpResult15.getCustomThemeBaseTheme(found.theme);
    const tmpResult16 = ClientThemesBackgroundActionCreators;
    const result1 = tmpResult16.resetBackgroundGradientPreset();
    const tmpResult17 = CustomThemeMobileActionCreators;
    tmpResult17.updateCustomTheme(found.customThemeSettings, customThemeBaseTheme);
    const obj4 = { customUserThemeSettings: found.customThemeSettings, theme: customThemeBaseTheme };
    const tmpResult18 = UserSettingsActionCreators;
    return tmpResult18.saveClientTheme(obj4);
  } else {
    let saveClientThemeResult;
    if (found.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      const tmpResult19 = ClientThemesBackgroundActionCreators;
      const result2 = tmpResult19.updateBackgroundGradientPreset(found.id);
      const tmpResult20 = CustomThemeMobileActionCreators;
      tmpResult20.resetCustomTheme();
      const obj5 = { backgroundGradientPresetId: null, theme: null };
      ({ id: obj10.backgroundGradientPresetId, theme: obj10.theme } = found);
      const tmpResult21 = UserSettingsActionCreators;
      saveClientThemeResult = tmpResult21.saveClientTheme(obj5);
    } else {
      const tmpResult22 = ClientThemesBackgroundActionCreators;
      const result3 = tmpResult22.resetBackgroundGradientPreset();
      const tmpResult23 = CustomThemeMobileActionCreators;
      tmpResult23.resetCustomTheme();
      const obj6 = { theme: found.theme };
      const tmpResult24 = UserSettingsActionCreators;
      saveClientThemeResult = tmpResult24.saveClientTheme(obj6);
    }
    return saveClientThemeResult;
  }
};
export const handleSaveSyncedModeTheme = function handleSaveSyncedModeTheme(mobileThemes, systemTheme, analyticsLocations) {
  if ("system" !== mobileThemes.theme) {
    let theme;
    let str2 = "custom theme";
    if (mobileThemes.type !== ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      let combined;
      if (mobileThemes.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        combined = preloaded_user_settings.BackgroundGradientPresetId[mobileThemes.id];
      } else {
        const _HermesInternal = HermesInternal;
        combined = "default " + mobileThemes.theme;
      }
      str2 = combined;
    }
    const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: str2, is_persisted: true, is_synced: false, location_stack: analyticsLocations };
    const obj = AnalyticsUtilsDefault;
    obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
    if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const tmp13Result = ClientThemesUtils;
      theme = tmp13Result.getCustomThemeBaseTheme(mobileThemes.theme);
    } else {
      theme = mobileThemes.theme;
    }
    const obj3 = {};
    obj3[systemTheme] = theme;
    const tmp13Result5 = ThemeActionCreators;
    const result = tmp13Result5.updateThemePreferences(obj3);
    if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const obj4 = { customUserThemeSettings: mobileThemes.customThemeSettings };
      const tmp13Result6 = ThemeActionCreators;
      const result1 = tmp13Result6.updateSyncedClientTheme(systemTheme, obj4);
    } else if (mobileThemes.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      const obj5 = { backgroundGradientPresetId: mobileThemes.id };
      const tmp13Result7 = ThemeActionCreators;
      const result2 = tmp13Result7.updateSyncedClientTheme(systemTheme, obj5);
    } else {
      const obj6 = { theme: mobileThemes.theme };
      const tmp13Result8 = ThemeActionCreators;
      const result3 = tmp13Result8.updateSyncedClientTheme(systemTheme, obj6);
    }
  }
};
export const getSyncedModeThemeIndex = function getSyncedModeThemeIndex(memo2, stateFromStores) {
  const syncedClientTheme = ThemeStore.getSyncedClientTheme(stateFromStores);
  let prop;
  if (syncedClientTheme != null) {
    prop = syncedClientTheme.customUserThemeSettings;
  }
  if (null != prop) {
    const findIndexResult = memo2.findIndex((type) => type.type === syncedClientTheme(dependencyMap[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
    if (findIndexResult >= 0) {
      return findIndexResult;
    }
  }
  let prop1;
  if (syncedClientTheme != null) {
    prop1 = syncedClientTheme.backgroundGradientPresetId;
  }
  if (null != prop1) {
    const findIndexResult1 = memo2.findIndex((type) => {
      const tmp = type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET && type.id === syncedClientTheme.backgroundGradientPresetId;
      return tmp;
    });
    if (findIndexResult1 >= 0) {
      return findIndexResult1;
    }
  }
  let closure_1 = ThemeStore.themePreferenceForSystemTheme(stateFromStores);
  const findIndexResult2 = memo2.findIndex((theme) => theme.theme === closure_1);
  let num3 = 0;
  if (findIndexResult2 >= 0) {
    num3 = findIndexResult2;
  }
  return num3;
};
export const enableSameAsDeviceTheme = function enableSameAsDeviceTheme() {
  const obj = SameAsDeviceThemeUtils;
  const result = obj.enableSameAsDeviceTheme(CustomThemeMobileStore.getCustomTheme());
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  const obj = ThemeActionCreators;
  obj.setUseSystemTheme(SystemThemeState.OFF);
  const obj2 = ThemeActionCreators;
  const result = obj2.clearSyncedClientThemes();
};
export const trackClientThemeUpdated = function trackClientThemeUpdated(arg0) {
  let analyticsLocations;
  let isPersisted;
  let isSynced;
  let themeName;
  ({ isPersisted, isSynced, themeName, analyticsLocations } = arg0);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: themeName, is_persisted: isPersisted, is_synced: isSynced, location_stack: analyticsLocations };
  obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
};
export const getUserThemeIndex = function getUserThemeIndex(userPreset, c1, arr3, c3, c4) {
  if (null != userPreset) {
    const findIndexResult = arr3.findIndex((type) => type.type === userPreset(dependencyMap[6]).ClientThemeType.BACKGROUND_GRADIENT_PRESET);
    const findIndexResult1 = closure_7.findIndex((id) => id.id === userPreset.id);
    let num4 = 0;
    if (findIndexResult >= 0) {
      num4 = 0;
      if (findIndexResult1 >= 0) {
        num4 = findIndexResult + findIndexResult1;
      }
    }
    return num4;
  } else {
    const tmp2 = c4;
    if (tmp2) {
      if (tmp >= 0) {
        return arr3.findIndex((type) => type.type === userPreset(dependencyMap[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
      }
    }
    let str = "system";
    if (!c1) {
      str = c3;
    }
    const findIndexResult2 = arr3.findIndex((theme) => theme.theme === str);
    let num2 = 0;
    if (findIndexResult2 >= 0) {
      num2 = findIndexResult2;
    }
    return num2;
  }
};