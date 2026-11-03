// === Module 10195: EmojiOptionsActionSheet ===

// Module 10195 (EmojiOptionsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import ToastUtils from "ToastUtils" /* 5831 */;
import ClipboardUtils from "ClipboardUtils" /* 7478 */;
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
  const obj3 = { icon: jsx(emojiSrc(5847).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1113).intl;
  obj3.label = intl.string(emojiSrc(1113).t.cIoudn);
  obj3.onPress = callback;
  obj2.children = jsx(emojiSrc(7101).TableRow, { icon: jsx(emojiSrc(5847).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(emojiSrc(7186).TableRowGroup, { hasIcons: true, children: null });
  return jsx(emojiSrc(7486).ActionSheet, { children: null });
};