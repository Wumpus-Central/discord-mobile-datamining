// discord_app/modules/stickers/native/StickerOptionsActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
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
  let obj2 = { hasIcons: true, children: null };
  const obj3 = { icon: jsx(stickerUrl(5727).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1113).intl;
  obj3.label = intl.string(stickerUrl(1113).t.B1ubHx);
  obj3.onPress = callback;
  obj2.children = jsx(stickerUrl(6975).TableRow, {
    icon: jsx(stickerUrl(5727).LinkIcon, {}),
    label: null,
    onPress: null,
  });
  obj.children = jsx(stickerUrl(7060).TableRowGroup, { hasIcons: true, children: null });
  return jsx(stickerUrl(7366).ActionSheet, { children: null });
}
