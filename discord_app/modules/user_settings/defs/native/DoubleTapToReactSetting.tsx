// === Module 15717: toggle ===

// Module 15717 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import createToggle from "createToggle" /* 11288 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["4qhAjx"]);
  },
  parent: MobileUserSettings.MobileUserSettings.CHAT,
  useValue() {
    const DoubleTapReactionEmoji = explicitContentFromProto.DoubleTapReactionEmoji;
    return !DoubleTapReactionEmoji.useSetting().disableDoubleTap;
  },
  onValueChange(disableDoubleTap) {
    const DoubleTapReactionEmoji = explicitContentFromProto.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    const DoubleTapReactionEmoji2 = explicitContentFromProto.DoubleTapReactionEmoji;
    const obj = { disableDoubleTap: !disableDoubleTap, emojiId: null, emojiName: null, animated: null };
    let emojiId;
    if (setting != null) {
      emojiId = setting.emojiId;
    }
    obj[1] = emojiId;
    let emojiName;
    if (setting != null) {
      emojiName = setting.emojiName;
    }
    obj[2] = emojiName;
    let animated;
    if (setting != null) {
      animated = setting.animated;
    }
    obj[3] = animated;
    DoubleTapReactionEmoji2.updateSetting(obj);
  }
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["4qhAjx"]);
  },
  parent: MobileUserSettings.MobileUserSettings.CHAT,
  useValue() {
    const DoubleTapReactionEmoji = explicitContentFromProto.DoubleTapReactionEmoji;
    return !DoubleTapReactionEmoji.useSetting().disableDoubleTap;
  },
  onValueChange(disableDoubleTap) {
    const DoubleTapReactionEmoji = explicitContentFromProto.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    const DoubleTapReactionEmoji2 = explicitContentFromProto.DoubleTapReactionEmoji;
    const obj = { disableDoubleTap: !disableDoubleTap, emojiId: null, emojiName: null, animated: null };
    let emojiId;
    if (setting != null) {
      emojiId = setting.emojiId;
    }
    obj[1] = emojiId;
    let emojiName;
    if (setting != null) {
      emojiName = setting.emojiName;
    }
    obj[2] = emojiName;
    let animated;
    if (setting != null) {
      animated = setting.animated;
    }
    obj[3] = animated;
    DoubleTapReactionEmoji2.updateSetting(obj);
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DoubleTapToReactSetting.tsx");

export default toggle;