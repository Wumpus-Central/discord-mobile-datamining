// === Module 18476: ActivityPrivacyShareMyActivitySetting ===

// Module 18476 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1113 */;
import _modDef2853 from "module_2853" /* 2853 */;
import UserSettings from "UserSettings" /* 5068 */;
import SettingsConstants from "SettingsConstants" /* 9135 */;
import SettingBuilders from "SettingBuilders" /* 12311 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2853.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2853.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;