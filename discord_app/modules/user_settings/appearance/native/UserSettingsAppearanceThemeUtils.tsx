// discord_app/modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import ClientThemesUtils from "../../../client_themes/ClientThemesUtils.tsx";
import ClientThemesTypes from "../../../client_themes/ClientThemesTypes.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ThemeActionCreators from "../../ThemeActionCreators.tsx";
import UserSettingsActionCreators from "../../../../actions/UserSettingsActionCreators.tsx";
import CustomThemeMobileActionCreators from "../../../client_themes/native/CustomThemeMobileActionCreators.tsx";
import ClientThemesBackgroundActionCreators from "../../../client_themes/ClientThemesBackgroundActionCreators.tsx";
import SameAsDeviceThemeUtils from "../SameAsDeviceThemeUtils.tsx";
import CustomThemeMobileStore from "../../../client_themes/native/CustomThemeMobileStore.tsx";
import ThemeStore from "../../ThemeStore.tsx";

require = fn;
const SystemThemeState = fn(1186).SystemThemeState;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_7 = fn(1230).BACKGROUND_GRADIENT_PRESETS_MOBILE;
const constants = fn(1373).AnalyticsPremiumFeatureNames;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx");

export const handleSaveTheme = function handleSaveTheme(mobileThemes, analyticsLocations, isSynced) {
  if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    let obj = {
      feature_name: constants.CLIENT_THEME,
      theme_name: "custom theme",
      is_persisted: true,
      is_synced: isSynced,
      location_stack: analyticsLocations,
    };
    obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj);
    if ("system" === mobileThemes.theme) {
      let tmpResult = ClientThemesBackgroundActionCreators;
      const result = tmpResult.resetBackgroundGradientPreset();
      tmpResult = CustomThemeMobileActionCreators;
      tmpResult.resetCustomTheme();
      obj = { theme: mobileThemes.theme };
      return UserSettingsActionCreators.saveClientTheme(obj);
    } else if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const customThemeBaseTheme = ClientThemesUtils.getCustomThemeBaseTheme(mobileThemes.theme);
      const tmpResult2 = ClientThemesUtils;
      const result1 = ClientThemesBackgroundActionCreators.resetBackgroundGradientPreset();
      const tmpResult3 = ClientThemesBackgroundActionCreators;
      CustomThemeMobileActionCreators.updateCustomTheme(mobileThemes.customThemeSettings, customThemeBaseTheme);
      const tmpResult4 = CustomThemeMobileActionCreators;
      const obj1 = { customUserThemeSettings: mobileThemes.customThemeSettings, theme: customThemeBaseTheme };
      return UserSettingsActionCreators.saveClientTheme(obj1);
    } else {
      if (mobileThemes.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const result2 = ClientThemesBackgroundActionCreators.updateBackgroundGradientPreset(mobileThemes.id);
        const tmpResult6 = ClientThemesBackgroundActionCreators;
        CustomThemeMobileActionCreators.resetCustomTheme();
        const tmpResult7 = CustomThemeMobileActionCreators;
        ({ id: obj10.backgroundGradientPresetId, theme: obj10.theme } = mobileThemes);
        let saveClientThemeResult = UserSettingsActionCreators.saveClientTheme({
          backgroundGradientPresetId: null,
          theme: null,
        });
        const obj2 = { backgroundGradientPresetId: null, theme: null };
        const tmpResult8 = UserSettingsActionCreators;
      } else {
        const result3 = ClientThemesBackgroundActionCreators.resetBackgroundGradientPreset();
        const tmpResult9 = ClientThemesBackgroundActionCreators;
        CustomThemeMobileActionCreators.resetCustomTheme();
        const tmpResult10 = CustomThemeMobileActionCreators;
        const obj3 = { theme: mobileThemes.theme };
        saveClientThemeResult = UserSettingsActionCreators.saveClientTheme(obj3);
        const tmpResult11 = UserSettingsActionCreators;
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
export const handleSaveSyncedModeTheme = function handleSaveSyncedModeTheme(
  mobileThemes,
  systemTheme,
  analyticsLocations,
) {
  if ("system" !== mobileThemes.theme) {
    if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      let obj = {
        feature_name: constants.CLIENT_THEME,
        theme_name: "custom theme",
        is_persisted: true,
        is_synced: false,
        location_stack: analyticsLocations,
      };
      obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj);
      if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        let tmp14Result = ClientThemesUtils;
        let theme = tmp14Result.getCustomThemeBaseTheme(mobileThemes.theme);
      } else {
        theme = mobileThemes.theme;
      }
      tmp14Result = ThemeActionCreators;
      obj = {};
      obj[systemTheme] = theme;
      const result = tmp14Result.updateThemePreferences(obj);
      if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const obj1 = { customUserThemeSettings: mobileThemes.customThemeSettings };
        const result1 = ThemeActionCreators.updateSyncedClientTheme(systemTheme, obj1);
        const tmp14Result1 = ThemeActionCreators;
      } else if (mobileThemes.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const obj2 = { backgroundGradientPresetId: mobileThemes.id };
        const result2 = ThemeActionCreators.updateSyncedClientTheme(systemTheme, obj2);
        const tmp14Result2 = ThemeActionCreators;
      } else {
        const obj3 = { theme: mobileThemes.theme };
        const result3 = ThemeActionCreators.updateSyncedClientTheme(systemTheme, obj3);
        const tmp14Result3 = ThemeActionCreators;
      }
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
    const findIndexResult = memo2.findIndex(
      (type) => type.type === syncedClientTheme(dependencyMap[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT,
    );
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
  const obj = {
    feature_name: constants.CLIENT_THEME,
    theme_name: themeName,
    is_persisted: isPersisted,
    is_synced: isSynced,
    location_stack: analyticsLocations,
  };
  obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj);
};
export const getUserThemeIndex = function getUserThemeIndex(userPreset, c1, memo1, c3, c4) {
  if (null != userPreset) {
    const findIndexResult = memo1.findIndex(
      (type) => type.type === userPreset(1231).ClientThemeType.BACKGROUND_GRADIENT_PRESET,
    );
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
        return memo1.findIndex((type) => type.type === userPreset(1231).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
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
