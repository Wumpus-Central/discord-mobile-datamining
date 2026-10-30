// === Module 17893: ActivityPrivacyShareMyActivitySetting ===

// Module 17893 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1114 */;
import _modDef2707 from "module_2707" /* 2707 */;
import UserSettings from "UserSettings" /* 4834 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2707.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2707.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;