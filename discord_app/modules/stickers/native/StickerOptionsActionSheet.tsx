// === Module 9867: StickerOptionsActionSheet ===

// Module 9867 (StickerOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4527 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerOptionsActionSheet.tsx");

export default function StickerOptionsActionSheet(stickerUrl) {
  stickerUrl = stickerUrl.stickerUrl;
  const items = [stickerUrl];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(stickerUrl);
    const result = ToastUtils.presentCopiedToClipboard();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let obj = { children: null };
  let obj2 = { hasIcons: true, children: null };
  const obj3 = { icon: jsx(stickerUrl(4775).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1115).intl;
  obj3.label = intl.string(stickerUrl(1115).t.B1ubHx);
  obj3.onPress = callback;
  obj2.children = jsx(stickerUrl(5917).TableRow, { icon: jsx(stickerUrl(4775).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(5999).TableRowGroup, { hasIcons: true, children: null });
  return jsx(stickerUrl(6618).ActionSheet, { children: null });
};