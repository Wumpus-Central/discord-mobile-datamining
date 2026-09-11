// === Module 11460: useIsMessageRequest ===

// Module 11460 (useIsMessageRequest)
import MessageRequestStore from "MessageRequestStore" /* 7292 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7293 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequest.tsx");

export const useIsMessageRequest = function useIsMessageRequest(id) {
  _require = id;
  const items = [MessageRequestStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => MessageRequestStore.isMessageRequest(closure_0), items1);
};
export const useIsEitherTypeOfMessageRequest = function useIsEitherTypeOfMessageRequest(arg0) {
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
};