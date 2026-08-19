// discord_app/modules/stickers/native/StickerOptionsActionSheet.tsx
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/stickers/native/StickerOptionsActionSheet.tsx");

export default function StickerOptionsActionSheet(stickerUrl) {
  stickerUrl = stickerUrl.stickerUrl;
  const items = [stickerUrl];
  const callback = React.useCallback(() => {
    stickerUrl(dependencyMap[2]).copy(stickerUrl);
    const obj = stickerUrl(dependencyMap[2]);
    const result = stickerUrl(dependencyMap[3]).presentCopiedToClipboard();
    const obj2 = stickerUrl(dependencyMap[3]);
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  }, items);
  let obj = { icon: jsx(stickerUrl(4318).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1236).intl;
  obj[1] = intl.string(stickerUrl(1236).t.B1ubHx);
  obj[2] = callback;
  obj[1] = jsx(stickerUrl(6291).TableRow, { icon: jsx(stickerUrl(4318).LinkIcon, {}), label: null, onPress: null });
  obj[0] = jsx(stickerUrl(6286).TableRowGroup, { icon: jsx(stickerUrl(4318).LinkIcon, {}), label: null, onPress: null });
  return jsx(stickerUrl(7175).ActionSheet, { icon: jsx(stickerUrl(4318).LinkIcon, {}), label: null, onPress: null });
};