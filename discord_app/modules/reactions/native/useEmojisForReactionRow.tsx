// === Module 11224: useEmojisForReactionRow ===

// Module 11224 (useEmojisForReactionRow)
import closure_3 from "noop" /* 19 */;
import { EmojiIntention } from "set" /* 1925 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/reactions/native/useEmojisForReactionRow.tsx");

export const useEmojisForReactionRow = function useEmojisForReactionRow(channel, closure_4, arg2) {
  const _require = channel;
  const guildId = channel.getGuildId();
  const frequentlyUsedReactionEmojis = _require(rounded[2]).useFrequentlyUsedReactionEmojis(guildId);
  rounded = Math.floor(Math.min(frequentlyUsedReactionEmojis(rounded[3])().width, closure_4) / arg2);
  const items = [frequentlyUsedReactionEmojis, channel, rounded];
  const memo = React.useMemo(() => {
    let length;
    const found = frequentlyUsedReactionEmojis.filter((emoji) => {
      let obj = closure_1_1(closure_1_2[4]);
      obj = { emoji, channel: closure_0, intention: closure_1_4.REACTION };
      return !obj.isEmojiFilteredOrLocked(obj);
    });
    if (found.length < rounded) {
      do {
        let arr = found.push(null);
        let tmp2 = rounded;
        length = found.length;
      } while (length < rounded);
    }
    return found;
  }, items);
  return memo.slice(0, rounded - 1);
};