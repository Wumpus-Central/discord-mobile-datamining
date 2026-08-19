// discord_app/modules/message_request/hooks/useIsMessageRequest.tsx
import processChannel from "../MessageRequestStore.tsx";
import processChannel2 from "../SpamMessageRequestStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/message_request/hooks/useIsMessageRequest.tsx");

export const useIsMessageRequest = function useIsMessageRequest(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_2.isMessageRequest(closure_0), items1);
};
export const useIsEitherTypeOfMessageRequest = function useIsEitherTypeOfMessageRequest(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let isMessageRequestResult = closure_1_2.isMessageRequest(closure_0);
      if (!isMessageRequestResult) {
        isMessageRequestResult = closure_1_3.isSpam(closure_0);
      }
      tmp2 = isMessageRequestResult;
    }
    return tmp2;
  });
};