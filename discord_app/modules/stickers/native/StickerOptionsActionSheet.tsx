// discord_app/modules/stickers/native/StickerOptionsActionSheet.tsx
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
  obj.children = jsx(stickerUrl(5605).TableRow, {
    icon: jsx(stickerUrl(4503).LinkIcon, {}),
    label: null,
    onPress: null,
  });
  obj.children = jsx(stickerUrl(5687).TableRowGroup, {
    icon: jsx(stickerUrl(4503).LinkIcon, {}),
    label: null,
    onPress: null,
  });
  return jsx(stickerUrl(7198).ActionSheet, { icon: jsx(stickerUrl(4503).LinkIcon, {}), label: null, onPress: null });
}
