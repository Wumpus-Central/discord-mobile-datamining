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
  obj = { hasIcons: true, children: null };
  obj = { icon: jsx(emojiSrc(4503).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1114).intl;
  obj.label = intl.string(emojiSrc(1114).t.cIoudn);
  obj.onPress = callback;
  obj.children = jsx(emojiSrc(5605).TableRow, { icon: jsx(emojiSrc(4503).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(emojiSrc(5687).TableRowGroup, {
    icon: jsx(emojiSrc(4503).LinkIcon, {}),
    label: null,
    onPress: null,
  });
  return jsx(emojiSrc(7198).ActionSheet, { icon: jsx(emojiSrc(4503).LinkIcon, {}), label: null, onPress: null });
}
