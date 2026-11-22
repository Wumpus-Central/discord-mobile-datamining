// === Module 19803: useEmojiName ===

// Module 19803 (useEmojiName)
import _modDef38 from "module_38" /* 38 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4859 */;
import EmojiStore from "EmojiStore" /* 6573 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/useEmojiName.tsx");

export default function useEmojiName(emojiId) {
  emojiId = emojiId.emojiId;
  const emojiName = emojiId.emojiName;
  items = [EmojiStore];
  const stateFromStores = emojiId(504).useStateFromStores(items, () => {
    let customEmojiById = null;
    if (null != emojiId) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp);
    }
    return customEmojiById;
  });
  if (null == emojiId) {
    _modDef38(null != emojiName, "emojiName must be defined if emojiId is not defined");
    let name = UnicodeEmojisDefault.convertSurrogateToName(emojiName, false);
  } else if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  return name;
};