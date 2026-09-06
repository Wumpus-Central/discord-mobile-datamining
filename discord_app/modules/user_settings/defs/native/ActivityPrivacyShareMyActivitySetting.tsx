// === Module 15905: ActivityPrivacyShareMyActivitySetting ===

// Module 15905 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import _modDef2562 from "module_2562" /* 2562 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2562.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2562.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;