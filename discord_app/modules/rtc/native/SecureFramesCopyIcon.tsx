// discord_app/modules/rtc/native/SecureFramesCopyIcon.tsx
import noop from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/rtc/native/SecureFramesCopyIcon.tsx");

export default function SecureFramesCopyIcon(chunks) {
  chunks = chunks.chunks;
  const items = [chunks];
  const memo = React.useMemo(() => chunks.join(" "), items);
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