// discord_app/modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx
import expandEventPropertiesDefault from "../../../../utils/AnalyticsUtils.tsx";
import create from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import getThemeForColor from "../../../client_themes/ClientThemesUtils.tsx";
import ClientThemeType from "../../../client_themes/ClientThemesTypes.tsx";
import setSystemTheme from "../../ThemeActionCreators.tsx";
import saveGuildFolders from "../../../../actions/UserSettingsActionCreators.tsx";
import updateCustomTheme from "../../../client_themes/native/CustomThemeMobileActionCreators.tsx";
import updateBackgroundGradientPreset from "../../../client_themes/ClientThemesBackgroundActionCreators.tsx";
import enableSameAsDeviceTheme from "../SameAsDeviceThemeUtils.tsx";
import reset from "../../../client_themes/native/CustomThemeMobileStore.tsx";
import handleThemeChange from "../../ThemeStore.tsx";
import { SystemThemeState } from "../../ThemeConstants.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { BACKGROUND_GRADIENT_PRESETS_MOBILE as closure_7 } from "../../../client_themes/ClientThemesConstants.tsx";
import { AnalyticsPremiumFeatureNames as closure_8 } from "../../../premium/PremiumConstants.tsx";

require = fn;
let result = require("obj132").fileFinishedImporting("modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx");

