// discord_app/modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx
import closure_2 from "reinjectEphemerals" /* 4994 */;
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx");

export const useLastChannelMessage = function useLastChannelMessage(channelId) {
  const _require = channelId;
  const items = [closure_2];
  return _initialize.useStateFromStores(items, () => {
    let lastNonCurrentUserMessage = closure_1_2.getLastNonCurrentUserMessage(closure_0);
    if (lastNonCurrentUserMessage == null) {
      lastNonCurrentUserMessage = closure_1_2.getLastMessage(closure_0);
    }
    return lastNonCurrentUserMessage;
  });
};