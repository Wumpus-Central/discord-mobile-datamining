// === Module 17319: ConversationPreviewFocusScreen ===

// Module 17319 (ConversationPreviewFocusScreen)
import ConversationFocusViewDefault from "ConversationFocusView" /* 13553 */;
import noop from "module_19" /* 19 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7834 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewFocusScreen.tsx");

export default function ConversationPreviewFocusScreen() {
  const params = conversationId(1487).useRoute().params;
  conversationId = params.conversationId;
  ({ channelId, messageId } = params);
  let obj = conversationId(1487);
  const items = [ConversationPreviewStore];
  const items1 = [conversationId];
  const messages = conversationId(504).useStateFromStores(items, () => ConversationPreviewStore.getHydratedMessages(conversationId), items1);
  const obj2 = conversationId(504);
  const items2 = [ConversationPreviewStore];
  const items3 = [conversationId];
  const stateFromStoresObject = conversationId(504).useStateFromStoresObject(items2, () => {
    const obj = { fullyHydrated: ConversationPreviewStore.isFullyHydrated(conversationId), isFullFetchPending: ConversationPreviewStore.isConversationFetchPending(conversationId, true), startMessageId: null };
    const conversation = ConversationPreviewStore.getConversation(conversationId);
    let startMessageId;
    if (conversation != null) {
      startMessageId = conversation.startMessageId;
    }
    if (startMessageId == null) {
      startMessageId = null;
    }
    obj.startMessageId = startMessageId;
    return obj;
  }, items3);
  ({ fullyHydrated, isFullFetchPending, startMessageId } = stateFromStoresObject);
  return jsx(ConversationFocusViewDefault, { channelId, conversationId, jumpMessageId, messages, fullyHydrated, isFullFetchPending, startMessageId });
};