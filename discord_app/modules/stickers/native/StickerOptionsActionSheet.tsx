// === Module 10060: StickerOptionsActionSheet ===

// Module 10060 (StickerOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4556 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import ClipboardUtils from "ClipboardUtils" /* 6796 */;
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
  const obj3 = { icon: jsx(stickerUrl(4784).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1115).intl;
  obj3.label = intl.string(stickerUrl(1115).t.B1ubHx);
  obj3.onPress = callback;
  obj2.children = jsx(stickerUrl(6103).TableRow, { icon: jsx(stickerUrl(4784).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(6185).TableRowGroup, { hasIcons: true, children: null });
  return jsx(stickerUrl(6804).ActionSheet, { children: null });
};