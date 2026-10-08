// === Module 10363: useIsSpamMessageRequest ===

// Module 10363 (useIsSpamMessageRequest)
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6061 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsSpamMessageRequest.tsx");

export const useIsSpamMessageRequest = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsSpamMessageRequest(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SpamMessageRequestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return SpamMessageRequestStore.isSpam(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useIsSpamMessageRequest(arg0) {
  _require = arg0;
  const items = [SpamMessageRequestStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => SpamMessageRequestStore.isSpam(closure_0), items1);
});