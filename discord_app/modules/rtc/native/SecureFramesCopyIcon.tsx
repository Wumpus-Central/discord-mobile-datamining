// === Module 9382: SecureFramesCopyIcon ===

// Module 9382 (SecureFramesCopyIcon)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, chunks;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((chunks) => {
  let closure_0;
  let tmp10;
  let tmp12;
  let tmp4;
  let tmp6;
  let tmp7;
  let obj = require("react");
  const cResult = obj.c(8);
  chunks = chunks.chunks;
  if (cResult[0] !== chunks) {
    const joined = chunks.join(" ");
    cResult[0] = chunks;
    cResult[1] = joined;
    tmp4 = joined;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] !== tmp4) {
    const fn = function l() {
      const obj = ToastUtils;
      const result = obj.presentCopiedToClipboard();
      const obj2 = ClipboardUtils;
      obj2.copy(closure_0);
    };
    cResult[2] = tmp4;
    cResult[3] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = jsx(require("CopyIcon").CopyIcon, { size: "sm" });
    cResult[4] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t.e7GWjQ);
    cResult[5] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== tmp6) {
    const tmp14 = jsx(require("IconButton").IconButton, { icon: tmp7, variant: "secondary", onPress: tmp6, accessibilityLabel: tmp10, size: "sm" });
    cResult[6] = tmp6;
    cResult[7] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[7];
  }
  return tmp12;
}) : ((chunks) => {
  chunks = chunks.chunks;
  const items = [chunks];
  const memo = react.useMemo(() => chunks.join(" "), items);
  const items1 = [memo];
  const callback = react.useCallback(() => {
    const obj = ToastUtils;
    const result = obj.presentCopiedToClipboard();
    const obj2 = ClipboardUtils;
    obj2.copy(memo);
  }, items1);
  const IconButton = chunks(memo[8]).IconButton;
  const intl = chunks(memo[7]).intl;
  return <IconButton icon={null} variant="secondary" onPress={callback} accessibilityLabel={intl.string(chunks(memo[7]).t.e7GWjQ)} size="sm" />;
});
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesCopyIcon.tsx");

export default tmp2;