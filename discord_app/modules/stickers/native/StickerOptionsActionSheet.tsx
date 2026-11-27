// === Module 10851: StickerOptionsActionSheet ===

// Module 10851 (StickerOptionsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ToastUtils from "ToastUtils" /* 5724 */;
import ClipboardUtils from "ClipboardUtils" /* 7538 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerOptionsActionSheet.tsx");

export default function StickerOptionsActionSheet(stickerUrl) {
  stickerUrl = stickerUrl.stickerUrl;
  items = [stickerUrl];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(stickerUrl);
    const result = ToastUtils.presentCopiedToClipboard();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let obj = { children: null };
  let obj2 = { hasIcons: true, children: null };
  const obj3 = { icon: jsx(stickerUrl(5739).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1112).intl;
  obj3.label = intl.string(stickerUrl(1112).t.B1ubHx);
  obj3.onPress = callback;
  obj2.children = jsx(stickerUrl(6144).TableRow, { icon: jsx(stickerUrl(5739).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(6140).TableRowGroup, { hasIcons: true, children: null });
  return jsx(stickerUrl(7546).ActionSheet, { children: null });
};