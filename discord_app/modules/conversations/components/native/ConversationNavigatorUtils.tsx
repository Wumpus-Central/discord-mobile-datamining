// === Module 9150: ConversationNavigatorUtils ===

// Module 9150 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5487 */;
import transitionToChannel from "transitionToChannel" /* 6060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export function closeConversationsAndJumpToMessage(channelId, id2) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  transitionToChannel.transitionToMessage(channelId, id2, { navigationReplace: true });
  const tmpResult = transitionToChannel;
}
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };