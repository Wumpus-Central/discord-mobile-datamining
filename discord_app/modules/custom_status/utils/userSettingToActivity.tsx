// === Module 11532: userSettingToActivity ===

// Module 11532 (userSettingToActivity)
import _mod19 from "module_19" /* 19 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5087 */;
import ActivityTypes from "ActivityTypes" /* 5882 */;
import EmojiStore from "EmojiStore" /* 6916 */;
import EmojiPackStore from "EmojiPackStore" /* 5092 */;
import size from "module_2" /* 2 */;

function _activityFromSetting(emojiName, stateFromStores) {
  if (null != stateFromStores) {
    ({ id: obj2.id, name: obj2.name, animated: obj2.animated } = stateFromStores);
    let tmp = { id: null, name: null, animated: null };
    const obj3 = { id: null, name: null, animated: null };
  } else {
    tmp = null;
    if (null != emojiName.emojiName) {
      tmp = null;
      if ("" !== emojiName.emojiName) {
        const obj5 = UnicodeEmojisDefault;
        const byName = obj5.getByName(UnicodeEmojisDefault.convertSurrogateToName(emojiName.emojiName, false));
        let tmp2 = null;
        if (null != byName) {
          const obj = { id: null, name: byName.surrogates, animated: false };
          tmp2 = obj;
        }
        tmp = tmp2;
      }
    }
  }
  const NumberResult = Number(emojiName.expiresAtMs);
  value = undefined;
  if (emojiName.label != null) {
    value = iter.value;
  }
  const obj4 = { name: "Custom Status", type: ActivityTypes.ActivityTypes.CUSTOM_STATUS, state: null, timestamps: null, emoji: null, details: null, metadata: null };
  let text;
  if (emojiName.text.length > 0) {
    text = emojiName.text;
  }
  obj4.state = text;
  let tmp6;
  if (NumberResult > 0) {
    const obj9 = { end: NumberResult };
    tmp6 = obj9;
  }
  obj4.timestamps = tmp6;
  obj4.emoji = tmp;
  obj4.details = value;
  obj4.metadata = { label: value };
  return obj4;
}
const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/custom_status/utils/userSettingToActivity.tsx");

export function getActivityFromCustomStatus(setting) {
  const emojiId = setting.emojiId;
  let tmp2 = null;
  if (null != emojiId) {
    tmp2 = null;
    if ("0" !== emojiId) {
      const emoji = EmojiPackStore.getEmoji(emojiId);
      let usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(emojiId);
      if (usableCustomEmojiById == null) {
        let tmp6 = null;
        if (null != emoji) {
          tmp6 = null;
          if (EmojiPackStore.isPackEmojiUsable(emoji)) {
            tmp6 = emoji;
          }
        }
        usableCustomEmojiById = tmp6;
      }
      tmp2 = usableCustomEmojiById;
    }
  }
  return _activityFromSetting(setting, tmp2);
}
export function useCustomStatusActivity() {
  const CustomStatusSetting = setting(stateFromStores[5]).CustomStatusSetting;
  setting = CustomStatusSetting.useSetting();
  let emojiId;
  if (setting != null) {
    emojiId = setting.emojiId;
  }
  items = [EmojiStore, EmojiPackStore];
  const items1 = [emojiId];
  stateFromStores = setting(stateFromStores[6]).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != emojiId) {
      tmp2 = null;
      if ("0" !== emojiId) {
        const emoji = EmojiPackStore.getEmoji(emojiId);
        let usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(emojiId);
        if (usableCustomEmojiById == null) {
          let tmp6 = null;
          if (null != emoji) {
            tmp6 = null;
            if (EmojiPackStore.isPackEmojiUsable(emoji)) {
              tmp6 = emoji;
            }
          }
          usableCustomEmojiById = tmp6;
        }
        tmp2 = usableCustomEmojiById;
      }
    }
    return tmp2;
  }, items1);
  const items2 = [setting, stateFromStores];
  return useMemo(() => {
    let tmp2 = null;
    if (null != setting) {
      tmp2 = _activityFromSetting(tmp, stateFromStores);
    }
    return tmp2;
  }, items2);
}