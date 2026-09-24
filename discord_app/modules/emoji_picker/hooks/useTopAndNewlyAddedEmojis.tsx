// === Module 10629: useTopAndNewlyAddedEmojis ===

// Module 10629 (useTopAndNewlyAddedEmojis)
import EmojiStore from "EmojiStore" /* 5764 */;

const require = globalThis.__r;

const require = fn;
const EmojiIntention = fn(1375).EmojiIntention;
let closure_4 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx");

export default function useTopAndNewlyAddedEmojis(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [EmojiStore];
  const items1 = [arg0, arg1];
  return require("useStateFromStores").useStateFromStoresObject(items, () => {
    if (EmojiStore !== undefined) {
      if (closure_1 !== EmojiIntention.REACTION) {
        let topEmoji = EmojiStore.getTopEmoji(closure_0);
      } else {
        topEmoji = closure_4;
      }
      const obj2 = { topEmojis: topEmoji, newlyAddedEmojis: null };
      if (closure_1 !== EmojiIntention.REACTION) {
        let newlyAddedEmoji = EmojiStore.getNewlyAddedEmoji(closure_0);
      } else {
        newlyAddedEmoji = closure_4;
      }
      obj2.newlyAddedEmojis = newlyAddedEmoji;
      return obj2;
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