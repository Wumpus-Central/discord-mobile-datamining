// === Module 10405: StickerOptionsActionSheet ===

// Module 10405 (StickerOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4258 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
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
  obj = { hasIcons: true, children: null };
  obj = { icon: jsx(stickerUrl(4503).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1114).intl;
  obj.label = intl.string(stickerUrl(1114).t.B1ubHx);
  obj.onPress = callback;
  obj.children = jsx(stickerUrl(5605).TableRow, { icon: jsx(stickerUrl(4503).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(5687).TableRowGroup, { icon: jsx(stickerUrl(4503).LinkIcon, {}), label: null, onPress: null });
  return jsx(stickerUrl(7198).ActionSheet, { icon: jsx(stickerUrl(4503).LinkIcon, {}), label: null, onPress: null });
};