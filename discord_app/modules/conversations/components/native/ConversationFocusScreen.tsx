// discord_app/modules/conversations/components/native/ConversationFocusScreen.tsx
import ConversationFocusViewDefault from "ConversationFocusView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SelectedConversationStore from "../../SelectedConversationStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusScreen.tsx");

export default function ConversationFocusScreen() {
  const params = channelId(1501).useRoute().params;
  channelId = params.channelId;
  ({ conversationId, messageId } = params);
  let obj = channelId(1501);
  const items = [SelectedConversationStore];
  const items1 = [channelId];
  const messages = channelId(504).useStateFromStores(
    items,
    () => SelectedConversationStore.getHydratedMessages(channelId),
    items1,
  );
  const obj2 = channelId(504);
  const items2 = [SelectedConversationStore];
  const items3 = [channelId];
  const stateFromStoresObject = channelId(504).useStateFromStoresObject(
    items2,
    () => {
      const obj = {
        fullyHydrated: SelectedConversationStore.isFullyHydrated(channelId),
        isFullFetchPending: SelectedConversationStore.isConversationFetchPending(channelId, true),
        startMessageId: null,
      };
      const conversation = SelectedConversationStore.getConversation(channelId);
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
