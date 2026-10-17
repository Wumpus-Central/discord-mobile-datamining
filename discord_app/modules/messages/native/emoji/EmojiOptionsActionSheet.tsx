// === Module 9853: EmojiOptionsActionSheet ===

// Module 9853 (EmojiOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4903 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import ClipboardUtils from "ClipboardUtils" /* 7162 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiOptionsActionSheet(emojiSrc) {
  const cResult = emojiSrc(576).c(6);
  emojiSrc = emojiSrc.emojiSrc;
  if (cResult[0] !== emojiSrc) {
    const fn = function t() {
      ClipboardUtils.copy(emojiSrc);
      const result = ToastUtils.presentCopiedToClipboard();
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    cResult[0] = emojiSrc;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = jsx(tmp(5137).LinkIcon, {});
    const intl = tmp(1128).intl;
    const stringResult = intl.string(tmp(1128).t.cIoudn);
    cResult[2] = tmp8;
    cResult[3] = stringResult;
    let tmp6 = stringResult;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] !== tmp4) {
    let obj2 = { children: null };
    const obj3 = { hasIcons: true, children: null };
    const obj4 = { icon: tmp5, label: tmp6, onPress: tmp4 };
    obj3.children = jsx(tmp(6457).TableRow, { icon: tmp5, label: tmp6, onPress: tmp4 });
    obj2.children = jsx(tmp(6542).TableRowGroup, { hasIcons: true, children: null });
    const tmp12 = jsx(tmp(7175).ActionSheet, { children: null });
    cResult[4] = tmp4;
    cResult[5] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[5];
  }
  return tmp10;
}) : (function EmojiOptionsActionSheet(emojiSrc) {
  emojiSrc = emojiSrc.emojiSrc;
  const items = [emojiSrc];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(emojiSrc);
    const result = ToastUtils.presentCopiedToClipboard();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let obj = { children: null };
  let obj2 = { hasIcons: true, children: null };
  const obj3 = { icon: jsx(emojiSrc(5137).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1128).intl;
  obj3.label = intl.string(emojiSrc(1128).t.cIoudn);
  obj3.onPress = callback;
  obj2.children = jsx(emojiSrc(6457).TableRow, { icon: jsx(emojiSrc(5137).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(emojiSrc(6542).TableRowGroup, { hasIcons: true, children: null });
  return jsx(emojiSrc(7175).ActionSheet, { children: null });
});