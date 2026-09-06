// discord_app/modules/user_settings/appearance/SameAsDeviceThemeUtils.tsx
import ClientThemesUtils from "../../client_themes/ClientThemesUtils.tsx";
import ThemeActionCreators from "../ThemeActionCreators.tsx";
import shared from "../../../design/shared.tsx";
import UserSettingsActionCreatorsDefault from "../../../actions/UserSettingsActionCreators.tsx";
import ClientThemesBackgroundStore from "../../client_themes/ClientThemesBackgroundStore.tsx";
import ThemeStore from "../ThemeStore.tsx";

require = fn;
const ThemeConstants = fn(1186);
({ SystemTheme: hasOwnProperty, SystemThemeState: metroRequire } = ThemeConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/SameAsDeviceThemeUtils.tsx");

export const enableSameAsDeviceTheme = function enableSameAsDeviceTheme(customUserThemeSettings) {
  let obj = UserSettingsActionCreatorsDefault;
  const result = obj.setShouldSyncAppearanceSettings(false);
  let obj1 = ThemeStore;
  if (null == ThemeStore.getSyncedClientTheme(constants.LIGHT)) {
    if (null == obj1.getSyncedClientTheme(constants.DARK)) {
      const theme = obj1.theme;
      let customThemeBaseTheme = theme;
      if (null != customUserThemeSettings) {
        let obj2 = ClientThemesUtils;
        customThemeBaseTheme = obj2.getCustomThemeBaseTheme(theme);
      }
      const tmp8 = shared.isThemeDark(customThemeBaseTheme) ? constants.DARK : constants.LIGHT;
      if (!ClientThemesBackgroundStore.isPreview) {
        const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
        let id;
        if (gradientPreset != null) {
          id = gradientPreset.id;
        }
      }
      let tmp6Result = ThemeActionCreators;
      obj = {};
      obj[tmp8] = customThemeBaseTheme;
      const result1 = tmp6Result.updateThemePreferences(obj);
      if (null != customUserThemeSettings) {
        tmp6Result = ThemeActionCreators;
        obj = { customUserThemeSettings };
        const result2 = tmp6Result.updateSyncedClientTheme(tmp8, obj);
      } else if (null != tmp9) {
        obj1 = { backgroundGradientPresetId: tmp9 };
        const result3 = ThemeActionCreators.updateSyncedClientTheme(tmp8, obj1);
        const tmp6Result1 = ThemeActionCreators;
      } else {
        obj2 = { theme: customThemeBaseTheme };
        const result4 = ThemeActionCreators.updateSyncedClientTheme(tmp8, obj2);
        const tmp6Result2 = ThemeActionCreators;
      }
    }
  }
  const result5 = ThemeActionCreators.setSameAsDeviceThemeEnabled(true);
  ThemeActionCreators.setUseSystemTheme(constants2.ON);
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  ThemeActionCreators.setUseSystemTheme(constants2.OFF);
  const result = ThemeActionCreators.setSameAsDeviceThemeEnabled(false);
};
