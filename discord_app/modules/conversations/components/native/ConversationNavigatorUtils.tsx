// === Module 9365: ConversationNavigatorUtils ===

// Module 9365 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4979 */;
import transitionToChannel from "transitionToChannel" /* 5107 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 9347 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, messageId, conversationId) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const result = ConversationsActionCreators.setSelectedConversation(channelId, conversationId, { shouldJump: false });
  const tmpResult = ConversationsActionCreators;
  transitionToChannel.transitionToMessage(channelId, messageId, { navigationReplace: true });
  const tmpResult2 = transitionToChannel;
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };