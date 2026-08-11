// discord_app/modules/user_settings/appearance/SameAsDeviceThemeUtils.tsx
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import handleThemeChange from "handleThemeChange";
import SystemThemeState from "SystemThemeState";
import { saveGuildFolders } from "../../../actions/UserSettingsActionCreators.tsx";
import { AccessibilityAnnouncer } from "../../../design/shared.tsx";
import { getThemeForColor } from "../../client_themes/ClientThemesUtils.tsx";
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
      let customThemeBaseTheme = theme;
      if (null != arg0) {
        let obj2 = getThemeForColor;
        customThemeBaseTheme = obj2.getCustomThemeBaseTheme(theme);
      }
      const tmp8 = AccessibilityAnnouncer.isThemeDark(customThemeBaseTheme) ? tmp3.DARK : tmp3.LIGHT;
      if (!isSyncedModeThemesEnabled.isPreview) {
        const gradientPreset = isSyncedModeThemesEnabled.gradientPreset;
        let id;
        if (gradientPreset != null) {
          id = gradientPreset.id;
        }
      }
      let tmp6Result = tmp6(4151);
      obj = {};
      obj[tmp8] = customThemeBaseTheme;
      const result1 = tmp6Result.updateThemePreferences(obj);
      if (null != arg0) {
        tmp6Result = tmp6(4151);
        obj = { customUserThemeSettings: null };
        obj[0] = arg0;
        const result2 = tmp6Result.updateSyncedClientTheme(tmp8, obj);
      } else if (null != tmp9) {
        obj1 = { backgroundGradientPresetId: null };
        obj1[0] = tmp9;
        const result3 = tmp6(4151).updateSyncedClientTheme(tmp8, obj1);
        const tmp6Result1 = tmp6(4151);
      } else {
        obj2 = { theme: null };
        obj2[0] = customThemeBaseTheme;
        const result4 = tmp6(4151).updateSyncedClientTheme(tmp8, obj2);
        const tmp6Result2 = tmp6(4151);
      }
      const obj4 = AccessibilityAnnouncer;
    }
  }
  const result5 = setSystemTheme.setSameAsDeviceThemeEnabled(true);
  const obj13 = setSystemTheme;
  setSystemTheme.setUseSystemTheme(constants2.ON);
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  setSystemTheme.setUseSystemTheme(constants2.OFF);
  const obj = setSystemTheme;
  const result = setSystemTheme.setSameAsDeviceThemeEnabled(false);
};