// === Module 12824: ConversationFocusScreen ===

// Module 12824 (ConversationFocusScreen)
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7018 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusScreen.tsx");

export default function ConversationFocusScreen() {
  const params = channelId(1488).useRoute().params;
  channelId = params.channelId;
  const conversationId = params.conversationId;
  const obj = channelId(1488);
  const items = [ConversationsStore];
  const items1 = [channelId, conversationId];
  const messages = channelId(504).useStateFromStores(items, () => ConversationsStore.getHydratedMessages(channelId, conversationId), items1);
  let obj2 = channelId(504);
  const items2 = [ConversationsStore];
  const items3 = [channelId, conversationId];
  const stateFromStoresObject = channelId(504).useStateFromStoresObject(items2, () => {
    const conversationMetadata = ConversationsStore.getConversationMetadata(channelId, conversationId);
    let flag;
    if (conversationMetadata != null) {
      flag = conversationMetadata.fullyHydrated;
    }
    if (flag == null) {
      flag = false;
    }
    const obj2 = { fullyHydrated: flag, isFullFetchPending: ConversationsStore.isConversationFetchPending(conversationId, true), startMessageId: null };
    let startMessageId;
    if (conversationMetadata != null) {
      startMessageId = conversationMetadata.conversation.startMessageId;
    }
    if (startMessageId == null) {
      startMessageId = null;
    }
    obj2.startMessageId = startMessageId;
    return obj2;
  }, items3);
  ({ fullyHydrated, isFullFetchPending, startMessageId } = stateFromStoresObject);
  return jsx(conversationId(12825), { channelId, conversationId, messages, fullyHydrated, isFullFetchPending, startMessageId });
};