// === Module 9628: EmojiOptionsActionSheet ===

// Module 9628 (EmojiOptionsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import ToastUtils from "ToastUtils" /* 5598 */;
import ClipboardUtils from "ClipboardUtils" /* 7412 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default function EmojiOptionsActionSheet(emojiSrc) {
  emojiSrc = emojiSrc.emojiSrc;
  items = [emojiSrc];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(emojiSrc);
    const result = ToastUtils.presentCopiedToClipboard();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let obj = { children: null };
  let obj2 = { hasIcons: true, children: null };
  const obj3 = { icon: jsx(emojiSrc(5613).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1112).intl;
  obj3.label = intl.string(emojiSrc(1112).t.cIoudn);
  obj3.onPress = callback;
  obj2.children = jsx(emojiSrc(6018).TableRow, { icon: jsx(emojiSrc(5613).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(emojiSrc(6014).TableRowGroup, { hasIcons: true, children: null });
  return jsx(emojiSrc(7420).ActionSheet, { children: null });
};