// === Module 9887: useTopAndNewlyAddedEmojis ===

// Module 9887 (useTopAndNewlyAddedEmojis)
import EmojiConstants from "EmojiConstants" /* 1380 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const EmojiIntention = EmojiConstants.EmojiIntention;
let closure_4 = [];
function getTopAndNewlyAddedEmojis(emojiStoreInstance) {
  let guildId;
  let newlyAddedEmoji;
  let pickerIntention;
  let topEmoji;
  emojiStoreInstance = emojiStoreInstance.emojiStoreInstance;
  if (emojiStoreInstance === undefined) {
    emojiStoreInstance = EmojiStore;
  }
  ({ guildId, pickerIntention } = emojiStoreInstance);
  if (pickerIntention !== EmojiIntention.REACTION) {
    topEmoji = emojiStoreInstance.getTopEmoji(guildId);
  } else {
    topEmoji = closure_4;
  }
  const obj = { topEmojis: topEmoji, newlyAddedEmojis: newlyAddedEmoji };
  if (pickerIntention !== EmojiIntention.REACTION) {
    newlyAddedEmoji = emojiStoreInstance.getNewlyAddedEmoji(guildId);
  } else {
    newlyAddedEmoji = closure_4;
  }
  return obj;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp6;
    let tmp7;
    if (cResult[2] === arg1) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(573);
    return tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
  }
  const fn = function c() {
    let newlyAddedEmoji;
    if (EmojiStore !== undefined) {
      let topEmoji;
      if (closure_1 !== EmojiIntention.REACTION) {
        topEmoji = EmojiStore.getTopEmoji(closure_0);
      } else {
        topEmoji = closure_4;
      }
      const obj2 = { topEmojis: topEmoji, newlyAddedEmojis: newlyAddedEmoji };
      if (closure_1 !== EmojiIntention.REACTION) {
        newlyAddedEmoji = EmojiStore.getNewlyAddedEmoji(closure_0);
      } else {
        newlyAddedEmoji = closure_4;
      }
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
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [EmojiStore];
  const items1 = [arg0, arg1];
  const obj = require("useStateFromStores");
  return obj.useStateFromStoresObject(items, () => {
    let newlyAddedEmoji;
    if (EmojiStore !== undefined) {
      let topEmoji;
      if (closure_1 !== EmojiIntention.REACTION) {
        topEmoji = EmojiStore.getTopEmoji(closure_0);
      } else {
        topEmoji = closure_4;
      }
      const obj2 = { topEmojis: topEmoji, newlyAddedEmojis: newlyAddedEmoji };
      if (closure_1 !== EmojiIntention.REACTION) {
        newlyAddedEmoji = EmojiStore.getNewlyAddedEmoji(closure_0);
      } else {
        newlyAddedEmoji = closure_4;
      }
      return obj2;
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx");

export default tmp2;
export { getTopAndNewlyAddedEmojis };