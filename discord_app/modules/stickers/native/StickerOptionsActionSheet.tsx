// === Module 10475: StickerOptionsActionSheet ===

// Module 10475 (StickerOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4302 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import ClipboardUtils from "ClipboardUtils" /* 7241 */;
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
  obj = { icon: jsx(stickerUrl(4548).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1114).intl;
  obj.label = intl.string(stickerUrl(1114).t.B1ubHx);
  obj.onPress = callback;
  obj.children = jsx(stickerUrl(5655).TableRow, { icon: jsx(stickerUrl(4548).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(5737).TableRowGroup, { icon: jsx(stickerUrl(4548).LinkIcon, {}), label: null, onPress: null });
  return jsx(stickerUrl(7249).ActionSheet, { icon: jsx(stickerUrl(4548).LinkIcon, {}), label: null, onPress: null });
};