import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["4qhAjx"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue() {
    const DoubleTapReactionEmoji = require(3866) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    return !DoubleTapReactionEmoji.useSetting().disableDoubleTap;
  },
  onValueChange(disableDoubleTap) {
    const DoubleTapReactionEmoji = require(3866) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    const DoubleTapReactionEmoji2 = require(3866) /* explicitContentFromProto */.DoubleTapReactionEmoji;
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
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["4qhAjx"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue() {
    const DoubleTapReactionEmoji = require(3866) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    return !DoubleTapReactionEmoji.useSetting().disableDoubleTap;
  },
  onValueChange(disableDoubleTap) {
    const DoubleTapReactionEmoji = require(3866) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    const DoubleTapReactionEmoji2 = require(3866) /* explicitContentFromProto */.DoubleTapReactionEmoji;
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
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DoubleTapToReactSetting.tsx");

export default toggle;