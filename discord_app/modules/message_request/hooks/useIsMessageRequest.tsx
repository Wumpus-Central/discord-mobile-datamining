// === Module 11223: useIsMessageRequest ===

// Module 11223 (useIsMessageRequest)
import closure_2 from "processChannel" /* 6074 */;
import closure_3 from "processChannel" /* 6075 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useIsMessageRequest.tsx");

export const useIsMessageRequest = function useIsMessageRequest(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  return _require(586).useStateFromStores(items, () => closure_1_2.isMessageRequest(closure_0), items1);
};
export const useIsEitherTypeOfMessageRequest = function useIsEitherTypeOfMessageRequest(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  return _require(586).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let isMessageRequestResult = closure_1_2.isMessageRequest(tmp);
      if (!isMessageRequestResult) {
        isMessageRequestResult = closure_1_3.isSpam(tmp);
      }
      tmp2 = isMessageRequestResult;
    }
    return tmp2;
  });
};