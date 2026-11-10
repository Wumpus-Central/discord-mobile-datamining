// === Module 10413: StickerOptionsActionSheet ===

// Module 10413 (StickerOptionsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import ToastUtils from "ToastUtils" /* 5838 */;
import ClipboardUtils from "ClipboardUtils" /* 7421 */;
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
  const obj3 = { icon: jsx(stickerUrl(5853).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1113).intl;
  obj3.label = intl.string(stickerUrl(1113).t.B1ubHx);
  obj3.onPress = callback;
  obj2.children = jsx(stickerUrl(7041).TableRow, { icon: jsx(stickerUrl(5853).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(7129).TableRowGroup, { hasIcons: true, children: null });
  return jsx(stickerUrl(7429).ActionSheet, { children: null });
};