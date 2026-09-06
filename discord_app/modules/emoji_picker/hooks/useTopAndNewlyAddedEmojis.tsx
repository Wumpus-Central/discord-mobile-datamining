// === Module 10281: useTopAndNewlyAddedEmojis ===

// Module 10281 (useTopAndNewlyAddedEmojis)
import EmojiStore from "EmojiStore" /* 5459 */;

const require = fn;
const EmojiIntention = fn(1374).EmojiIntention;
let closure_4 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx");

export default function useTopAndNewlyAddedEmojis(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [EmojiStore];
  const items1 = [arg0, arg1];
  return require("useStateFromStores").useStateFromStoresObject(items, () => {
    let obj = EmojiStore;
    if (EmojiStore !== undefined) {
      if (tmp2 !== EmojiIntention.REACTION) {
        let topEmoji = obj.getTopEmoji(tmp);
      } else {
        topEmoji = closure_4;
      }
      obj = { topEmojis: topEmoji, newlyAddedEmojis: null };
      if (tmp2 !== EmojiIntention.REACTION) {
        let newlyAddedEmoji = obj.getNewlyAddedEmoji(tmp);
      } else {
        newlyAddedEmoji = closure_4;
      }
      obj.newlyAddedEmojis = newlyAddedEmoji;
      return obj;
    }
  }, items1);
};
export const getTopAndNewlyAddedEmojis = function getTopAndNewlyAddedEmojis(emojiStoreInstance) {
  emojiStoreInstance = emojiStoreInstance.emojiStoreInstance;
  if (emojiStoreInstance === undefined) {
    emojiStoreInstance = EmojiStore;
  }
  ({ guildId, pickerIntention } = emojiStoreInstance);
  if (pickerIntention !== EmojiIntention.REACTION) {
    let topEmoji = emojiStoreInstance.getTopEmoji(guildId);
  } else {
    topEmoji = closure_4;
  }
  const obj = { topEmojis: topEmoji, newlyAddedEmojis: null };
  if (pickerIntention !== EmojiIntention.REACTION) {
    let newlyAddedEmoji = emojiStoreInstance.getNewlyAddedEmoji(guildId);
  } else {
    newlyAddedEmoji = closure_4;
  }
  obj.newlyAddedEmojis = newlyAddedEmoji;
  return obj;
};