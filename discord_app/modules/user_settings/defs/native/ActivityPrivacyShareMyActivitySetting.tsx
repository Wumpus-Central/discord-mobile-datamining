// === Module 17609: ActivityPrivacyShareMyActivitySetting ===

// Module 17609 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1112 */;
import _modDef3047 from "module_3047" /* 3047 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3047.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3047.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;