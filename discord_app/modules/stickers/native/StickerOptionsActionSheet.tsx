// === Module 9779: StickerOptionsActionSheet ===

// Module 9779 (StickerOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4808 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerOptionsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function StickerOptionsActionSheet(stickerUrl) {
  const cResult = stickerUrl(576).c(6);
  stickerUrl = stickerUrl.stickerUrl;
  if (cResult[0] !== stickerUrl) {
    const fn = function o() {
      ClipboardUtils.copy(stickerUrl);
      const result = ToastUtils.presentCopiedToClipboard();
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    cResult[0] = stickerUrl;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = jsx(tmp(5038).LinkIcon, {});
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.B1ubHx);
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
    obj3.children = jsx(tmp(6179).TableRow, { icon: tmp5, label: tmp6, onPress: tmp4 });
    obj2.children = jsx(tmp(6264).TableRowGroup, { hasIcons: true, children: null });
    const tmp12 = jsx(tmp(6898).ActionSheet, { children: null });
    cResult[4] = tmp4;
    cResult[5] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[5];
  }
  return tmp10;
}) : (function StickerOptionsActionSheet(stickerUrl) {
  stickerUrl = stickerUrl.stickerUrl;
  const items = [stickerUrl];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(stickerUrl);
    const result = ToastUtils.presentCopiedToClipboard();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let obj = { children: null };
  let obj2 = { hasIcons: true, children: null };
  const obj3 = { icon: jsx(stickerUrl(5038).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1126).intl;
  obj3.label = intl.string(stickerUrl(1126).t.B1ubHx);
  obj3.onPress = callback;
  obj2.children = jsx(stickerUrl(6179).TableRow, { icon: jsx(stickerUrl(5038).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(6264).TableRowGroup, { hasIcons: true, children: null });
  return jsx(stickerUrl(6898).ActionSheet, { children: null });
});