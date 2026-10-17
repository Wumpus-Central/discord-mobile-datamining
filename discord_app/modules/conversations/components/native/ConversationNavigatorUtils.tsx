// === Module 9655: ConversationNavigatorUtils ===

// Module 9655 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5073 */;
import transitionToChannel from "transitionToChannel" /* 5202 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, messageId) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  transitionToChannel.transitionToMessage(channelId, messageId, { navigationReplace: true });
  const tmpResult = transitionToChannel;
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };