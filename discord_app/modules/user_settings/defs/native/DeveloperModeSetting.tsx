// === Module 15800: DeveloperModeSetting ===

// Module 15800 (DeveloperModeSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2019 */;
import SettingsConstants from "SettingsConstants" /* 8232 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.ObIb1Q);
  },
  parent: SettingsConstants.MobileUserSettings.ADVANCED,
  useValue: UserSettings.DeveloperMode.useSetting,
  onValueChange: UserSettings.DeveloperMode.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DeveloperModeSetting.tsx");

export default toggle;