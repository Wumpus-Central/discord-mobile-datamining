import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
// discord_app/modules/message_request/hooks/useIsSpamMessageRequest.tsx
import processChannel from "processChannel";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useIsSpamMessageRequest.tsx");

export const useIsSpamMessageRequest = function useIsSpamMessageRequest(id) {
  const _require = id;
  const items = [processChannel];
  const items1 = [id];
  return _initialize.useStateFromStores(items, () => outer1_2.isSpam(closure_0), items1);
};