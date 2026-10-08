// === Module 16112: ActivityPrivacyShareMyActivitySetting ===

// Module 16112 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import _modDef2731 from "module_2731" /* 2731 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2731.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2731.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;