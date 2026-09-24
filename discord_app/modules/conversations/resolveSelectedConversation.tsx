// discord_app/modules/conversations/resolveSelectedConversation.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conversations/resolveSelectedConversation.tsx");

export default function resolveSelectedConversation(
  getConversationMetadata,
  getConversation,
  channelId,
  conversationId,
) {
  const conversationMetadata = getConversationMetadata.getConversationMetadata(channelId, conversationId);
  let conversation;
  if (conversationMetadata != null) {
    conversation = conversationMetadata.conversation;
  }
  if (conversation == null) {
    conversation = getConversation.getConversation(conversationId);
  }
  return conversation;
}
