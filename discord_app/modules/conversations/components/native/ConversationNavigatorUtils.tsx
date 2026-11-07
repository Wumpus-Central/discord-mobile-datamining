// === Module 9987: ConversationNavigatorUtils ===

// Module 9987 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5315 */;
import transitionToChannel from "transitionToChannel" /* 5885 */;
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