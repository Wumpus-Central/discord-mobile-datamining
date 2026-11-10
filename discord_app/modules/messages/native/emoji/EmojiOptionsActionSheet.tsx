// === Module 10192: EmojiOptionsActionSheet ===

// Module 10192 (EmojiOptionsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import ToastUtils from "ToastUtils" /* 5838 */;
import ClipboardUtils from "ClipboardUtils" /* 7421 */;
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
  const obj3 = { icon: jsx(emojiSrc(5853).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1113).intl;
  obj3.label = intl.string(emojiSrc(1113).t.cIoudn);
  obj3.onPress = callback;
  obj2.children = jsx(emojiSrc(7041).TableRow, { icon: jsx(emojiSrc(5853).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(emojiSrc(7129).TableRowGroup, { hasIcons: true, children: null });
  return jsx(emojiSrc(7429).ActionSheet, { children: null });
};