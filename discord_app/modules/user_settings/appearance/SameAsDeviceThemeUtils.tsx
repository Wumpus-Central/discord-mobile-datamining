// discord_app/modules/user_settings/appearance/SameAsDeviceThemeUtils.tsx
import ClientThemesUtils from "../../client_themes/ClientThemesUtils.tsx";
import ThemeActionCreators from "../ThemeActionCreators.tsx";
import shared from "../../../design/shared.tsx";
import UserSettingsActionCreatorsDefault from "../../../actions/UserSettingsActionCreators.tsx";
import ClientThemesBackgroundStore from "../../client_themes/ClientThemesBackgroundStore.tsx";
import ThemeStore from "../ThemeStore.tsx";

require = fn;
const ThemeConstants = fn(1184);
({ SystemTheme: hasOwnProperty, SystemThemeState: metroRequire } = ThemeConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/SameAsDeviceThemeUtils.tsx");

export const enableSameAsDeviceTheme = function enableSameAsDeviceTheme(customUserThemeSettings) {
  const result = UserSettingsActionCreatorsDefault.setShouldSyncAppearanceSettings(false);
  if (null == ThemeStore.getSyncedClientTheme(constants.LIGHT)) {
    if (null == ThemeStore.getSyncedClientTheme(constants.DARK)) {
      const theme = ThemeStore.theme;
      let customThemeBaseTheme = theme;
      if (null != customUserThemeSettings) {
        customThemeBaseTheme = ClientThemesUtils.getCustomThemeBaseTheme(theme);
      }
      const tmp8 = shared.isThemeDark(customThemeBaseTheme) ? constants.DARK : constants.LIGHT;
      if (!ClientThemesBackgroundStore.isPreview) {
        const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
        let id;
        if (gradientPreset != null) {
          id = gradientPreset.id;
        }
      }
      const obj5 = {};
      obj5[tmp8] = customThemeBaseTheme;
      const result1 = ThemeActionCreators.updateThemePreferences(obj5);
      if (null != customUserThemeSettings) {
        const obj6 = { customUserThemeSettings };
        const result2 = ThemeActionCreators.updateSyncedClientTheme(tmp8, obj6);
        const tmp6Result4 = ThemeActionCreators;
      } else if (null != tmp9) {
        const obj7 = { backgroundGradientPresetId: tmp9 };
        const result3 = ThemeActionCreators.updateSyncedClientTheme(tmp8, obj7);
        const tmp6Result5 = ThemeActionCreators;
      } else {
        const obj8 = { theme: customThemeBaseTheme };
        const result4 = ThemeActionCreators.updateSyncedClientTheme(tmp8, obj8);
        const tmp6Result6 = ThemeActionCreators;
      }
      const tmp6Result = ThemeActionCreators;
    }
  }
  const result5 = ThemeActionCreators.setSameAsDeviceThemeEnabled(true);
  ThemeActionCreators.setUseSystemTheme(constants2.ON);
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  ThemeActionCreators.setUseSystemTheme(constants2.OFF);
  const result = ThemeActionCreators.setSameAsDeviceThemeEnabled(false);
};
