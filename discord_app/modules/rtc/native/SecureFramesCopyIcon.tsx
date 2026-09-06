// === Module 9168: SecureFramesCopyIcon ===

// Module 9168 (SecureFramesCopyIcon)
import ToastUtils from "ToastUtils" /* 4258 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesCopyIcon.tsx");

export default function SecureFramesCopyIcon(chunks) {
  chunks = chunks.chunks;
  const items = [chunks];
  const memo = noop.useMemo(() => chunks.join(" "), items);
  const items1 = [memo];
  const callback = noop.useCallback(() => {
    const result = ToastUtils.presentCopiedToClipboard();
    ClipboardUtils.copy(memo);
  }, items1);
  let obj = { icon: jsx(chunks(memo[5]).CopyIcon, { size: "sm" }), variant: "secondary", onPress: callback, accessibilityLabel: null, size: "sm" };
  const intl = chunks(memo[6]).intl;
  obj.accessibilityLabel = intl.string(chunks(memo[6]).t.e7GWjQ);
  return jsx(chunks(memo[4]).IconButton, { icon: jsx(chunks(memo[5]).CopyIcon, { size: "sm" }), variant: "secondary", onPress: callback, accessibilityLabel: null, size: "sm" });
};