// discord_app/modules/messages/native/emoji/EmojiOptionsActionSheet.tsx
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default function EmojiOptionsActionSheet(emojiSrc) {
  emojiSrc = emojiSrc.emojiSrc;
  const items = [emojiSrc];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(emojiSrc);
    const result = ToastUtils.presentCopiedToClipboard();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let obj = { children: null };
  let obj2 = { hasIcons: true, children: null };
  const obj3 = { icon: jsx(emojiSrc(4698).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1115).intl;
  obj3.label = intl.string(emojiSrc(1115).t.cIoudn);
  obj3.onPress = callback;
  obj2.children = jsx(emojiSrc(5822).TableRow, { icon: jsx(emojiSrc(4698).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(emojiSrc(5904).TableRowGroup, { hasIcons: true, children: null });
  return jsx(emojiSrc(7442).ActionSheet, { children: null });
}
