// === Module 11233: useIsMessageRequest ===

// Module 11233 (useIsMessageRequest)
import MessageRequestStore from "MessageRequestStore" /* 6850 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6851 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequest.tsx");

export function useIsMessageRequest(id) {
  _require = id;
  const items = [MessageRequestStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => MessageRequestStore.isMessageRequest(closure_0), items1);
}
export function useIsEitherTypeOfMessageRequest(id) {
  _require = id;
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
}