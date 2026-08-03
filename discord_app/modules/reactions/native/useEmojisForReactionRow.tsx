// === Module 10124: useEmojisForReactionRow ===

// Module 10124 (useEmojisForReactionRow)
import noop from "noop";
import { EmojiIntention } from "set";

const require = arg1;
const result = require("initializeSearch").fileFinishedImporting("modules/reactions/native/useEmojisForReactionRow.tsx");

export const useEmojisForReactionRow = function useEmojisForReactionRow(channel, closure_4, arg2) {
  const _require = channel;
  const guildId = channel.getGuildId();
  const frequentlyUsedReactionEmojis = _require(rounded[2]).useFrequentlyUsedReactionEmojis(guildId);
  rounded = Math.floor(Math.min(frequentlyUsedReactionEmojis(rounded[3])().width, closure_4) / arg2);
  const items = [frequentlyUsedReactionEmojis, channel, rounded];
  const memo = React.useMemo(() => {
    let length;
    const found = frequentlyUsedReactionEmojis.filter((emoji) => {
      let obj = outer1_1(outer1_2[4]);
      obj = { emoji, channel: closure_0, intention: outer1_4.REACTION };
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