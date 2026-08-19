// === Module 9414: EmojiOptionsActionSheet ===

// Module 9414 (EmojiOptionsActionSheet)
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default function EmojiOptionsActionSheet(emojiSrc) {
  emojiSrc = emojiSrc.emojiSrc;
  const items = [emojiSrc];
  const callback = React.useCallback(() => {
    emojiSrc(dependencyMap[2]).copy(emojiSrc);
    const obj = emojiSrc(dependencyMap[2]);
    const result = emojiSrc(dependencyMap[3]).presentCopiedToClipboard();
    const obj2 = emojiSrc(dependencyMap[3]);
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  }, items);
  let obj = { icon: jsx(emojiSrc(4318).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1236).intl;
  obj[1] = intl.string(emojiSrc(1236).t.cIoudn);
  obj[2] = callback;
  obj[1] = jsx(emojiSrc(6291).TableRow, { icon: jsx(emojiSrc(4318).LinkIcon, {}), label: null, onPress: null });
  obj[0] = jsx(emojiSrc(6286).TableRowGroup, { icon: jsx(emojiSrc(4318).LinkIcon, {}), label: null, onPress: null });
  return jsx(emojiSrc(7175).ActionSheet, { icon: jsx(emojiSrc(4318).LinkIcon, {}), label: null, onPress: null });
};