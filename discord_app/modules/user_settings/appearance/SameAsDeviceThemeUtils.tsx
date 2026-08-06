// discord_app/modules/user_settings/appearance/SameAsDeviceThemeUtils.tsx
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import handleThemeChange from "handleThemeChange";
import SystemThemeState from "SystemThemeState";
import { saveGuildFolders } from "../../../actions/UserSettingsActionCreators.tsx";
import { AccessibilityAnnouncer } from "../../../design/shared.tsx";
import { setSystemTheme } from "../ThemeActionCreators.tsx";

let c5;
let closure_6;
const require = arg1;
({ SystemTheme: c5, SystemThemeState: closure_6 } = SystemThemeState);
let result = require("SystemThemeState").fileFinishedImporting("modules/user_settings/appearance/SameAsDeviceThemeUtils.tsx");

export const enableSameAsDeviceTheme = function enableSameAsDeviceTheme(arg0) {
  let obj = saveGuildFolders;
  const result = obj.setShouldSyncAppearanceSettings(false);
  let obj1 = syncedClientTheme;
  if (null == syncedClientTheme.getSyncedClientTheme(constants.LIGHT)) {
    if (null == obj1.getSyncedClientTheme(tmp3.DARK)) {
      const theme = obj1.theme;
      const tmp4 = AccessibilityAnnouncer.isThemeDark(theme) ? tmp3.DARK : tmp3.LIGHT;
      if (!isSyncedModeThemesEnabled.isPreview) {
        const gradientPreset = isSyncedModeThemesEnabled.gradientPreset;
        let id;
        if (gradientPreset != null) {
          id = gradientPreset.id;
        }
      }
      let tmp14Result = tmp14(4126);
      obj = {};
      obj[tmp4] = theme;
      const result1 = tmp14Result.updateThemePreferences(obj);
      if (null != arg0) {
        tmp14Result = tmp14(4126);
        obj = { customUserThemeSettings: null };
        obj[0] = arg0;
        const result2 = tmp14Result.updateSyncedClientTheme(tmp4, obj);
      } else if (null != tmp5) {
        obj1 = { backgroundGradientPresetId: null };
        obj1[0] = tmp5;
        const result3 = tmp14(4126).updateSyncedClientTheme(tmp4, obj1);
        const tmp14Result1 = tmp14(4126);
      } else {
        const obj2 = { theme: null };
        obj2[0] = theme;
        const result4 = tmp14(4126).updateSyncedClientTheme(tmp4, obj2);
        const tmp14Result2 = tmp14(4126);
      }
      const obj13 = AccessibilityAnnouncer;
    }
  }
  const result5 = setSystemTheme.setSameAsDeviceThemeEnabled(true);
  const obj11 = setSystemTheme;
  setSystemTheme.setUseSystemTheme(constants2.ON);
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  setSystemTheme.setUseSystemTheme(constants2.OFF);
  const obj = setSystemTheme;
  const result = setSystemTheme.setSameAsDeviceThemeEnabled(false);
};