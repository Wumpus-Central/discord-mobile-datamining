// === Module 14285: handleSaveTheme ===

// Module 14285 (handleSaveTheme)
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import reset from "reset";
import handleThemeChange from "handleThemeChange";
import SystemThemeState from "SystemThemeState";
import ME from "ME";
import { BACKGROUND_GRADIENT_PRESETS_MOBILE as closure_10 } from "items1";
import { AnalyticsPremiumFeatureNames as closure_11 } from "GuildFeatures";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ SystemTheme: closure_6, SystemThemeState: error } = SystemThemeState);
({ AnalyticEvents: metroImportAll, ThemeTypes: c9 } = ME);
let result = require("handleThemeChange").fileFinishedImporting("modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx");

export const handleSaveTheme = function handleSaveTheme(found, analyticsLocations, isSynced) {
  if (found.type === require(4069) /* ClientThemeType */.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    let obj = importDefault(698);
    obj = { feature_name: null, theme_name: null, is_persisted: null, is_synced: null, location_stack: null };
    obj[0] = constants3.CLIENT_THEME;
    obj[1] = "custom theme";
    obj[2] = true;
    obj[3] = isSynced;
    obj[4] = analyticsLocations;
    obj.track(constants2.CLIENT_THEME_UPDATED, obj);
    if ("system" === found.theme) {
      let tmpResult = tmp(14286);
      const result = tmpResult.resetBackgroundGradientPreset();
      tmpResult = tmp(11268);
      tmpResult.resetCustomTheme();
      obj = { theme: null };
      obj[0] = found.theme;
      let saveClientThemeResult = tmp(8175).saveClientTheme(obj);
      const tmpResult1 = tmp(8175);
    } else if (found.type === tmp(4069).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const result1 = tmp(14286).resetBackgroundGradientPreset();
      const tmpResult2 = tmp(14286);
      tmp(11268).updateCustomTheme(found.customThemeSettings, found.theme);
      const tmpResult3 = tmp(11268);
      const obj1 = { customUserThemeSettings: null, theme: null };
      obj1[0] = found.customThemeSettings;
      const tmpResult4 = tmp(8175);
      obj1[1] = tmp(3965).isThemeDark(found.theme) ? closure_9.DARK : closure_9.LIGHT;
      tmpResult4.saveClientTheme(obj1);
      const tmpResult5 = tmp(3965);
    } else if (found.type === tmp(4069).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      const result2 = tmp(14286).updateBackgroundGradientPreset(found.id);
      const tmpResult6 = tmp(14286);
      tmp(11268).resetCustomTheme();
      const tmpResult7 = tmp(11268);
      ({ id: obj10[0], theme: obj10[1] } = found);
      saveClientThemeResult = tmp(8175).saveClientTheme({ backgroundGradientPresetId: null, theme: null });
      const obj2 = { backgroundGradientPresetId: null, theme: null };
      const tmpResult8 = tmp(8175);
    } else {
      const result3 = tmp(14286).resetBackgroundGradientPreset();
      const tmpResult9 = tmp(14286);
      tmp(11268).resetCustomTheme();
      const tmpResult10 = tmp(11268);
      const obj3 = { theme: null };
      obj3[0] = found.theme;
      saveClientThemeResult = tmp(8175).saveClientTheme(obj3);
      const tmpResult11 = tmp(8175);
    }
    return saveClientThemeResult;
  } else if (found.type === tmp(4069).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let combined = tmp(1306).BackgroundGradientPresetId[found.id];
  } else {
    const _HermesInternal = HermesInternal;
    combined = "default " + found.theme;
  }
};
export const handleSaveSyncedModeTheme = function handleSaveSyncedModeTheme(theme, systemTheme, analyticsLocations) {
  if ("system" !== theme.theme) {
    if (theme.type === require(4069) /* ClientThemeType */.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      let obj = importDefault(698);
      obj = { feature_name: null, theme_name: null, is_persisted: null, is_synced: null, location_stack: null };
      obj[0] = constants3.CLIENT_THEME;
      obj[1] = "custom theme";
      obj[2] = true;
      obj[3] = false;
      obj[4] = analyticsLocations;
      obj.track(constants2.CLIENT_THEME_UPDATED, obj);
      let tmp14Result = tmp14(4097);
      obj = {};
      obj[systemTheme] = theme.theme;
      const result = tmp14Result.updateThemePreferences(obj);
      if (theme.type === tmp14(4069).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        tmp14Result = tmp14(4097);
        const obj1 = { customUserThemeSettings: null };
        obj1[0] = theme.customThemeSettings;
        const result1 = tmp14Result.updateSyncedClientTheme(systemTheme, obj1);
      } else if (theme.type === tmp14(4069).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const obj2 = { backgroundGradientPresetId: null };
        obj2[0] = theme.id;
        const result2 = tmp14(4097).updateSyncedClientTheme(systemTheme, obj2);
        const tmp14Result1 = tmp14(4097);
      } else {
        const result3 = tmp14(4097).updateSyncedClientTheme(systemTheme, undefined);
        const tmp14Result2 = tmp14(4097);
      }
    } else if (theme.type === tmp14(4069).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
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
    const findIndexResult = memo2.findIndex((type) => type.type === syncedClientTheme(table[7]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
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
      let tmp = type.type === syncedClientTheme(outer1_2[7]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (tmp) {
        tmp = type.id === syncedClientTheme.backgroundGradientPresetId;
      }
      return tmp;
    });
    if (findIndexResult1 >= 0) {
      return findIndexResult1;
    }
  }
  let closure_1 = syncedClientTheme.themePreferenceForSystemTheme(closure_0);
  const findIndexResult2 = memo2.findIndex((theme) => theme.theme === closure_1);
  let num3 = 0;
  if (findIndexResult2 >= 0) {
    num3 = findIndexResult2;
  }
  return num3;
};
export const enableSameAsDeviceTheme = function enableSameAsDeviceTheme() {
  const theme = syncedClientTheme.theme;
  let obj = require(3965) /* isThemeLight */;
  const tmp4 = obj.isThemeDark(theme) ? closure_6.DARK : closure_6.LIGHT;
  customTheme = customTheme.getCustomTheme();
  gradientPreset = gradientPreset.gradientPreset;
  if (gradientPreset != null) {
    const id = gradientPreset.id;
  }
  const result = importDefault(8175).setShouldSyncAppearanceSettings(false);
  let tmpResult = tmp(4097);
  const result1 = tmpResult.updateThemePreferences({ [tmp4]: theme });
  if (null != customTheme) {
    tmpResult = tmp(4097);
    obj = { customUserThemeSettings: null };
    obj[0] = customTheme;
    const result2 = tmpResult.updateSyncedClientTheme(tmp4, obj);
  } else if (null != id) {
    obj = { backgroundGradientPresetId: null };
    obj[0] = id;
    const result3 = tmp(4097).updateSyncedClientTheme(tmp4, obj);
    const tmpResult1 = tmp(4097);
  } else {
    const result4 = tmp(4097).updateSyncedClientTheme(tmp4, undefined);
    const tmpResult2 = tmp(4097);
  }
  const obj2 = importDefault(8175);
  require(4097) /* setSystemTheme */.setUseSystemTheme(constants.ON);
  const tmpResult3 = require(4097) /* setSystemTheme */;
  const result5 = require(4097) /* setSystemTheme */.setSameAsDeviceThemeEnabled(true);
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  require(4097) /* setSystemTheme */.setUseSystemTheme(constants.OFF);
  const obj = require(4097) /* setSystemTheme */;
  const result = require(4097) /* setSystemTheme */.clearSyncedClientThemes();
};
export const trackClientThemeUpdated = function trackClientThemeUpdated(arg0) {
  let analyticsLocations;
  let isPersisted;
  let isSynced;
  let themeName;
  ({ isPersisted, isSynced, themeName, analyticsLocations } = arg0);
  let obj = importDefault(698);
  obj = { feature_name: constants3.CLIENT_THEME, theme_name: themeName, is_persisted: isPersisted, is_synced: isSynced, location_stack: analyticsLocations };
  obj.track(constants2.CLIENT_THEME_UPDATED, obj);
};
export const getUserThemeIndex = function getUserThemeIndex(userPreset, c1, memo1, c3, c4) {
  let closure_0 = userPreset;
  if (null != userPreset) {
    const findIndexResult = memo1.findIndex((type) => type.type === userPreset(4069).ClientThemeType.BACKGROUND_GRADIENT_PRESET);
    const findIndexResult1 = closure_10.findIndex((id) => id.id === userPreset.id);
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
        return memo1.findIndex((type) => type.type === userPreset(4069).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
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