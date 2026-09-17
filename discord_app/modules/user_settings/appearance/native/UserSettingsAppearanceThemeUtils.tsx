// === Module 15289: UserSettingsAppearanceThemeUtils ===

// Module 15289 (UserSettingsAppearanceThemeUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1228 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1230 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4488 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 9512 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 12099 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 15290 */;
import SameAsDeviceThemeUtils from "SameAsDeviceThemeUtils" /* 15291 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1227 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
const SystemThemeState = fn(1185).SystemThemeState;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_7 = fn(1229).BACKGROUND_GRADIENT_PRESETS_MOBILE;
const constants = fn(1374).AnalyticsPremiumFeatureNames;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx");

export const handleSaveTheme = function handleSaveTheme(mobileThemes, analyticsLocations, isSynced) {
  if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: "custom theme", is_persisted: true, is_synced: isSynced, location_stack: analyticsLocations };
    AnalyticsUtilsDefault.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
    if ("system" === mobileThemes.theme) {
      const result = ClientThemesBackgroundActionCreators.resetBackgroundGradientPreset();
      const tmpResult = ClientThemesBackgroundActionCreators;
      CustomThemeMobileActionCreators.resetCustomTheme();
      const tmpResult13 = CustomThemeMobileActionCreators;
      const obj3 = { theme: mobileThemes.theme };
      return UserSettingsActionCreators.saveClientTheme(obj3);
    } else if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const customThemeBaseTheme = ClientThemesUtils.getCustomThemeBaseTheme(mobileThemes.theme);
      const tmpResult15 = ClientThemesUtils;
      const result1 = ClientThemesBackgroundActionCreators.resetBackgroundGradientPreset();
      const tmpResult16 = ClientThemesBackgroundActionCreators;
      CustomThemeMobileActionCreators.updateCustomTheme(mobileThemes.customThemeSettings, customThemeBaseTheme);
      const tmpResult17 = CustomThemeMobileActionCreators;
      const obj4 = { customUserThemeSettings: mobileThemes.customThemeSettings, theme: customThemeBaseTheme };
      return UserSettingsActionCreators.saveClientTheme(obj4);
    } else {
      if (mobileThemes.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const result2 = ClientThemesBackgroundActionCreators.updateBackgroundGradientPreset(mobileThemes.id);
        const tmpResult19 = ClientThemesBackgroundActionCreators;
        CustomThemeMobileActionCreators.resetCustomTheme();
        const tmpResult20 = CustomThemeMobileActionCreators;
        ({ id: obj10.backgroundGradientPresetId, theme: obj10.theme } = mobileThemes);
        let saveClientThemeResult = UserSettingsActionCreators.saveClientTheme({ backgroundGradientPresetId: null, theme: null });
        const obj5 = { backgroundGradientPresetId: null, theme: null };
        const tmpResult21 = UserSettingsActionCreators;
      } else {
        const result3 = ClientThemesBackgroundActionCreators.resetBackgroundGradientPreset();
        const tmpResult22 = ClientThemesBackgroundActionCreators;
        CustomThemeMobileActionCreators.resetCustomTheme();
        const tmpResult23 = CustomThemeMobileActionCreators;
        const obj6 = { theme: mobileThemes.theme };
        saveClientThemeResult = UserSettingsActionCreators.saveClientTheme(obj6);
        const tmpResult24 = UserSettingsActionCreators;
      }
      return saveClientThemeResult;
    }
  } else if (mobileThemes.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let combined = preloaded_user_settings.BackgroundGradientPresetId[mobileThemes.id];
  } else {
    const _HermesInternal = HermesInternal;
    combined = "default " + mobileThemes.theme;
  }
};
export const handleSaveSyncedModeTheme = function handleSaveSyncedModeTheme(mobileThemes, systemTheme, analyticsLocations) {
  if ("system" !== mobileThemes.theme) {
    if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: "custom theme", is_persisted: true, is_synced: false, location_stack: analyticsLocations };
      AnalyticsUtilsDefault.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
      if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        let theme = ClientThemesUtils.getCustomThemeBaseTheme(mobileThemes.theme);
        const tmp14Result = ClientThemesUtils;
      } else {
        theme = mobileThemes.theme;
      }
      const obj3 = {};
      obj3[systemTheme] = theme;
      const result = ThemeActionCreators.updateThemePreferences(obj3);
      if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const obj4 = { customUserThemeSettings: mobileThemes.customThemeSettings };
        const result1 = ThemeActionCreators.updateSyncedClientTheme(systemTheme, obj4);
        const tmp14Result6 = ThemeActionCreators;
      } else if (mobileThemes.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const obj5 = { backgroundGradientPresetId: mobileThemes.id };
        const result2 = ThemeActionCreators.updateSyncedClientTheme(systemTheme, obj5);
        const tmp14Result7 = ThemeActionCreators;
      } else {
        const obj6 = { theme: mobileThemes.theme };
        const result3 = ThemeActionCreators.updateSyncedClientTheme(systemTheme, obj6);
        const tmp14Result8 = ThemeActionCreators;
      }
      const tmp14Result5 = ThemeActionCreators;
    } else if (mobileThemes.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      let combined = preloaded_user_settings.BackgroundGradientPresetId[mobileThemes.id];
    } else {
      const _HermesInternal = HermesInternal;
      combined = "default " + mobileThemes.theme;
    }
  }
};
export const getSyncedModeThemeIndex = function getSyncedModeThemeIndex(memo2, systemTheme) {
  const syncedClientTheme = ThemeStore.getSyncedClientTheme(systemTheme);
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
  closure_1 = ThemeStore.themePreferenceForSystemTheme(systemTheme);
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
    const findIndexResult = memo1.findIndex((type) => type.type === userPreset(1230).ClientThemeType.BACKGROUND_GRADIENT_PRESET);
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
    if (c4) {
      if (tmp >= 0) {
        return memo1.findIndex((type) => type.type === userPreset(1230).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
      }
    }
    const findIndexResult2 = memo1.findIndex((theme) => theme.theme === str);
    let num2 = 0;
    if (findIndexResult2 >= 0) {
      num2 = findIndexResult2;
    }
    return num2;
  }
};