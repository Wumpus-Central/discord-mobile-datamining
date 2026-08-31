// === Module 9068: useTopAndNewlyAddedEmojis ===

// Module 9068 (useTopAndNewlyAddedEmojis)
import closure_2 from "getEmojiToGroupId" /* 5369 */;
import { EmojiIntention } from "set" /* 1925 */;

const require = arg1;
let closure_4 = [];
const result = require("set").fileFinishedImporting("modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx");

export default function useTopAndNewlyAddedEmojis(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_2];
  const items1 = [arg0, arg1];
  return _require(647).useStateFromStoresObject(items, () => {
    let obj = closure_1_2;
    if (closure_1_2 !== undefined) {
      if (tmp2 !== closure_1_3.REACTION) {
        let topEmoji = obj.getTopEmoji(tmp);
      } else {
        topEmoji = closure_1_4;
      }
      obj = { topEmojis: null, newlyAddedEmojis: null };
      obj[0] = topEmoji;
      if (tmp2 !== closure_1_3.REACTION) {
        let newlyAddedEmoji = obj.getNewlyAddedEmoji(tmp);
      } else {
        newlyAddedEmoji = closure_1_4;
      }
      obj[1] = newlyAddedEmoji;
      return obj;
    }
  }, items1);
};
export const getTopAndNewlyAddedEmojis = function getTopAndNewlyAddedEmojis(emojiStoreInstance) {
  emojiStoreInstance = emojiStoreInstance.emojiStoreInstance;
  if (emojiStoreInstance === undefined) {
    emojiStoreInstance = closure_2;
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
  obj[1] = newlyAddedEmoji;
  return obj;
};