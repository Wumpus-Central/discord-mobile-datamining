import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("presentAddedFriendToast").fileFinishedImporting("modules/rtc/native/SecureFramesCopyIcon.tsx");

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
  let obj = { icon: null, variant: "secondary", onPress: null, accessibilityLabel: null, size: "sm" };
  obj[0] = jsx(chunks(memo[5]).CopyIcon, { size: "sm" });
  obj[2] = callback;
  const intl = chunks(memo[6]).intl;
  obj[3] = intl.string(chunks(memo[6]).t.e7GWjQ);
  return jsx(chunks(memo[4]).IconButton, { icon: null, variant: "secondary", onPress: null, accessibilityLabel: null, size: "sm" });
};