// === Module 18281: ActivityPrivacyShareMyActivitySetting ===

// Module 18281 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1113 */;
import _modDef2832 from "module_2832" /* 2832 */;
import UserSettings from "UserSettings" /* 4965 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2832.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2832.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;