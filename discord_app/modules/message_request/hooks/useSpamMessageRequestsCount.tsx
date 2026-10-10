// === Module 17592: useSpamMessageRequestsCount ===

// Module 17592 (useSpamMessageRequestsCount)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6056 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = ReactCompilerGating.isReactCompilerEnabled() ? (function useSpamMessageRequestCount() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SpamMessageRequestStore];
    const fn = function u() {
      return spamChannelsCount.getSpamChannelsCount();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useSpamMessageRequestCount() {
  const items = [SpamMessageRequestStore];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
});