// === Module 11365: useIsSpamMessageRequest ===

// Module 11365 (useIsSpamMessageRequest)
import closure_2 from "processChannel" /* 7220 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useIsSpamMessageRequest.tsx");

export const useIsSpamMessageRequest = function useIsSpamMessageRequest(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  return _require(504).useStateFromStores(items, () => closure_1_2.isSpam(closure_0), items1);
};