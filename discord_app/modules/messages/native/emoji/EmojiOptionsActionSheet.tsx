// === Module 10002: EmojiOptionsActionSheet ===

// Module 10002 (EmojiOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4557 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import ClipboardUtils from "ClipboardUtils" /* 6806 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default function EmojiOptionsActionSheet(emojiSrc) {
  emojiSrc = emojiSrc.emojiSrc;
  const items = [emojiSrc];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(emojiSrc);
    const result = ToastUtils.presentCopiedToClipboard();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let obj = { children: null };
  let obj2 = { hasIcons: true, children: null };
  const obj3 = { icon: jsx(emojiSrc(4805).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1115).intl;
  obj3.label = intl.string(emojiSrc(1115).t.cIoudn);
  obj3.onPress = callback;
  obj2.children = jsx(emojiSrc(6113).TableRow, { icon: jsx(emojiSrc(4805).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(emojiSrc(6195).TableRowGroup, { hasIcons: true, children: null });
  return jsx(emojiSrc(6814).ActionSheet, { children: null });
};