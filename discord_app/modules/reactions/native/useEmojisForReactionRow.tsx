// === Module 10894: useEmojisForReactionRow ===

// Module 10894 (useEmojisForReactionRow)
import noop from "noop" /* 19 */;
import { EmojiIntention } from "set" /* 1925 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/reactions/native/useEmojisForReactionRow.tsx");

export const useEmojisForReactionRow = function useEmojisForReactionRow(channel, closure_4, arg2) {
  const _require = channel;
  const guildId = channel.getGuildId();
  const frequentlyUsedReactionEmojis = _require(rounded[2]).useFrequentlyUsedReactionEmojis(guildId);
  rounded = Math.floor(Math.min(frequentlyUsedReactionEmojis(rounded[3])().width, closure_4) / arg2);
  const items = [frequentlyUsedReactionEmojis, channel, rounded];
  const memo = React.useMemo(() => {
    let length;
    const found = frequentlyUsedReactionEmojis.filter((item, index) => {
      frequentlyUsedReactionEmojis(rounded[4]);
      const obj = { emoji: item, channel: closure_0, intention: closure_1_4.REACTION };
      return !obj.isEmojiFilteredOrLocked(obj);
    });
    if (found.length < rounded) {
      do {
        let arr = found.push(null);
        length = found.length;
      } while (length < rounded);
    }
    return found;
  }, items);
  return memo.slice(0, rounded - 1);
};