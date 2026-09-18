// === Module 16150: ActivityPrivacyShareMyActivitySetting ===

// Module 16150 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 1936 */;
import _modDef2646 from "module_2646" /* 2646 */;
import SettingsConstants from "SettingsConstants" /* 8194 */;
import SettingBuilders from "SettingBuilders" /* 11714 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2646.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2646.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;