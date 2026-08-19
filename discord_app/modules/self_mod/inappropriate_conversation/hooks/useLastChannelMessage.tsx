// discord_app/modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx
import reinjectEphemerals from "../../../../stores/MessageStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx");

export const useLastChannelMessage = function useLastChannelMessage(channelId) {
  const _require = channelId;
  const items = [closure_2];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let lastNonCurrentUserMessage = closure_1_2.getLastNonCurrentUserMessage(closure_0);
    if (lastNonCurrentUserMessage == null) {
      lastNonCurrentUserMessage = closure_1_2.getLastMessage(closure_0);
    }
    return lastNonCurrentUserMessage;
  });
};