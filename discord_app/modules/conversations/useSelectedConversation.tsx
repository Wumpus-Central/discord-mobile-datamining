// === Module 10045: useSelectedConversation ===

// Module 10045 (useSelectedConversation)
import SelectedConversationStore from "SelectedConversationStore" /* 10029 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/useSelectedConversation.tsx");

export default function useSelectedConversation(arg0) {
  _require = arg0;
  items = [SelectedConversationStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const conversation = SelectedConversationStore.getConversation(closure_0);
    return conversation;
  }, items1);
};