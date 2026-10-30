// === Module 17340: AnimateEmojiSetting ===

// Module 17340 (AnimateEmojiSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 4834 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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