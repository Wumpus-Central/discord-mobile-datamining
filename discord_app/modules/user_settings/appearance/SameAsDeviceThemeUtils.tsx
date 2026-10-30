// === Module 16942: SameAsDeviceThemeUtils ===

// Module 16942 (SameAsDeviceThemeUtils)
import ClientThemesUtils from "ClientThemesUtils" /* 1240 */;
import shared from "shared" /* 5016 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5036 */;
import ThemeActionCreators from "ThemeActionCreators" /* 5074 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5913 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5033 */;
import ThemeStore from "ThemeStore" /* 1193 */;

require = fn;
const ThemeConstants = fn(1196);
({ SystemTheme: hasOwnProperty, SystemThemeState: metroRequire } = ThemeConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/SameAsDeviceThemeUtils.tsx");

export function enableSameAsDeviceTheme(customUserThemeSettings) {
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
}
export function disableSameAsDeviceTheme() {
  ThemeActionCreators.setUseSystemTheme(constants2.OFF);
  const result = ThemeActionCreators.setSameAsDeviceThemeEnabled(false);
}