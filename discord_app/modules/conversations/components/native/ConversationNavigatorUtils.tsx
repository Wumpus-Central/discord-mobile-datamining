// === Module 7923: ConversationNavigatorUtils ===

// Module 7923 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  transitionToChannel.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };