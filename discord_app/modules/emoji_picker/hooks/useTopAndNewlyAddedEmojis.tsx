// discord_app/modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx
import EmojiStore from "../../emojis/EmojiStore.tsx";

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
  return require("useStateFromStores").useStateFromStoresObject(
    items,
    () => {
      let obj = EmojiStore;
      if (EmojiStore !== undefined) {
        if (closure_1 !== EmojiIntention.REACTION) {
          let topEmoji = obj.getTopEmoji(closure_0);
        } else {
          topEmoji = closure_4;
        }
        obj = { topEmojis: topEmoji, newlyAddedEmojis: null };
        if (closure_1 !== EmojiIntention.REACTION) {
          let newlyAddedEmoji = obj.getNewlyAddedEmoji(closure_0);
        } else {
          newlyAddedEmoji = closure_4;
        }
        obj.newlyAddedEmojis = newlyAddedEmoji;
        return obj;
      }
    },
    items1,
  );
}
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
