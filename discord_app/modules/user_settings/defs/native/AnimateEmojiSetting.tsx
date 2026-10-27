// === Module 16818: AnimateEmojiSetting ===

// Module 16818 (AnimateEmojiSetting)
import util from "util" /* 1125 */;
import UserSettings from "UserSettings" /* 4800 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.iIaOlc);
  },
  parent: SettingsConstants.MobileUserSettings.ACCESSIBILITY,
  useValue: UserSettings.AnimateEmoji.useSetting,
  onValueChange: UserSettings.AnimateEmoji.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AnimateEmojiSetting.tsx");

export default toggle;