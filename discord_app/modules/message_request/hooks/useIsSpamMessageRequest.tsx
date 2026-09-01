// discord_app/modules/message_request/hooks/useIsSpamMessageRequest.tsx
import closure_2 from "../SpamMessageRequestStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useIsSpamMessageRequest.tsx");

export const useIsSpamMessageRequest = function useIsSpamMessageRequest(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => closure_1_2.isSpam(closure_0),
    items1,
  );
};
