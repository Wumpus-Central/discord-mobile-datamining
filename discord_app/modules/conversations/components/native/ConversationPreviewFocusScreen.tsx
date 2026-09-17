// discord_app/modules/conversations/components/native/ConversationPreviewFocusScreen.tsx
import ConversationFocusViewDefault from "ConversationFocusView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConversationPreviewStore from "../../ConversationPreviewStore.tsx";

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
  const messages = conversationId(504).useStateFromStores(
    items,
    () => ConversationPreviewStore.getHydratedMessages(conversationId),
    items1,
  );
  const obj2 = conversationId(504);
  const items2 = [ConversationPreviewStore];
  const items3 = [conversationId];
  const stateFromStoresObject = conversationId(504).useStateFromStoresObject(
    items2,
    () => {
      const obj = {
        fullyHydrated: ConversationPreviewStore.isFullyHydrated(conversationId),
        isFullFetchPending: ConversationPreviewStore.isConversationFetchPending(conversationId, true),
        startMessageId: null,
      };
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
    },
    items3,
  );
  ({ fullyHydrated, isFullFetchPending, startMessageId } = stateFromStoresObject);
  return jsx(ConversationFocusViewDefault, {
    channelId,
    conversationId,
    jumpMessageId,
    messages,
    fullyHydrated,
    isFullFetchPending,
    startMessageId,
  });
}
