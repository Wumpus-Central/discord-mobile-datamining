// discord_app/modules/messages/native/emoji/EmojiOptionsActionSheet.tsx
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default function EmojiOptionsActionSheet(emojiSrc) {
  emojiSrc = emojiSrc.emojiSrc;
  const items = [emojiSrc];
  const callback = React.useCallback(() => {
    emojiSrc(dependencyMap[2]).copy(emojiSrc);
    const obj = emojiSrc(dependencyMap[2]);
    const result = emojiSrc(dependencyMap[3]).presentCopiedToClipboard();
    const obj2 = emojiSrc(dependencyMap[3]);
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  }, items);
  let obj = { icon: jsx(emojiSrc(4318).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1236).intl;
  obj[1] = intl.string(emojiSrc(1236).t.cIoudn);
  obj[2] = callback;
  obj[1] = jsx(emojiSrc(6291).TableRow, { icon: jsx(emojiSrc(4318).LinkIcon, {}), label: null, onPress: null });
  obj[0] = jsx(emojiSrc(6286).TableRowGroup, { icon: jsx(emojiSrc(4318).LinkIcon, {}), label: null, onPress: null });
  return jsx(emojiSrc(7175).ActionSheet, { icon: jsx(emojiSrc(4318).LinkIcon, {}), label: null, onPress: null });
};