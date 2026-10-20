// === Module 17062: ActivityPrivacyShareMyActivitySetting ===

// Module 17062 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1128 */;
import _modDef2694 from "module_2694" /* 2694 */;
import UserSettings from "UserSettings" /* 4776 */;
import SettingsConstants from "SettingsConstants" /* 8280 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2694.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2694.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;