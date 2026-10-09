// discord_app/modules/emoji_picker/hooks/useEmojiHotrail.tsx
import c from "../../../../_runtime/00576_c.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const EMOJI_ROW_SIZE = fn(5998).EMOJI_ROW_SIZE;
const ReactCompilerGating = fn(558);
function getEmojiHotrail(arg0) {
  ({ topEmojis, newlyAddedEmojis, rowSize } = arg0);
  if (rowSize === undefined) {
    rowSize = EMOJI_ROW_SIZE;
  }
  const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
  return {
    visibleTopEmojis: substr,
    visibleNewlyAddedEmojis: newlyAddedEmojis,
    allEmojis: substr.concat(newlyAddedEmojis),
  };
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/hooks/useEmojiHotrail.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useEmojiHotrail(arg0) {
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        ({ topEmojis, newlyAddedEmojis, rowSize } = arg0);
        if (rowSize === undefined) {
          rowSize = EMOJI_ROW_SIZE;
        }
        const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
        const obj2 = {
          visibleTopEmojis: substr,
          visibleNewlyAddedEmojis: newlyAddedEmojis,
          allEmojis: substr.concat(newlyAddedEmojis),
        };
        cResult[0] = arg0;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : function useEmojiHotrail(arg0) {
      closure_0 = arg0;
      const items = [arg0];
      return noop.useMemo(() => {
        ({ topEmojis, newlyAddedEmojis, rowSize } = closure_0);
        if (rowSize === undefined) {
          rowSize = EMOJI_ROW_SIZE;
        }
        const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
        return {
          visibleTopEmojis: substr,
          visibleNewlyAddedEmojis: newlyAddedEmojis,
          allEmojis: substr.concat(newlyAddedEmojis),
        };
      }, items);
    };
export { getEmojiHotrail };
