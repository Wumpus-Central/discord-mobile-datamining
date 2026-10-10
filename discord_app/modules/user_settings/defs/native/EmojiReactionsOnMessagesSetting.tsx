// === Module 15742: EmojiReactionsOnMessagesSetting ===

// Module 15742 (EmojiReactionsOnMessagesSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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