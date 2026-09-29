// === Module 15142: AnimateEmojiSetting ===

// Module 15142 (AnimateEmojiSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import SettingsConstants from "SettingsConstants" /* 7582 */;
import SettingBuilders from "SettingBuilders" /* 11175 */;
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