// discord_app/modules/message_request/hooks/useIsMessageRequest.tsx
import MessageRequestStore from "../MessageRequestStore.tsx";
import SpamMessageRequestStore from "../SpamMessageRequestStore.tsx";

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
