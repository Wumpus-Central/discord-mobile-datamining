// === Module 16383: SameAsDeviceThemeUtils ===

// Module 16383 (SameAsDeviceThemeUtils)
import ClientThemesUtils from "ClientThemesUtils" /* 1254 */;
import shared from "shared" /* 4978 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4998 */;
import ThemeActionCreators from "ThemeActionCreators" /* 5036 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5868 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4995 */;
import ThemeStore from "ThemeStore" /* 1207 */;

require = fn;
const ThemeConstants = fn(1210);
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
      const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
      if (gradientPreset != null) {
        const id = gradientPreset.id;
      }
      if (ClientThemesBackgroundStore.isPreview) {
        HexagonCampaignUtils;
      }
      const obj5 = {};
      obj5[tmp8] = customThemeBaseTheme;
      const result1 = ThemeActionCreators.updateThemePreferences(obj5);
      if (null != customUserThemeSettings) {
        const obj6 = { customUserThemeSettings };
        const result2 = ThemeActionCreators.updateSyncedClientTheme(tmp8, obj6);
        const tmp6Result6 = ThemeActionCreators;
      } else if (null != tmp10) {
        const obj7 = { backgroundGradientPresetId: tmp10 };
        const result3 = ThemeActionCreators.updateSyncedClientTheme(tmp8, obj7);
        const tmp6Result7 = ThemeActionCreators;
      } else {
        const obj8 = { theme: customThemeBaseTheme };
        const result4 = ThemeActionCreators.updateSyncedClientTheme(tmp8, obj8);
        const tmp6Result8 = ThemeActionCreators;
      }
      const tmp6Result5 = ThemeActionCreators;
    }
  }
  const result5 = ThemeActionCreators.setSameAsDeviceThemeEnabled(true);
  ThemeActionCreators.setUseSystemTheme(constants2.ON);
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  ThemeActionCreators.setUseSystemTheme(constants2.OFF);
  const result = ThemeActionCreators.setSameAsDeviceThemeEnabled(false);
};