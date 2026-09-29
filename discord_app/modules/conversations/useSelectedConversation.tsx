// discord_app/modules/conversations/useSelectedConversation.tsx
import resolveSelectedConversationDefault from "resolveSelectedConversation.tsx";
import ChannelConversationsStore from "ChannelConversationsStore.tsx";
import ConversationPreviewStore from "ConversationPreviewStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/useSelectedConversation.tsx");

export default function useSelectedConversation(arg0) {
  _require = arg0;
  const items = [ChannelConversationsStore, ConversationPreviewStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const selectedConversationId = ChannelConversationsStore.getSelectedConversationId(closure_0);
      let tmp4;
      if (null != selectedConversationId) {
        tmp4 = resolveSelectedConversationDefault(
          ChannelConversationsStore,
          ConversationPreviewStore,
          closure_0,
          selectedConversationId,
        );
      }
      return tmp4;
    },
    items1,
  );
}
