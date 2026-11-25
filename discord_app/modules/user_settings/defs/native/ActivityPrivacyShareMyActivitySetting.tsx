// === Module 17552: ActivityPrivacyShareMyActivitySetting ===

// Module 17552 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1112 */;
import _modDef3046 from "module_3046" /* 3046 */;
import UserSettings from "UserSettings" /* 4837 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3046.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3046.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;