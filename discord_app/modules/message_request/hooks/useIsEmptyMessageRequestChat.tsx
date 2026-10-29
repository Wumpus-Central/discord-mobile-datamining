// === Module 13996: useIsEmptyMessageRequestChat ===

// Module 13996 (useIsEmptyMessageRequestChat)
import useIsMessageRequest from "useIsMessageRequest" /* 11003 */;
import MessageStore from "MessageStore" /* 6049 */;

require = fn;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsEmptyChat(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const messages = MessageStore.getMessages(closure_0);
      let ready = messages.ready;
      if (ready) {
        ready = 0 === messages.length;
      }
      if (ready) {
        ready = !messages.hasMoreBefore;
      }
      if (ready) {
        ready = !messages.hasMoreAfter;
      }
      return ready;
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
}) : (function useIsEmptyChat(arg0) {
  _require = arg0;
  const items = [MessageStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const messages = MessageStore.getMessages(closure_0);
    let ready = messages.ready;
    if (ready) {
      ready = 0 === messages.length;
    }
    if (ready) {
      ready = !messages.hasMoreBefore;
    }
    if (ready) {
      ready = !messages.hasMoreAfter;
    }
    return ready;
  }, items1);
});
let closure_3 = tmp2;
ReactCompilerGating = fn(558);
function isEmptyLoadedChat(messages) {
  let ready = messages.ready;
  if (ready) {
    ready = 0 === messages.length;
  }
  if (ready) {
    ready = !messages.hasMoreBefore;
  }
  if (ready) {
    ready = !messages.hasMoreAfter;
  }
  return ready;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsEmptyMessageRequestChat.tsx");

export { isEmptyLoadedChat };
export const useIsEmptyChat = tmp2;
export const useIsEmptyMessageRequestChat = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsEmptyMessageRequestChat(arg0) {
  let isEitherTypeOfMessageRequest = useIsMessageRequest.useIsEitherTypeOfMessageRequest(arg0);
  if (isEitherTypeOfMessageRequest) {
    isEitherTypeOfMessageRequest = closure_3(arg0);
  }
  return isEitherTypeOfMessageRequest;
}) : (function useIsEmptyMessageRequestChat(arg0) {
  let isEitherTypeOfMessageRequest = useIsMessageRequest.useIsEitherTypeOfMessageRequest(arg0);
  if (isEitherTypeOfMessageRequest) {
    isEitherTypeOfMessageRequest = closure_3(arg0);
  }
  return isEitherTypeOfMessageRequest;
});