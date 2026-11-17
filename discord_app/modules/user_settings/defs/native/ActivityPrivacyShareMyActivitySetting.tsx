// === Module 18644: ActivityPrivacyShareMyActivitySetting ===

// Module 18644 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1113 */;
import _modDef2871 from "module_2871" /* 2871 */;
import UserSettings from "UserSettings" /* 5135 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2871.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2871.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;