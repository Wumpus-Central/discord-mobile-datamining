// discord_app/modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx
import MessageStore from "../../../../stores/MessageStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx",
);

export const useLastChannelMessage = function useLastChannelMessage(channelId) {
  _require = channelId;
  const items = [MessageStore];
  return require("initialize").useStateFromStores(items, () => {
    let lastNonCurrentUserMessage = MessageStore.getLastNonCurrentUserMessage(closure_0);
    if (lastNonCurrentUserMessage == null) {
      lastNonCurrentUserMessage = MessageStore.getLastMessage(closure_0);
    }
    return lastNonCurrentUserMessage;
  });
};
