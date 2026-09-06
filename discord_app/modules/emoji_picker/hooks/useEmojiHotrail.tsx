// === Module 10282: useEmojiHotrail ===

// Module 10282 (useEmojiHotrail)
import noop from "module_19" /* 19 */;

const EMOJI_ROW_SIZE = fn(5463).EMOJI_ROW_SIZE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/hooks/useEmojiHotrail.tsx");

export default function useEmojiHotrail(arg0) {
  noop = arg0;
  const items = [arg0];
  return noop.useMemo(() => {
    ({ topEmojis, newlyAddedEmojis, rowSize } = closure_0);
    if (rowSize === undefined) {
      rowSize = EMOJI_ROW_SIZE;
    }
    const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
    return { visibleTopEmojis: substr, visibleNewlyAddedEmojis: newlyAddedEmojis, allEmojis: substr.concat(newlyAddedEmojis) };
  }, items);
};
export const getEmojiHotrail = function getEmojiHotrail(arg0) {
  ({ topEmojis, newlyAddedEmojis, rowSize } = arg0);
  if (rowSize === undefined) {
    rowSize = EMOJI_ROW_SIZE;
  }
  const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
  return { visibleTopEmojis: substr, visibleNewlyAddedEmojis: newlyAddedEmojis, allEmojis: substr.concat(newlyAddedEmojis) };
};