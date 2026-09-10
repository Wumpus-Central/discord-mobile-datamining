// === Module 7975: ConversationNavigatorUtils ===

// Module 7975 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4463 */;
import transitionToChannel from "transitionToChannel" /* 4616 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  transitionToChannel.transitionToMessage(channelId, id, { navigationReplace: true });
  const tmpResult = transitionToChannel;
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };