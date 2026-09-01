// discord_app/modules/stickers/native/StickerOptionsActionSheet.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/stickers/native/StickerOptionsActionSheet.tsx");

export default function StickerOptionsActionSheet(stickerUrl) {
  stickerUrl = stickerUrl.stickerUrl;
  const items = [stickerUrl];
  const callback = React.useCallback(() => {
    stickerUrl(closure_1_2[2]).copy(stickerUrl);
    const obj = stickerUrl(closure_1_2[2]);
    const result = stickerUrl(closure_1_2[3]).presentCopiedToClipboard();
    const obj2 = stickerUrl(closure_1_2[3]);
    closure_1_1(closure_1_2[4]).hideActionSheet();
  }, items);
  let obj = { children: null };
  obj = { hasIcons: true, children: null };
  obj = { icon: jsx(stickerUrl(4421).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1236).intl;
  obj[1] = intl.string(stickerUrl(1236).t.B1ubHx);
  obj[2] = callback;
  obj[1] = jsx(stickerUrl(5599).TableRow, { icon: jsx(stickerUrl(4421).LinkIcon, {}), label: null, onPress: null });
  obj[0] = jsx(stickerUrl(5992).TableRowGroup, {
    icon: jsx(stickerUrl(4421).LinkIcon, {}),
    label: null,
    onPress: null,
  });
  return jsx(stickerUrl(5989).ActionSheet, { icon: jsx(stickerUrl(4421).LinkIcon, {}), label: null, onPress: null });
}
