// === Module 9592: ConversationNavigatorUtils ===

// Module 9592 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5036 */;
import transitionToChannel from "transitionToChannel" /* 5164 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 9574 */;
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