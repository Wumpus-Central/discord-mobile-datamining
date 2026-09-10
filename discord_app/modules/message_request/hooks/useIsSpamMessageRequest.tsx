// === Module 11437: useIsSpamMessageRequest ===

// Module 11437 (useIsSpamMessageRequest)
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7272 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsSpamMessageRequest.tsx");

export const useIsSpamMessageRequest = function useIsSpamMessageRequest(id) {
  _require = id;
  const items = [SpamMessageRequestStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => SpamMessageRequestStore.isSpam(closure_0), items1);
};