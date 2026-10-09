// === Module 9405: useTopAndNewlyAddedEmojis ===

// Module 9405 (useTopAndNewlyAddedEmojis)
import EmojiStore from "EmojiStore" /* 5994 */;

const require = globalThis.__r;

const require = fn;
const EmojiIntention = fn(1393).EmojiIntention;
let closure_4 = [];
const ReactCompilerGating = fn(558);
function getTopAndNewlyAddedEmojis(emojiStoreInstance) {
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useTopAndNewlyAddedEmojis(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    return tmp(573).useStateFromStoresObject(first, tmp6, tmp7);
  }
  const fn = function l() {
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
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useTopAndNewlyAddedEmojis(arg0, arg1) {
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
});
export { getTopAndNewlyAddedEmojis };