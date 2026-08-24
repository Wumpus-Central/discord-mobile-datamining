// discord_app/modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx
import expandEventPropertiesDefault from "../../../../utils/AnalyticsUtils.tsx";
import ClientThemeType from "../../../client_themes/ClientThemesTypes.tsx";
import setSystemTheme from "../../ThemeActionCreators.tsx";
import enableSameAsDeviceTheme from "../SameAsDeviceThemeUtils.tsx";
import closure_3 from "../../../client_themes/native/CustomThemeMobileStore.tsx";
import closure_4 from "../../ThemeStore.tsx";
import { SystemThemeState } from "../../ThemeConstants.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { BACKGROUND_GRADIENT_PRESETS_MOBILE as closure_7 } from "../../../client_themes/ClientThemesConstants.tsx";
import { AnalyticsPremiumFeatureNames as closure_8 } from "../../../premium/PremiumConstants.tsx";

require = arg1;
let result = require("set").fileFinishedImporting("modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx");

export const handleSaveTheme = function handleSaveTheme(found, analyticsLocations, isSynced) {
  if (found.type === ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    let obj = expandEventPropertiesDefault;
    obj = { feature_name: null, theme_name: null, is_persisted: null, is_synced: null, location_stack: null };
    obj[0] = constants.CLIENT_THEME;
    obj[1] = "custom theme";
    obj[2] = true;
    obj[3] = isSynced;
    obj[4] = analyticsLocations;
    obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj);
    if ("system" === found.theme) {
      let tmpResult = tmp(14597);
      const result = tmpResult.resetBackgroundGradientPreset();
      tmpResult = tmp(11174);
      tmpResult.resetCustomTheme();
      obj = { theme: null };
      obj[0] = found.theme;
      return tmp(9402).saveClientTheme(obj);
    } else if (found.type === tmp(1349).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const customThemeBaseTheme = tmp(1347).getCustomThemeBaseTheme(found.theme);
      const tmpResult2 = tmp(1347);
      const result1 = tmp(14597).resetBackgroundGradientPreset();
      const tmpResult3 = tmp(14597);
      tmp(11174).updateCustomTheme(found.customThemeSettings, customThemeBaseTheme);
      const tmpResult4 = tmp(11174);
      obj1 = { customUserThemeSettings: null, theme: null };
      obj1[0] = found.customThemeSettings;
      obj1[1] = customThemeBaseTheme;
      return tmp(9402).saveClientTheme(obj1);
    } else {
      if (found.type === tmp(1349).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const result2 = tmp(14597).updateBackgroundGradientPreset(found.id);
        const tmpResult6 = tmp(14597);
        tmp(11174).resetCustomTheme();
        const tmpResult7 = tmp(11174);
        ({ id: obj10[0], theme: obj10[1] } = found);
        let saveClientThemeResult = tmp(9402).saveClientTheme({ backgroundGradientPresetId: null, theme: null });
        const obj2 = { backgroundGradientPresetId: null, theme: null };
        const tmpResult8 = tmp(9402);
      } else {
        const result3 = tmp(14597).resetBackgroundGradientPreset();
        const tmpResult9 = tmp(14597);
        tmp(11174).resetCustomTheme();
        const tmpResult10 = tmp(11174);
        const obj3 = { theme: null };
        obj3[0] = found.theme;
        saveClientThemeResult = tmp(9402).saveClientTheme(obj3);
        const tmpResult11 = tmp(9402);
      }
      return saveClientThemeResult;
    }
  } else if (found.type === tmp(1349).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let combined = tmp(1306).BackgroundGradientPresetId[found.id];
  } else {
    const _HermesInternal = HermesInternal;
    combined = "default " + found.theme;
  }
};
export const handleSaveSyncedModeTheme = function handleSaveSyncedModeTheme(theme, systemTheme, analyticsLocations) {
  if ("system" !== theme.theme) {
    if (theme.type === ClientThemeType.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      let obj = expandEventPropertiesDefault;
      obj = { feature_name: null, theme_name: null, is_persisted: null, is_synced: null, location_stack: null };
      obj[0] = constants.CLIENT_THEME;
      obj[1] = "custom theme";
      obj[2] = true;
      obj[3] = false;
      obj[4] = analyticsLocations;
      obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj);
      if (theme.type === tmp14(1349).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        let tmp14Result = tmp14(1347);
        theme = tmp14Result.getCustomThemeBaseTheme(theme.theme);
      } else {
        theme = theme.theme;
      }
      tmp14Result = tmp14(4226);
      obj = {};
      obj[systemTheme] = theme;
      const result = tmp14Result.updateThemePreferences(obj);
      if (theme.type === tmp14(1349).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        obj1 = { customUserThemeSettings: null };
        obj1[0] = theme.customThemeSettings;
        const result1 = tmp14(4226).updateSyncedClientTheme(systemTheme, obj1);
        const tmp14Result1 = tmp14(4226);
      } else if (theme.type === tmp14(1349).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const obj2 = { backgroundGradientPresetId: null };
        obj2[0] = theme.id;
        const result2 = tmp14(4226).updateSyncedClientTheme(systemTheme, obj2);
        const tmp14Result2 = tmp14(4226);
      } else {
        const obj3 = { theme: null };
        obj3[0] = theme.theme;
        const result3 = tmp14(4226).updateSyncedClientTheme(systemTheme, obj3);
        const tmp14Result3 = tmp14(4226);
      }
    } else if (theme.type === tmp14(1349).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      let combined = tmp14(1306).BackgroundGradientPresetId[theme.id];
    } else {
      const _HermesInternal = HermesInternal;
      combined = "default " + theme.theme;
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
    const findIndexResult = memo2.findIndex((type) => type.type === syncedClientTheme(table[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
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
      let tmp = type.type === syncedClientTheme(closure_1_2[6]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (tmp) {
        tmp = type.id === syncedClientTheme.backgroundGradientPresetId;
      }
      return tmp;
    });
    if (findIndexResult1 >= 0) {
      return findIndexResult1;
    }
  }
  closure_1 = syncedClientTheme.themePreferenceForSystemTheme(closure_0);
  const findIndexResult2 = memo2.findIndex((theme) => theme.theme === closure_1);
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
  const obj = setSystemTheme;
  const result = setSystemTheme.clearSyncedClientThemes();
};
export const trackClientThemeUpdated = function trackClientThemeUpdated(arg0) {
  ({ isPersisted, isSynced, themeName, analyticsLocations } = arg0);
  let obj = expandEventPropertiesDefault;
  obj = { feature_name: constants.CLIENT_THEME, theme_name: themeName, is_persisted: isPersisted, is_synced: isSynced, location_stack: analyticsLocations };
  obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj);
};
export const getUserThemeIndex = function getUserThemeIndex(userPreset, c1, memo1, c3, c4) {
  closure_0 = userPreset;
  if (null != userPreset) {
    const findIndexResult = memo1.findIndex((type) => type.type === userPreset(1349).ClientThemeType.BACKGROUND_GRADIENT_PRESET);
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
        return memo1.findIndex((type) => type.type === userPreset(1349).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
      }
    }
    let str = "system";
    if (!c1) {
      str = c3;
    }
    const findIndexResult2 = memo1.findIndex((theme) => theme.theme === str);
    let num2 = 0;
    if (findIndexResult2 >= 0) {
      num2 = findIndexResult2;
    }
    return num2;
  }
};