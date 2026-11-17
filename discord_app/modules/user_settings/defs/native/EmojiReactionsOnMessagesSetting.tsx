// === Module 18133: EmojiReactionsOnMessagesSetting ===

// Module 18133 (EmojiReactionsOnMessagesSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 5135 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["zge/fP"]);
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useValue: UserSettings.RenderReactions.useSetting,
  onValueChange: UserSettings.RenderReactions.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EmojiReactionsOnMessagesSetting.tsx");

export default toggle;