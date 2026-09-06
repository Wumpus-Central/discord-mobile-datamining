// discord_app/modules/message_request/hooks/useListHasSingleMessageRequest.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import MessageRequestStore from "../MessageRequestStore.tsx";
import SpamMessageRequestStore from "../SpamMessageRequestStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useListHasSingleMessageRequest.tsx");

export const useListHasSingleMessageRequest = function useListHasSingleMessageRequest() {
  messageRequestsCount = messageRequestsCount(stateFromStores[3]).useMessageRequestsCount();
  const ref = noop.useRef(messageRequestsCount);
  const obj = messageRequestsCount(stateFromStores[3]);
  const items = [MessageRequestStore];
  stateFromStores = messageRequestsCount(stateFromStores[4]).useStateFromStores(items, () => ready.isReady());
  noop = noop.useRef(stateFromStores);
  const items1 = [stateFromStores, messageRequestsCount];
  const effect = noop.useEffect(() => {
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
  const ref = noop.useRef(spamMessageRequestCount);
  const obj = spamMessageRequestCount(stateFromStores[6]);
  const items = [SpamMessageRequestStore];
  stateFromStores = spamMessageRequestCount(stateFromStores[4]).useStateFromStores(items, () => ready.isReady());
  noop = noop.useRef(stateFromStores);
  const items1 = [stateFromStores, spamMessageRequestCount];
  const effect = noop.useEffect(() => {
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
