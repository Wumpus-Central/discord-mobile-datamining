// === Module 15853: ActivityPrivacyShareMyActivitySetting ===

// Module 15853 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import _modDef2687 from "module_2687" /* 2687 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2687.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2687.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;