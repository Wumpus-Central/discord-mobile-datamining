// === Module 16463: useListHasSingleMessageRequest ===

// Module 16463 (useListHasSingleMessageRequest)
import closure_3 from "noop" /* 19 */;
import closure_4 from "processChannel" /* 6066 */;
import closure_5 from "processChannel" /* 6067 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useListHasSingleMessageRequest.tsx");

export const useListHasSingleMessageRequest = function useListHasSingleMessageRequest() {
  messageRequestsCount = messageRequestsCount(stateFromStores[3]).useMessageRequestsCount();
  const ref = React.useRef(messageRequestsCount);
  const obj = messageRequestsCount(stateFromStores[3]);
  const items = [closure_4];
  stateFromStores = messageRequestsCount(stateFromStores[4]).useStateFromStores(items, () => ready.isReady());
  React = React.useRef(stateFromStores);
  const items1 = [stateFromStores, messageRequestsCount];
  const effect = React.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      ref.current = messageRequestsCount;
    }
  }, items1);
  const obj2 = messageRequestsCount(stateFromStores[4]);
  return ref(stateFromStores[5])(ref) <= 1 && 1 === messageRequestsCount;
};
export const useListHasSingleSpamMessageRequest = function useListHasSingleSpamMessageRequest() {
  spamMessageRequestCount = spamMessageRequestCount(stateFromStores[6]).useSpamMessageRequestCount();
  const ref = React.useRef(spamMessageRequestCount);
  const obj = spamMessageRequestCount(stateFromStores[6]);
  const items = [closure_5];
  stateFromStores = spamMessageRequestCount(stateFromStores[4]).useStateFromStores(items, () => ready.isReady());
  React = React.useRef(stateFromStores);
  const items1 = [stateFromStores, spamMessageRequestCount];
  const effect = React.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      ref.current = spamMessageRequestCount;
    }
  }, items1);
  const obj2 = spamMessageRequestCount(stateFromStores[4]);
  return ref(stateFromStores[5])(ref) <= 1 && 1 === spamMessageRequestCount;
};