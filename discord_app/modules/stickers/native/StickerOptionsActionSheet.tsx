// === Module 10472: StickerOptionsActionSheet ===

// Module 10472 (StickerOptionsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import ToastUtils from "ToastUtils" /* 5848 */;
import ClipboardUtils from "ClipboardUtils" /* 7496 */;
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
  const obj3 = { icon: jsx(stickerUrl(5864).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1113).intl;
  obj3.label = intl.string(stickerUrl(1113).t.B1ubHx);
  obj3.onPress = callback;
  obj2.children = jsx(stickerUrl(7119).TableRow, { icon: jsx(stickerUrl(5864).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(7204).TableRowGroup, { hasIcons: true, children: null });
  return jsx(stickerUrl(7504).ActionSheet, { children: null });
};