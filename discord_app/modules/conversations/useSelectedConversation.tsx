// === Module 8255: useSelectedConversation ===

// Module 8255 (useSelectedConversation)
import resolveSelectedConversationDefault from "resolveSelectedConversation" /* 8256 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7924 */;
import ConversationsStore from "ConversationsStore" /* 7928 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/useSelectedConversation.tsx");

export default function useSelectedConversation(arg0) {
  _require = arg0;
  const items = [ConversationsStore, ConversationPreviewStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const selectedConversationId = ConversationsStore.getSelectedConversationId(closure_0);
    let tmp4;
    if (null != selectedConversationId) {
      tmp4 = resolveSelectedConversationDefault(ConversationsStore, ConversationPreviewStore, closure_0, selectedConversationId);
    }
    return tmp4;
  }, items1);
};