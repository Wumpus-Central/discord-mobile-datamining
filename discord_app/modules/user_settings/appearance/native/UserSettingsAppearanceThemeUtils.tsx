// === Module 17513: UserSettingsAppearanceThemeUtils ===

// Module 17513 (UserSettingsAppearanceThemeUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1241 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ThemeActionCreators from "ThemeActionCreators" /* 5313 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 6179 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 14444 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 17514 */;
import SameAsDeviceThemeUtils from "SameAsDeviceThemeUtils" /* 17515 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;

require = fn;
const SystemThemeState = fn(1195).SystemThemeState;
const AnalyticEvents = fn(1072).AnalyticEvents;
const constants = fn(1387).AnalyticsPremiumFeatureNames;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx");

export function handleSaveTheme(found, analyticsLocations, c3) {
  if (found.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: "custom theme", is_persisted: true, is_synced, location_stack: analyticsLocations };
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
}
export function handleSaveSyncedModeTheme(hexagonCampaignClientThemeItem, item10084, analyticsLocations) {
  if ("system" !== hexagonCampaignClientThemeItem.theme) {
    if (hexagonCampaignClientThemeItem.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: "custom theme", is_persisted: true, is_synced: false, location_stack: analyticsLocations };
      AnalyticsUtilsDefault.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
      if (hexagonCampaignClientThemeItem.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        let theme = ClientThemesUtils.getCustomThemeBaseTheme(hexagonCampaignClientThemeItem.theme);
        const tmp14Result = ClientThemesUtils;
      } else {
        theme = hexagonCampaignClientThemeItem.theme;
      }
      const obj3 = {};
      obj3[item10084] = theme;
      const result = ThemeActionCreators.updateThemePreferences(obj3);
      if (hexagonCampaignClientThemeItem.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const obj4 = { customUserThemeSettings: hexagonCampaignClientThemeItem.customThemeSettings };
        const result1 = ThemeActionCreators.updateSyncedClientTheme(item10084, obj4);
        const tmp14Result6 = ThemeActionCreators;
      } else if (hexagonCampaignClientThemeItem.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const obj5 = { backgroundGradientPresetId: hexagonCampaignClientThemeItem.id };
        const result2 = ThemeActionCreators.updateSyncedClientTheme(item10084, obj5);
        const tmp14Result7 = ThemeActionCreators;
      } else {
        const obj6 = { theme: hexagonCampaignClientThemeItem.theme };
        const result3 = ThemeActionCreators.updateSyncedClientTheme(item10084, obj6);
        const tmp14Result8 = ThemeActionCreators;
      }
      const tmp14Result5 = ThemeActionCreators;
    } else if (hexagonCampaignClientThemeItem.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      let combined = preloaded_user_settings.BackgroundGradientPresetId[hexagonCampaignClientThemeItem.id];
    } else {
      const _HermesInternal = HermesInternal;
      combined = "default " + hexagonCampaignClientThemeItem.theme;
    }
  }
}
export function getSyncedModeThemeIndex(memo2, item10084) {
  const syncedClientTheme = ThemeStore.getSyncedClientTheme(item10084);
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
  closure_1 = ThemeStore.themePreferenceForSystemTheme(item10084);
  const findIndexResult2 = memo2.findIndex((theme) => theme.theme === closure_1);
  let num3 = 0;
  if (findIndexResult2 >= 0) {
    num3 = findIndexResult2;
  }
  return num3;
}
export function enableSameAsDeviceTheme() {
  const result = SameAsDeviceThemeUtils.enableSameAsDeviceTheme(CustomThemeMobileStore.getCustomTheme());
}
export function disableSameAsDeviceTheme() {
  ThemeActionCreators.setUseSystemTheme(SystemThemeState.OFF);
  const result = ThemeActionCreators.clearSyncedClientThemes();
}
export function trackClientThemeUpdated(arg0) {
  ({ isPersisted, isSynced, themeName, analyticsLocations } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.CLIENT_THEME_UPDATED, { feature_name: constants.CLIENT_THEME, theme_name: themeName, is_persisted: isPersisted, is_synced: isSynced, location_stack: analyticsLocations });
}
export function getUserThemeIndex(userPreset, c1, memo1, c3, c4) {
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
        return memo1.findIndex((type) => type.type === userPreset(1241).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
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
}