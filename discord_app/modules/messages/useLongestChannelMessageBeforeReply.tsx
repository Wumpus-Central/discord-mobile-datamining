// === Module 11618: useLongestChannelMessageBeforeReply ===

// Module 11618 (useLongestChannelMessageBeforeReply)
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/useLongestChannelMessageBeforeReply.tsx");

export const useLongestChannelMessageBeforeReply = function useLongestChannelMessageBeforeReply(id, recipientId) {
  const _require = id;
  dependencyMap = recipientId;
  const items = [closure_2];
  const items1 = [id, recipientId];
  return _require(589).useStateFromStores(items, () => {
    if (null != closure_1) {
      const messages = closure_1_2.getMessages(closure_0);
      const findOldestResult = messages.findOldest((author) => author.author.id === closure_1);
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
  }, items1);
};