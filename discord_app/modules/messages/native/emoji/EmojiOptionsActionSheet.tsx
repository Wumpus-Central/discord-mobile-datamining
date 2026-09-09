// === Module 10372: EmojiOptionsActionSheet ===

// Module 10372 (EmojiOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4271 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import ClipboardUtils from "ClipboardUtils" /* 7203 */;
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
  obj = { hasIcons: true, children: null };
  obj = { icon: jsx(emojiSrc(4517).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1114).intl;
  obj.label = intl.string(emojiSrc(1114).t.cIoudn);
  obj.onPress = callback;
  obj.children = jsx(emojiSrc(5619).TableRow, { icon: jsx(emojiSrc(4517).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(emojiSrc(5701).TableRowGroup, { icon: jsx(emojiSrc(4517).LinkIcon, {}), label: null, onPress: null });
  return jsx(emojiSrc(7211).ActionSheet, { icon: jsx(emojiSrc(4517).LinkIcon, {}), label: null, onPress: null });
};