// === Module 12688: closeConversationsAndJumpToMessage ===

// Module 12688 (closeConversationsAndJumpToMessage)
import obj132 from "obj132" /* 2 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4230 */;
import transitionToChannel from "transitionToChannel" /* 4768 */;

const result = obj132.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  transitionToChannel.transitionToMessage(channelId, id, { navigationReplace: true });
  const tmpResult = transitionToChannel;
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };