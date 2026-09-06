// === Module 15179: SameAsDeviceThemeUtils ===

// Module 15179 (SameAsDeviceThemeUtils)
import ClientThemesUtils from "ClientThemesUtils" /* 1229 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4408 */;
import shared from "shared" /* 4411 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9358 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4379 */;
import ThemeStore from "ThemeStore" /* 1183 */;

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
    if (null == obj1.getSyncedClientTheme(tmp3.DARK)) {
      const theme = obj1.theme;
      let customThemeBaseTheme = theme;
      if (null != customUserThemeSettings) {
        let obj2 = ClientThemesUtils;
        customThemeBaseTheme = obj2.getCustomThemeBaseTheme(theme);
      }
      const tmp8 = shared.isThemeDark(customThemeBaseTheme) ? tmp3.DARK : tmp3.LIGHT;
      if (!ClientThemesBackgroundStore.isPreview) {
        const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
        let id;
        if (gradientPreset != null) {
          id = gradientPreset.id;
        }
      }
      let tmp6Result = tmp6(4408);
      obj = {};
      obj[tmp8] = customThemeBaseTheme;
      const result1 = tmp6Result.updateThemePreferences(obj);
      if (null != customUserThemeSettings) {
        tmp6Result = tmp6(4408);
        obj = { customUserThemeSettings };
        const result2 = tmp6Result.updateSyncedClientTheme(tmp8, obj);
      } else if (null != tmp9) {
        obj1 = { backgroundGradientPresetId: tmp9 };
        const result3 = tmp6(4408).updateSyncedClientTheme(tmp8, obj1);
        const tmp6Result1 = tmp6(4408);
      } else {
        obj2 = { theme: customThemeBaseTheme };
        const result4 = tmp6(4408).updateSyncedClientTheme(tmp8, obj2);
        const tmp6Result2 = tmp6(4408);
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