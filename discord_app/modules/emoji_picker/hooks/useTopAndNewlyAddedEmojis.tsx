// === Module 9514: useTopAndNewlyAddedEmojis ===

// Module 9514 (useTopAndNewlyAddedEmojis)
import getEmojiToGroupId from "getEmojiToGroupId";
import { EmojiIntention } from "set";

const require = arg1;
let closure_4 = [];
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx");

export default function useTopAndNewlyAddedEmojis(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [getEmojiToGroupId];
  const items1 = [arg0, arg1];
  return _require(647).useStateFromStoresObject(items, () => {
    let obj = outer1_2;
    if (outer1_2 !== undefined) {
      if (tmp2 !== outer1_3.REACTION) {
        let topEmoji = obj.getTopEmoji(tmp);
      } else {
        topEmoji = outer1_4;
      }
      obj = { topEmojis: null, newlyAddedEmojis: null };
      obj[0] = topEmoji;
      if (tmp2 !== outer1_3.REACTION) {
        let newlyAddedEmoji = obj.getNewlyAddedEmoji(tmp);
      } else {
        newlyAddedEmoji = outer1_4;
      }
      obj[1] = newlyAddedEmoji;
      return obj;
    }
  }, items1);
};
export const getTopAndNewlyAddedEmojis = function getTopAndNewlyAddedEmojis(emojiStoreInstance) {
  let guildId;
  let pickerIntention;
  emojiStoreInstance = emojiStoreInstance.emojiStoreInstance;
  if (emojiStoreInstance === undefined) {
    emojiStoreInstance = getEmojiToGroupId;
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