export const handleSaveTheme = function handleSaveTheme(mobileThemes, analyticsLocations, isSynced) {
  if (mobileThemes.type === ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    let obj = { feature_name: null, theme_name: null, is_persisted: null, is_synced: null, location_stack: null };
    obj[0] = constants.CLIENT_THEME;
    obj[1] = "custom theme";
    obj[2] = true;
    obj[3] = isSynced;
    obj[4] = analyticsLocations;
    obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj);
    if ("system" === mobileThemes.theme) {
      let tmpResult = updateBackgroundGradientPreset;
      const result = tmpResult.resetBackgroundGradientPreset();
      tmpResult = updateCustomTheme;
      tmpResult.resetCustomTheme();
      obj = { theme: null };
      obj[0] = mobileThemes.theme;
      return saveGuildFolders.saveClientTheme(obj);
    } else if (mobileThemes.type === ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const customThemeBaseTheme = getThemeForColor.getCustomThemeBaseTheme(mobileThemes.theme);
      const tmpResult2 = getThemeForColor;
      const result1 = updateBackgroundGradientPreset.resetBackgroundGradientPreset();
      const tmpResult3 = updateBackgroundGradientPreset;
      updateCustomTheme.updateCustomTheme(mobileThemes.customThemeSettings, customThemeBaseTheme);
      const tmpResult4 = updateCustomTheme;
      obj1 = { customUserThemeSettings: null, theme: null };
      obj1[0] = mobileThemes.customThemeSettings;
      obj1[1] = customThemeBaseTheme;
      return saveGuildFolders.saveClientTheme(obj1);
    } else {
      if (mobileThemes.type === ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const result2 = updateBackgroundGradientPreset.updateBackgroundGradientPreset(mobileThemes.id);
        const tmpResult6 = updateBackgroundGradientPreset;
        updateCustomTheme.resetCustomTheme();
        const tmpResult7 = updateCustomTheme;
        ({ id: obj10[0], theme: obj10[1] } = mobileThemes);
        let saveClientThemeResult = saveGuildFolders.saveClientTheme({ backgroundGradientPresetId: null, theme: null });
        const tmpResult8 = saveGuildFolders;
      } else {
        const result3 = updateBackgroundGradientPreset.resetBackgroundGradientPreset();
        const tmpResult9 = updateBackgroundGradientPreset;
        updateCustomTheme.resetCustomTheme();
        const tmpResult10 = updateCustomTheme;
        const obj3 = { theme: null };
        obj3[0] = mobileThemes.theme;
        saveClientThemeResult = saveGuildFolders.saveClientTheme(obj3);
        const tmpResult11 = saveGuildFolders;
      }
      return saveClientThemeResult;
    }
  } else if (mobileThemes.type === ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let combined = create.BackgroundGradientPresetId[mobileThemes.id];
  } else {
    const _HermesInternal = HermesInternal;
    combined = "default " + mobileThemes.theme;
  }
};
export const handleSaveSyncedModeTheme = function handleSaveSyncedModeTheme(mobileThemes, systemTheme, analyticsLocations) {
  if ("system" !== mobileThemes.theme) {
    if (mobileThemes.type === ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      let obj = { feature_name: null, theme_name: null, is_persisted: null, is_synced: null, location_stack: null };
      obj[0] = constants.CLIENT_THEME;
      obj[1] = "custom theme";
      obj[2] = true;
      obj[3] = false;
      obj[4] = analyticsLocations;
      obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj);
      if (mobileThemes.type === ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        let tmp14Result = getThemeForColor;
        let theme = tmp14Result.getCustomThemeBaseTheme(mobileThemes.theme);
      } else {
        theme = mobileThemes.theme;
      }
      tmp14Result = setSystemTheme;
      obj = {};
      obj[systemTheme] = theme;
      const result = tmp14Result.updateThemePreferences(obj);
      if (mobileThemes.type === ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        obj1 = { customUserThemeSettings: null };
        obj1[0] = mobileThemes.customThemeSettings;
        const result1 = setSystemTheme.updateSyncedClientTheme(systemTheme, obj1);
        const tmp14Result1 = setSystemTheme;
      } else if (mobileThemes.type === ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const obj2 = { backgroundGradientPresetId: null };
        obj2[0] = mobileThemes.id;
        const result2 = setSystemTheme.updateSyncedClientTheme(systemTheme, obj2);
        const tmp14Result2 = setSystemTheme;
      } else {
        const obj3 = { theme: null };
        obj3[0] = mobileThemes.theme;
        const result3 = setSystemTheme.updateSyncedClientTheme(systemTheme, obj3);
        const tmp14Result3 = setSystemTheme;
      }
    } else if (mobileThemes.type === ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      let combined = create.BackgroundGradientPresetId[mobileThemes.id];
    } else {
      const _HermesInternal = HermesInternal;
      combined = "default " + mobileThemes.theme;
    }
  }
};
export const getSyncedModeThemeIndex = function getSyncedModeThemeIndex(memo2, closure_0) {
  syncedClientTheme = syncedClientTheme.getSyncedClientTheme(closure_0);
  let prop;
  if (syncedClientTheme != null) {
    prop = syncedClientTheme.customUserThemeSettings;
  }
  if (null != prop) {
    const findIndexResult = memo2.findIndex((item, index) => item.type === syncedClientTheme(table[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
    if (findIndexResult >= 0) {
      return findIndexResult;
    }
  }
  let prop1;
  if (syncedClientTheme != null) {
    prop1 = syncedClientTheme.backgroundGradientPresetId;
  }
  if (null != prop1) {
    const findIndexResult1 = memo2.findIndex((item, index) => {
      let tmp = item.type === syncedClientTheme(dependencyMap[6]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (tmp) {
        tmp = item.id === syncedClientTheme.backgroundGradientPresetId;
      }
      return tmp;
    });
    if (findIndexResult1 >= 0) {
      return findIndexResult1;
    }
  }
  closure_1 = syncedClientTheme.themePreferenceForSystemTheme(closure_0);
  const findIndexResult2 = memo2.findIndex((item, index) => item.theme === closure_1);
  let num3 = 0;
  if (findIndexResult2 >= 0) {
    num3 = findIndexResult2;
  }
  return num3;
};
export const enableSameAsDeviceTheme = function enableSameAsDeviceTheme() {
  const result = enableSameAsDeviceTheme.enableSameAsDeviceTheme(customTheme.getCustomTheme());
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  setSystemTheme.setUseSystemTheme(SystemThemeState.OFF);
  const result = setSystemTheme.clearSyncedClientThemes();
};
export const trackClientThemeUpdated = function trackClientThemeUpdated(arg0) {
  ({ isPersisted, isSynced, themeName, analyticsLocations } = arg0);
  const obj = { feature_name: constants.CLIENT_THEME, theme_name: themeName, is_persisted: isPersisted, is_synced: isSynced, location_stack: analyticsLocations };
  obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj);
};
export const getUserThemeIndex = function getUserThemeIndex(userPreset, c1, memo1, c3, c4) {
  closure_0 = userPreset;
  if (null != userPreset) {
    const findIndexResult = memo1.findIndex((item, index) => item.type === userPreset(1349).ClientThemeType.BACKGROUND_GRADIENT_PRESET);
    const findIndexResult1 = closure_7.findIndex((item, index) => item.id === userPreset.id);
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
        return memo1.findIndex((item, index) => item.type === userPreset(1349).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
      }
    }
    const findIndexResult2 = memo1.findIndex((item, index) => item.theme === str);
    let num2 = 0;
    if (findIndexResult2 >= 0) {
      num2 = findIndexResult2;
    }
    return num2;
  }
};