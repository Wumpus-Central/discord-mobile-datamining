// === Module 9434: EmojiOptionsActionSheet ===

// Module 9434 (EmojiOptionsActionSheet)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("_copy").fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default function EmojiOptionsActionSheet(emojiSrc) {
  emojiSrc = emojiSrc.emojiSrc;
  const items = [emojiSrc];
  const callback = React.useCallback(() => {
    emojiSrc(outer1_2[2]).copy(emojiSrc);
    const obj = emojiSrc(outer1_2[2]);
    const result = emojiSrc(outer1_2[3]).presentCopiedToClipboard();
    const obj2 = emojiSrc(outer1_2[3]);
    outer1_1(outer1_2[4]).hideActionSheet();
  }, items);
  let obj = { children: null };
  obj = { hasIcons: true, children: null };
  obj = { icon: null, label: null, onPress: null };
  obj[0] = jsx(emojiSrc(4137).LinkIcon, {});
  const intl = emojiSrc(1236).intl;
  obj[1] = intl.string(emojiSrc(1236).t.cIoudn);
  obj[2] = callback;
  obj[1] = jsx(emojiSrc(5224).TableRow, { icon: null, label: null, onPress: null });
  obj[0] = jsx(emojiSrc(5558).TableRowGroup, { icon: null, label: null, onPress: null });
  return jsx(emojiSrc(5555).ActionSheet, { icon: null, label: null, onPress: null });
};