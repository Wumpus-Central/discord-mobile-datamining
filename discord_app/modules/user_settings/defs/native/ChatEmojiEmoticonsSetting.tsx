// === Module 17772: ChatEmojiEmoticonsSetting ===

// Module 17772 (ChatEmojiEmoticonsSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 4965 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["79qal8"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.GejoQK, {
      emojiHook(arg0) {
        return arg0;
      }
    });
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useValue: UserSettings.ConvertEmoticons.useSetting,
  onValueChange: UserSettings.ConvertEmoticons.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChatEmojiEmoticonsSetting.tsx");

export default toggle;