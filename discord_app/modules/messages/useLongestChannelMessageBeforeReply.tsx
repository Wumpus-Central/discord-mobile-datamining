// discord_app/modules/messages/useLongestChannelMessageBeforeReply.tsx
import MessageStore from "../../stores/MessageStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useLongestChannelMessageBeforeReply.tsx");

export const useLongestChannelMessageBeforeReply = function useLongestChannelMessageBeforeReply(id, recipientId) {
  _require = id;
  dependencyMap = recipientId;
  const items = [MessageStore];
  const items1 = [id, recipientId];
  return require("initialize").useStateFromStores(
    items,
    () => {
      if (null != closure_1) {
        const messages = MessageStore.getMessages(closure_0);
        const findOldestResult = messages.findOldest((author) => author.author.id === recipientId);
        let tmp4 = findOldestResult;
        if (null != findOldestResult) {
          const toArrayResult = messages.toArray();
          for (const item10018 of toArrayResult) {
            if (item10018.author.id !== closure_1) {
              obj2.return();
              break;
            } else {
              let length;
              if (tmp4 != null) {
                length = tmp4.content.length;
              }
              if (tmp8.content.length > length) {
                tmp4 = item10018;
              }
              continue;
            }
            return tmp4;
          }
        }
      }
    },
    items1,
  );
};
