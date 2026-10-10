// === Module 16295: ActivityPrivacyShareMyActivitySetting ===

// Module 16295 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import _modDef2734 from "module_2734" /* 2734 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2734.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2734.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;