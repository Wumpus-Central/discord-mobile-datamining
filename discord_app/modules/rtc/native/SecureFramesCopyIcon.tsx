// === Module 9883: SecureFramesCopyIcon ===

// Module 9883 (SecureFramesCopyIcon)
import closure_2 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/rtc/native/SecureFramesCopyIcon.tsx");

export default function SecureFramesCopyIcon(chunks) {
  chunks = chunks.chunks;
  let memo;
  const items = [chunks];
  memo = React.useMemo(() => chunks.join(" "), items);
  const items1 = [memo];
  const callback = React.useCallback(() => {
    const result = chunks(memo[2]).presentCopiedToClipboard();
    const obj = chunks(memo[2]);
    chunks(memo[3]).copy(memo);
  }, items1);
  let obj = { icon: jsx(chunks(memo[5]).CopyIcon, { size: "sm" }), variant: "secondary", onPress: callback, accessibilityLabel: null, size: "sm" };
  const intl = chunks(memo[6]).intl;
  obj[3] = intl.string(chunks(memo[6]).t.e7GWjQ);
  return jsx(chunks(memo[4]).IconButton, { icon: jsx(chunks(memo[5]).CopyIcon, { size: "sm" }), variant: "secondary", onPress: callback, accessibilityLabel: null, size: "sm" });
};