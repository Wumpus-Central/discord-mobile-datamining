// discord_app/modules/emoji_picker/hooks/useEmojiHotrail.tsx
import closure_0 from "noop" /* 19 */;
import { EMOJI_ROW_SIZE } from "EmojiCategoryTypes" /* 6731 */;

const result = require("set").fileFinishedImporting("modules/emoji_picker/hooks/useEmojiHotrail.tsx");

export default function useEmojiHotrail(arg0) {
  const React = arg0;
  const items = [arg0];
  return React.useMemo(() => {
    ({ topEmojis, newlyAddedEmojis, rowSize } = closure_0);
    if (rowSize === undefined) {
      rowSize = closure_1_1;
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