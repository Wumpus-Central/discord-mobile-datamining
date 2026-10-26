// === Module 16381: UserSettingsAppearanceThemeUtils ===

// Module 16381 (UserSettingsAppearanceThemeUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1211 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1254 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1256 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import ThemeActionCreators from "ThemeActionCreators" /* 5036 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 5868 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 13048 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 16382 */;
import SameAsDeviceThemeUtils from "SameAsDeviceThemeUtils" /* 16383 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1253 */;
import ThemeStore from "ThemeStore" /* 1207 */;

require = fn;
const SystemThemeState = fn(1210).SystemThemeState;
const AnalyticEvents = fn(1087).AnalyticEvents;
const constants = fn(1394).AnalyticsPremiumFeatureNames;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx");

export const handleSaveTheme = function handleSaveTheme(found, analyticsLocations, isSynced) {
  if (found.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: "custom theme", is_persisted: true, is_synced: isSynced, location_stack: analyticsLocations };
    AnalyticsUtilsDefault.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
    if ("system" === found.theme) {
      const result = ClientThemesBackgroundActionCreators.resetBackgroundGradientPreset();
      const tmpResult = ClientThemesBackgroundActionCreators;
      CustomThemeMobileActionCreators.resetCustomTheme();
      const tmpResult13 = CustomThemeMobileActionCreators;
      const obj3 = { theme: found.theme };
      return UserSettingsActionCreators.saveClientTheme(obj3);
    } else if (found.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const customThemeBaseTheme = ClientThemesUtils.getCustomThemeBaseTheme(found.theme);
      const tmpResult15 = ClientThemesUtils;
      const result1 = ClientThemesBackgroundActionCreators.resetBackgroundGradientPreset();
      const tmpResult16 = ClientThemesBackgroundActionCreators;
      CustomThemeMobileActionCreators.updateCustomTheme(found.customThemeSettings, customThemeBaseTheme);
      const tmpResult17 = CustomThemeMobileActionCreators;
      const obj4 = { customUserThemeSettings: found.customThemeSettings, theme: customThemeBaseTheme };
      return UserSettingsActionCreators.saveClientTheme(obj4);
    } else {
      if (found.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const result2 = ClientThemesBackgroundActionCreators.updateBackgroundGradientPreset(found.id);
        const tmpResult19 = ClientThemesBackgroundActionCreators;
        CustomThemeMobileActionCreators.resetCustomTheme();
        const tmpResult20 = CustomThemeMobileActionCreators;
        ({ id: obj10.backgroundGradientPresetId, theme: obj10.theme } = found);
        let saveClientThemeResult = UserSettingsActionCreators.saveClientTheme({ backgroundGradientPresetId: null, theme: null });
        const obj5 = { backgroundGradientPresetId: null, theme: null };
        const tmpResult21 = UserSettingsActionCreators;
      } else {
        const result3 = ClientThemesBackgroundActionCreators.resetBackgroundGradientPreset();
        const tmpResult22 = ClientThemesBackgroundActionCreators;
        CustomThemeMobileActionCreators.resetCustomTheme();
        const tmpResult23 = CustomThemeMobileActionCreators;
        const obj6 = { theme: found.theme };
        saveClientThemeResult = UserSettingsActionCreators.saveClientTheme(obj6);
        const tmpResult24 = UserSettingsActionCreators;
      }
      return saveClientThemeResult;
    }
  } else if (found.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let combined = preloaded_user_settings.BackgroundGradientPresetId[found.id];
  } else {
    const _HermesInternal = HermesInternal;
    combined = "default " + found.theme;
  }
};
export const handleSaveSyncedModeTheme = function handleSaveSyncedModeTheme(theme, systemTheme, analyticsLocations) {
  if ("system" !== theme.theme) {
    if (theme.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: "custom theme", is_persisted: true, is_synced: false, location_stack: analyticsLocations };
      AnalyticsUtilsDefault.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
      if (theme.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        theme = ClientThemesUtils.getCustomThemeBaseTheme(theme.theme);
        const tmp14Result = ClientThemesUtils;
      } else {
        theme = theme.theme;
      }
      const obj3 = {};
      obj3[systemTheme] = theme;
      const result = ThemeActionCreators.updateThemePreferences(obj3);
      if (theme.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const obj4 = { customUserThemeSettings: theme.customThemeSettings };
        const result1 = ThemeActionCreators.updateSyncedClientTheme(systemTheme, obj4);
        const tmp14Result6 = ThemeActionCreators;
      } else if (theme.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const obj5 = { backgroundGradientPresetId: theme.id };
        const result2 = ThemeActionCreators.updateSyncedClientTheme(systemTheme, obj5);
        const tmp14Result7 = ThemeActionCreators;
      } else {
        const obj6 = { theme: theme.theme };
        const result3 = ThemeActionCreators.updateSyncedClientTheme(systemTheme, obj6);
        const tmp14Result8 = ThemeActionCreators;
      }
      const tmp14Result5 = ThemeActionCreators;
    } else if (theme.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      let combined = preloaded_user_settings.BackgroundGradientPresetId[theme.id];
    } else {
      const _HermesInternal = HermesInternal;
      combined = "default " + theme.theme;
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
    const findIndexResult = memo2.findIndex((type) => type.type === syncedClientTheme(dependencyMap[5]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
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
      let tmp = type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (tmp) {
        tmp = type.id === syncedClientTheme.backgroundGradientPresetId;
      }
      return tmp;
    });
    if (findIndexResult1 >= 0) {
      return findIndexResult1;
    }
  }
  closure_1 = ThemeStore.themePreferenceForSystemTheme(stateFromStores);
  const findIndexResult2 = memo2.findIndex((theme) => theme.theme === closure_1);
  let num3 = 0;
  if (findIndexResult2 >= 0) {
    num3 = findIndexResult2;
  }
  return num3;
};
export const enableSameAsDeviceTheme = function enableSameAsDeviceTheme() {
  const result = SameAsDeviceThemeUtils.enableSameAsDeviceTheme(CustomThemeMobileStore.getCustomTheme());
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  ThemeActionCreators.setUseSystemTheme(SystemThemeState.OFF);
  const result = ThemeActionCreators.clearSyncedClientThemes();
};
export const trackClientThemeUpdated = function trackClientThemeUpdated(arg0) {
  ({ isPersisted, isSynced, themeName, analyticsLocations } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.CLIENT_THEME_UPDATED, { feature_name: constants.CLIENT_THEME, theme_name: themeName, is_persisted: isPersisted, is_synced: isSynced, location_stack: analyticsLocations });
};
export const getUserThemeIndex = function getUserThemeIndex(userPreset, c1, memo1, c3, c4) {
  if (null != userPreset) {
    const findIndexResult = memo1.findIndex((type) => {
      let tmp = type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (tmp) {
        tmp = type.id === userPreset.id;
      }
      return tmp;
    });
    let num3 = 0;
    if (findIndexResult >= 0) {
      num3 = findIndexResult;
    }
    return num3;
  } else {
    if (c4) {
      if (tmp >= 0) {
        return memo1.findIndex((type) => type.type === userPreset(1256).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
      }
    }
    const str = "system";
    const findIndexResult1 = memo1.findIndex((theme) => theme.theme === str);
    let num2 = 0;
    if (findIndexResult1 >= 0) {
      num2 = findIndexResult1;
    }
    return num2;
  }
};