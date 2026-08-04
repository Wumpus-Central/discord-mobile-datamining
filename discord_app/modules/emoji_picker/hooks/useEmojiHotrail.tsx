// discord_app/modules/emoji_picker/hooks/useEmojiHotrail.tsx
import noop from "noop";
import { EMOJI_ROW_SIZE } from "EmojiCategoryTypes";

const result = require("set").fileFinishedImporting("modules/emoji_picker/hooks/useEmojiHotrail.tsx");

export default function useEmojiHotrail(arg0) {
  const React = arg0;
  const items = [arg0];
  return React.useMemo(() => {
    let newlyAddedEmojis;
    let rowSize;
    let topEmojis;
    ({ topEmojis, newlyAddedEmojis, rowSize } = noop);
    if (rowSize === undefined) {
      rowSize = outer1_1;
    }
    const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
    return { visibleTopEmojis: substr, visibleNewlyAddedEmojis: newlyAddedEmojis, allEmojis: substr.concat(newlyAddedEmojis) };
  }, items);
};
export const getEmojiHotrail = function getEmojiHotrail(arg0) {
  let newlyAddedEmojis;
  let rowSize;
  let topEmojis;
  ({ topEmojis, newlyAddedEmojis, rowSize } = arg0);
  if (rowSize === undefined) {
    rowSize = EMOJI_ROW_SIZE;
  }
  const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
  return { visibleTopEmojis: substr, visibleNewlyAddedEmojis: newlyAddedEmojis, allEmojis: substr.concat(newlyAddedEmojis) };
};