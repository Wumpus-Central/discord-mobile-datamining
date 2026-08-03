// === Module 9800: StickerOptionsActionSheet ===

// Module 9800 (StickerOptionsActionSheet)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("_copy").fileFinishedImporting("modules/stickers/native/StickerOptionsActionSheet.tsx");

export default function StickerOptionsActionSheet(stickerUrl) {
  stickerUrl = stickerUrl.stickerUrl;
  const items = [stickerUrl];
  const callback = React.useCallback(() => {
    stickerUrl(outer1_2[2]).copy(stickerUrl);
    const obj = stickerUrl(outer1_2[2]);
    const result = stickerUrl(outer1_2[3]).presentCopiedToClipboard();
    const obj2 = stickerUrl(outer1_2[3]);
    outer1_1(outer1_2[4]).hideActionSheet();
  }, items);
  let obj = { children: null };
  obj = { hasIcons: true, children: null };
  obj = { icon: null, label: null, onPress: null };
  obj[0] = jsx(stickerUrl(4199).LinkIcon, {});
  const intl = stickerUrl(1236).intl;
  obj[1] = intl.string(stickerUrl(1236).t.B1ubHx);
  obj[2] = callback;
  obj[1] = jsx(stickerUrl(5286).TableRow, { icon: null, label: null, onPress: null });
  obj[0] = jsx(stickerUrl(5620).TableRowGroup, { icon: null, label: null, onPress: null });
  return jsx(stickerUrl(5617).ActionSheet, { icon: null, label: null, onPress: null });
};