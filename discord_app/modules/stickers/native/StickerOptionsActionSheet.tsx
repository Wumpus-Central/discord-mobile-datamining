// === Module 10466: StickerOptionsActionSheet ===

// Module 10466 (StickerOptionsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import ToastUtils from "ToastUtils" /* 5845 */;
import ClipboardUtils from "ClipboardUtils" /* 7494 */;
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
  const obj3 = { icon: jsx(stickerUrl(5861).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1113).intl;
  obj3.label = intl.string(stickerUrl(1113).t.B1ubHx);
  obj3.onPress = callback;
  obj2.children = jsx(stickerUrl(7116).TableRow, { icon: jsx(stickerUrl(5861).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(7201).TableRowGroup, { hasIcons: true, children: null });
  return jsx(stickerUrl(7502).ActionSheet, { children: null });
};