// === Module 9788: useIsMessageRequest ===

// Module 9788 (useIsMessageRequest)
import MessageRequestStore from "MessageRequestStore" /* 6720 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6721 */;

const require = globalThis.__r;

const require = fn;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageRequestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return MessageRequestStore.isMessageRequest(closure_0);
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
}) : ((arg0) => {
  _require = arg0;
  const items = [MessageRequestStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => MessageRequestStore.isMessageRequest(closure_0), items1);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequest.tsx");

export const useIsMessageRequest = tmp2;
export const useIsEitherTypeOfMessageRequest = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageRequestStore, SpamMessageRequestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        let isMessageRequestResult = MessageRequestStore.isMessageRequest(closure_0);
        if (!isMessageRequestResult) {
          isMessageRequestResult = SpamMessageRequestStore.isSpam(closure_0);
        }
        tmp2 = isMessageRequestResult;
      }
      return tmp2;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [MessageRequestStore, SpamMessageRequestStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let isMessageRequestResult = MessageRequestStore.isMessageRequest(closure_0);
      if (!isMessageRequestResult) {
        isMessageRequestResult = SpamMessageRequestStore.isSpam(closure_0);
      }
      tmp2 = isMessageRequestResult;
    }
    return tmp2;
  });
});