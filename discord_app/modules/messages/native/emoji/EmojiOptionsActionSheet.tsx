// === Module 9203: EmojiOptionsActionSheet ===

// Module 9203 (EmojiOptionsActionSheet)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default function EmojiOptionsActionSheet(emojiSrc) {
  emojiSrc = emojiSrc.emojiSrc;
  const items = [emojiSrc];
  const callback = React.useCallback(() => {
    emojiSrc(closure_1_2[2]).copy(emojiSrc);
    const obj = emojiSrc(closure_1_2[2]);
    const result = emojiSrc(closure_1_2[3]).presentCopiedToClipboard();
    const obj2 = emojiSrc(closure_1_2[3]);
    closure_1_1(closure_1_2[4]).hideActionSheet();
  }, items);
  let obj = { children: null };
  obj = { hasIcons: true, children: null };
  obj = { icon: jsx(emojiSrc(4421).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1233).intl;
  obj[1] = intl.string(emojiSrc(1233).t.cIoudn);
  obj[2] = callback;
  obj[1] = jsx(emojiSrc(5608).TableRow, { icon: jsx(emojiSrc(4421).LinkIcon, {}), label: null, onPress: null });
  obj[0] = jsx(emojiSrc(6001).TableRowGroup, { icon: jsx(emojiSrc(4421).LinkIcon, {}), label: null, onPress: null });
  return jsx(emojiSrc(5998).ActionSheet, { icon: jsx(emojiSrc(4421).LinkIcon, {}), label: null, onPress: null });
};