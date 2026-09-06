// === Module 15889: DoubleTapToReactSetting ===

// Module 15889 (DoubleTapToReactSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["4qhAjx"]);
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useValue() {
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    return !DoubleTapReactionEmoji.useSetting().disableDoubleTap;
  },
  onValueChange(disableDoubleTap) {
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    const DoubleTapReactionEmoji2 = UserSettings.DoubleTapReactionEmoji;
    const obj = { disableDoubleTap: !disableDoubleTap, emojiId: null, emojiName: null, animated: null };
    let emojiId;
    if (setting != null) {
      emojiId = setting.emojiId;
    }
    obj.emojiId = emojiId;
    let emojiName;
    if (setting != null) {
      emojiName = setting.emojiName;
    }
    obj.emojiName = emojiName;
    let animated;
    if (setting != null) {
      animated = setting.animated;
    }
    obj.animated = animated;
    DoubleTapReactionEmoji2.updateSetting(obj);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DoubleTapToReactSetting.tsx");

export default toggle;