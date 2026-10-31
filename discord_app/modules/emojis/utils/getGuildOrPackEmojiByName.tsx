// === Module 7827: getGuildOrPackEmojiByName ===

// Module 7827 (getGuildOrPackEmojiByName)
import EmojiTypes from "EmojiTypes" /* 4963 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/utils/getGuildOrPackEmojiByName.tsx");

export default function getGuildOrPackEmojiByName(getCustomEmoji, arg1) {
  let obj = arg2;
  if (arg2 === undefined) {
    let customEmoji;
    if (getCustomEmoji != null) {
      customEmoji = getCustomEmoji.getCustomEmoji();
    }
    obj = customEmoji;
  }
  value = undefined;
  if (obj != null) {
    value = obj.get(arg1);
  }
  if (null != value) {
    return value;
  } else {
    let byName;
    if (getCustomEmoji != null) {
      byName = getCustomEmoji.getByName(arg1);
    }
    let type;
    if (byName != null) {
      type = byName.type;
    }
    let tmp8;
    if (type === EmojiTypes.EmojiTypes.PACK) {
      tmp8 = byName;
    }
    return tmp8;
  }
};