// === Module 17822: ActivityPrivacyShareMyActivitySetting ===

// Module 17822 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1125 */;
import _modDef2706 from "module_2706" /* 2706 */;
import UserSettings from "UserSettings" /* 4833 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2706.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2706.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;