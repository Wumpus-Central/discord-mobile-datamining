// === Module 10044: EmojiOptionsActionSheet ===

// Module 10044 (EmojiOptionsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
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
  const obj3 = { icon: jsx(emojiSrc(5722).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1114).intl;
  obj3.label = intl.string(emojiSrc(1114).t.cIoudn);
  obj3.onPress = callback;
  obj2.children = jsx(emojiSrc(6969).TableRow, { icon: jsx(emojiSrc(5722).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(emojiSrc(7054).TableRowGroup, { hasIcons: true, children: null });
  return jsx(emojiSrc(7360).ActionSheet, { children: null });
};