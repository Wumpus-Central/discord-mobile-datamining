// === Module 14996: SameAsDeviceThemeUtils ===

// Module 14996 (SameAsDeviceThemeUtils)
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4732 */;
import shared from "shared" /* 4735 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 8091 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4703 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import ThemeConstants from "ThemeConstants" /* 1196 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ SystemTheme: hasOwnProperty, SystemThemeState: metroRequire } = ThemeConstants);
let result = size.fileFinishedImporting("modules/user_settings/appearance/SameAsDeviceThemeUtils.tsx");

export const enableSameAsDeviceTheme = function enableSameAsDeviceTheme(customUserThemeSettings) {
  const obj = UserSettingsActionCreatorsDefault;
  const result = obj.setShouldSyncAppearanceSettings(false);
  if (null == ThemeStore.getSyncedClientTheme(hasOwnProperty.LIGHT)) {
    if (null == ThemeStore.getSyncedClientTheme(hasOwnProperty.DARK)) {
      const theme = ThemeStore.theme;
      let customThemeBaseTheme = theme;
      if (null != customUserThemeSettings) {
        const obj3 = ClientThemesUtils;
        customThemeBaseTheme = obj3.getCustomThemeBaseTheme(theme);
      }
      const obj4 = shared;
      const tmp8 = obj4.isThemeDark(customThemeBaseTheme) ? hasOwnProperty.DARK : hasOwnProperty.LIGHT;
      if (!ClientThemesBackgroundStore.isPreview) {
        const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
        let id;
        if (gradientPreset != null) {
          id = gradientPreset.id;
        }
      }
      const obj5 = {};
      obj5[tmp8] = customThemeBaseTheme;
      const tmp6Result = ThemeActionCreators;
      const result1 = tmp6Result.updateThemePreferences(obj5);
      if (null != customUserThemeSettings) {
        const obj6 = { customUserThemeSettings };
        const tmp6Result4 = ThemeActionCreators;
        const result2 = tmp6Result4.updateSyncedClientTheme(tmp8, obj6);
      } else if (null != tmp9) {
        const obj7 = { backgroundGradientPresetId: tmp9 };
        const tmp6Result5 = ThemeActionCreators;
        const result3 = tmp6Result5.updateSyncedClientTheme(tmp8, obj7);
      } else {
        const obj8 = { theme: customThemeBaseTheme };
        const tmp6Result6 = ThemeActionCreators;
        const result4 = tmp6Result6.updateSyncedClientTheme(tmp8, obj8);
      }
    }
  }
  const obj13 = ThemeActionCreators;
  const result5 = obj13.setSameAsDeviceThemeEnabled(true);
  const obj14 = ThemeActionCreators;
  obj14.setUseSystemTheme(metroRequire.ON);
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  const obj = ThemeActionCreators;
  obj.setUseSystemTheme(metroRequire.OFF);
  const obj2 = ThemeActionCreators;
  const result = obj2.setSameAsDeviceThemeEnabled(false);
};