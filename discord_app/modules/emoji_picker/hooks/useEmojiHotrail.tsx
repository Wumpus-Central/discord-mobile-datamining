// discord_app/modules/emoji_picker/hooks/useEmojiHotrail.tsx
import react2 from "../../../../_runtime/00576_react.js";
import EmojiPickerConstants from "../EmojiPickerConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const EMOJI_ROW_SIZE = EmojiPickerConstants.EMOJI_ROW_SIZE;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let newlyAddedEmojis;
      let rowSize;
      let tmp2;
      let topEmojis;
      const obj = react2;
      const cResult = obj.c(2);
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
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (arg0) => {
      let closure_0 = arg0;
      const items = [arg0];
      return react.useMemo(() => {
        let newlyAddedEmojis;
        let rowSize;
        let topEmojis;
        ({ topEmojis, newlyAddedEmojis, rowSize } = closure_0);
        if (rowSize === undefined) {
          rowSize = EMOJI_ROW_SIZE;
        }
        const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
        const obj = {
          visibleTopEmojis: substr,
          visibleNewlyAddedEmojis: newlyAddedEmojis,
          allEmojis: substr.concat(newlyAddedEmojis),
        };
        return obj;
      }, items);
    };
function getEmojiHotrail(arg0) {
  let newlyAddedEmojis;
  let rowSize;
  let topEmojis;
  ({ topEmojis, newlyAddedEmojis, rowSize } = arg0);
  if (rowSize === undefined) {
    rowSize = EMOJI_ROW_SIZE;
  }
  const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
  const obj = {
    visibleTopEmojis: substr,
    visibleNewlyAddedEmojis: newlyAddedEmojis,
    allEmojis: substr.concat(newlyAddedEmojis),
  };
  return obj;
}
const result = size.fileFinishedImporting("modules/emoji_picker/hooks/useEmojiHotrail.tsx");

export default tmp2;
export { getEmojiHotrail };
